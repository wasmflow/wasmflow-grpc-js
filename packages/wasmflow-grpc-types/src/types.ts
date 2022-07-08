export type JsonOutput = JsonOutputType.Error | JsonOutputType.Signal | JsonOutputType.Value;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace JsonOutputType {
  export interface Value {
    value: unknown;
  }
  export interface Error {
    error_msg: string;
    error_kind: ErrorKind;
  }
  export interface Signal {
    signal: string;
  }
}

export type ErrorKind = 'Error' | 'Exception';

export interface JsonTransport {
  [key: string]: JsonOutput;
}

export type HostedType = HostedProviderType;

export interface HostedProviderType {
  type: 'provider';
  signature: CollectionSignature;
}

export interface CollectionSignature {
  name: string;
  types: TypeDefMap;
  components: ComponentMap;
}

export interface ComponentSignature {
  name: string;
  inputs: TypeMap;
  outputs: TypeMap;
}

export type TypeDefinition = StructSignature | EnumSignature;

export interface StructSignature {
  name: string;
  fields: TypeMap;
}

export interface EnumSignature {
  name: string;
  values: EnumVariant[];
}

export interface EnumVariant {
  name: string;
  index: number;
}

export type ComponentMap = Record<string, ComponentSignature>;

export type TypeMap = Record<string, TypeSignature>;

export type TypeDefMap = Record<string, TypeDefinition>;

export type TypeSignature = SimpleType | RefType | ListType | MapType | OptionalType | LinkType | InternalType;

export interface SimpleType {
  type: string;
}

export interface RefType {
  type: 'ref';
  reference: string;
}

export interface ListType {
  type: 'list';
  element: TypeSignature;
}

export interface MapType {
  type: 'map';
  key: TypeSignature;
  value: TypeSignature;
}

export interface OptionalType {
  type: 'optional';
  option: TypeSignature;
}

export interface LinkType {
  type: 'link';
  schemas?: string[];
}

export interface InternalType {
  type: 'internal';
  id: string;
}
