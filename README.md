# Wasmflow GRPC JavaScript clients

This repository contains the generated protobuf code and client implementations for both node.js and the browser.

## Setup

```sh
npx lerna bootstrap
```

## Installing grpc-tools

By default, bootstrapping does not set up grpc-tools because it breaks on newer macs. If you're not on an m1 mac (or other arm64 machine), then install grpc-tools binaries via npm by running:

```sh
$ npm install grpc-tools
```

### grpc-tools on arm64 machines (like mac m1/m2)

Until [grpc-node#1405](https://github.com/grpc/grpc-node/issues/1405) is resolved, there are no pre-built GRPC binaries for arm64 machines like the recent m1 and m2 mac processors.

To build on arm64 machines you must follow [these instructions](https://github.com/grpc/grpc-node/issues/1405#issuecomment-963672531).

1. `git clone git@github.com:grpc/grpc-node.git`
1. `git submodule update --init --recursive`
1. `npm install --ignore-scripts`
1. `cd packages/grpc-tools`
1. `./build_binaries.sh`
1. `cp build/bin/* path/to/this/repo/node_modules/grpc-tools/bin/`

## Codegen

The `codegen` command generates protobuf code from the .proto files.

```sh
npm run codegen
```

## Compiling

The `build` command compiles typescript and generates browser bundles.

```sh
$ npm run build
```

## Testing

The `test` command runs any automated tests in the project.

```sh
$ npm run test
```
