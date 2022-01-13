// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PropertyComponentModel } = initSchema(schema);

export {
  PropertyComponentModel
};