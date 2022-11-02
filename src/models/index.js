// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ItemType = {
  "MARKDOWN": "MARKDOWN",
  "CODE": "CODE",
  "LINK": "LINK"
};

const { Editable, Canvas, Item, Viewable } = initSchema(schema);

export {
  Editable,
  Canvas,
  Item,
  Viewable,
  ItemType
};