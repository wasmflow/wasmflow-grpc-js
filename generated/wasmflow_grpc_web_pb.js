/**
 * @fileoverview gRPC-Web generated client stub for wasmflow
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.wasmflow = require('./wasmflow_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.wasmflow.InvocationServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.wasmflow.InvocationServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wasmflow.Invocation,
 *   !proto.wasmflow.Output>}
 */
const methodDescriptor_InvocationService_Invoke = new grpc.web.MethodDescriptor(
  '/wasmflow.InvocationService/Invoke',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.wasmflow.Invocation,
  proto.wasmflow.Output,
  /**
   * @param {!proto.wasmflow.Invocation} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmflow.Output.deserializeBinary
);


/**
 * @param {!proto.wasmflow.Invocation} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wasmflow.Output>}
 *     The XHR Node Readable Stream
 */
proto.wasmflow.InvocationServiceClient.prototype.invoke =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wasmflow.InvocationService/Invoke',
      request,
      metadata || {},
      methodDescriptor_InvocationService_Invoke);
};


/**
 * @param {!proto.wasmflow.Invocation} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.wasmflow.Output>}
 *     The XHR Node Readable Stream
 */
proto.wasmflow.InvocationServicePromiseClient.prototype.invoke =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/wasmflow.InvocationService/Invoke',
      request,
      metadata || {},
      methodDescriptor_InvocationService_Invoke);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wasmflow.ListRequest,
 *   !proto.wasmflow.ListResponse>}
 */
const methodDescriptor_InvocationService_List = new grpc.web.MethodDescriptor(
  '/wasmflow.InvocationService/List',
  grpc.web.MethodType.UNARY,
  proto.wasmflow.ListRequest,
  proto.wasmflow.ListResponse,
  /**
   * @param {!proto.wasmflow.ListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmflow.ListResponse.deserializeBinary
);


/**
 * @param {!proto.wasmflow.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wasmflow.ListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wasmflow.ListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wasmflow.InvocationServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wasmflow.InvocationService/List',
      request,
      metadata || {},
      methodDescriptor_InvocationService_List,
      callback);
};


/**
 * @param {!proto.wasmflow.ListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wasmflow.ListResponse>}
 *     Promise that resolves to the response
 */
proto.wasmflow.InvocationServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wasmflow.InvocationService/List',
      request,
      metadata || {},
      methodDescriptor_InvocationService_List);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.wasmflow.StatsRequest,
 *   !proto.wasmflow.StatsResponse>}
 */
const methodDescriptor_InvocationService_Stats = new grpc.web.MethodDescriptor(
  '/wasmflow.InvocationService/Stats',
  grpc.web.MethodType.UNARY,
  proto.wasmflow.StatsRequest,
  proto.wasmflow.StatsResponse,
  /**
   * @param {!proto.wasmflow.StatsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.wasmflow.StatsResponse.deserializeBinary
);


/**
 * @param {!proto.wasmflow.StatsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.wasmflow.StatsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.wasmflow.StatsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.wasmflow.InvocationServiceClient.prototype.stats =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/wasmflow.InvocationService/Stats',
      request,
      metadata || {},
      methodDescriptor_InvocationService_Stats,
      callback);
};


/**
 * @param {!proto.wasmflow.StatsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.wasmflow.StatsResponse>}
 *     Promise that resolves to the response
 */
proto.wasmflow.InvocationServicePromiseClient.prototype.stats =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/wasmflow.InvocationService/Stats',
      request,
      metadata || {},
      methodDescriptor_InvocationService_Stats);
};


module.exports = proto.wasmflow;

