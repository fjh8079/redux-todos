import { schema } from 'normalizr';

export const messageSchema = new schema.Entity('messages', {}, {
  idAttribute: 'msg_id',
});

export const messageListSchema = new schema.Array(messageSchema);