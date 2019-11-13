// tslint:disable: unified-signatures
export interface IDataObject {
  [key: string]: any;
}

export interface StateGenerator<T> {
  (): T;
  (overrides: IDataObject): T;
  (count: number): T[];
  (count: number, overrides: IDataObject): T[];
}
export interface PromiseGenerator<T> {
  (): Promise<T>;
  (overrides: IDataObject): Promise<T>;
  (count: number): Promise<T[]>;
  (count: number, overrides: IDataObject): Promise<T[]>;
}

export interface IFactoryObject<T = any> {
  make: StateGenerator<T>;
  create: PromiseGenerator<T>;
  only: (keys: keyof T | Array<keyof T>, overrides?: IDataObject) => Partial<T>;
  seed: (value: number) => IFactoryObject<T>;
  state: (name: string, stateValues: IDataObject) => void;
  configDatabase(options: DatabaseConfig<T>): void;
}

export interface GenericExtension<T> {
  [state: string]: StateGenerator<T>;
}

export type FactoryGenerator = (fake: any) => IDataObject;

export interface DatabaseConfig<T> {
  insert: (data: T) => Promise<any>;
  hydrate: (data: T) => Promise<any>;
}

export interface EnumGet<T> {
  (): T;
  (count: number): T[];
}

export interface EnumUnique<T> {
  (): T;
  (count: number): T[];
}

export interface EnumFactory<T> {
  get: EnumGet<T>;
  unique: EnumUnique<T>;
  seed(value?: number): EnumFactory<T>;
}
