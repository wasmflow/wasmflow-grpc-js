/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { types } from '@candlecorp/grpc-types';
import * as models from '@candlecorp/grpc-pb';
import { decode } from '@msgpack/msgpack';
import { Entity } from './entity';
import { v4 as uuidv4 } from 'uuid';

export function decodeMessage(wrapper: models.Output): types.JsonTransport {
  const port = wrapper.getPort();
  const message = wrapper.getPayload();

  if (message) {
    if (message.hasFailure()) {
      const failure = message.getFailure()!;
      const kind = failure.getType();
      let error_kind: types.ErrorKind = 'Error';
      if (kind === models.Failure.FailureKind.EXCEPTION) {
        error_kind = 'Exception';
      }
      return {
        [port]: { error_kind, error_msg: failure.getPayload() || 'Parse Error: Error message not set' },
      };
    } else if (message.hasSuccess()) {
      const success = message.getSuccess()!;
      const json = success.getPayload()?.getJson();
      const mp = success.getPayload()?.getMessagepack_asU8();
      if (json) {
        return { [port]: { value: JSON.parse(json) } };
      } else if (mp) {
        return { [port]: { value: decode(mp) } };
      } else {
        return {
          [port]: { error_kind: 'Error', error_msg: 'Packet Error: Message contained invalid payload.' },
        };
      }
    } else if (message.hasSignal()) {
      const signal = message.getSignal()!;
      switch (signal.getType()!) {
        case models.Signal.OutputSignal.DONE:
          return {
            [port]: { signal: 'Done' },
          };
        case models.Signal.OutputSignal.OPENBRACKET:
        case models.Signal.OutputSignal.CLOSEBRACKET:
          throw new Error('Bracketed messages are not yet supported');
      }
    }
  }

  return {
    [port]: {
      error_kind: 'Error',
      error_msg: 'Invalid output. Client does not know how to process message.',
    },
  };
}

export function localBatchInvocation(origin: Entity, target: Entity, data: Record<string, unknown>): models.Invocation {
  const invocation = new models.Invocation();
  invocation.setId(uuidv4());
  invocation.setTxId(uuidv4());
  invocation.setOrigin(origin.toString());
  invocation.setTarget(target.toString());
  const map = invocation.getPayloadMap();
  for (const name in data) {
    const msg = new models.Packet();
    const payload = new models.Serialized();
    const payloadData = new models.PayloadData();
    payloadData.setJson(JSON.stringify(data[name]));
    payload.setPayload(payloadData);
    msg.setSuccess(payload);
    map.set(name, msg);
  }
  return invocation;
}
