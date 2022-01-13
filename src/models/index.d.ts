import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PropertyComponentModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PropertyComponentModel {
  readonly id: string;
  readonly address?: string;
  readonly image_url?: string;
  readonly price?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PropertyComponentModel, PropertyComponentModelMetaData>);
  static copyOf(source: PropertyComponentModel, mutator: (draft: MutableModel<PropertyComponentModel, PropertyComponentModelMetaData>) => MutableModel<PropertyComponentModel, PropertyComponentModelMetaData> | void): PropertyComponentModel;
}