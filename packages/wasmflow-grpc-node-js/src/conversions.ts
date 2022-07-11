import { types } from '@candlecorp/grpc-types';
import * as models from '@candlecorp/grpc-pb';
import * as pb from 'google-protobuf';

export function fromGrpcHostedType(gType: models.HostedType): types.HostedType {
  if (gType.hasCollection()) {
    return fromGrpcCollectionSignature(gType.getCollection() as models.CollectionSignature);
  }
  throw new Error(`Unhandled hosted type ${gType.toObject()}`);
}

export function fromGrpcCollectionSignature(gType: models.CollectionSignature): types.HostedProviderType {
  return {
    type: 'provider',
    signature: {
      name: gType.getName(),
      components: fromGrpcComponentsMap(gType.getComponentsMap()),
      types: fromGrpcTypeDefMap(gType.getTypesMap()),
    },
  };
}

export function fromGrpcComponentsMap(gType: pb.Map<string, models.Component>): types.ComponentMap {
  return Object.fromEntries(Array.from(gType.entries()).map(([name, el]) => [name, fromGrpcComponent(el)]));
}

export function fromGrpcComponent(gType: models.Component): types.ComponentSignature {
  return {
    name: gType.getName(),
    inputs: fromGrpcTypeMap(gType.getInputsMap()),
    outputs: fromGrpcTypeMap(gType.getOutputsMap()),
  };
}

export function fromGrpcTypeDefMap(gType: pb.Map<string, models.TypeDefinition>): types.TypeDefMap {
  return Object.fromEntries(Array.from(gType.entries()).map(([name, el]) => [name, fromGrpcTypeDefinition(el)]));
}

export function fromGrpcTypeDefinition(gType: models.TypeDefinition): types.TypeDefinition {
  if (gType.hasEnum()) {
    const def = gType.getEnum();
    if (def) {
      return fromGrpcEnumSignature(def);
    }
  } else if (gType.hasStruct()) {
    const struct = gType.getStruct();
    if (struct) {
      return fromGrpcStructSignature(struct);
    }
  }
  throw new Error('Unreachable');
}

export function fromGrpcStructSignature(gType: models.StructSignature): types.StructSignature {
  return {
    name: gType.getName(),
    fields: fromGrpcTypeMap(gType.getFieldsMap()),
  };
}

export function fromGrpcEnumSignature(gType: models.EnumSignature): types.EnumSignature {
  return {
    name: gType.getName(),
    values: gType.getValuesList().map(variant => {
      return { name: variant.getName(), index: variant.getIndex() };
    }),
  };
}

export function fromGrpcTypeMap(gType: pb.Map<string, models.TypeSignature>): types.TypeMap {
  return Object.fromEntries(Array.from(gType.entries()).map(([name, el]) => [name, fromGrpcTypeSignature(el)]));
}

export function fromGrpcTypeSignature(gType: models.TypeSignature): types.TypeSignature {
  if (gType.hasSimple()) {
    return { type: fromGrpcSimpleType(gType.getSimple() as models.SimpleType) };
  } else if (gType.hasRef()) {
    return fromGrpcRefType(gType.getRef() as models.RefType);
  } else if (gType.hasLink()) {
    return fromGrpcLinkType(gType.getLink() as models.LinkType);
  } else if (gType.hasMap()) {
    return fromGrpcMapType(gType.getMap() as models.MapType);
  } else if (gType.hasList()) {
    return fromGrpcListType(gType.getList() as models.ListType);
  } else if (gType.hasOptional()) {
    return fromGrpcOptionalType(gType.getOptional() as models.OptionalType);
  } else if (gType.getInternal() !== undefined) {
    return { type: 'internal', id: fromGrpcInternalType(gType.getInternal() as models.InternalType) };
  }
  throw new Error(`Unhandled type signature ${gType.toObject()}`);
}

export function fromGrpcRefType(gType: models.RefType): types.RefType {
  return {
    type: 'ref',
    reference: gType.getRef(),
  };
}

export function fromGrpcLinkType(gType: models.LinkType): types.LinkType {
  return {
    type: 'link',
    schemas: gType.getSchemasList(),
  };
}

export function fromGrpcInternalType(gType: models.InternalType): string {
  switch (gType) {
    case models.InternalType.COMPONENTINPUT:
      return '__input__';
  }
  throw new Error(`Unhandled internal type: ${gType}`);
}

export function fromGrpcMapType(gType: models.MapType): types.MapType {
  const keyType = gType.getKeytype();
  const valueType = gType.getValuetype();
  if (!(keyType && valueType)) {
    throw new Error(`Invalid map type signature {${keyType}:${valueType}}`);
  }
  return {
    type: 'map',
    key: fromGrpcTypeSignature(keyType),
    value: fromGrpcTypeSignature(valueType),
  };
}

export function fromGrpcListType(gType: models.ListType): types.ListType {
  const elType = gType.getType();

  if (!elType) {
    throw new Error(`Invalid list type signature [${elType}]`);
  }
  return {
    type: 'list',
    element: fromGrpcTypeSignature(elType),
  };
}

export function fromGrpcOptionalType(gType: models.OptionalType): types.OptionalType {
  const elType = gType.getType();

  if (!elType) {
    throw new Error(`Invalid optional type signature [${elType}]`);
  }
  return {
    type: 'optional',
    option: fromGrpcTypeSignature(elType),
  };
}

export function fromGrpcSimpleType(gType: models.SimpleType): string {
  switch (gType.getType()) {
    case models.SimpleType.ApexType.BOOL:
      return 'BOOL'.toLowerCase();
    case models.SimpleType.ApexType.BYTES:
      return 'BYTES'.toLowerCase();
    case models.SimpleType.ApexType.DATETIME:
      return 'DATETIME'.toLowerCase();
    case models.SimpleType.ApexType.F32:
      return 'F32'.toLowerCase();
    case models.SimpleType.ApexType.F64:
      return 'F64'.toLowerCase();
    case models.SimpleType.ApexType.I16:
      return 'I16'.toLowerCase();
    case models.SimpleType.ApexType.I32:
      return 'I32'.toLowerCase();
    case models.SimpleType.ApexType.I64:
      return 'I64'.toLowerCase();
    case models.SimpleType.ApexType.I8:
      return 'I8'.toLowerCase();
    case models.SimpleType.ApexType.U16:
      return 'U16'.toLowerCase();
    case models.SimpleType.ApexType.U32:
      return 'U32'.toLowerCase();
    case models.SimpleType.ApexType.U64:
      return 'U64'.toLowerCase();
    case models.SimpleType.ApexType.U8:
      return 'U8'.toLowerCase();
    case models.SimpleType.ApexType.STRING:
      return 'STRING'.toLowerCase();
    case models.SimpleType.ApexType.VALUE:
      return 'VALUE'.toLowerCase();
  }
  throw new Error(`Unhandled simple type: ${gType.getType()}`);
}
