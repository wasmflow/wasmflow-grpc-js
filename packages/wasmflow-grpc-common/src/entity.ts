import { LOCAL_HOST, SCHEME } from './constants';

// There are more Entities, this is the bare minimum for now.
export enum EntityKind {
  Client,
  Component,
}

function entitySuffix(kind: EntityKind): string {
  switch (kind) {
    case EntityKind.Client:
      return 'client';
    case EntityKind.Component:
      return 'coll';
  }
}

export class Entity {
  kind: EntityKind;
  host: string;
  path: string;

  constructor(kind: EntityKind, host: string, path: string) {
    this.kind = kind;
    this.host = host;
    this.path = path;
  }

  static client(name: string): Entity {
    return new Entity(EntityKind.Client, name, '');
  }

  static local_component(name: string): Entity {
    return new Entity(EntityKind.Component, LOCAL_HOST, name);
  }

  toString(): string {
    return `${SCHEME}://${this.host}.${entitySuffix(this.kind)}/${this.path}`;
  }
}
