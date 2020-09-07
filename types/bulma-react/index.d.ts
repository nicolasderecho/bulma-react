export type ElementType < T extends ReadonlyArray < unknown > > = T extends ReadonlyArray< infer ElementType > ? ElementType : never

export type ClassNameProp = {
  [t: string]: boolean
}

export interface ICheckPropertyOptions {
  prefix: string | undefined | null;
}