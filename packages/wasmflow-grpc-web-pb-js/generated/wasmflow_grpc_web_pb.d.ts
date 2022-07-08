import * as grpcWeb from 'grpc-web';

import * as wasmflow_pb from '@candlecorp/grpc-pb';


export class InvocationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  invoke(
    request: wasmflow_pb.Invocation,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<wasmflow_pb.Output>;

  list(
    request: wasmflow_pb.ListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: wasmflow_pb.ListResponse) => void
  ): grpcWeb.ClientReadableStream<wasmflow_pb.ListResponse>;

  stats(
    request: wasmflow_pb.StatsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: wasmflow_pb.StatsResponse) => void
  ): grpcWeb.ClientReadableStream<wasmflow_pb.StatsResponse>;

}

export class InvocationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  invoke(
    request: wasmflow_pb.Invocation,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<wasmflow_pb.Output>;

  list(
    request: wasmflow_pb.ListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<wasmflow_pb.ListResponse>;

  stats(
    request: wasmflow_pb.StatsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<wasmflow_pb.StatsResponse>;

}

