export interface IDataObject {
  [key: string]: any;
}

export interface IFactoryObject {
  create: (overrides?: IDataObject) => any;
  only: (keys: string | string[], overrides?: IDataObject) => any;
  make: (count?: number | IDataObject, overrides?: IDataObject) => any[];
  seed: (value: number) => IFactoryObject;
}

export type FactoryGenerator = (fake: Faker.FakerStatic) => IDataObject;
