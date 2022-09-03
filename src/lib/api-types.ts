import type { Application } from "./server/models";

export type Json<T> = T extends { toJSON: () => infer K }
  ? K
  : T extends boolean | number | string | null
  ? T
  : T extends (infer K)[]
  ? Json<K>[]
  : T extends Function | Symbol | undefined
  ? never
  : { [K in keyof T]: Json<T[K]> };

export type ApplicationCreation = Application;
