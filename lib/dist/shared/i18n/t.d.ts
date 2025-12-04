import { Locale } from './locale';
import { default as en } from './lang/en.json';
type Messages = typeof en;
export declare const getLocalizedMessages: (locale: Locale) => Messages;
type PathsToStringProps<T> = T extends string ? [] : {
    [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>];
}[Extract<keyof T, string>];
type Join<T extends string[], D extends string> = T extends [] ? never : T extends [infer F] ? F : T extends [infer F, ...infer R] ? F extends string ? `${F}${D}${Join<Extract<R, string[]>, D>}` : never : string;
export type TId = Join<PathsToStringProps<Messages>, '.'>;
export declare const t: (id: TId, parameters?: {}, selectedLocale?: Locale) => string;
export {};
//# sourceMappingURL=t.d.ts.map