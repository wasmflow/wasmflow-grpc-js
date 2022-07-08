# Wasmflow GRPC Client

## Usage

```html
<!DOCTYPE html>
<html>
  <head>
    <script src="./path/to/client.js"></script>
  </head>
  <body>
    <script>
      // Create a new client.
      const client = new WasmflowClient('test', 'http://127.0.0.1:8080');

      // Invoking a component
      const stream = await client.invoke('echo', { input: 'Hello world' });
      const output = await stream.next();
      console.log(output);

      // Listing the components
      const list = await client.list();
      console.log(list);
    </script>
  </body>
</html>
```

## Testing

Testing in the browser requires some setup. You need to build the browser bundle, serve the static files, run wasmflow, then run envoy as a proxy for wasmflow's GRPC service.

- Run `npm run build:browser`

In separate terminals:

- Run wasmflow `npm run wasmflow`
- Run envoy to proxy wasmflow `npm run envoy`
- Serve the root of the project with `npm run serve`

Then open a browser to (by default): http://127.0.0.1:8080/packages/wasmflow-grpc-web-client-js/test.html
