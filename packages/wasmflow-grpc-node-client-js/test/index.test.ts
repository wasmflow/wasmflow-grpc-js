import { expect } from 'chai';
import { describe } from 'mocha';

import { Client } from '../src/client';

describe('client', function () {
  it('should connect', async () => {
    const client = new Client('test', '127.0.0.1:8060');
    expect(client).to.be.instanceOf(Client);
  });
  it('should make invocations', async () => {
    const client = new Client('test', '127.0.0.1:8060');
    const stream = await client.invoke('echo', { input: 'Hello world' });
    const output = await stream.next();
    expect(output).to.deep.equal({ output: { value: 'Hello world' } });
  });
  it('should make list requests', async () => {
    const client = new Client('test', '127.0.0.1:8060');
    const list = await client.list();
    expect(list.length).to.equal(1);
    const provider = list[0];
    expect(provider.signature.components.echo.name).to.equal('echo');
    expect(provider.signature.components.echo.inputs.input.type).to.equal('value');
    expect(provider.signature.components.echo.outputs.output.type).to.equal('value');
  });
});
