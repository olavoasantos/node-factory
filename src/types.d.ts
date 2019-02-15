export interface IDataObject {
  [key: string]: any;
}

export interface IFactoryObject {
  create: (overrides?: IDataObject) => IDataObject;
  only: (keys: string | string[], overrides?: IDataObject) => IDataObject;
  make: (count?: number | IDataObject, overrides?: IDataObject) => IDataObject[];
  seed: (value: number) => IFactoryObject;
}

export type FactoryGenerator = (fake: Faker.FakerStatic) => IDataObject;
