const expect = chai.expect;
const debug = console.debug;

import { Client } from '../src/client';

describe('client', function () {
  it('should connect', async () => {
    const client = new Client('test', 'http://127.0.0.1:8080');
    expect(client).to.be.instanceOf(Client);
  });
  it('should make invocations', async () => {
    const client = new Client('test', 'http://127.0.0.1:8080');
    debug('invoking');
    const stream = await client.invoke('echo', { input: 'Hello world' });
    debug('waiting on output');
    const output = await stream.next();
    debug(`got output`);
    debug(output);

    expect(output).to.deep.equal({ output: { value: 'Hello world' } });
  });
  it('should make list requests', async () => {
    const client = new Client('test', 'http://127.0.0.1:8080');
    const list = await client.list();
    expect(list.length).to.equal(1);
    const provider = list[0];
    expect(provider.signature.components.echo.name).to.equal('echo');
    expect(provider.signature.components.echo.inputs.input.type).to.equal('value');
    expect(provider.signature.components.echo.outputs.output.type).to.equal('value');
  });
});
