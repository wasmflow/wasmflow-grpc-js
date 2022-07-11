// package: wasmflow
// file: wasmflow.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as wasmflow_pb from "@candlecorp/grpc-pb";

interface IInvocationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    invoke: IInvocationServiceService_IInvoke;
    list: IInvocationServiceService_IList;
    stats: IInvocationServiceService_IStats;
}

interface IInvocationServiceService_IInvoke extends grpc.MethodDefinition<wasmflow_pb.Invocation, wasmflow_pb.Output> {
    path: "/wasmflow.InvocationService/Invoke";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<wasmflow_pb.Invocation>;
    requestDeserialize: grpc.deserialize<wasmflow_pb.Invocation>;
    responseSerialize: grpc.serialize<wasmflow_pb.Output>;
    responseDeserialize: grpc.deserialize<wasmflow_pb.Output>;
}
interface IInvocationServiceService_IList extends grpc.MethodDefinition<wasmflow_pb.ListRequest, wasmflow_pb.ListResponse> {
    path: "/wasmflow.InvocationService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wasmflow_pb.ListRequest>;
    requestDeserialize: grpc.deserialize<wasmflow_pb.ListRequest>;
    responseSerialize: grpc.serialize<wasmflow_pb.ListResponse>;
    responseDeserialize: grpc.deserialize<wasmflow_pb.ListResponse>;
}
interface IInvocationServiceService_IStats extends grpc.MethodDefinition<wasmflow_pb.StatsRequest, wasmflow_pb.StatsResponse> {
    path: "/wasmflow.InvocationService/Stats";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<wasmflow_pb.StatsRequest>;
    requestDeserialize: grpc.deserialize<wasmflow_pb.StatsRequest>;
    responseSerialize: grpc.serialize<wasmflow_pb.StatsResponse>;
    responseDeserialize: grpc.deserialize<wasmflow_pb.StatsResponse>;
}

export const InvocationServiceService: IInvocationServiceService;

export interface IInvocationServiceServer extends grpc.UntypedServiceImplementation {
    invoke: grpc.handleServerStreamingCall<wasmflow_pb.Invocation, wasmflow_pb.Output>;
    list: grpc.handleUnaryCall<wasmflow_pb.ListRequest, wasmflow_pb.ListResponse>;
    stats: grpc.handleUnaryCall<wasmflow_pb.StatsRequest, wasmflow_pb.StatsResponse>;
}

export interface IInvocationServiceClient {
    invoke(request: wasmflow_pb.Invocation, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<wasmflow_pb.Output>;
    invoke(request: wasmflow_pb.Invocation, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<wasmflow_pb.Output>;
    list(request: wasmflow_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: wasmflow_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: wasmflow_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wasmflow_pb.ListResponse) => void): grpc.ClientUnaryCall;
    list(request: wasmflow_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wasmflow_pb.ListResponse) => void): grpc.ClientUnaryCall;
    stats(request: wasmflow_pb.StatsRequest, callback: (error: grpc.ServiceError | null, response: wasmflow_pb.StatsResponse) => void): grpc.ClientUnaryCall;
    stats(request: wasmflow_pb.StatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wasmflow_pb.StatsResponse) => void): grpc.ClientUnaryCall;
    stats(request: wasmflow_pb.StatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wasmflow_pb.StatsResponse) => void): grpc.ClientUnaryCall;
}

export class InvocationServiceClient extends grpc.Client implements IInvocationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public invoke(request: wasmflow_pb.Invocation, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<wasmflow_pb.Output>;
    public invoke(request: wasmflow_pb.Invocation, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<wasmflow_pb.Output>;
    public list(request: wasmflow_pb.ListRequest, callback: (error: grpc.ServiceError | null, response: wasmflow_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: wasmflow_pb.ListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wasmflow_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public list(request: wasmflow_pb.ListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wasmflow_pb.ListResponse) => void): grpc.ClientUnaryCall;
    public stats(request: wasmflow_pb.StatsRequest, callback: (error: grpc.ServiceError | null, response: wasmflow_pb.StatsResponse) => void): grpc.ClientUnaryCall;
    public stats(request: wasmflow_pb.StatsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: wasmflow_pb.StatsResponse) => void): grpc.ClientUnaryCall;
    public stats(request: wasmflow_pb.StatsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: wasmflow_pb.StatsResponse) => void): grpc.ClientUnaryCall;
}
