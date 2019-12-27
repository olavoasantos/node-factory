export type FakerType = Faker.FakerStatic;

export type FactoryGenerator<T> = (fake: FakerType) => T;

type RecursivePartial<T> = {
  [P in keyof T]?: Partial<T[P]> | RecursivePartial<T[P]>;
};

export type Overrides<T> = RecursivePartial<T> | FactoryGenerator<RecursivePartial<T>>;

export interface Factory<T = any> {
  make: MakeMethod<T>;
  create: CreateMethod<T>;
  only: OnlyMethod<T>;
  seed: SeedMethod<T>;
  state: StateMethod<T>;
  onInsert: OnInsertMethod<T>;
  onHydrate: OnHydrateMethod<T>;
}

export interface MakeMethod<T> {
  (): T;
  (overrides: Overrides<T>): T;
  (count: number): T[];
  (count: number, overrides: Overrides<T>): T[];
}

export interface CreateMethod<T> {
  (): Promise<T>;
  (overrides: Overrides<T>): Promise<T>;
  (count: number): Promise<T[]>;
  (count: number, overrides: Overrides<T>): Promise<T[]>;
}

export interface OnlyMethod<T> {
  (keys: keyof T | Array<keyof T>, overrides?: Overrides<T>): Partial<T>;
  (keys: keyof T | Array<keyof T>, count: number, overrides?: Overrides<T>): Array<Partial<T>>;
}

export type SeedMethod<T> = (value: number) => Factory<T>;

export type StateMethod<T> = (name: string, stateValues: Overrides<T>) => void;

export type OnInsertMethod<T> = (func: DatabaseConfig<T>['insert']) => Factory<T>;

export type OnHydrateMethod<T> = (func: DatabaseConfig<T>['hydrate']) => Factory<T>;

export interface DataObject {
  [key: string]: any;
}

export type GenericData  = any[] | DataObject;

export type StateGenerator<T> = MakeMethod<T>;

export interface GenericExtension<T> {
  [state: string]: StateGenerator<T>;
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
