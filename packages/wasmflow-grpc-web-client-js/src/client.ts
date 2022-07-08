/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { types } from '@candlecorp/grpc-types';
import { conversions } from '@candlecorp/grpc-web';
import * as models from '@candlecorp/grpc-pb';
import * as rpc from '@candlecorp/grpc-web-pb';
import { decodeMessage, localBatchInvocation, Entity } from '@candlecorp/grpc-common';
import { subscribe, EventIterator } from './event-iterator';
import * as grpc from 'grpc-web';

export class InvocationResponse implements AsyncIterable<types.JsonTransport> {
  stream: EventIterator<Event>;
  messages: models.Output[] = [];
  done = false;

  constructor(stream: grpc.ClientReadableStream<models.Output>) {
    this.stream = subscribe.call(stream, 'data');
  }

  iter(): AsyncIterator<types.JsonTransport, types.JsonTransport> {
    const iter = this.stream[Symbol.asyncIterator]();

    return {
      async next() {
        const result = await iter.next();
        const transport = decodeMessage(result.value);

        return { done: result.done, value: transport };
      },
    };
  }
  async next(): Promise<types.JsonTransport> {
    const message = await this.iter().next();
    return message.value;
  }
  [Symbol.asyncIterator](): AsyncIterator<types.JsonTransport, types.JsonTransport> {
    return this.iter();
  }
}

export class Client {
  grpc: rpc.InvocationServiceClient;
  name: string;

  constructor(id: string, address: string, options?: grpc.GrpcWebClientBaseOptions) {
    this.name = id;
    this.grpc = new rpc.InvocationServiceClient(address, null, options);
  }

  async invoke(component: string, data: Record<string, unknown>, options?: grpc.Metadata): Promise<InvocationResponse> {
    const invocation = localBatchInvocation(Entity.client(this.name), Entity.local_component(component), data);

    const stream = this.grpc.invoke(invocation, options);
    return new InvocationResponse(stream);
  }

  async list(): Promise<types.HostedType[]> {
    return new Promise((res, rej) => {
      this.grpc.list(
        new models.ListRequest(),
        undefined,
        (err: grpc.RpcError | null, response: models.ListResponse) => {
          if (err) return rej(err);
          res(response.getSchemasList().map(conversions.fromGrpcHostedType));
        },
      );
    });
  }
}
