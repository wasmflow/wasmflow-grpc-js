// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var wasmflow_pb = require('@candlecorp/grpc-pb');

function serialize_wasmflow_Invocation(arg) {
  if (!(arg instanceof wasmflow_pb.Invocation)) {
    throw new Error('Expected argument of type wasmflow.Invocation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wasmflow_Invocation(buffer_arg) {
  return wasmflow_pb.Invocation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wasmflow_ListRequest(arg) {
  if (!(arg instanceof wasmflow_pb.ListRequest)) {
    throw new Error('Expected argument of type wasmflow.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wasmflow_ListRequest(buffer_arg) {
  return wasmflow_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wasmflow_ListResponse(arg) {
  if (!(arg instanceof wasmflow_pb.ListResponse)) {
    throw new Error('Expected argument of type wasmflow.ListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wasmflow_ListResponse(buffer_arg) {
  return wasmflow_pb.ListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wasmflow_Output(arg) {
  if (!(arg instanceof wasmflow_pb.Output)) {
    throw new Error('Expected argument of type wasmflow.Output');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wasmflow_Output(buffer_arg) {
  return wasmflow_pb.Output.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wasmflow_StatsRequest(arg) {
  if (!(arg instanceof wasmflow_pb.StatsRequest)) {
    throw new Error('Expected argument of type wasmflow.StatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wasmflow_StatsRequest(buffer_arg) {
  return wasmflow_pb.StatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_wasmflow_StatsResponse(arg) {
  if (!(arg instanceof wasmflow_pb.StatsResponse)) {
    throw new Error('Expected argument of type wasmflow.StatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_wasmflow_StatsResponse(buffer_arg) {
  return wasmflow_pb.StatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var InvocationServiceService = exports.InvocationServiceService = {
  invoke: {
    path: '/wasmflow.InvocationService/Invoke',
    requestStream: false,
    responseStream: true,
    requestType: wasmflow_pb.Invocation,
    responseType: wasmflow_pb.Output,
    requestSerialize: serialize_wasmflow_Invocation,
    requestDeserialize: deserialize_wasmflow_Invocation,
    responseSerialize: serialize_wasmflow_Output,
    responseDeserialize: deserialize_wasmflow_Output,
  },
  list: {
    path: '/wasmflow.InvocationService/List',
    requestStream: false,
    responseStream: false,
    requestType: wasmflow_pb.ListRequest,
    responseType: wasmflow_pb.ListResponse,
    requestSerialize: serialize_wasmflow_ListRequest,
    requestDeserialize: deserialize_wasmflow_ListRequest,
    responseSerialize: serialize_wasmflow_ListResponse,
    responseDeserialize: deserialize_wasmflow_ListResponse,
  },
  stats: {
    path: '/wasmflow.InvocationService/Stats',
    requestStream: false,
    responseStream: false,
    requestType: wasmflow_pb.StatsRequest,
    responseType: wasmflow_pb.StatsResponse,
    requestSerialize: serialize_wasmflow_StatsRequest,
    requestDeserialize: deserialize_wasmflow_StatsRequest,
    responseSerialize: serialize_wasmflow_StatsResponse,
    responseDeserialize: deserialize_wasmflow_StatsResponse,
  },
};

exports.InvocationServiceClient = grpc.makeGenericClientConstructor(InvocationServiceService);
