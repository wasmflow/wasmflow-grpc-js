import * as jspb from 'google-protobuf'



export class Packet extends jspb.Message {
  getSuccess(): Serialized | undefined;
  setSuccess(value?: Serialized): Packet;
  hasSuccess(): boolean;
  clearSuccess(): Packet;

  getFailure(): Failure | undefined;
  setFailure(value?: Failure): Packet;
  hasFailure(): boolean;
  clearFailure(): Packet;

  getSignal(): Signal | undefined;
  setSignal(value?: Signal): Packet;
  hasSignal(): boolean;
  clearSignal(): Packet;

  getDataCase(): Packet.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Packet.AsObject;
  static toObject(includeInstance: boolean, msg: Packet): Packet.AsObject;
  static serializeBinaryToWriter(message: Packet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Packet;
  static deserializeBinaryFromReader(message: Packet, reader: jspb.BinaryReader): Packet;
}

export namespace Packet {
  export type AsObject = {
    success?: Serialized.AsObject,
    failure?: Failure.AsObject,
    signal?: Signal.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    SUCCESS = 1,
    FAILURE = 2,
    SIGNAL = 3,
  }
}

export class Serialized extends jspb.Message {
  getPayload(): PayloadData | undefined;
  setPayload(value?: PayloadData): Serialized;
  hasPayload(): boolean;
  clearPayload(): Serialized;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Serialized.AsObject;
  static toObject(includeInstance: boolean, msg: Serialized): Serialized.AsObject;
  static serializeBinaryToWriter(message: Serialized, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Serialized;
  static deserializeBinaryFromReader(message: Serialized, reader: jspb.BinaryReader): Serialized;
}

export namespace Serialized {
  export type AsObject = {
    payload?: PayloadData.AsObject,
  }
}

export class Failure extends jspb.Message {
  getPayload(): string;
  setPayload(value: string): Failure;

  getType(): Failure.FailureKind;
  setType(value: Failure.FailureKind): Failure;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Failure.AsObject;
  static toObject(includeInstance: boolean, msg: Failure): Failure.AsObject;
  static serializeBinaryToWriter(message: Failure, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Failure;
  static deserializeBinaryFromReader(message: Failure, reader: jspb.BinaryReader): Failure;
}

export namespace Failure {
  export type AsObject = {
    payload: string,
    type: Failure.FailureKind,
  }

  export enum FailureKind { 
    ERROR = 0,
    EXCEPTION = 1,
  }
}

export class Signal extends jspb.Message {
  getPayload(): PayloadData | undefined;
  setPayload(value?: PayloadData): Signal;
  hasPayload(): boolean;
  clearPayload(): Signal;

  getType(): Signal.OutputSignal;
  setType(value: Signal.OutputSignal): Signal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Signal.AsObject;
  static toObject(includeInstance: boolean, msg: Signal): Signal.AsObject;
  static serializeBinaryToWriter(message: Signal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Signal;
  static deserializeBinaryFromReader(message: Signal, reader: jspb.BinaryReader): Signal;
}

export namespace Signal {
  export type AsObject = {
    payload?: PayloadData.AsObject,
    type: Signal.OutputSignal,
  }

  export enum OutputSignal { 
    DONE = 0,
    OPENBRACKET = 1,
    CLOSEBRACKET = 2,
  }
}

export class PayloadData extends jspb.Message {
  getMessagepack(): Uint8Array | string;
  getMessagepack_asU8(): Uint8Array;
  getMessagepack_asB64(): string;
  setMessagepack(value: Uint8Array | string): PayloadData;

  getJson(): string;
  setJson(value: string): PayloadData;

  getDataCase(): PayloadData.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayloadData.AsObject;
  static toObject(includeInstance: boolean, msg: PayloadData): PayloadData.AsObject;
  static serializeBinaryToWriter(message: PayloadData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayloadData;
  static deserializeBinaryFromReader(message: PayloadData, reader: jspb.BinaryReader): PayloadData;
}

export namespace PayloadData {
  export type AsObject = {
    messagepack: Uint8Array | string,
    json: string,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    MESSAGEPACK = 1,
    JSON = 3,
  }
}

export class Invocation extends jspb.Message {
  getOrigin(): string;
  setOrigin(value: string): Invocation;

  getTarget(): string;
  setTarget(value: string): Invocation;

  getPayloadMap(): jspb.Map<string, Packet>;
  clearPayloadMap(): Invocation;

  getId(): string;
  setId(value: string): Invocation;

  getTxId(): string;
  setTxId(value: string): Invocation;

  getInherent(): InherentData | undefined;
  setInherent(value?: InherentData): Invocation;
  hasInherent(): boolean;
  clearInherent(): Invocation;

  getConfig(): Serialized | undefined;
  setConfig(value?: Serialized): Invocation;
  hasConfig(): boolean;
  clearConfig(): Invocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invocation.AsObject;
  static toObject(includeInstance: boolean, msg: Invocation): Invocation.AsObject;
  static serializeBinaryToWriter(message: Invocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invocation;
  static deserializeBinaryFromReader(message: Invocation, reader: jspb.BinaryReader): Invocation;
}

export namespace Invocation {
  export type AsObject = {
    origin: string,
    target: string,
    payloadMap: Array<[string, Packet.AsObject]>,
    id: string,
    txId: string,
    inherent?: InherentData.AsObject,
    config?: Serialized.AsObject,
  }
}

export class InherentData extends jspb.Message {
  getSeed(): number;
  setSeed(value: number): InherentData;

  getTimestamp(): number;
  setTimestamp(value: number): InherentData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InherentData.AsObject;
  static toObject(includeInstance: boolean, msg: InherentData): InherentData.AsObject;
  static serializeBinaryToWriter(message: InherentData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InherentData;
  static deserializeBinaryFromReader(message: InherentData, reader: jspb.BinaryReader): InherentData;
}

export namespace InherentData {
  export type AsObject = {
    seed: number,
    timestamp: number,
  }
}

export class Output extends jspb.Message {
  getPort(): string;
  setPort(value: string): Output;

  getInvocationId(): string;
  setInvocationId(value: string): Output;

  getPayload(): Packet | undefined;
  setPayload(value?: Packet): Output;
  hasPayload(): boolean;
  clearPayload(): Output;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Output.AsObject;
  static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
  static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Output;
  static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
  export type AsObject = {
    port: string,
    invocationId: string,
    payload?: Packet.AsObject,
  }
}

export class ListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
  }
}

export class ListResponse extends jspb.Message {
  getSchemasList(): Array<HostedType>;
  setSchemasList(value: Array<HostedType>): ListResponse;
  clearSchemasList(): ListResponse;
  addSchemas(value?: HostedType, index?: number): HostedType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    schemasList: Array<HostedType.AsObject>,
  }
}

export class HostedType extends jspb.Message {
  getCollection(): CollectionSignature | undefined;
  setCollection(value?: CollectionSignature): HostedType;
  hasCollection(): boolean;
  clearCollection(): HostedType;

  getTypeCase(): HostedType.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HostedType.AsObject;
  static toObject(includeInstance: boolean, msg: HostedType): HostedType.AsObject;
  static serializeBinaryToWriter(message: HostedType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HostedType;
  static deserializeBinaryFromReader(message: HostedType, reader: jspb.BinaryReader): HostedType;
}

export namespace HostedType {
  export type AsObject = {
    collection?: CollectionSignature.AsObject,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    COLLECTION = 1,
  }
}

export class Component extends jspb.Message {
  getName(): string;
  setName(value: string): Component;

  getKind(): Component.ComponentKind;
  setKind(value: Component.ComponentKind): Component;

  getInputsMap(): jspb.Map<string, TypeSignature>;
  clearInputsMap(): Component;

  getOutputsMap(): jspb.Map<string, TypeSignature>;
  clearOutputsMap(): Component;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Component.AsObject;
  static toObject(includeInstance: boolean, msg: Component): Component.AsObject;
  static serializeBinaryToWriter(message: Component, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Component;
  static deserializeBinaryFromReader(message: Component, reader: jspb.BinaryReader): Component;
}

export namespace Component {
  export type AsObject = {
    name: string,
    kind: Component.ComponentKind,
    inputsMap: Array<[string, TypeSignature.AsObject]>,
    outputsMap: Array<[string, TypeSignature.AsObject]>,
  }

  export enum ComponentKind { 
    COMPONENT = 0,
    SCHEMATIC = 1,
  }
}

export class CollectionSignature extends jspb.Message {
  getName(): string;
  setName(value: string): CollectionSignature;

  getFeatures(): CollectionFeatures | undefined;
  setFeatures(value?: CollectionFeatures): CollectionSignature;
  hasFeatures(): boolean;
  clearFeatures(): CollectionSignature;

  getVersion(): string;
  setVersion(value: string): CollectionSignature;

  getFormat(): number;
  setFormat(value: number): CollectionSignature;

  getComponentsMap(): jspb.Map<string, Component>;
  clearComponentsMap(): CollectionSignature;

  getTypesMap(): jspb.Map<string, TypeDefinition>;
  clearTypesMap(): CollectionSignature;

  getConfigMap(): jspb.Map<string, TypeDefinition>;
  clearConfigMap(): CollectionSignature;

  getWellknownList(): Array<WellKnownSchema>;
  setWellknownList(value: Array<WellKnownSchema>): CollectionSignature;
  clearWellknownList(): CollectionSignature;
  addWellknown(value?: WellKnownSchema, index?: number): WellKnownSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionSignature.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionSignature): CollectionSignature.AsObject;
  static serializeBinaryToWriter(message: CollectionSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionSignature;
  static deserializeBinaryFromReader(message: CollectionSignature, reader: jspb.BinaryReader): CollectionSignature;
}

export namespace CollectionSignature {
  export type AsObject = {
    name: string,
    features?: CollectionFeatures.AsObject,
    version: string,
    format: number,
    componentsMap: Array<[string, Component.AsObject]>,
    typesMap: Array<[string, TypeDefinition.AsObject]>,
    configMap: Array<[string, TypeDefinition.AsObject]>,
    wellknownList: Array<WellKnownSchema.AsObject>,
  }
}

export class CollectionFeatures extends jspb.Message {
  getStreaming(): boolean;
  setStreaming(value: boolean): CollectionFeatures;

  getStateful(): boolean;
  setStateful(value: boolean): CollectionFeatures;

  getVersion(): number;
  setVersion(value: number): CollectionFeatures;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CollectionFeatures.AsObject;
  static toObject(includeInstance: boolean, msg: CollectionFeatures): CollectionFeatures.AsObject;
  static serializeBinaryToWriter(message: CollectionFeatures, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CollectionFeatures;
  static deserializeBinaryFromReader(message: CollectionFeatures, reader: jspb.BinaryReader): CollectionFeatures;
}

export namespace CollectionFeatures {
  export type AsObject = {
    streaming: boolean,
    stateful: boolean,
    version: number,
  }
}

export class TypeDefinition extends jspb.Message {
  getStruct(): StructSignature | undefined;
  setStruct(value?: StructSignature): TypeDefinition;
  hasStruct(): boolean;
  clearStruct(): TypeDefinition;

  getEnum(): EnumSignature | undefined;
  setEnum(value?: EnumSignature): TypeDefinition;
  hasEnum(): boolean;
  clearEnum(): TypeDefinition;

  getTypeCase(): TypeDefinition.TypeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: TypeDefinition): TypeDefinition.AsObject;
  static serializeBinaryToWriter(message: TypeDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeDefinition;
  static deserializeBinaryFromReader(message: TypeDefinition, reader: jspb.BinaryReader): TypeDefinition;
}

export namespace TypeDefinition {
  export type AsObject = {
    struct?: StructSignature.AsObject,
    pb_enum?: EnumSignature.AsObject,
  }

  export enum TypeCase { 
    TYPE_NOT_SET = 0,
    STRUCT = 1,
    ENUM = 2,
  }
}

export class WellKnownSchema extends jspb.Message {
  getCapabilitiesList(): Array<string>;
  setCapabilitiesList(value: Array<string>): WellKnownSchema;
  clearCapabilitiesList(): WellKnownSchema;
  addCapabilities(value: string, index?: number): WellKnownSchema;

  getUrl(): string;
  setUrl(value: string): WellKnownSchema;

  getSchema(): CollectionSignature | undefined;
  setSchema(value?: CollectionSignature): WellKnownSchema;
  hasSchema(): boolean;
  clearSchema(): WellKnownSchema;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WellKnownSchema.AsObject;
  static toObject(includeInstance: boolean, msg: WellKnownSchema): WellKnownSchema.AsObject;
  static serializeBinaryToWriter(message: WellKnownSchema, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WellKnownSchema;
  static deserializeBinaryFromReader(message: WellKnownSchema, reader: jspb.BinaryReader): WellKnownSchema;
}

export namespace WellKnownSchema {
  export type AsObject = {
    capabilitiesList: Array<string>,
    url: string,
    schema?: CollectionSignature.AsObject,
  }
}

export class StatsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatsRequest): StatsRequest.AsObject;
  static serializeBinaryToWriter(message: StatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsRequest;
  static deserializeBinaryFromReader(message: StatsRequest, reader: jspb.BinaryReader): StatsRequest;
}

export namespace StatsRequest {
  export type AsObject = {
  }
}

export class StatsResponse extends jspb.Message {
  getStatsList(): Array<Statistic>;
  setStatsList(value: Array<Statistic>): StatsResponse;
  clearStatsList(): StatsResponse;
  addStats(value?: Statistic, index?: number): Statistic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatsResponse): StatsResponse.AsObject;
  static serializeBinaryToWriter(message: StatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatsResponse;
  static deserializeBinaryFromReader(message: StatsResponse, reader: jspb.BinaryReader): StatsResponse;
}

export namespace StatsResponse {
  export type AsObject = {
    statsList: Array<Statistic.AsObject>,
  }
}

export class Statistic extends jspb.Message {
  getName(): string;
  setName(value: string): Statistic;

  getRuns(): number;
  setRuns(value: number): Statistic;

  getErrors(): number;
  setErrors(value: number): Statistic;

  getExecutionStatistics(): DurationStatistics | undefined;
  setExecutionStatistics(value?: DurationStatistics): Statistic;
  hasExecutionStatistics(): boolean;
  clearExecutionStatistics(): Statistic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Statistic.AsObject;
  static toObject(includeInstance: boolean, msg: Statistic): Statistic.AsObject;
  static serializeBinaryToWriter(message: Statistic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Statistic;
  static deserializeBinaryFromReader(message: Statistic, reader: jspb.BinaryReader): Statistic;
}

export namespace Statistic {
  export type AsObject = {
    name: string,
    runs: number,
    errors: number,
    executionStatistics?: DurationStatistics.AsObject,
  }
}

export class DurationStatistics extends jspb.Message {
  getMin(): number;
  setMin(value: number): DurationStatistics;

  getMax(): number;
  setMax(value: number): DurationStatistics;

  getAverage(): number;
  setAverage(value: number): DurationStatistics;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DurationStatistics.AsObject;
  static toObject(includeInstance: boolean, msg: DurationStatistics): DurationStatistics.AsObject;
  static serializeBinaryToWriter(message: DurationStatistics, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DurationStatistics;
  static deserializeBinaryFromReader(message: DurationStatistics, reader: jspb.BinaryReader): DurationStatistics;
}

export namespace DurationStatistics {
  export type AsObject = {
    min: number,
    max: number,
    average: number,
  }
}

export class StructSignature extends jspb.Message {
  getName(): string;
  setName(value: string): StructSignature;

  getFieldsMap(): jspb.Map<string, TypeSignature>;
  clearFieldsMap(): StructSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructSignature.AsObject;
  static toObject(includeInstance: boolean, msg: StructSignature): StructSignature.AsObject;
  static serializeBinaryToWriter(message: StructSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructSignature;
  static deserializeBinaryFromReader(message: StructSignature, reader: jspb.BinaryReader): StructSignature;
}

export namespace StructSignature {
  export type AsObject = {
    name: string,
    fieldsMap: Array<[string, TypeSignature.AsObject]>,
  }
}

export class EnumSignature extends jspb.Message {
  getName(): string;
  setName(value: string): EnumSignature;

  getValuesList(): Array<EnumVariant>;
  setValuesList(value: Array<EnumVariant>): EnumSignature;
  clearValuesList(): EnumSignature;
  addValues(value?: EnumVariant, index?: number): EnumVariant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumSignature.AsObject;
  static toObject(includeInstance: boolean, msg: EnumSignature): EnumSignature.AsObject;
  static serializeBinaryToWriter(message: EnumSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumSignature;
  static deserializeBinaryFromReader(message: EnumSignature, reader: jspb.BinaryReader): EnumSignature;
}

export namespace EnumSignature {
  export type AsObject = {
    name: string,
    valuesList: Array<EnumVariant.AsObject>,
  }
}

export class EnumVariant extends jspb.Message {
  getName(): string;
  setName(value: string): EnumVariant;

  getIndex(): number;
  setIndex(value: number): EnumVariant;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnumVariant.AsObject;
  static toObject(includeInstance: boolean, msg: EnumVariant): EnumVariant.AsObject;
  static serializeBinaryToWriter(message: EnumVariant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnumVariant;
  static deserializeBinaryFromReader(message: EnumVariant, reader: jspb.BinaryReader): EnumVariant;
}

export namespace EnumVariant {
  export type AsObject = {
    name: string,
    index: number,
  }
}

export class TypeSignature extends jspb.Message {
  getSimple(): SimpleType | undefined;
  setSimple(value?: SimpleType): TypeSignature;
  hasSimple(): boolean;
  clearSimple(): TypeSignature;

  getMap(): MapType | undefined;
  setMap(value?: MapType): TypeSignature;
  hasMap(): boolean;
  clearMap(): TypeSignature;

  getList(): ListType | undefined;
  setList(value?: ListType): TypeSignature;
  hasList(): boolean;
  clearList(): TypeSignature;

  getOptional(): OptionalType | undefined;
  setOptional(value?: OptionalType): TypeSignature;
  hasOptional(): boolean;
  clearOptional(): TypeSignature;

  getRef(): RefType | undefined;
  setRef(value?: RefType): TypeSignature;
  hasRef(): boolean;
  clearRef(): TypeSignature;

  getLink(): LinkType | undefined;
  setLink(value?: LinkType): TypeSignature;
  hasLink(): boolean;
  clearLink(): TypeSignature;

  getInternal(): InternalType;
  setInternal(value: InternalType): TypeSignature;

  getStruct(): StructType | undefined;
  setStruct(value?: StructType): TypeSignature;
  hasStruct(): boolean;
  clearStruct(): TypeSignature;

  getSignatureCase(): TypeSignature.SignatureCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TypeSignature.AsObject;
  static toObject(includeInstance: boolean, msg: TypeSignature): TypeSignature.AsObject;
  static serializeBinaryToWriter(message: TypeSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TypeSignature;
  static deserializeBinaryFromReader(message: TypeSignature, reader: jspb.BinaryReader): TypeSignature;
}

export namespace TypeSignature {
  export type AsObject = {
    simple?: SimpleType.AsObject,
    map?: MapType.AsObject,
    list?: ListType.AsObject,
    optional?: OptionalType.AsObject,
    ref?: RefType.AsObject,
    link?: LinkType.AsObject,
    internal: InternalType,
    struct?: StructType.AsObject,
  }

  export enum SignatureCase { 
    SIGNATURE_NOT_SET = 0,
    SIMPLE = 1,
    MAP = 2,
    LIST = 3,
    OPTIONAL = 4,
    REF = 5,
    LINK = 6,
    INTERNAL = 7,
    STRUCT = 8,
  }
}

export class SimpleType extends jspb.Message {
  getType(): SimpleType.ApexType;
  setType(value: SimpleType.ApexType): SimpleType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleType.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleType): SimpleType.AsObject;
  static serializeBinaryToWriter(message: SimpleType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleType;
  static deserializeBinaryFromReader(message: SimpleType, reader: jspb.BinaryReader): SimpleType;
}

export namespace SimpleType {
  export type AsObject = {
    type: SimpleType.ApexType,
  }

  export enum ApexType { 
    I8 = 0,
    U8 = 1,
    I16 = 2,
    U16 = 3,
    I32 = 4,
    U32 = 5,
    I64 = 6,
    U64 = 7,
    F32 = 8,
    F64 = 9,
    BOOL = 10,
    STRING = 11,
    DATETIME = 12,
    BYTES = 13,
    VALUE = 15,
  }
}

export class RefType extends jspb.Message {
  getRef(): string;
  setRef(value: string): RefType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefType.AsObject;
  static toObject(includeInstance: boolean, msg: RefType): RefType.AsObject;
  static serializeBinaryToWriter(message: RefType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefType;
  static deserializeBinaryFromReader(message: RefType, reader: jspb.BinaryReader): RefType;
}

export namespace RefType {
  export type AsObject = {
    ref: string,
  }
}

export class StructType extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StructType.AsObject;
  static toObject(includeInstance: boolean, msg: StructType): StructType.AsObject;
  static serializeBinaryToWriter(message: StructType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StructType;
  static deserializeBinaryFromReader(message: StructType, reader: jspb.BinaryReader): StructType;
}

export namespace StructType {
  export type AsObject = {
  }
}

export class LinkType extends jspb.Message {
  getSchemasList(): Array<string>;
  setSchemasList(value: Array<string>): LinkType;
  clearSchemasList(): LinkType;
  addSchemas(value: string, index?: number): LinkType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkType.AsObject;
  static toObject(includeInstance: boolean, msg: LinkType): LinkType.AsObject;
  static serializeBinaryToWriter(message: LinkType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkType;
  static deserializeBinaryFromReader(message: LinkType, reader: jspb.BinaryReader): LinkType;
}

export namespace LinkType {
  export type AsObject = {
    schemasList: Array<string>,
  }
}

export class MapType extends jspb.Message {
  getKeytype(): TypeSignature | undefined;
  setKeytype(value?: TypeSignature): MapType;
  hasKeytype(): boolean;
  clearKeytype(): MapType;

  getValuetype(): TypeSignature | undefined;
  setValuetype(value?: TypeSignature): MapType;
  hasValuetype(): boolean;
  clearValuetype(): MapType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapType.AsObject;
  static toObject(includeInstance: boolean, msg: MapType): MapType.AsObject;
  static serializeBinaryToWriter(message: MapType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapType;
  static deserializeBinaryFromReader(message: MapType, reader: jspb.BinaryReader): MapType;
}

export namespace MapType {
  export type AsObject = {
    keytype?: TypeSignature.AsObject,
    valuetype?: TypeSignature.AsObject,
  }
}

export class ListType extends jspb.Message {
  getType(): TypeSignature | undefined;
  setType(value?: TypeSignature): ListType;
  hasType(): boolean;
  clearType(): ListType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListType.AsObject;
  static toObject(includeInstance: boolean, msg: ListType): ListType.AsObject;
  static serializeBinaryToWriter(message: ListType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListType;
  static deserializeBinaryFromReader(message: ListType, reader: jspb.BinaryReader): ListType;
}

export namespace ListType {
  export type AsObject = {
    type?: TypeSignature.AsObject,
  }
}

export class OptionalType extends jspb.Message {
  getType(): TypeSignature | undefined;
  setType(value?: TypeSignature): OptionalType;
  hasType(): boolean;
  clearType(): OptionalType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OptionalType.AsObject;
  static toObject(includeInstance: boolean, msg: OptionalType): OptionalType.AsObject;
  static serializeBinaryToWriter(message: OptionalType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OptionalType;
  static deserializeBinaryFromReader(message: OptionalType, reader: jspb.BinaryReader): OptionalType;
}

export namespace OptionalType {
  export type AsObject = {
    type?: TypeSignature.AsObject,
  }
}

export enum InternalType { 
  COMPONENTINPUT = 0,
}
