import { types } from '@candlecorp/grpc-types';
import { conversions } from '../../wasmflow-grpc-node-js/src';
import * as rpc from '../../wasmflow-grpc-node-pb-js/src';
import * as models from '@candlecorp/grpc-pb';

import { decodeMessage, localBatchInvocation, Entity } from '@candlecorp/grpc-common';
import { stream as streamToIterator, EventIterator } from 'event-iterator';
import * as grpc from '@grpc/grpc-js';
import { debug } from 'console';

export class InvocationResponse implements AsyncIterable<types.JsonTransport> {
  stream: EventIterator<Buffer>;
  messages: models.Output[] = [];
  done = false;

  constructor(stream: grpc.ClientReadableStream<models.Output>) {
    this.stream = streamToIterator.call(stream);
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
  ready: Promise<void>;

  constructor(id: string, address: string, credentials?: grpc.ChannelCredentials, options?: grpc.ClientOptions) {
    debug(`Creating client id '${id}' for ${address}`);
    this.name = id;
    const creds = credentials || grpc.credentials.createInsecure();
    this.grpc = new rpc.InvocationServiceClient(address, creds, options);
    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 5);
    this.ready = new Promise((res, rej) => {
      this.grpc.waitForReady(deadline, async (error?: Error) => {
        if (error) {
          rej(error);
        } else {
          res();
        }
      });
    });
  }

  async invoke(
    component: string,
    data: Record<string, unknown>,
    options?: Partial<grpc.CallOptions>,
  ): Promise<InvocationResponse> {
    await this.ready;
    const invocation = localBatchInvocation(Entity.client(this.name), Entity.local_component(component), data);
    const stream = this.grpc.invoke(invocation, options);
    return new InvocationResponse(stream);
  }

  async list(): Promise<types.HostedType[]> {
    await this.ready;
    return new Promise((res, rej) => {
      this.grpc.list(new models.ListRequest(), (err: grpc.ServiceError | null, response: models.ListResponse) => {
        if (err) return rej(err);
        res(response.getSchemasList().map(conversions.fromGrpcHostedType));
      });
    });
  }
}
