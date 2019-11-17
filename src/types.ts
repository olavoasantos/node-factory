// tslint:disable: unified-signatures
export type FactoryGenerator = (fake: any) => DataObject;

export interface Factory<T = any> {
  make: MakeMethod<T>;
  create: CreateMethod<T>;
  only: OnlyMethod<T>;
  seed: SeedMethod<T>;
  state: StateMethod;
  onInsert: OnInsertMethod<T>;
  onHydrate: OnHydrateMethod<T>;
}

export interface MakeMethod<T> {
  (): T;
  (overrides: DataObject | FactoryGenerator): T;
  (count: number): T[];
  (count: number, overrides: DataObject | FactoryGenerator): T[];
}

export interface CreateMethod<T> {
  (): Promise<T>;
  (overrides: DataObject | FactoryGenerator): Promise<T>;
  (count: number): Promise<T[]>;
  (count: number, overrides: DataObject | FactoryGenerator): Promise<T[]>;
}

export type OnlyMethod<T> = (keys: keyof T | Array<keyof T>, overrides?: DataObject | FactoryGenerator) => Partial<T>;

export type SeedMethod<T> = (value: number) => Factory<T>;

export type StateMethod = (name: string, stateValues: DataObject | FactoryGenerator) => void;

export type OnInsertMethod<T> = (func: DatabaseConfig<T>['insert']) => Factory<T>;

export type OnHydrateMethod<T> = (func: DatabaseConfig<T>['hydrate']) => Factory<T>;

export interface DataObject {
  [key: string]: any;
}

export interface GenericExtension<T> {
  [state: string]: MakeMethod<T>;
}

export interface DatabaseConfig<T> {
  insert: (data: T) => Promise<any>;
  hydrate: (data: T) => any;
}

export interface EnumFactory<T> {
  get: EnumGet<T>;
  unique: EnumUnique<T>;
  seed(value?: number): EnumFactory<T>;
}

export interface EnumGet<T> {
  (): T;
  (count: number): T[];
}

export interface EnumUnique<T> {
  (): T;
  (count: number): T[];
}
