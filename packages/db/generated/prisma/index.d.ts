
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Website
 * 
 */
export type Website = $Result.DefaultSelection<Prisma.$WebsitePayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model WebsiteTick
 * 
 */
export type WebsiteTick = $Result.DefaultSelection<Prisma.$WebsiteTickPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WebsiteStatus: {
  Up: 'Up',
  Down: 'Down',
  Unknown: 'Unknown'
};

export type WebsiteStatus = (typeof WebsiteStatus)[keyof typeof WebsiteStatus]

}

export type WebsiteStatus = $Enums.WebsiteStatus

export const WebsiteStatus: typeof $Enums.WebsiteStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Websites
 * const websites = await prisma.website.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Websites
   * const websites = await prisma.website.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.website`: Exposes CRUD operations for the **Website** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Websites
    * const websites = await prisma.website.findMany()
    * ```
    */
  get website(): Prisma.WebsiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.websiteTick`: Exposes CRUD operations for the **WebsiteTick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebsiteTicks
    * const websiteTicks = await prisma.websiteTick.findMany()
    * ```
    */
  get websiteTick(): Prisma.WebsiteTickDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Website: 'Website',
    Region: 'Region',
    WebsiteTick: 'WebsiteTick'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "website" | "region" | "websiteTick"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Website: {
        payload: Prisma.$WebsitePayload<ExtArgs>
        fields: Prisma.WebsiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findFirst: {
            args: Prisma.WebsiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findMany: {
            args: Prisma.WebsiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          create: {
            args: Prisma.WebsiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          createMany: {
            args: Prisma.WebsiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebsiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          delete: {
            args: Prisma.WebsiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          update: {
            args: Prisma.WebsiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          deleteMany: {
            args: Prisma.WebsiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebsiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebsiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          upsert: {
            args: Prisma.WebsiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          aggregate: {
            args: Prisma.WebsiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsite>
          }
          groupBy: {
            args: Prisma.WebsiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsiteCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      WebsiteTick: {
        payload: Prisma.$WebsiteTickPayload<ExtArgs>
        fields: Prisma.WebsiteTickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsiteTickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsiteTickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>
          }
          findFirst: {
            args: Prisma.WebsiteTickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsiteTickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>
          }
          findMany: {
            args: Prisma.WebsiteTickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>[]
          }
          create: {
            args: Prisma.WebsiteTickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>
          }
          createMany: {
            args: Prisma.WebsiteTickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebsiteTickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>[]
          }
          delete: {
            args: Prisma.WebsiteTickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>
          }
          update: {
            args: Prisma.WebsiteTickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>
          }
          deleteMany: {
            args: Prisma.WebsiteTickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebsiteTickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebsiteTickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>[]
          }
          upsert: {
            args: Prisma.WebsiteTickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>
          }
          aggregate: {
            args: Prisma.WebsiteTickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsiteTick>
          }
          groupBy: {
            args: Prisma.WebsiteTickGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteTickGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsiteTickCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteTickCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    website?: WebsiteOmit
    region?: RegionOmit
    websiteTick?: WebsiteTickOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WebsiteCountOutputType
   */

  export type WebsiteCountOutputType = {
    ticks: number
  }

  export type WebsiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticks?: boolean | WebsiteCountOutputTypeCountTicksArgs
  }

  // Custom InputTypes
  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteCountOutputType
     */
    select?: WebsiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeCountTicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteTickWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    tickes: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickes?: boolean | RegionCountOutputTypeCountTickesArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountTickesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteTickWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Website
   */

  export type AggregateWebsite = {
    _count: WebsiteCountAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  export type WebsiteMinAggregateOutputType = {
    id: string | null
    url: string | null
    timeAdded: Date | null
  }

  export type WebsiteMaxAggregateOutputType = {
    id: string | null
    url: string | null
    timeAdded: Date | null
  }

  export type WebsiteCountAggregateOutputType = {
    id: number
    url: number
    timeAdded: number
    _all: number
  }


  export type WebsiteMinAggregateInputType = {
    id?: true
    url?: true
    timeAdded?: true
  }

  export type WebsiteMaxAggregateInputType = {
    id?: true
    url?: true
    timeAdded?: true
  }

  export type WebsiteCountAggregateInputType = {
    id?: true
    url?: true
    timeAdded?: true
    _all?: true
  }

  export type WebsiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Website to aggregate.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Websites
    **/
    _count?: true | WebsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteMaxAggregateInputType
  }

  export type GetWebsiteAggregateType<T extends WebsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsite[P]>
      : GetScalarType<T[P], AggregateWebsite[P]>
  }




  export type WebsiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteWhereInput
    orderBy?: WebsiteOrderByWithAggregationInput | WebsiteOrderByWithAggregationInput[]
    by: WebsiteScalarFieldEnum[] | WebsiteScalarFieldEnum
    having?: WebsiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteCountAggregateInputType | true
    _min?: WebsiteMinAggregateInputType
    _max?: WebsiteMaxAggregateInputType
  }

  export type WebsiteGroupByOutputType = {
    id: string
    url: string
    timeAdded: Date
    _count: WebsiteCountAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  type GetWebsiteGroupByPayload<T extends WebsiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    timeAdded?: boolean
    ticks?: boolean | Website$ticksArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    timeAdded?: boolean
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    timeAdded?: boolean
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectScalar = {
    id?: boolean
    url?: boolean
    timeAdded?: boolean
  }

  export type WebsiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "timeAdded", ExtArgs["result"]["website"]>
  export type WebsiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticks?: boolean | Website$ticksArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebsiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WebsiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WebsitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Website"
    objects: {
      ticks: Prisma.$WebsiteTickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      timeAdded: Date
    }, ExtArgs["result"]["website"]>
    composites: {}
  }

  type WebsiteGetPayload<S extends boolean | null | undefined | WebsiteDefaultArgs> = $Result.GetResult<Prisma.$WebsitePayload, S>

  type WebsiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebsiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteCountAggregateInputType | true
    }

  export interface WebsiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Website'], meta: { name: 'Website' } }
    /**
     * Find zero or one Website that matches the filter.
     * @param {WebsiteFindUniqueArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebsiteFindUniqueArgs>(args: SelectSubset<T, WebsiteFindUniqueArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Website that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebsiteFindUniqueOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebsiteFindUniqueOrThrowArgs>(args: SelectSubset<T, WebsiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Website that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebsiteFindFirstArgs>(args?: SelectSubset<T, WebsiteFindFirstArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Website that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebsiteFindFirstOrThrowArgs>(args?: SelectSubset<T, WebsiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Websites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Websites
     * const websites = await prisma.website.findMany()
     * 
     * // Get first 10 Websites
     * const websites = await prisma.website.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteWithIdOnly = await prisma.website.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebsiteFindManyArgs>(args?: SelectSubset<T, WebsiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Website.
     * @param {WebsiteCreateArgs} args - Arguments to create a Website.
     * @example
     * // Create one Website
     * const Website = await prisma.website.create({
     *   data: {
     *     // ... data to create a Website
     *   }
     * })
     * 
     */
    create<T extends WebsiteCreateArgs>(args: SelectSubset<T, WebsiteCreateArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Websites.
     * @param {WebsiteCreateManyArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebsiteCreateManyArgs>(args?: SelectSubset<T, WebsiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Websites and returns the data saved in the database.
     * @param {WebsiteCreateManyAndReturnArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebsiteCreateManyAndReturnArgs>(args?: SelectSubset<T, WebsiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Website.
     * @param {WebsiteDeleteArgs} args - Arguments to delete one Website.
     * @example
     * // Delete one Website
     * const Website = await prisma.website.delete({
     *   where: {
     *     // ... filter to delete one Website
     *   }
     * })
     * 
     */
    delete<T extends WebsiteDeleteArgs>(args: SelectSubset<T, WebsiteDeleteArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Website.
     * @param {WebsiteUpdateArgs} args - Arguments to update one Website.
     * @example
     * // Update one Website
     * const website = await prisma.website.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebsiteUpdateArgs>(args: SelectSubset<T, WebsiteUpdateArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Websites.
     * @param {WebsiteDeleteManyArgs} args - Arguments to filter Websites to delete.
     * @example
     * // Delete a few Websites
     * const { count } = await prisma.website.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebsiteDeleteManyArgs>(args?: SelectSubset<T, WebsiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebsiteUpdateManyArgs>(args: SelectSubset<T, WebsiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites and returns the data updated in the database.
     * @param {WebsiteUpdateManyAndReturnArgs} args - Arguments to update many Websites.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebsiteUpdateManyAndReturnArgs>(args: SelectSubset<T, WebsiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Website.
     * @param {WebsiteUpsertArgs} args - Arguments to update or create a Website.
     * @example
     * // Update or create a Website
     * const website = await prisma.website.upsert({
     *   create: {
     *     // ... data to create a Website
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Website we want to update
     *   }
     * })
     */
    upsert<T extends WebsiteUpsertArgs>(args: SelectSubset<T, WebsiteUpsertArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteCountArgs} args - Arguments to filter Websites to count.
     * @example
     * // Count the number of Websites
     * const count = await prisma.website.count({
     *   where: {
     *     // ... the filter for the Websites we want to count
     *   }
     * })
    **/
    count<T extends WebsiteCountArgs>(
      args?: Subset<T, WebsiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebsiteAggregateArgs>(args: Subset<T, WebsiteAggregateArgs>): Prisma.PrismaPromise<GetWebsiteAggregateType<T>>

    /**
     * Group by Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebsiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebsiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Website model
   */
  readonly fields: WebsiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Website.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticks<T extends Website$ticksArgs<ExtArgs> = {}>(args?: Subset<T, Website$ticksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Website model
   */
  interface WebsiteFieldRefs {
    readonly id: FieldRef<"Website", 'String'>
    readonly url: FieldRef<"Website", 'String'>
    readonly timeAdded: FieldRef<"Website", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Website findUnique
   */
  export type WebsiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website findUniqueOrThrow
   */
  export type WebsiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website findFirst
   */
  export type WebsiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website findFirstOrThrow
   */
  export type WebsiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website findMany
   */
  export type WebsiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Websites to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website create
   */
  export type WebsiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Website.
     */
    data: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
  }

  /**
   * Website createMany
   */
  export type WebsiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Website createManyAndReturn
   */
  export type WebsiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Website update
   */
  export type WebsiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Website.
     */
    data: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
    /**
     * Choose, which Website to update.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website updateMany
   */
  export type WebsiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to update.
     */
    limit?: number
  }

  /**
   * Website updateManyAndReturn
   */
  export type WebsiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to update.
     */
    limit?: number
  }

  /**
   * Website upsert
   */
  export type WebsiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Website to update in case it exists.
     */
    where: WebsiteWhereUniqueInput
    /**
     * In case the Website found by the `where` argument doesn't exist, create a new Website with this data.
     */
    create: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
    /**
     * In case the Website was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
  }

  /**
   * Website delete
   */
  export type WebsiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter which Website to delete.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website deleteMany
   */
  export type WebsiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Websites to delete
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to delete.
     */
    limit?: number
  }

  /**
   * Website.ticks
   */
  export type Website$ticksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    where?: WebsiteTickWhereInput
    orderBy?: WebsiteTickOrderByWithRelationInput | WebsiteTickOrderByWithRelationInput[]
    cursor?: WebsiteTickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * Website without action
   */
  export type WebsiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RegionMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: string
    name: string
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tickes?: boolean | Region$tickesArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickes?: boolean | Region$tickesArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RegionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      tickes: Prisma.$WebsiteTickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegionUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickes<T extends Region$tickesArgs<ExtArgs> = {}>(args?: Subset<T, Region$tickesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'String'>
    readonly name: FieldRef<"Region", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region createManyAndReturn
   */
  export type RegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region updateManyAndReturn
   */
  export type RegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.tickes
   */
  export type Region$tickesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    where?: WebsiteTickWhereInput
    orderBy?: WebsiteTickOrderByWithRelationInput | WebsiteTickOrderByWithRelationInput[]
    cursor?: WebsiteTickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model WebsiteTick
   */

  export type AggregateWebsiteTick = {
    _count: WebsiteTickCountAggregateOutputType | null
    _avg: WebsiteTickAvgAggregateOutputType | null
    _sum: WebsiteTickSumAggregateOutputType | null
    _min: WebsiteTickMinAggregateOutputType | null
    _max: WebsiteTickMaxAggregateOutputType | null
  }

  export type WebsiteTickAvgAggregateOutputType = {
    response_time_ms: number | null
  }

  export type WebsiteTickSumAggregateOutputType = {
    response_time_ms: number | null
  }

  export type WebsiteTickMinAggregateOutputType = {
    id: string | null
    response_time_ms: number | null
    status: $Enums.WebsiteStatus | null
    region_id: string | null
    website_id: string | null
  }

  export type WebsiteTickMaxAggregateOutputType = {
    id: string | null
    response_time_ms: number | null
    status: $Enums.WebsiteStatus | null
    region_id: string | null
    website_id: string | null
  }

  export type WebsiteTickCountAggregateOutputType = {
    id: number
    response_time_ms: number
    status: number
    region_id: number
    website_id: number
    _all: number
  }


  export type WebsiteTickAvgAggregateInputType = {
    response_time_ms?: true
  }

  export type WebsiteTickSumAggregateInputType = {
    response_time_ms?: true
  }

  export type WebsiteTickMinAggregateInputType = {
    id?: true
    response_time_ms?: true
    status?: true
    region_id?: true
    website_id?: true
  }

  export type WebsiteTickMaxAggregateInputType = {
    id?: true
    response_time_ms?: true
    status?: true
    region_id?: true
    website_id?: true
  }

  export type WebsiteTickCountAggregateInputType = {
    id?: true
    response_time_ms?: true
    status?: true
    region_id?: true
    website_id?: true
    _all?: true
  }

  export type WebsiteTickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebsiteTick to aggregate.
     */
    where?: WebsiteTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteTicks to fetch.
     */
    orderBy?: WebsiteTickOrderByWithRelationInput | WebsiteTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsiteTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebsiteTicks
    **/
    _count?: true | WebsiteTickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebsiteTickAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebsiteTickSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteTickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteTickMaxAggregateInputType
  }

  export type GetWebsiteTickAggregateType<T extends WebsiteTickAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsiteTick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsiteTick[P]>
      : GetScalarType<T[P], AggregateWebsiteTick[P]>
  }




  export type WebsiteTickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteTickWhereInput
    orderBy?: WebsiteTickOrderByWithAggregationInput | WebsiteTickOrderByWithAggregationInput[]
    by: WebsiteTickScalarFieldEnum[] | WebsiteTickScalarFieldEnum
    having?: WebsiteTickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteTickCountAggregateInputType | true
    _avg?: WebsiteTickAvgAggregateInputType
    _sum?: WebsiteTickSumAggregateInputType
    _min?: WebsiteTickMinAggregateInputType
    _max?: WebsiteTickMaxAggregateInputType
  }

  export type WebsiteTickGroupByOutputType = {
    id: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region_id: string
    website_id: string
    _count: WebsiteTickCountAggregateOutputType | null
    _avg: WebsiteTickAvgAggregateOutputType | null
    _sum: WebsiteTickSumAggregateOutputType | null
    _min: WebsiteTickMinAggregateOutputType | null
    _max: WebsiteTickMaxAggregateOutputType | null
  }

  type GetWebsiteTickGroupByPayload<T extends WebsiteTickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteTickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteTickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteTickGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteTickGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteTickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    region_id?: boolean
    website_id?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websiteTick"]>

  export type WebsiteTickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    region_id?: boolean
    website_id?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websiteTick"]>

  export type WebsiteTickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    region_id?: boolean
    website_id?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websiteTick"]>

  export type WebsiteTickSelectScalar = {
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    region_id?: boolean
    website_id?: boolean
  }

  export type WebsiteTickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "response_time_ms" | "status" | "region_id" | "website_id", ExtArgs["result"]["websiteTick"]>
  export type WebsiteTickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type WebsiteTickIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type WebsiteTickIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }

  export type $WebsiteTickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebsiteTick"
    objects: {
      region: Prisma.$RegionPayload<ExtArgs>
      website: Prisma.$WebsitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      response_time_ms: number
      status: $Enums.WebsiteStatus
      region_id: string
      website_id: string
    }, ExtArgs["result"]["websiteTick"]>
    composites: {}
  }

  type WebsiteTickGetPayload<S extends boolean | null | undefined | WebsiteTickDefaultArgs> = $Result.GetResult<Prisma.$WebsiteTickPayload, S>

  type WebsiteTickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebsiteTickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteTickCountAggregateInputType | true
    }

  export interface WebsiteTickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebsiteTick'], meta: { name: 'WebsiteTick' } }
    /**
     * Find zero or one WebsiteTick that matches the filter.
     * @param {WebsiteTickFindUniqueArgs} args - Arguments to find a WebsiteTick
     * @example
     * // Get one WebsiteTick
     * const websiteTick = await prisma.websiteTick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebsiteTickFindUniqueArgs>(args: SelectSubset<T, WebsiteTickFindUniqueArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebsiteTick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebsiteTickFindUniqueOrThrowArgs} args - Arguments to find a WebsiteTick
     * @example
     * // Get one WebsiteTick
     * const websiteTick = await prisma.websiteTick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebsiteTickFindUniqueOrThrowArgs>(args: SelectSubset<T, WebsiteTickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsiteTick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickFindFirstArgs} args - Arguments to find a WebsiteTick
     * @example
     * // Get one WebsiteTick
     * const websiteTick = await prisma.websiteTick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebsiteTickFindFirstArgs>(args?: SelectSubset<T, WebsiteTickFindFirstArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsiteTick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickFindFirstOrThrowArgs} args - Arguments to find a WebsiteTick
     * @example
     * // Get one WebsiteTick
     * const websiteTick = await prisma.websiteTick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebsiteTickFindFirstOrThrowArgs>(args?: SelectSubset<T, WebsiteTickFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebsiteTicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebsiteTicks
     * const websiteTicks = await prisma.websiteTick.findMany()
     * 
     * // Get first 10 WebsiteTicks
     * const websiteTicks = await prisma.websiteTick.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteTickWithIdOnly = await prisma.websiteTick.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebsiteTickFindManyArgs>(args?: SelectSubset<T, WebsiteTickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebsiteTick.
     * @param {WebsiteTickCreateArgs} args - Arguments to create a WebsiteTick.
     * @example
     * // Create one WebsiteTick
     * const WebsiteTick = await prisma.websiteTick.create({
     *   data: {
     *     // ... data to create a WebsiteTick
     *   }
     * })
     * 
     */
    create<T extends WebsiteTickCreateArgs>(args: SelectSubset<T, WebsiteTickCreateArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebsiteTicks.
     * @param {WebsiteTickCreateManyArgs} args - Arguments to create many WebsiteTicks.
     * @example
     * // Create many WebsiteTicks
     * const websiteTick = await prisma.websiteTick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebsiteTickCreateManyArgs>(args?: SelectSubset<T, WebsiteTickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebsiteTicks and returns the data saved in the database.
     * @param {WebsiteTickCreateManyAndReturnArgs} args - Arguments to create many WebsiteTicks.
     * @example
     * // Create many WebsiteTicks
     * const websiteTick = await prisma.websiteTick.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebsiteTicks and only return the `id`
     * const websiteTickWithIdOnly = await prisma.websiteTick.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebsiteTickCreateManyAndReturnArgs>(args?: SelectSubset<T, WebsiteTickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebsiteTick.
     * @param {WebsiteTickDeleteArgs} args - Arguments to delete one WebsiteTick.
     * @example
     * // Delete one WebsiteTick
     * const WebsiteTick = await prisma.websiteTick.delete({
     *   where: {
     *     // ... filter to delete one WebsiteTick
     *   }
     * })
     * 
     */
    delete<T extends WebsiteTickDeleteArgs>(args: SelectSubset<T, WebsiteTickDeleteArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebsiteTick.
     * @param {WebsiteTickUpdateArgs} args - Arguments to update one WebsiteTick.
     * @example
     * // Update one WebsiteTick
     * const websiteTick = await prisma.websiteTick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebsiteTickUpdateArgs>(args: SelectSubset<T, WebsiteTickUpdateArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebsiteTicks.
     * @param {WebsiteTickDeleteManyArgs} args - Arguments to filter WebsiteTicks to delete.
     * @example
     * // Delete a few WebsiteTicks
     * const { count } = await prisma.websiteTick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebsiteTickDeleteManyArgs>(args?: SelectSubset<T, WebsiteTickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsiteTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebsiteTicks
     * const websiteTick = await prisma.websiteTick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebsiteTickUpdateManyArgs>(args: SelectSubset<T, WebsiteTickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsiteTicks and returns the data updated in the database.
     * @param {WebsiteTickUpdateManyAndReturnArgs} args - Arguments to update many WebsiteTicks.
     * @example
     * // Update many WebsiteTicks
     * const websiteTick = await prisma.websiteTick.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebsiteTicks and only return the `id`
     * const websiteTickWithIdOnly = await prisma.websiteTick.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebsiteTickUpdateManyAndReturnArgs>(args: SelectSubset<T, WebsiteTickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebsiteTick.
     * @param {WebsiteTickUpsertArgs} args - Arguments to update or create a WebsiteTick.
     * @example
     * // Update or create a WebsiteTick
     * const websiteTick = await prisma.websiteTick.upsert({
     *   create: {
     *     // ... data to create a WebsiteTick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebsiteTick we want to update
     *   }
     * })
     */
    upsert<T extends WebsiteTickUpsertArgs>(args: SelectSubset<T, WebsiteTickUpsertArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebsiteTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickCountArgs} args - Arguments to filter WebsiteTicks to count.
     * @example
     * // Count the number of WebsiteTicks
     * const count = await prisma.websiteTick.count({
     *   where: {
     *     // ... the filter for the WebsiteTicks we want to count
     *   }
     * })
    **/
    count<T extends WebsiteTickCountArgs>(
      args?: Subset<T, WebsiteTickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteTickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebsiteTick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebsiteTickAggregateArgs>(args: Subset<T, WebsiteTickAggregateArgs>): Prisma.PrismaPromise<GetWebsiteTickAggregateType<T>>

    /**
     * Group by WebsiteTick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebsiteTickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteTickGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteTickGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebsiteTickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteTickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebsiteTick model
   */
  readonly fields: WebsiteTickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebsiteTick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsiteTickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    website<T extends WebsiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebsiteDefaultArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebsiteTick model
   */
  interface WebsiteTickFieldRefs {
    readonly id: FieldRef<"WebsiteTick", 'String'>
    readonly response_time_ms: FieldRef<"WebsiteTick", 'Int'>
    readonly status: FieldRef<"WebsiteTick", 'WebsiteStatus'>
    readonly region_id: FieldRef<"WebsiteTick", 'String'>
    readonly website_id: FieldRef<"WebsiteTick", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WebsiteTick findUnique
   */
  export type WebsiteTickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTick to fetch.
     */
    where: WebsiteTickWhereUniqueInput
  }

  /**
   * WebsiteTick findUniqueOrThrow
   */
  export type WebsiteTickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTick to fetch.
     */
    where: WebsiteTickWhereUniqueInput
  }

  /**
   * WebsiteTick findFirst
   */
  export type WebsiteTickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTick to fetch.
     */
    where?: WebsiteTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteTicks to fetch.
     */
    orderBy?: WebsiteTickOrderByWithRelationInput | WebsiteTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebsiteTicks.
     */
    cursor?: WebsiteTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebsiteTicks.
     */
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * WebsiteTick findFirstOrThrow
   */
  export type WebsiteTickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTick to fetch.
     */
    where?: WebsiteTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteTicks to fetch.
     */
    orderBy?: WebsiteTickOrderByWithRelationInput | WebsiteTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebsiteTicks.
     */
    cursor?: WebsiteTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebsiteTicks.
     */
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * WebsiteTick findMany
   */
  export type WebsiteTickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTicks to fetch.
     */
    where?: WebsiteTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteTicks to fetch.
     */
    orderBy?: WebsiteTickOrderByWithRelationInput | WebsiteTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebsiteTicks.
     */
    cursor?: WebsiteTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteTicks.
     */
    skip?: number
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * WebsiteTick create
   */
  export type WebsiteTickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * The data needed to create a WebsiteTick.
     */
    data: XOR<WebsiteTickCreateInput, WebsiteTickUncheckedCreateInput>
  }

  /**
   * WebsiteTick createMany
   */
  export type WebsiteTickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebsiteTicks.
     */
    data: WebsiteTickCreateManyInput | WebsiteTickCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebsiteTick createManyAndReturn
   */
  export type WebsiteTickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * The data used to create many WebsiteTicks.
     */
    data: WebsiteTickCreateManyInput | WebsiteTickCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebsiteTick update
   */
  export type WebsiteTickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * The data needed to update a WebsiteTick.
     */
    data: XOR<WebsiteTickUpdateInput, WebsiteTickUncheckedUpdateInput>
    /**
     * Choose, which WebsiteTick to update.
     */
    where: WebsiteTickWhereUniqueInput
  }

  /**
   * WebsiteTick updateMany
   */
  export type WebsiteTickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebsiteTicks.
     */
    data: XOR<WebsiteTickUpdateManyMutationInput, WebsiteTickUncheckedUpdateManyInput>
    /**
     * Filter which WebsiteTicks to update
     */
    where?: WebsiteTickWhereInput
    /**
     * Limit how many WebsiteTicks to update.
     */
    limit?: number
  }

  /**
   * WebsiteTick updateManyAndReturn
   */
  export type WebsiteTickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * The data used to update WebsiteTicks.
     */
    data: XOR<WebsiteTickUpdateManyMutationInput, WebsiteTickUncheckedUpdateManyInput>
    /**
     * Filter which WebsiteTicks to update
     */
    where?: WebsiteTickWhereInput
    /**
     * Limit how many WebsiteTicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebsiteTick upsert
   */
  export type WebsiteTickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * The filter to search for the WebsiteTick to update in case it exists.
     */
    where: WebsiteTickWhereUniqueInput
    /**
     * In case the WebsiteTick found by the `where` argument doesn't exist, create a new WebsiteTick with this data.
     */
    create: XOR<WebsiteTickCreateInput, WebsiteTickUncheckedCreateInput>
    /**
     * In case the WebsiteTick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsiteTickUpdateInput, WebsiteTickUncheckedUpdateInput>
  }

  /**
   * WebsiteTick delete
   */
  export type WebsiteTickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * Filter which WebsiteTick to delete.
     */
    where: WebsiteTickWhereUniqueInput
  }

  /**
   * WebsiteTick deleteMany
   */
  export type WebsiteTickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebsiteTicks to delete
     */
    where?: WebsiteTickWhereInput
    /**
     * Limit how many WebsiteTicks to delete.
     */
    limit?: number
  }

  /**
   * WebsiteTick without action
   */
  export type WebsiteTickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WebsiteScalarFieldEnum: {
    id: 'id',
    url: 'url',
    timeAdded: 'timeAdded'
  };

  export type WebsiteScalarFieldEnum = (typeof WebsiteScalarFieldEnum)[keyof typeof WebsiteScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const WebsiteTickScalarFieldEnum: {
    id: 'id',
    response_time_ms: 'response_time_ms',
    status: 'status',
    region_id: 'region_id',
    website_id: 'website_id'
  };

  export type WebsiteTickScalarFieldEnum = (typeof WebsiteTickScalarFieldEnum)[keyof typeof WebsiteTickScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'WebsiteStatus'
   */
  export type EnumWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebsiteStatus'>
    


  /**
   * Reference to a field of type 'WebsiteStatus[]'
   */
  export type ListEnumWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebsiteStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WebsiteWhereInput = {
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    id?: StringFilter<"Website"> | string
    url?: StringFilter<"Website"> | string
    timeAdded?: DateTimeFilter<"Website"> | Date | string
    ticks?: WebsiteTickListRelationFilter
  }

  export type WebsiteOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    timeAdded?: SortOrder
    ticks?: WebsiteTickOrderByRelationAggregateInput
  }

  export type WebsiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    url?: StringFilter<"Website"> | string
    timeAdded?: DateTimeFilter<"Website"> | Date | string
    ticks?: WebsiteTickListRelationFilter
  }, "id">

  export type WebsiteOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    timeAdded?: SortOrder
    _count?: WebsiteCountOrderByAggregateInput
    _max?: WebsiteMaxOrderByAggregateInput
    _min?: WebsiteMinOrderByAggregateInput
  }

  export type WebsiteScalarWhereWithAggregatesInput = {
    AND?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    OR?: WebsiteScalarWhereWithAggregatesInput[]
    NOT?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Website"> | string
    url?: StringWithAggregatesFilter<"Website"> | string
    timeAdded?: DateTimeWithAggregatesFilter<"Website"> | Date | string
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: StringFilter<"Region"> | string
    name?: StringFilter<"Region"> | string
    tickes?: WebsiteTickListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tickes?: WebsiteTickOrderByRelationAggregateInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name?: StringFilter<"Region"> | string
    tickes?: WebsiteTickListRelationFilter
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Region"> | string
    name?: StringWithAggregatesFilter<"Region"> | string
  }

  export type WebsiteTickWhereInput = {
    AND?: WebsiteTickWhereInput | WebsiteTickWhereInput[]
    OR?: WebsiteTickWhereInput[]
    NOT?: WebsiteTickWhereInput | WebsiteTickWhereInput[]
    id?: StringFilter<"WebsiteTick"> | string
    response_time_ms?: IntFilter<"WebsiteTick"> | number
    status?: EnumWebsiteStatusFilter<"WebsiteTick"> | $Enums.WebsiteStatus
    region_id?: StringFilter<"WebsiteTick"> | string
    website_id?: StringFilter<"WebsiteTick"> | string
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }

  export type WebsiteTickOrderByWithRelationInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
    region?: RegionOrderByWithRelationInput
    website?: WebsiteOrderByWithRelationInput
  }

  export type WebsiteTickWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebsiteTickWhereInput | WebsiteTickWhereInput[]
    OR?: WebsiteTickWhereInput[]
    NOT?: WebsiteTickWhereInput | WebsiteTickWhereInput[]
    response_time_ms?: IntFilter<"WebsiteTick"> | number
    status?: EnumWebsiteStatusFilter<"WebsiteTick"> | $Enums.WebsiteStatus
    region_id?: StringFilter<"WebsiteTick"> | string
    website_id?: StringFilter<"WebsiteTick"> | string
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }, "id">

  export type WebsiteTickOrderByWithAggregationInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
    _count?: WebsiteTickCountOrderByAggregateInput
    _avg?: WebsiteTickAvgOrderByAggregateInput
    _max?: WebsiteTickMaxOrderByAggregateInput
    _min?: WebsiteTickMinOrderByAggregateInput
    _sum?: WebsiteTickSumOrderByAggregateInput
  }

  export type WebsiteTickScalarWhereWithAggregatesInput = {
    AND?: WebsiteTickScalarWhereWithAggregatesInput | WebsiteTickScalarWhereWithAggregatesInput[]
    OR?: WebsiteTickScalarWhereWithAggregatesInput[]
    NOT?: WebsiteTickScalarWhereWithAggregatesInput | WebsiteTickScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebsiteTick"> | string
    response_time_ms?: IntWithAggregatesFilter<"WebsiteTick"> | number
    status?: EnumWebsiteStatusWithAggregatesFilter<"WebsiteTick"> | $Enums.WebsiteStatus
    region_id?: StringWithAggregatesFilter<"WebsiteTick"> | string
    website_id?: StringWithAggregatesFilter<"WebsiteTick"> | string
  }

  export type WebsiteCreateInput = {
    id?: string
    url: string
    timeAdded: Date | string
    ticks?: WebsiteTickCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateInput = {
    id?: string
    url: string
    timeAdded: Date | string
    ticks?: WebsiteTickUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: WebsiteTickUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: WebsiteTickUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteCreateManyInput = {
    id?: string
    url: string
    timeAdded: Date | string
  }

  export type WebsiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionCreateInput = {
    id?: string
    name: string
    tickes?: WebsiteTickCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: string
    name: string
    tickes?: WebsiteTickUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tickes?: WebsiteTickUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tickes?: WebsiteTickUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: string
    name: string
  }

  export type RegionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WebsiteTickCreateInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region: RegionCreateNestedOneWithoutTickesInput
    website: WebsiteCreateNestedOneWithoutTicksInput
  }

  export type WebsiteTickUncheckedCreateInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region_id: string
    website_id: string
  }

  export type WebsiteTickUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region?: RegionUpdateOneRequiredWithoutTickesNestedInput
    website?: WebsiteUpdateOneRequiredWithoutTicksNestedInput
  }

  export type WebsiteTickUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region_id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
  }

  export type WebsiteTickCreateManyInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region_id: string
    website_id: string
  }

  export type WebsiteTickUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
  }

  export type WebsiteTickUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region_id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WebsiteTickListRelationFilter = {
    every?: WebsiteTickWhereInput
    some?: WebsiteTickWhereInput
    none?: WebsiteTickWhereInput
  }

  export type WebsiteTickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebsiteCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    timeAdded?: SortOrder
  }

  export type WebsiteMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    timeAdded?: SortOrder
  }

  export type WebsiteMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    timeAdded?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusFilter<$PrismaModel> | $Enums.WebsiteStatus
  }

  export type RegionScalarRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type WebsiteScalarRelationFilter = {
    is?: WebsiteWhereInput
    isNot?: WebsiteWhereInput
  }

  export type WebsiteTickCountOrderByAggregateInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
  }

  export type WebsiteTickAvgOrderByAggregateInput = {
    response_time_ms?: SortOrder
  }

  export type WebsiteTickMaxOrderByAggregateInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
  }

  export type WebsiteTickMinOrderByAggregateInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
  }

  export type WebsiteTickSumOrderByAggregateInput = {
    response_time_ms?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumWebsiteStatusFilter<$PrismaModel>
  }

  export type WebsiteTickCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<WebsiteTickCreateWithoutWebsiteInput, WebsiteTickUncheckedCreateWithoutWebsiteInput> | WebsiteTickCreateWithoutWebsiteInput[] | WebsiteTickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: WebsiteTickCreateOrConnectWithoutWebsiteInput | WebsiteTickCreateOrConnectWithoutWebsiteInput[]
    createMany?: WebsiteTickCreateManyWebsiteInputEnvelope
    connect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
  }

  export type WebsiteTickUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<WebsiteTickCreateWithoutWebsiteInput, WebsiteTickUncheckedCreateWithoutWebsiteInput> | WebsiteTickCreateWithoutWebsiteInput[] | WebsiteTickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: WebsiteTickCreateOrConnectWithoutWebsiteInput | WebsiteTickCreateOrConnectWithoutWebsiteInput[]
    createMany?: WebsiteTickCreateManyWebsiteInputEnvelope
    connect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WebsiteTickUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<WebsiteTickCreateWithoutWebsiteInput, WebsiteTickUncheckedCreateWithoutWebsiteInput> | WebsiteTickCreateWithoutWebsiteInput[] | WebsiteTickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: WebsiteTickCreateOrConnectWithoutWebsiteInput | WebsiteTickCreateOrConnectWithoutWebsiteInput[]
    upsert?: WebsiteTickUpsertWithWhereUniqueWithoutWebsiteInput | WebsiteTickUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: WebsiteTickCreateManyWebsiteInputEnvelope
    set?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    disconnect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    delete?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    connect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    update?: WebsiteTickUpdateWithWhereUniqueWithoutWebsiteInput | WebsiteTickUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: WebsiteTickUpdateManyWithWhereWithoutWebsiteInput | WebsiteTickUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: WebsiteTickScalarWhereInput | WebsiteTickScalarWhereInput[]
  }

  export type WebsiteTickUncheckedUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<WebsiteTickCreateWithoutWebsiteInput, WebsiteTickUncheckedCreateWithoutWebsiteInput> | WebsiteTickCreateWithoutWebsiteInput[] | WebsiteTickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: WebsiteTickCreateOrConnectWithoutWebsiteInput | WebsiteTickCreateOrConnectWithoutWebsiteInput[]
    upsert?: WebsiteTickUpsertWithWhereUniqueWithoutWebsiteInput | WebsiteTickUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: WebsiteTickCreateManyWebsiteInputEnvelope
    set?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    disconnect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    delete?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    connect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    update?: WebsiteTickUpdateWithWhereUniqueWithoutWebsiteInput | WebsiteTickUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: WebsiteTickUpdateManyWithWhereWithoutWebsiteInput | WebsiteTickUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: WebsiteTickScalarWhereInput | WebsiteTickScalarWhereInput[]
  }

  export type WebsiteTickCreateNestedManyWithoutRegionInput = {
    create?: XOR<WebsiteTickCreateWithoutRegionInput, WebsiteTickUncheckedCreateWithoutRegionInput> | WebsiteTickCreateWithoutRegionInput[] | WebsiteTickUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: WebsiteTickCreateOrConnectWithoutRegionInput | WebsiteTickCreateOrConnectWithoutRegionInput[]
    createMany?: WebsiteTickCreateManyRegionInputEnvelope
    connect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
  }

  export type WebsiteTickUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<WebsiteTickCreateWithoutRegionInput, WebsiteTickUncheckedCreateWithoutRegionInput> | WebsiteTickCreateWithoutRegionInput[] | WebsiteTickUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: WebsiteTickCreateOrConnectWithoutRegionInput | WebsiteTickCreateOrConnectWithoutRegionInput[]
    createMany?: WebsiteTickCreateManyRegionInputEnvelope
    connect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
  }

  export type WebsiteTickUpdateManyWithoutRegionNestedInput = {
    create?: XOR<WebsiteTickCreateWithoutRegionInput, WebsiteTickUncheckedCreateWithoutRegionInput> | WebsiteTickCreateWithoutRegionInput[] | WebsiteTickUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: WebsiteTickCreateOrConnectWithoutRegionInput | WebsiteTickCreateOrConnectWithoutRegionInput[]
    upsert?: WebsiteTickUpsertWithWhereUniqueWithoutRegionInput | WebsiteTickUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: WebsiteTickCreateManyRegionInputEnvelope
    set?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    disconnect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    delete?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    connect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    update?: WebsiteTickUpdateWithWhereUniqueWithoutRegionInput | WebsiteTickUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: WebsiteTickUpdateManyWithWhereWithoutRegionInput | WebsiteTickUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: WebsiteTickScalarWhereInput | WebsiteTickScalarWhereInput[]
  }

  export type WebsiteTickUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<WebsiteTickCreateWithoutRegionInput, WebsiteTickUncheckedCreateWithoutRegionInput> | WebsiteTickCreateWithoutRegionInput[] | WebsiteTickUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: WebsiteTickCreateOrConnectWithoutRegionInput | WebsiteTickCreateOrConnectWithoutRegionInput[]
    upsert?: WebsiteTickUpsertWithWhereUniqueWithoutRegionInput | WebsiteTickUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: WebsiteTickCreateManyRegionInputEnvelope
    set?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    disconnect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    delete?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    connect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    update?: WebsiteTickUpdateWithWhereUniqueWithoutRegionInput | WebsiteTickUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: WebsiteTickUpdateManyWithWhereWithoutRegionInput | WebsiteTickUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: WebsiteTickScalarWhereInput | WebsiteTickScalarWhereInput[]
  }

  export type RegionCreateNestedOneWithoutTickesInput = {
    create?: XOR<RegionCreateWithoutTickesInput, RegionUncheckedCreateWithoutTickesInput>
    connectOrCreate?: RegionCreateOrConnectWithoutTickesInput
    connect?: RegionWhereUniqueInput
  }

  export type WebsiteCreateNestedOneWithoutTicksInput = {
    create?: XOR<WebsiteCreateWithoutTicksInput, WebsiteUncheckedCreateWithoutTicksInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutTicksInput
    connect?: WebsiteWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWebsiteStatusFieldUpdateOperationsInput = {
    set?: $Enums.WebsiteStatus
  }

  export type RegionUpdateOneRequiredWithoutTickesNestedInput = {
    create?: XOR<RegionCreateWithoutTickesInput, RegionUncheckedCreateWithoutTickesInput>
    connectOrCreate?: RegionCreateOrConnectWithoutTickesInput
    upsert?: RegionUpsertWithoutTickesInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutTickesInput, RegionUpdateWithoutTickesInput>, RegionUncheckedUpdateWithoutTickesInput>
  }

  export type WebsiteUpdateOneRequiredWithoutTicksNestedInput = {
    create?: XOR<WebsiteCreateWithoutTicksInput, WebsiteUncheckedCreateWithoutTicksInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutTicksInput
    upsert?: WebsiteUpsertWithoutTicksInput
    connect?: WebsiteWhereUniqueInput
    update?: XOR<XOR<WebsiteUpdateToOneWithWhereWithoutTicksInput, WebsiteUpdateWithoutTicksInput>, WebsiteUncheckedUpdateWithoutTicksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusFilter<$PrismaModel> | $Enums.WebsiteStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumWebsiteStatusFilter<$PrismaModel>
  }

  export type WebsiteTickCreateWithoutWebsiteInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region: RegionCreateNestedOneWithoutTickesInput
  }

  export type WebsiteTickUncheckedCreateWithoutWebsiteInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region_id: string
  }

  export type WebsiteTickCreateOrConnectWithoutWebsiteInput = {
    where: WebsiteTickWhereUniqueInput
    create: XOR<WebsiteTickCreateWithoutWebsiteInput, WebsiteTickUncheckedCreateWithoutWebsiteInput>
  }

  export type WebsiteTickCreateManyWebsiteInputEnvelope = {
    data: WebsiteTickCreateManyWebsiteInput | WebsiteTickCreateManyWebsiteInput[]
    skipDuplicates?: boolean
  }

  export type WebsiteTickUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: WebsiteTickWhereUniqueInput
    update: XOR<WebsiteTickUpdateWithoutWebsiteInput, WebsiteTickUncheckedUpdateWithoutWebsiteInput>
    create: XOR<WebsiteTickCreateWithoutWebsiteInput, WebsiteTickUncheckedCreateWithoutWebsiteInput>
  }

  export type WebsiteTickUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: WebsiteTickWhereUniqueInput
    data: XOR<WebsiteTickUpdateWithoutWebsiteInput, WebsiteTickUncheckedUpdateWithoutWebsiteInput>
  }

  export type WebsiteTickUpdateManyWithWhereWithoutWebsiteInput = {
    where: WebsiteTickScalarWhereInput
    data: XOR<WebsiteTickUpdateManyMutationInput, WebsiteTickUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type WebsiteTickScalarWhereInput = {
    AND?: WebsiteTickScalarWhereInput | WebsiteTickScalarWhereInput[]
    OR?: WebsiteTickScalarWhereInput[]
    NOT?: WebsiteTickScalarWhereInput | WebsiteTickScalarWhereInput[]
    id?: StringFilter<"WebsiteTick"> | string
    response_time_ms?: IntFilter<"WebsiteTick"> | number
    status?: EnumWebsiteStatusFilter<"WebsiteTick"> | $Enums.WebsiteStatus
    region_id?: StringFilter<"WebsiteTick"> | string
    website_id?: StringFilter<"WebsiteTick"> | string
  }

  export type WebsiteTickCreateWithoutRegionInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    website: WebsiteCreateNestedOneWithoutTicksInput
  }

  export type WebsiteTickUncheckedCreateWithoutRegionInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    website_id: string
  }

  export type WebsiteTickCreateOrConnectWithoutRegionInput = {
    where: WebsiteTickWhereUniqueInput
    create: XOR<WebsiteTickCreateWithoutRegionInput, WebsiteTickUncheckedCreateWithoutRegionInput>
  }

  export type WebsiteTickCreateManyRegionInputEnvelope = {
    data: WebsiteTickCreateManyRegionInput | WebsiteTickCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type WebsiteTickUpsertWithWhereUniqueWithoutRegionInput = {
    where: WebsiteTickWhereUniqueInput
    update: XOR<WebsiteTickUpdateWithoutRegionInput, WebsiteTickUncheckedUpdateWithoutRegionInput>
    create: XOR<WebsiteTickCreateWithoutRegionInput, WebsiteTickUncheckedCreateWithoutRegionInput>
  }

  export type WebsiteTickUpdateWithWhereUniqueWithoutRegionInput = {
    where: WebsiteTickWhereUniqueInput
    data: XOR<WebsiteTickUpdateWithoutRegionInput, WebsiteTickUncheckedUpdateWithoutRegionInput>
  }

  export type WebsiteTickUpdateManyWithWhereWithoutRegionInput = {
    where: WebsiteTickScalarWhereInput
    data: XOR<WebsiteTickUpdateManyMutationInput, WebsiteTickUncheckedUpdateManyWithoutRegionInput>
  }

  export type RegionCreateWithoutTickesInput = {
    id?: string
    name: string
  }

  export type RegionUncheckedCreateWithoutTickesInput = {
    id?: string
    name: string
  }

  export type RegionCreateOrConnectWithoutTickesInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutTickesInput, RegionUncheckedCreateWithoutTickesInput>
  }

  export type WebsiteCreateWithoutTicksInput = {
    id?: string
    url: string
    timeAdded: Date | string
  }

  export type WebsiteUncheckedCreateWithoutTicksInput = {
    id?: string
    url: string
    timeAdded: Date | string
  }

  export type WebsiteCreateOrConnectWithoutTicksInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutTicksInput, WebsiteUncheckedCreateWithoutTicksInput>
  }

  export type RegionUpsertWithoutTickesInput = {
    update: XOR<RegionUpdateWithoutTickesInput, RegionUncheckedUpdateWithoutTickesInput>
    create: XOR<RegionCreateWithoutTickesInput, RegionUncheckedCreateWithoutTickesInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutTickesInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutTickesInput, RegionUncheckedUpdateWithoutTickesInput>
  }

  export type RegionUpdateWithoutTickesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateWithoutTickesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WebsiteUpsertWithoutTicksInput = {
    update: XOR<WebsiteUpdateWithoutTicksInput, WebsiteUncheckedUpdateWithoutTicksInput>
    create: XOR<WebsiteCreateWithoutTicksInput, WebsiteUncheckedCreateWithoutTicksInput>
    where?: WebsiteWhereInput
  }

  export type WebsiteUpdateToOneWithWhereWithoutTicksInput = {
    where?: WebsiteWhereInput
    data: XOR<WebsiteUpdateWithoutTicksInput, WebsiteUncheckedUpdateWithoutTicksInput>
  }

  export type WebsiteUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUncheckedUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteTickCreateManyWebsiteInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region_id: string
  }

  export type WebsiteTickUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region?: RegionUpdateOneRequiredWithoutTickesNestedInput
  }

  export type WebsiteTickUncheckedUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region_id?: StringFieldUpdateOperationsInput | string
  }

  export type WebsiteTickUncheckedUpdateManyWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region_id?: StringFieldUpdateOperationsInput | string
  }

  export type WebsiteTickCreateManyRegionInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    website_id: string
  }

  export type WebsiteTickUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    website?: WebsiteUpdateOneRequiredWithoutTicksNestedInput
  }

  export type WebsiteTickUncheckedUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    website_id?: StringFieldUpdateOperationsInput | string
  }

  export type WebsiteTickUncheckedUpdateManyWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    website_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}