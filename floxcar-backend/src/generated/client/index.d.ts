
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicule
 * 
 */
export type Vehicule = $Result.DefaultSelection<Prisma.$VehiculePayload>
/**
 * Model TypeDepense
 * 
 */
export type TypeDepense = $Result.DefaultSelection<Prisma.$TypeDepensePayload>
/**
 * Model Depense
 * 
 */
export type Depense = $Result.DefaultSelection<Prisma.$DepensePayload>
/**
 * Model Commentaire
 * 
 */
export type Commentaire = $Result.DefaultSelection<Prisma.$CommentairePayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  LOGISTICIEN: 'LOGISTICIEN',
  CONTROLEUR_FINANCIER: 'CONTROLEUR_FINANCIER',
  CONTROLEUR_GESTION: 'CONTROLEUR_GESTION',
  RESPONSABLE_ADMIN: 'RESPONSABLE_ADMIN',
  ADMIN_GENERAL: 'ADMIN_GENERAL',
  DG: 'DG',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatutDepense: {
  BROUILLON: 'BROUILLON',
  SOUMIS: 'SOUMIS',
  REJETE_FINANCE: 'REJETE_FINANCE',
  VALIDE_FINANCE: 'VALIDE_FINANCE',
  REJETE_ADMIN: 'REJETE_ADMIN',
  VALIDE_ADMIN: 'VALIDE_ADMIN',
  TRAITE_PAR_CONTROLEUR_FINANCIER: 'TRAITE_PAR_CONTROLEUR_FINANCIER',
  TRAITE_PAR_CONTROLEUR_GESTION: 'TRAITE_PAR_CONTROLEUR_GESTION',
  TRAITE_PAR_RESPONSABLE_ADMIN: 'TRAITE_PAR_RESPONSABLE_ADMIN',
  TRAITE_PAR_ADMIN_GENERAL: 'TRAITE_PAR_ADMIN_GENERAL',
  REJETE: 'REJETE',
  TERMINE: 'TERMINE'
};

export type StatutDepense = (typeof StatutDepense)[keyof typeof StatutDepense]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatutDepense = $Enums.StatutDepense

export const StatutDepense: typeof $Enums.StatutDepense

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicule`: Exposes CRUD operations for the **Vehicule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicules
    * const vehicules = await prisma.vehicule.findMany()
    * ```
    */
  get vehicule(): Prisma.VehiculeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.typeDepense`: Exposes CRUD operations for the **TypeDepense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TypeDepenses
    * const typeDepenses = await prisma.typeDepense.findMany()
    * ```
    */
  get typeDepense(): Prisma.TypeDepenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.depense`: Exposes CRUD operations for the **Depense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Depenses
    * const depenses = await prisma.depense.findMany()
    * ```
    */
  get depense(): Prisma.DepenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentaire`: Exposes CRUD operations for the **Commentaire** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commentaires
    * const commentaires = await prisma.commentaire.findMany()
    * ```
    */
  get commentaire(): Prisma.CommentaireDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    User: 'User',
    Vehicule: 'Vehicule',
    TypeDepense: 'TypeDepense',
    Depense: 'Depense',
    Commentaire: 'Commentaire',
    Document: 'Document'
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
      modelProps: "user" | "vehicule" | "typeDepense" | "depense" | "commentaire" | "document"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicule: {
        payload: Prisma.$VehiculePayload<ExtArgs>
        fields: Prisma.VehiculeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiculeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiculeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          findFirst: {
            args: Prisma.VehiculeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiculeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          findMany: {
            args: Prisma.VehiculeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>[]
          }
          create: {
            args: Prisma.VehiculeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          createMany: {
            args: Prisma.VehiculeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehiculeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>[]
          }
          delete: {
            args: Prisma.VehiculeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          update: {
            args: Prisma.VehiculeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          deleteMany: {
            args: Prisma.VehiculeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiculeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehiculeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>[]
          }
          upsert: {
            args: Prisma.VehiculeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          aggregate: {
            args: Prisma.VehiculeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicule>
          }
          groupBy: {
            args: Prisma.VehiculeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiculeCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculeCountAggregateOutputType> | number
          }
        }
      }
      TypeDepense: {
        payload: Prisma.$TypeDepensePayload<ExtArgs>
        fields: Prisma.TypeDepenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeDepenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeDepensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeDepenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeDepensePayload>
          }
          findFirst: {
            args: Prisma.TypeDepenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeDepensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeDepenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeDepensePayload>
          }
          findMany: {
            args: Prisma.TypeDepenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeDepensePayload>[]
          }
          create: {
            args: Prisma.TypeDepenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeDepensePayload>
          }
          createMany: {
            args: Prisma.TypeDepenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeDepenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeDepensePayload>[]
          }
          delete: {
            args: Prisma.TypeDepenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeDepensePayload>
          }
          update: {
            args: Prisma.TypeDepenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeDepensePayload>
          }
          deleteMany: {
            args: Prisma.TypeDepenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeDepenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypeDepenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeDepensePayload>[]
          }
          upsert: {
            args: Prisma.TypeDepenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeDepensePayload>
          }
          aggregate: {
            args: Prisma.TypeDepenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypeDepense>
          }
          groupBy: {
            args: Prisma.TypeDepenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeDepenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeDepenseCountArgs<ExtArgs>
            result: $Utils.Optional<TypeDepenseCountAggregateOutputType> | number
          }
        }
      }
      Depense: {
        payload: Prisma.$DepensePayload<ExtArgs>
        fields: Prisma.DepenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>
          }
          findFirst: {
            args: Prisma.DepenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>
          }
          findMany: {
            args: Prisma.DepenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>[]
          }
          create: {
            args: Prisma.DepenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>
          }
          createMany: {
            args: Prisma.DepenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>[]
          }
          delete: {
            args: Prisma.DepenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>
          }
          update: {
            args: Prisma.DepenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>
          }
          deleteMany: {
            args: Prisma.DepenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>[]
          }
          upsert: {
            args: Prisma.DepenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepensePayload>
          }
          aggregate: {
            args: Prisma.DepenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepense>
          }
          groupBy: {
            args: Prisma.DepenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepenseCountArgs<ExtArgs>
            result: $Utils.Optional<DepenseCountAggregateOutputType> | number
          }
        }
      }
      Commentaire: {
        payload: Prisma.$CommentairePayload<ExtArgs>
        fields: Prisma.CommentaireFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentaireFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentaireFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findFirst: {
            args: Prisma.CommentaireFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentaireFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          findMany: {
            args: Prisma.CommentaireFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          create: {
            args: Prisma.CommentaireCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          createMany: {
            args: Prisma.CommentaireCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentaireCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          delete: {
            args: Prisma.CommentaireDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          update: {
            args: Prisma.CommentaireUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          deleteMany: {
            args: Prisma.CommentaireDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentaireUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentaireUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>[]
          }
          upsert: {
            args: Prisma.CommentaireUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentairePayload>
          }
          aggregate: {
            args: Prisma.CommentaireAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentaire>
          }
          groupBy: {
            args: Prisma.CommentaireGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentaireGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentaireCountArgs<ExtArgs>
            result: $Utils.Optional<CommentaireCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    vehicule?: VehiculeOmit
    typeDepense?: TypeDepenseOmit
    depense?: DepenseOmit
    commentaire?: CommentaireOmit
    document?: DocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    demandesSoumises: number
    validationsControleurFinancier: number
    validationsControleurGestion: number
    validationsResponsableAdmin: number
    validationsAdminGeneral: number
    validationsDG: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandesSoumises?: boolean | UserCountOutputTypeCountDemandesSoumisesArgs
    validationsControleurFinancier?: boolean | UserCountOutputTypeCountValidationsControleurFinancierArgs
    validationsControleurGestion?: boolean | UserCountOutputTypeCountValidationsControleurGestionArgs
    validationsResponsableAdmin?: boolean | UserCountOutputTypeCountValidationsResponsableAdminArgs
    validationsAdminGeneral?: boolean | UserCountOutputTypeCountValidationsAdminGeneralArgs
    validationsDG?: boolean | UserCountOutputTypeCountValidationsDGArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDemandesSoumisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountValidationsControleurFinancierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountValidationsControleurGestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountValidationsResponsableAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountValidationsAdminGeneralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountValidationsDGArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepenseWhereInput
  }


  /**
   * Count Type VehiculeCountOutputType
   */

  export type VehiculeCountOutputType = {
    depenses: number
  }

  export type VehiculeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depenses?: boolean | VehiculeCountOutputTypeCountDepensesArgs
  }

  // Custom InputTypes
  /**
   * VehiculeCountOutputType without action
   */
  export type VehiculeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculeCountOutputType
     */
    select?: VehiculeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiculeCountOutputType without action
   */
  export type VehiculeCountOutputTypeCountDepensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepenseWhereInput
  }


  /**
   * Count Type TypeDepenseCountOutputType
   */

  export type TypeDepenseCountOutputType = {
    depenses: number
  }

  export type TypeDepenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depenses?: boolean | TypeDepenseCountOutputTypeCountDepensesArgs
  }

  // Custom InputTypes
  /**
   * TypeDepenseCountOutputType without action
   */
  export type TypeDepenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepenseCountOutputType
     */
    select?: TypeDepenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeDepenseCountOutputType without action
   */
  export type TypeDepenseCountOutputTypeCountDepensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepenseWhereInput
  }


  /**
   * Count Type DepenseCountOutputType
   */

  export type DepenseCountOutputType = {
    documents: number
    commentaires: number
  }

  export type DepenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DepenseCountOutputTypeCountDocumentsArgs
    commentaires?: boolean | DepenseCountOutputTypeCountCommentairesArgs
  }

  // Custom InputTypes
  /**
   * DepenseCountOutputType without action
   */
  export type DepenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepenseCountOutputType
     */
    select?: DepenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepenseCountOutputType without action
   */
  export type DepenseCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * DepenseCountOutputType without action
   */
  export type DepenseCountOutputTypeCountCommentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    nom: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nom: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nom?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    demandesSoumises?: boolean | User$demandesSoumisesArgs<ExtArgs>
    validationsControleurFinancier?: boolean | User$validationsControleurFinancierArgs<ExtArgs>
    validationsControleurGestion?: boolean | User$validationsControleurGestionArgs<ExtArgs>
    validationsResponsableAdmin?: boolean | User$validationsResponsableAdminArgs<ExtArgs>
    validationsAdminGeneral?: boolean | User$validationsAdminGeneralArgs<ExtArgs>
    validationsDG?: boolean | User$validationsDGArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nom?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandesSoumises?: boolean | User$demandesSoumisesArgs<ExtArgs>
    validationsControleurFinancier?: boolean | User$validationsControleurFinancierArgs<ExtArgs>
    validationsControleurGestion?: boolean | User$validationsControleurGestionArgs<ExtArgs>
    validationsResponsableAdmin?: boolean | User$validationsResponsableAdminArgs<ExtArgs>
    validationsAdminGeneral?: boolean | User$validationsAdminGeneralArgs<ExtArgs>
    validationsDG?: boolean | User$validationsDGArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      demandesSoumises: Prisma.$DepensePayload<ExtArgs>[]
      validationsControleurFinancier: Prisma.$DepensePayload<ExtArgs>[]
      validationsControleurGestion: Prisma.$DepensePayload<ExtArgs>[]
      validationsResponsableAdmin: Prisma.$DepensePayload<ExtArgs>[]
      validationsAdminGeneral: Prisma.$DepensePayload<ExtArgs>[]
      validationsDG: Prisma.$DepensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demandesSoumises<T extends User$demandesSoumisesArgs<ExtArgs> = {}>(args?: Subset<T, User$demandesSoumisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    validationsControleurFinancier<T extends User$validationsControleurFinancierArgs<ExtArgs> = {}>(args?: Subset<T, User$validationsControleurFinancierArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    validationsControleurGestion<T extends User$validationsControleurGestionArgs<ExtArgs> = {}>(args?: Subset<T, User$validationsControleurGestionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    validationsResponsableAdmin<T extends User$validationsResponsableAdminArgs<ExtArgs> = {}>(args?: Subset<T, User$validationsResponsableAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    validationsAdminGeneral<T extends User$validationsAdminGeneralArgs<ExtArgs> = {}>(args?: Subset<T, User$validationsAdminGeneralArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    validationsDG<T extends User$validationsDGArgs<ExtArgs> = {}>(args?: Subset<T, User$validationsDGArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly nom: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.demandesSoumises
   */
  export type User$demandesSoumisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    where?: DepenseWhereInput
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    cursor?: DepenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * User.validationsControleurFinancier
   */
  export type User$validationsControleurFinancierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    where?: DepenseWhereInput
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    cursor?: DepenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * User.validationsControleurGestion
   */
  export type User$validationsControleurGestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    where?: DepenseWhereInput
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    cursor?: DepenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * User.validationsResponsableAdmin
   */
  export type User$validationsResponsableAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    where?: DepenseWhereInput
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    cursor?: DepenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * User.validationsAdminGeneral
   */
  export type User$validationsAdminGeneralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    where?: DepenseWhereInput
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    cursor?: DepenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * User.validationsDG
   */
  export type User$validationsDGArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    where?: DepenseWhereInput
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    cursor?: DepenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vehicule
   */

  export type AggregateVehicule = {
    _count: VehiculeCountAggregateOutputType | null
    _avg: VehiculeAvgAggregateOutputType | null
    _sum: VehiculeSumAggregateOutputType | null
    _min: VehiculeMinAggregateOutputType | null
    _max: VehiculeMaxAggregateOutputType | null
  }

  export type VehiculeAvgAggregateOutputType = {
    id: number | null
  }

  export type VehiculeSumAggregateOutputType = {
    id: number | null
  }

  export type VehiculeMinAggregateOutputType = {
    id: number | null
    type: string | null
    immatriculation: string | null
    codeParc: string | null
    description: string | null
    statut: string | null
    createdAt: Date | null
  }

  export type VehiculeMaxAggregateOutputType = {
    id: number | null
    type: string | null
    immatriculation: string | null
    codeParc: string | null
    description: string | null
    statut: string | null
    createdAt: Date | null
  }

  export type VehiculeCountAggregateOutputType = {
    id: number
    type: number
    immatriculation: number
    codeParc: number
    description: number
    statut: number
    createdAt: number
    _all: number
  }


  export type VehiculeAvgAggregateInputType = {
    id?: true
  }

  export type VehiculeSumAggregateInputType = {
    id?: true
  }

  export type VehiculeMinAggregateInputType = {
    id?: true
    type?: true
    immatriculation?: true
    codeParc?: true
    description?: true
    statut?: true
    createdAt?: true
  }

  export type VehiculeMaxAggregateInputType = {
    id?: true
    type?: true
    immatriculation?: true
    codeParc?: true
    description?: true
    statut?: true
    createdAt?: true
  }

  export type VehiculeCountAggregateInputType = {
    id?: true
    type?: true
    immatriculation?: true
    codeParc?: true
    description?: true
    statut?: true
    createdAt?: true
    _all?: true
  }

  export type VehiculeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicule to aggregate.
     */
    where?: VehiculeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicules to fetch.
     */
    orderBy?: VehiculeOrderByWithRelationInput | VehiculeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiculeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicules
    **/
    _count?: true | VehiculeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiculeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiculeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculeMaxAggregateInputType
  }

  export type GetVehiculeAggregateType<T extends VehiculeAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicule[P]>
      : GetScalarType<T[P], AggregateVehicule[P]>
  }




  export type VehiculeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculeWhereInput
    orderBy?: VehiculeOrderByWithAggregationInput | VehiculeOrderByWithAggregationInput[]
    by: VehiculeScalarFieldEnum[] | VehiculeScalarFieldEnum
    having?: VehiculeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculeCountAggregateInputType | true
    _avg?: VehiculeAvgAggregateInputType
    _sum?: VehiculeSumAggregateInputType
    _min?: VehiculeMinAggregateInputType
    _max?: VehiculeMaxAggregateInputType
  }

  export type VehiculeGroupByOutputType = {
    id: number
    type: string
    immatriculation: string
    codeParc: string | null
    description: string | null
    statut: string | null
    createdAt: Date
    _count: VehiculeCountAggregateOutputType | null
    _avg: VehiculeAvgAggregateOutputType | null
    _sum: VehiculeSumAggregateOutputType | null
    _min: VehiculeMinAggregateOutputType | null
    _max: VehiculeMaxAggregateOutputType | null
  }

  type GetVehiculeGroupByPayload<T extends VehiculeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculeGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculeGroupByOutputType[P]>
        }
      >
    >


  export type VehiculeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    immatriculation?: boolean
    codeParc?: boolean
    description?: boolean
    statut?: boolean
    createdAt?: boolean
    depenses?: boolean | Vehicule$depensesArgs<ExtArgs>
    _count?: boolean | VehiculeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicule"]>

  export type VehiculeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    immatriculation?: boolean
    codeParc?: boolean
    description?: boolean
    statut?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vehicule"]>

  export type VehiculeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    immatriculation?: boolean
    codeParc?: boolean
    description?: boolean
    statut?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vehicule"]>

  export type VehiculeSelectScalar = {
    id?: boolean
    type?: boolean
    immatriculation?: boolean
    codeParc?: boolean
    description?: boolean
    statut?: boolean
    createdAt?: boolean
  }

  export type VehiculeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "immatriculation" | "codeParc" | "description" | "statut" | "createdAt", ExtArgs["result"]["vehicule"]>
  export type VehiculeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depenses?: boolean | Vehicule$depensesArgs<ExtArgs>
    _count?: boolean | VehiculeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehiculeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehiculeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiculePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicule"
    objects: {
      depenses: Prisma.$DepensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      immatriculation: string
      codeParc: string | null
      description: string | null
      statut: string | null
      createdAt: Date
    }, ExtArgs["result"]["vehicule"]>
    composites: {}
  }

  type VehiculeGetPayload<S extends boolean | null | undefined | VehiculeDefaultArgs> = $Result.GetResult<Prisma.$VehiculePayload, S>

  type VehiculeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiculeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculeCountAggregateInputType | true
    }

  export interface VehiculeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicule'], meta: { name: 'Vehicule' } }
    /**
     * Find zero or one Vehicule that matches the filter.
     * @param {VehiculeFindUniqueArgs} args - Arguments to find a Vehicule
     * @example
     * // Get one Vehicule
     * const vehicule = await prisma.vehicule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiculeFindUniqueArgs>(args: SelectSubset<T, VehiculeFindUniqueArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiculeFindUniqueOrThrowArgs} args - Arguments to find a Vehicule
     * @example
     * // Get one Vehicule
     * const vehicule = await prisma.vehicule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiculeFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiculeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeFindFirstArgs} args - Arguments to find a Vehicule
     * @example
     * // Get one Vehicule
     * const vehicule = await prisma.vehicule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiculeFindFirstArgs>(args?: SelectSubset<T, VehiculeFindFirstArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeFindFirstOrThrowArgs} args - Arguments to find a Vehicule
     * @example
     * // Get one Vehicule
     * const vehicule = await prisma.vehicule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiculeFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiculeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicules
     * const vehicules = await prisma.vehicule.findMany()
     * 
     * // Get first 10 Vehicules
     * const vehicules = await prisma.vehicule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiculeWithIdOnly = await prisma.vehicule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehiculeFindManyArgs>(args?: SelectSubset<T, VehiculeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicule.
     * @param {VehiculeCreateArgs} args - Arguments to create a Vehicule.
     * @example
     * // Create one Vehicule
     * const Vehicule = await prisma.vehicule.create({
     *   data: {
     *     // ... data to create a Vehicule
     *   }
     * })
     * 
     */
    create<T extends VehiculeCreateArgs>(args: SelectSubset<T, VehiculeCreateArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicules.
     * @param {VehiculeCreateManyArgs} args - Arguments to create many Vehicules.
     * @example
     * // Create many Vehicules
     * const vehicule = await prisma.vehicule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiculeCreateManyArgs>(args?: SelectSubset<T, VehiculeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicules and returns the data saved in the database.
     * @param {VehiculeCreateManyAndReturnArgs} args - Arguments to create many Vehicules.
     * @example
     * // Create many Vehicules
     * const vehicule = await prisma.vehicule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicules and only return the `id`
     * const vehiculeWithIdOnly = await prisma.vehicule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehiculeCreateManyAndReturnArgs>(args?: SelectSubset<T, VehiculeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicule.
     * @param {VehiculeDeleteArgs} args - Arguments to delete one Vehicule.
     * @example
     * // Delete one Vehicule
     * const Vehicule = await prisma.vehicule.delete({
     *   where: {
     *     // ... filter to delete one Vehicule
     *   }
     * })
     * 
     */
    delete<T extends VehiculeDeleteArgs>(args: SelectSubset<T, VehiculeDeleteArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicule.
     * @param {VehiculeUpdateArgs} args - Arguments to update one Vehicule.
     * @example
     * // Update one Vehicule
     * const vehicule = await prisma.vehicule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiculeUpdateArgs>(args: SelectSubset<T, VehiculeUpdateArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicules.
     * @param {VehiculeDeleteManyArgs} args - Arguments to filter Vehicules to delete.
     * @example
     * // Delete a few Vehicules
     * const { count } = await prisma.vehicule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiculeDeleteManyArgs>(args?: SelectSubset<T, VehiculeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicules
     * const vehicule = await prisma.vehicule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiculeUpdateManyArgs>(args: SelectSubset<T, VehiculeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicules and returns the data updated in the database.
     * @param {VehiculeUpdateManyAndReturnArgs} args - Arguments to update many Vehicules.
     * @example
     * // Update many Vehicules
     * const vehicule = await prisma.vehicule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicules and only return the `id`
     * const vehiculeWithIdOnly = await prisma.vehicule.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehiculeUpdateManyAndReturnArgs>(args: SelectSubset<T, VehiculeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicule.
     * @param {VehiculeUpsertArgs} args - Arguments to update or create a Vehicule.
     * @example
     * // Update or create a Vehicule
     * const vehicule = await prisma.vehicule.upsert({
     *   create: {
     *     // ... data to create a Vehicule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicule we want to update
     *   }
     * })
     */
    upsert<T extends VehiculeUpsertArgs>(args: SelectSubset<T, VehiculeUpsertArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeCountArgs} args - Arguments to filter Vehicules to count.
     * @example
     * // Count the number of Vehicules
     * const count = await prisma.vehicule.count({
     *   where: {
     *     // ... the filter for the Vehicules we want to count
     *   }
     * })
    **/
    count<T extends VehiculeCountArgs>(
      args?: Subset<T, VehiculeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehiculeAggregateArgs>(args: Subset<T, VehiculeAggregateArgs>): Prisma.PrismaPromise<GetVehiculeAggregateType<T>>

    /**
     * Group by Vehicule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeGroupByArgs} args - Group by arguments.
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
      T extends VehiculeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiculeGroupByArgs['orderBy'] }
        : { orderBy?: VehiculeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehiculeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicule model
   */
  readonly fields: VehiculeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiculeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    depenses<T extends Vehicule$depensesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicule$depensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicule model
   */
  interface VehiculeFieldRefs {
    readonly id: FieldRef<"Vehicule", 'Int'>
    readonly type: FieldRef<"Vehicule", 'String'>
    readonly immatriculation: FieldRef<"Vehicule", 'String'>
    readonly codeParc: FieldRef<"Vehicule", 'String'>
    readonly description: FieldRef<"Vehicule", 'String'>
    readonly statut: FieldRef<"Vehicule", 'String'>
    readonly createdAt: FieldRef<"Vehicule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicule findUnique
   */
  export type VehiculeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicule to fetch.
     */
    where: VehiculeWhereUniqueInput
  }

  /**
   * Vehicule findUniqueOrThrow
   */
  export type VehiculeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicule to fetch.
     */
    where: VehiculeWhereUniqueInput
  }

  /**
   * Vehicule findFirst
   */
  export type VehiculeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicule to fetch.
     */
    where?: VehiculeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicules to fetch.
     */
    orderBy?: VehiculeOrderByWithRelationInput | VehiculeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicules.
     */
    cursor?: VehiculeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicules.
     */
    distinct?: VehiculeScalarFieldEnum | VehiculeScalarFieldEnum[]
  }

  /**
   * Vehicule findFirstOrThrow
   */
  export type VehiculeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicule to fetch.
     */
    where?: VehiculeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicules to fetch.
     */
    orderBy?: VehiculeOrderByWithRelationInput | VehiculeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicules.
     */
    cursor?: VehiculeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicules.
     */
    distinct?: VehiculeScalarFieldEnum | VehiculeScalarFieldEnum[]
  }

  /**
   * Vehicule findMany
   */
  export type VehiculeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicules to fetch.
     */
    where?: VehiculeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicules to fetch.
     */
    orderBy?: VehiculeOrderByWithRelationInput | VehiculeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicules.
     */
    cursor?: VehiculeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicules.
     */
    skip?: number
    distinct?: VehiculeScalarFieldEnum | VehiculeScalarFieldEnum[]
  }

  /**
   * Vehicule create
   */
  export type VehiculeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicule.
     */
    data: XOR<VehiculeCreateInput, VehiculeUncheckedCreateInput>
  }

  /**
   * Vehicule createMany
   */
  export type VehiculeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicules.
     */
    data: VehiculeCreateManyInput | VehiculeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicule createManyAndReturn
   */
  export type VehiculeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicules.
     */
    data: VehiculeCreateManyInput | VehiculeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicule update
   */
  export type VehiculeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicule.
     */
    data: XOR<VehiculeUpdateInput, VehiculeUncheckedUpdateInput>
    /**
     * Choose, which Vehicule to update.
     */
    where: VehiculeWhereUniqueInput
  }

  /**
   * Vehicule updateMany
   */
  export type VehiculeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicules.
     */
    data: XOR<VehiculeUpdateManyMutationInput, VehiculeUncheckedUpdateManyInput>
    /**
     * Filter which Vehicules to update
     */
    where?: VehiculeWhereInput
    /**
     * Limit how many Vehicules to update.
     */
    limit?: number
  }

  /**
   * Vehicule updateManyAndReturn
   */
  export type VehiculeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * The data used to update Vehicules.
     */
    data: XOR<VehiculeUpdateManyMutationInput, VehiculeUncheckedUpdateManyInput>
    /**
     * Filter which Vehicules to update
     */
    where?: VehiculeWhereInput
    /**
     * Limit how many Vehicules to update.
     */
    limit?: number
  }

  /**
   * Vehicule upsert
   */
  export type VehiculeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicule to update in case it exists.
     */
    where: VehiculeWhereUniqueInput
    /**
     * In case the Vehicule found by the `where` argument doesn't exist, create a new Vehicule with this data.
     */
    create: XOR<VehiculeCreateInput, VehiculeUncheckedCreateInput>
    /**
     * In case the Vehicule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiculeUpdateInput, VehiculeUncheckedUpdateInput>
  }

  /**
   * Vehicule delete
   */
  export type VehiculeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter which Vehicule to delete.
     */
    where: VehiculeWhereUniqueInput
  }

  /**
   * Vehicule deleteMany
   */
  export type VehiculeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicules to delete
     */
    where?: VehiculeWhereInput
    /**
     * Limit how many Vehicules to delete.
     */
    limit?: number
  }

  /**
   * Vehicule.depenses
   */
  export type Vehicule$depensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    where?: DepenseWhereInput
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    cursor?: DepenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * Vehicule without action
   */
  export type VehiculeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
  }


  /**
   * Model TypeDepense
   */

  export type AggregateTypeDepense = {
    _count: TypeDepenseCountAggregateOutputType | null
    _avg: TypeDepenseAvgAggregateOutputType | null
    _sum: TypeDepenseSumAggregateOutputType | null
    _min: TypeDepenseMinAggregateOutputType | null
    _max: TypeDepenseMaxAggregateOutputType | null
  }

  export type TypeDepenseAvgAggregateOutputType = {
    id: number | null
  }

  export type TypeDepenseSumAggregateOutputType = {
    id: number | null
  }

  export type TypeDepenseMinAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
    createdAt: Date | null
  }

  export type TypeDepenseMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    description: string | null
    createdAt: Date | null
  }

  export type TypeDepenseCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    createdAt: number
    _all: number
  }


  export type TypeDepenseAvgAggregateInputType = {
    id?: true
  }

  export type TypeDepenseSumAggregateInputType = {
    id?: true
  }

  export type TypeDepenseMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    createdAt?: true
  }

  export type TypeDepenseMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    createdAt?: true
  }

  export type TypeDepenseCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type TypeDepenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeDepense to aggregate.
     */
    where?: TypeDepenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeDepenses to fetch.
     */
    orderBy?: TypeDepenseOrderByWithRelationInput | TypeDepenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeDepenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeDepenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeDepenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TypeDepenses
    **/
    _count?: true | TypeDepenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeDepenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeDepenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeDepenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeDepenseMaxAggregateInputType
  }

  export type GetTypeDepenseAggregateType<T extends TypeDepenseAggregateArgs> = {
        [P in keyof T & keyof AggregateTypeDepense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypeDepense[P]>
      : GetScalarType<T[P], AggregateTypeDepense[P]>
  }




  export type TypeDepenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeDepenseWhereInput
    orderBy?: TypeDepenseOrderByWithAggregationInput | TypeDepenseOrderByWithAggregationInput[]
    by: TypeDepenseScalarFieldEnum[] | TypeDepenseScalarFieldEnum
    having?: TypeDepenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeDepenseCountAggregateInputType | true
    _avg?: TypeDepenseAvgAggregateInputType
    _sum?: TypeDepenseSumAggregateInputType
    _min?: TypeDepenseMinAggregateInputType
    _max?: TypeDepenseMaxAggregateInputType
  }

  export type TypeDepenseGroupByOutputType = {
    id: number
    nom: string
    description: string | null
    createdAt: Date
    _count: TypeDepenseCountAggregateOutputType | null
    _avg: TypeDepenseAvgAggregateOutputType | null
    _sum: TypeDepenseSumAggregateOutputType | null
    _min: TypeDepenseMinAggregateOutputType | null
    _max: TypeDepenseMaxAggregateOutputType | null
  }

  type GetTypeDepenseGroupByPayload<T extends TypeDepenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeDepenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeDepenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeDepenseGroupByOutputType[P]>
            : GetScalarType<T[P], TypeDepenseGroupByOutputType[P]>
        }
      >
    >


  export type TypeDepenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    createdAt?: boolean
    depenses?: boolean | TypeDepense$depensesArgs<ExtArgs>
    _count?: boolean | TypeDepenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeDepense"]>

  export type TypeDepenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["typeDepense"]>

  export type TypeDepenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["typeDepense"]>

  export type TypeDepenseSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type TypeDepenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "createdAt", ExtArgs["result"]["typeDepense"]>
  export type TypeDepenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depenses?: boolean | TypeDepense$depensesArgs<ExtArgs>
    _count?: boolean | TypeDepenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeDepenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TypeDepenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypeDepensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TypeDepense"
    objects: {
      depenses: Prisma.$DepensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["typeDepense"]>
    composites: {}
  }

  type TypeDepenseGetPayload<S extends boolean | null | undefined | TypeDepenseDefaultArgs> = $Result.GetResult<Prisma.$TypeDepensePayload, S>

  type TypeDepenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeDepenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeDepenseCountAggregateInputType | true
    }

  export interface TypeDepenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TypeDepense'], meta: { name: 'TypeDepense' } }
    /**
     * Find zero or one TypeDepense that matches the filter.
     * @param {TypeDepenseFindUniqueArgs} args - Arguments to find a TypeDepense
     * @example
     * // Get one TypeDepense
     * const typeDepense = await prisma.typeDepense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeDepenseFindUniqueArgs>(args: SelectSubset<T, TypeDepenseFindUniqueArgs<ExtArgs>>): Prisma__TypeDepenseClient<$Result.GetResult<Prisma.$TypeDepensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TypeDepense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeDepenseFindUniqueOrThrowArgs} args - Arguments to find a TypeDepense
     * @example
     * // Get one TypeDepense
     * const typeDepense = await prisma.typeDepense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeDepenseFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeDepenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeDepenseClient<$Result.GetResult<Prisma.$TypeDepensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypeDepense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeDepenseFindFirstArgs} args - Arguments to find a TypeDepense
     * @example
     * // Get one TypeDepense
     * const typeDepense = await prisma.typeDepense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeDepenseFindFirstArgs>(args?: SelectSubset<T, TypeDepenseFindFirstArgs<ExtArgs>>): Prisma__TypeDepenseClient<$Result.GetResult<Prisma.$TypeDepensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypeDepense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeDepenseFindFirstOrThrowArgs} args - Arguments to find a TypeDepense
     * @example
     * // Get one TypeDepense
     * const typeDepense = await prisma.typeDepense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeDepenseFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeDepenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeDepenseClient<$Result.GetResult<Prisma.$TypeDepensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TypeDepenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeDepenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeDepenses
     * const typeDepenses = await prisma.typeDepense.findMany()
     * 
     * // Get first 10 TypeDepenses
     * const typeDepenses = await prisma.typeDepense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeDepenseWithIdOnly = await prisma.typeDepense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypeDepenseFindManyArgs>(args?: SelectSubset<T, TypeDepenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeDepensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TypeDepense.
     * @param {TypeDepenseCreateArgs} args - Arguments to create a TypeDepense.
     * @example
     * // Create one TypeDepense
     * const TypeDepense = await prisma.typeDepense.create({
     *   data: {
     *     // ... data to create a TypeDepense
     *   }
     * })
     * 
     */
    create<T extends TypeDepenseCreateArgs>(args: SelectSubset<T, TypeDepenseCreateArgs<ExtArgs>>): Prisma__TypeDepenseClient<$Result.GetResult<Prisma.$TypeDepensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TypeDepenses.
     * @param {TypeDepenseCreateManyArgs} args - Arguments to create many TypeDepenses.
     * @example
     * // Create many TypeDepenses
     * const typeDepense = await prisma.typeDepense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeDepenseCreateManyArgs>(args?: SelectSubset<T, TypeDepenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TypeDepenses and returns the data saved in the database.
     * @param {TypeDepenseCreateManyAndReturnArgs} args - Arguments to create many TypeDepenses.
     * @example
     * // Create many TypeDepenses
     * const typeDepense = await prisma.typeDepense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TypeDepenses and only return the `id`
     * const typeDepenseWithIdOnly = await prisma.typeDepense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeDepenseCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeDepenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeDepensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TypeDepense.
     * @param {TypeDepenseDeleteArgs} args - Arguments to delete one TypeDepense.
     * @example
     * // Delete one TypeDepense
     * const TypeDepense = await prisma.typeDepense.delete({
     *   where: {
     *     // ... filter to delete one TypeDepense
     *   }
     * })
     * 
     */
    delete<T extends TypeDepenseDeleteArgs>(args: SelectSubset<T, TypeDepenseDeleteArgs<ExtArgs>>): Prisma__TypeDepenseClient<$Result.GetResult<Prisma.$TypeDepensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TypeDepense.
     * @param {TypeDepenseUpdateArgs} args - Arguments to update one TypeDepense.
     * @example
     * // Update one TypeDepense
     * const typeDepense = await prisma.typeDepense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeDepenseUpdateArgs>(args: SelectSubset<T, TypeDepenseUpdateArgs<ExtArgs>>): Prisma__TypeDepenseClient<$Result.GetResult<Prisma.$TypeDepensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TypeDepenses.
     * @param {TypeDepenseDeleteManyArgs} args - Arguments to filter TypeDepenses to delete.
     * @example
     * // Delete a few TypeDepenses
     * const { count } = await prisma.typeDepense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeDepenseDeleteManyArgs>(args?: SelectSubset<T, TypeDepenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeDepenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeDepenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeDepenses
     * const typeDepense = await prisma.typeDepense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeDepenseUpdateManyArgs>(args: SelectSubset<T, TypeDepenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeDepenses and returns the data updated in the database.
     * @param {TypeDepenseUpdateManyAndReturnArgs} args - Arguments to update many TypeDepenses.
     * @example
     * // Update many TypeDepenses
     * const typeDepense = await prisma.typeDepense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TypeDepenses and only return the `id`
     * const typeDepenseWithIdOnly = await prisma.typeDepense.updateManyAndReturn({
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
    updateManyAndReturn<T extends TypeDepenseUpdateManyAndReturnArgs>(args: SelectSubset<T, TypeDepenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeDepensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TypeDepense.
     * @param {TypeDepenseUpsertArgs} args - Arguments to update or create a TypeDepense.
     * @example
     * // Update or create a TypeDepense
     * const typeDepense = await prisma.typeDepense.upsert({
     *   create: {
     *     // ... data to create a TypeDepense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeDepense we want to update
     *   }
     * })
     */
    upsert<T extends TypeDepenseUpsertArgs>(args: SelectSubset<T, TypeDepenseUpsertArgs<ExtArgs>>): Prisma__TypeDepenseClient<$Result.GetResult<Prisma.$TypeDepensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TypeDepenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeDepenseCountArgs} args - Arguments to filter TypeDepenses to count.
     * @example
     * // Count the number of TypeDepenses
     * const count = await prisma.typeDepense.count({
     *   where: {
     *     // ... the filter for the TypeDepenses we want to count
     *   }
     * })
    **/
    count<T extends TypeDepenseCountArgs>(
      args?: Subset<T, TypeDepenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeDepenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TypeDepense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeDepenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeDepenseAggregateArgs>(args: Subset<T, TypeDepenseAggregateArgs>): Prisma.PrismaPromise<GetTypeDepenseAggregateType<T>>

    /**
     * Group by TypeDepense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeDepenseGroupByArgs} args - Group by arguments.
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
      T extends TypeDepenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeDepenseGroupByArgs['orderBy'] }
        : { orderBy?: TypeDepenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TypeDepenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeDepenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TypeDepense model
   */
  readonly fields: TypeDepenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TypeDepense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeDepenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    depenses<T extends TypeDepense$depensesArgs<ExtArgs> = {}>(args?: Subset<T, TypeDepense$depensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TypeDepense model
   */
  interface TypeDepenseFieldRefs {
    readonly id: FieldRef<"TypeDepense", 'Int'>
    readonly nom: FieldRef<"TypeDepense", 'String'>
    readonly description: FieldRef<"TypeDepense", 'String'>
    readonly createdAt: FieldRef<"TypeDepense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TypeDepense findUnique
   */
  export type TypeDepenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepense
     */
    select?: TypeDepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeDepense
     */
    omit?: TypeDepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeDepenseInclude<ExtArgs> | null
    /**
     * Filter, which TypeDepense to fetch.
     */
    where: TypeDepenseWhereUniqueInput
  }

  /**
   * TypeDepense findUniqueOrThrow
   */
  export type TypeDepenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepense
     */
    select?: TypeDepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeDepense
     */
    omit?: TypeDepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeDepenseInclude<ExtArgs> | null
    /**
     * Filter, which TypeDepense to fetch.
     */
    where: TypeDepenseWhereUniqueInput
  }

  /**
   * TypeDepense findFirst
   */
  export type TypeDepenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepense
     */
    select?: TypeDepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeDepense
     */
    omit?: TypeDepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeDepenseInclude<ExtArgs> | null
    /**
     * Filter, which TypeDepense to fetch.
     */
    where?: TypeDepenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeDepenses to fetch.
     */
    orderBy?: TypeDepenseOrderByWithRelationInput | TypeDepenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeDepenses.
     */
    cursor?: TypeDepenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeDepenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeDepenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeDepenses.
     */
    distinct?: TypeDepenseScalarFieldEnum | TypeDepenseScalarFieldEnum[]
  }

  /**
   * TypeDepense findFirstOrThrow
   */
  export type TypeDepenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepense
     */
    select?: TypeDepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeDepense
     */
    omit?: TypeDepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeDepenseInclude<ExtArgs> | null
    /**
     * Filter, which TypeDepense to fetch.
     */
    where?: TypeDepenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeDepenses to fetch.
     */
    orderBy?: TypeDepenseOrderByWithRelationInput | TypeDepenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeDepenses.
     */
    cursor?: TypeDepenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeDepenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeDepenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeDepenses.
     */
    distinct?: TypeDepenseScalarFieldEnum | TypeDepenseScalarFieldEnum[]
  }

  /**
   * TypeDepense findMany
   */
  export type TypeDepenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepense
     */
    select?: TypeDepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeDepense
     */
    omit?: TypeDepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeDepenseInclude<ExtArgs> | null
    /**
     * Filter, which TypeDepenses to fetch.
     */
    where?: TypeDepenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeDepenses to fetch.
     */
    orderBy?: TypeDepenseOrderByWithRelationInput | TypeDepenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TypeDepenses.
     */
    cursor?: TypeDepenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeDepenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeDepenses.
     */
    skip?: number
    distinct?: TypeDepenseScalarFieldEnum | TypeDepenseScalarFieldEnum[]
  }

  /**
   * TypeDepense create
   */
  export type TypeDepenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepense
     */
    select?: TypeDepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeDepense
     */
    omit?: TypeDepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeDepenseInclude<ExtArgs> | null
    /**
     * The data needed to create a TypeDepense.
     */
    data: XOR<TypeDepenseCreateInput, TypeDepenseUncheckedCreateInput>
  }

  /**
   * TypeDepense createMany
   */
  export type TypeDepenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeDepenses.
     */
    data: TypeDepenseCreateManyInput | TypeDepenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeDepense createManyAndReturn
   */
  export type TypeDepenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepense
     */
    select?: TypeDepenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypeDepense
     */
    omit?: TypeDepenseOmit<ExtArgs> | null
    /**
     * The data used to create many TypeDepenses.
     */
    data: TypeDepenseCreateManyInput | TypeDepenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeDepense update
   */
  export type TypeDepenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepense
     */
    select?: TypeDepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeDepense
     */
    omit?: TypeDepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeDepenseInclude<ExtArgs> | null
    /**
     * The data needed to update a TypeDepense.
     */
    data: XOR<TypeDepenseUpdateInput, TypeDepenseUncheckedUpdateInput>
    /**
     * Choose, which TypeDepense to update.
     */
    where: TypeDepenseWhereUniqueInput
  }

  /**
   * TypeDepense updateMany
   */
  export type TypeDepenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeDepenses.
     */
    data: XOR<TypeDepenseUpdateManyMutationInput, TypeDepenseUncheckedUpdateManyInput>
    /**
     * Filter which TypeDepenses to update
     */
    where?: TypeDepenseWhereInput
    /**
     * Limit how many TypeDepenses to update.
     */
    limit?: number
  }

  /**
   * TypeDepense updateManyAndReturn
   */
  export type TypeDepenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepense
     */
    select?: TypeDepenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypeDepense
     */
    omit?: TypeDepenseOmit<ExtArgs> | null
    /**
     * The data used to update TypeDepenses.
     */
    data: XOR<TypeDepenseUpdateManyMutationInput, TypeDepenseUncheckedUpdateManyInput>
    /**
     * Filter which TypeDepenses to update
     */
    where?: TypeDepenseWhereInput
    /**
     * Limit how many TypeDepenses to update.
     */
    limit?: number
  }

  /**
   * TypeDepense upsert
   */
  export type TypeDepenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepense
     */
    select?: TypeDepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeDepense
     */
    omit?: TypeDepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeDepenseInclude<ExtArgs> | null
    /**
     * The filter to search for the TypeDepense to update in case it exists.
     */
    where: TypeDepenseWhereUniqueInput
    /**
     * In case the TypeDepense found by the `where` argument doesn't exist, create a new TypeDepense with this data.
     */
    create: XOR<TypeDepenseCreateInput, TypeDepenseUncheckedCreateInput>
    /**
     * In case the TypeDepense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeDepenseUpdateInput, TypeDepenseUncheckedUpdateInput>
  }

  /**
   * TypeDepense delete
   */
  export type TypeDepenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepense
     */
    select?: TypeDepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeDepense
     */
    omit?: TypeDepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeDepenseInclude<ExtArgs> | null
    /**
     * Filter which TypeDepense to delete.
     */
    where: TypeDepenseWhereUniqueInput
  }

  /**
   * TypeDepense deleteMany
   */
  export type TypeDepenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeDepenses to delete
     */
    where?: TypeDepenseWhereInput
    /**
     * Limit how many TypeDepenses to delete.
     */
    limit?: number
  }

  /**
   * TypeDepense.depenses
   */
  export type TypeDepense$depensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    where?: DepenseWhereInput
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    cursor?: DepenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * TypeDepense without action
   */
  export type TypeDepenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeDepense
     */
    select?: TypeDepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeDepense
     */
    omit?: TypeDepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeDepenseInclude<ExtArgs> | null
  }


  /**
   * Model Depense
   */

  export type AggregateDepense = {
    _count: DepenseCountAggregateOutputType | null
    _avg: DepenseAvgAggregateOutputType | null
    _sum: DepenseSumAggregateOutputType | null
    _min: DepenseMinAggregateOutputType | null
    _max: DepenseMaxAggregateOutputType | null
  }

  export type DepenseAvgAggregateOutputType = {
    id: number | null
    typeDepenseId: number | null
    quantite: number | null
    montant: number | null
    vehiculeId: number | null
    soumisParId: number | null
    valideParControleurFinancierId: number | null
    valideParControleurGestionId: number | null
    valideParResponsableAdminId: number | null
    valideParAdminGeneralId: number | null
    valideParDGId: number | null
  }

  export type DepenseSumAggregateOutputType = {
    id: number | null
    typeDepenseId: number | null
    quantite: number | null
    montant: number | null
    vehiculeId: number | null
    soumisParId: number | null
    valideParControleurFinancierId: number | null
    valideParControleurGestionId: number | null
    valideParResponsableAdminId: number | null
    valideParAdminGeneralId: number | null
    valideParDGId: number | null
  }

  export type DepenseMinAggregateOutputType = {
    id: number | null
    dateIntervention: Date | null
    typeVehicule: string | null
    codeParc: string | null
    typeDepenseId: number | null
    libelle: string | null
    quantite: number | null
    montant: number | null
    statut: $Enums.StatutDepense | null
    dateCreation: Date | null
    commentaireControleurFinancier: string | null
    commentaireControleurGestion: string | null
    commentaireResponsableAdmin: string | null
    commentaireAdminGeneral: string | null
    commentaireDG: string | null
    commentaireLogisticien: string | null
    dateReport: Date | null
    vehiculeId: number | null
    soumisParId: number | null
    valideParControleurFinancierId: number | null
    valideParControleurGestionId: number | null
    valideParResponsableAdminId: number | null
    valideParAdminGeneralId: number | null
    valideParDGId: number | null
  }

  export type DepenseMaxAggregateOutputType = {
    id: number | null
    dateIntervention: Date | null
    typeVehicule: string | null
    codeParc: string | null
    typeDepenseId: number | null
    libelle: string | null
    quantite: number | null
    montant: number | null
    statut: $Enums.StatutDepense | null
    dateCreation: Date | null
    commentaireControleurFinancier: string | null
    commentaireControleurGestion: string | null
    commentaireResponsableAdmin: string | null
    commentaireAdminGeneral: string | null
    commentaireDG: string | null
    commentaireLogisticien: string | null
    dateReport: Date | null
    vehiculeId: number | null
    soumisParId: number | null
    valideParControleurFinancierId: number | null
    valideParControleurGestionId: number | null
    valideParResponsableAdminId: number | null
    valideParAdminGeneralId: number | null
    valideParDGId: number | null
  }

  export type DepenseCountAggregateOutputType = {
    id: number
    dateIntervention: number
    typeVehicule: number
    codeParc: number
    typeDepenseId: number
    libelle: number
    quantite: number
    montant: number
    statut: number
    dateCreation: number
    commentaireControleurFinancier: number
    commentaireControleurGestion: number
    commentaireResponsableAdmin: number
    commentaireAdminGeneral: number
    commentaireDG: number
    commentaireLogisticien: number
    dateReport: number
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId: number
    valideParControleurGestionId: number
    valideParResponsableAdminId: number
    valideParAdminGeneralId: number
    valideParDGId: number
    _all: number
  }


  export type DepenseAvgAggregateInputType = {
    id?: true
    typeDepenseId?: true
    quantite?: true
    montant?: true
    vehiculeId?: true
    soumisParId?: true
    valideParControleurFinancierId?: true
    valideParControleurGestionId?: true
    valideParResponsableAdminId?: true
    valideParAdminGeneralId?: true
    valideParDGId?: true
  }

  export type DepenseSumAggregateInputType = {
    id?: true
    typeDepenseId?: true
    quantite?: true
    montant?: true
    vehiculeId?: true
    soumisParId?: true
    valideParControleurFinancierId?: true
    valideParControleurGestionId?: true
    valideParResponsableAdminId?: true
    valideParAdminGeneralId?: true
    valideParDGId?: true
  }

  export type DepenseMinAggregateInputType = {
    id?: true
    dateIntervention?: true
    typeVehicule?: true
    codeParc?: true
    typeDepenseId?: true
    libelle?: true
    quantite?: true
    montant?: true
    statut?: true
    dateCreation?: true
    commentaireControleurFinancier?: true
    commentaireControleurGestion?: true
    commentaireResponsableAdmin?: true
    commentaireAdminGeneral?: true
    commentaireDG?: true
    commentaireLogisticien?: true
    dateReport?: true
    vehiculeId?: true
    soumisParId?: true
    valideParControleurFinancierId?: true
    valideParControleurGestionId?: true
    valideParResponsableAdminId?: true
    valideParAdminGeneralId?: true
    valideParDGId?: true
  }

  export type DepenseMaxAggregateInputType = {
    id?: true
    dateIntervention?: true
    typeVehicule?: true
    codeParc?: true
    typeDepenseId?: true
    libelle?: true
    quantite?: true
    montant?: true
    statut?: true
    dateCreation?: true
    commentaireControleurFinancier?: true
    commentaireControleurGestion?: true
    commentaireResponsableAdmin?: true
    commentaireAdminGeneral?: true
    commentaireDG?: true
    commentaireLogisticien?: true
    dateReport?: true
    vehiculeId?: true
    soumisParId?: true
    valideParControleurFinancierId?: true
    valideParControleurGestionId?: true
    valideParResponsableAdminId?: true
    valideParAdminGeneralId?: true
    valideParDGId?: true
  }

  export type DepenseCountAggregateInputType = {
    id?: true
    dateIntervention?: true
    typeVehicule?: true
    codeParc?: true
    typeDepenseId?: true
    libelle?: true
    quantite?: true
    montant?: true
    statut?: true
    dateCreation?: true
    commentaireControleurFinancier?: true
    commentaireControleurGestion?: true
    commentaireResponsableAdmin?: true
    commentaireAdminGeneral?: true
    commentaireDG?: true
    commentaireLogisticien?: true
    dateReport?: true
    vehiculeId?: true
    soumisParId?: true
    valideParControleurFinancierId?: true
    valideParControleurGestionId?: true
    valideParResponsableAdminId?: true
    valideParAdminGeneralId?: true
    valideParDGId?: true
    _all?: true
  }

  export type DepenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Depense to aggregate.
     */
    where?: DepenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depenses to fetch.
     */
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Depenses
    **/
    _count?: true | DepenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepenseMaxAggregateInputType
  }

  export type GetDepenseAggregateType<T extends DepenseAggregateArgs> = {
        [P in keyof T & keyof AggregateDepense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepense[P]>
      : GetScalarType<T[P], AggregateDepense[P]>
  }




  export type DepenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepenseWhereInput
    orderBy?: DepenseOrderByWithAggregationInput | DepenseOrderByWithAggregationInput[]
    by: DepenseScalarFieldEnum[] | DepenseScalarFieldEnum
    having?: DepenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepenseCountAggregateInputType | true
    _avg?: DepenseAvgAggregateInputType
    _sum?: DepenseSumAggregateInputType
    _min?: DepenseMinAggregateInputType
    _max?: DepenseMaxAggregateInputType
  }

  export type DepenseGroupByOutputType = {
    id: number
    dateIntervention: Date
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite: number | null
    montant: number
    statut: $Enums.StatutDepense
    dateCreation: Date
    commentaireControleurFinancier: string | null
    commentaireControleurGestion: string | null
    commentaireResponsableAdmin: string | null
    commentaireAdminGeneral: string | null
    commentaireDG: string | null
    commentaireLogisticien: string | null
    dateReport: Date | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId: number | null
    valideParControleurGestionId: number | null
    valideParResponsableAdminId: number | null
    valideParAdminGeneralId: number | null
    valideParDGId: number | null
    _count: DepenseCountAggregateOutputType | null
    _avg: DepenseAvgAggregateOutputType | null
    _sum: DepenseSumAggregateOutputType | null
    _min: DepenseMinAggregateOutputType | null
    _max: DepenseMaxAggregateOutputType | null
  }

  type GetDepenseGroupByPayload<T extends DepenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepenseGroupByOutputType[P]>
            : GetScalarType<T[P], DepenseGroupByOutputType[P]>
        }
      >
    >


  export type DepenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateIntervention?: boolean
    typeVehicule?: boolean
    codeParc?: boolean
    typeDepenseId?: boolean
    libelle?: boolean
    quantite?: boolean
    montant?: boolean
    statut?: boolean
    dateCreation?: boolean
    commentaireControleurFinancier?: boolean
    commentaireControleurGestion?: boolean
    commentaireResponsableAdmin?: boolean
    commentaireAdminGeneral?: boolean
    commentaireDG?: boolean
    commentaireLogisticien?: boolean
    dateReport?: boolean
    vehiculeId?: boolean
    soumisParId?: boolean
    valideParControleurFinancierId?: boolean
    valideParControleurGestionId?: boolean
    valideParResponsableAdminId?: boolean
    valideParAdminGeneralId?: boolean
    valideParDGId?: boolean
    typeDepense?: boolean | TypeDepenseDefaultArgs<ExtArgs>
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    soumisPar?: boolean | UserDefaultArgs<ExtArgs>
    valideParControleurFinancier?: boolean | Depense$valideParControleurFinancierArgs<ExtArgs>
    valideParControleurGestion?: boolean | Depense$valideParControleurGestionArgs<ExtArgs>
    valideParResponsableAdmin?: boolean | Depense$valideParResponsableAdminArgs<ExtArgs>
    valideParAdminGeneral?: boolean | Depense$valideParAdminGeneralArgs<ExtArgs>
    valideParDG?: boolean | Depense$valideParDGArgs<ExtArgs>
    documents?: boolean | Depense$documentsArgs<ExtArgs>
    commentaires?: boolean | Depense$commentairesArgs<ExtArgs>
    _count?: boolean | DepenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["depense"]>

  export type DepenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateIntervention?: boolean
    typeVehicule?: boolean
    codeParc?: boolean
    typeDepenseId?: boolean
    libelle?: boolean
    quantite?: boolean
    montant?: boolean
    statut?: boolean
    dateCreation?: boolean
    commentaireControleurFinancier?: boolean
    commentaireControleurGestion?: boolean
    commentaireResponsableAdmin?: boolean
    commentaireAdminGeneral?: boolean
    commentaireDG?: boolean
    commentaireLogisticien?: boolean
    dateReport?: boolean
    vehiculeId?: boolean
    soumisParId?: boolean
    valideParControleurFinancierId?: boolean
    valideParControleurGestionId?: boolean
    valideParResponsableAdminId?: boolean
    valideParAdminGeneralId?: boolean
    valideParDGId?: boolean
    typeDepense?: boolean | TypeDepenseDefaultArgs<ExtArgs>
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    soumisPar?: boolean | UserDefaultArgs<ExtArgs>
    valideParControleurFinancier?: boolean | Depense$valideParControleurFinancierArgs<ExtArgs>
    valideParControleurGestion?: boolean | Depense$valideParControleurGestionArgs<ExtArgs>
    valideParResponsableAdmin?: boolean | Depense$valideParResponsableAdminArgs<ExtArgs>
    valideParAdminGeneral?: boolean | Depense$valideParAdminGeneralArgs<ExtArgs>
    valideParDG?: boolean | Depense$valideParDGArgs<ExtArgs>
  }, ExtArgs["result"]["depense"]>

  export type DepenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateIntervention?: boolean
    typeVehicule?: boolean
    codeParc?: boolean
    typeDepenseId?: boolean
    libelle?: boolean
    quantite?: boolean
    montant?: boolean
    statut?: boolean
    dateCreation?: boolean
    commentaireControleurFinancier?: boolean
    commentaireControleurGestion?: boolean
    commentaireResponsableAdmin?: boolean
    commentaireAdminGeneral?: boolean
    commentaireDG?: boolean
    commentaireLogisticien?: boolean
    dateReport?: boolean
    vehiculeId?: boolean
    soumisParId?: boolean
    valideParControleurFinancierId?: boolean
    valideParControleurGestionId?: boolean
    valideParResponsableAdminId?: boolean
    valideParAdminGeneralId?: boolean
    valideParDGId?: boolean
    typeDepense?: boolean | TypeDepenseDefaultArgs<ExtArgs>
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    soumisPar?: boolean | UserDefaultArgs<ExtArgs>
    valideParControleurFinancier?: boolean | Depense$valideParControleurFinancierArgs<ExtArgs>
    valideParControleurGestion?: boolean | Depense$valideParControleurGestionArgs<ExtArgs>
    valideParResponsableAdmin?: boolean | Depense$valideParResponsableAdminArgs<ExtArgs>
    valideParAdminGeneral?: boolean | Depense$valideParAdminGeneralArgs<ExtArgs>
    valideParDG?: boolean | Depense$valideParDGArgs<ExtArgs>
  }, ExtArgs["result"]["depense"]>

  export type DepenseSelectScalar = {
    id?: boolean
    dateIntervention?: boolean
    typeVehicule?: boolean
    codeParc?: boolean
    typeDepenseId?: boolean
    libelle?: boolean
    quantite?: boolean
    montant?: boolean
    statut?: boolean
    dateCreation?: boolean
    commentaireControleurFinancier?: boolean
    commentaireControleurGestion?: boolean
    commentaireResponsableAdmin?: boolean
    commentaireAdminGeneral?: boolean
    commentaireDG?: boolean
    commentaireLogisticien?: boolean
    dateReport?: boolean
    vehiculeId?: boolean
    soumisParId?: boolean
    valideParControleurFinancierId?: boolean
    valideParControleurGestionId?: boolean
    valideParResponsableAdminId?: boolean
    valideParAdminGeneralId?: boolean
    valideParDGId?: boolean
  }

  export type DepenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dateIntervention" | "typeVehicule" | "codeParc" | "typeDepenseId" | "libelle" | "quantite" | "montant" | "statut" | "dateCreation" | "commentaireControleurFinancier" | "commentaireControleurGestion" | "commentaireResponsableAdmin" | "commentaireAdminGeneral" | "commentaireDG" | "commentaireLogisticien" | "dateReport" | "vehiculeId" | "soumisParId" | "valideParControleurFinancierId" | "valideParControleurGestionId" | "valideParResponsableAdminId" | "valideParAdminGeneralId" | "valideParDGId", ExtArgs["result"]["depense"]>
  export type DepenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeDepense?: boolean | TypeDepenseDefaultArgs<ExtArgs>
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    soumisPar?: boolean | UserDefaultArgs<ExtArgs>
    valideParControleurFinancier?: boolean | Depense$valideParControleurFinancierArgs<ExtArgs>
    valideParControleurGestion?: boolean | Depense$valideParControleurGestionArgs<ExtArgs>
    valideParResponsableAdmin?: boolean | Depense$valideParResponsableAdminArgs<ExtArgs>
    valideParAdminGeneral?: boolean | Depense$valideParAdminGeneralArgs<ExtArgs>
    valideParDG?: boolean | Depense$valideParDGArgs<ExtArgs>
    documents?: boolean | Depense$documentsArgs<ExtArgs>
    commentaires?: boolean | Depense$commentairesArgs<ExtArgs>
    _count?: boolean | DepenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeDepense?: boolean | TypeDepenseDefaultArgs<ExtArgs>
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    soumisPar?: boolean | UserDefaultArgs<ExtArgs>
    valideParControleurFinancier?: boolean | Depense$valideParControleurFinancierArgs<ExtArgs>
    valideParControleurGestion?: boolean | Depense$valideParControleurGestionArgs<ExtArgs>
    valideParResponsableAdmin?: boolean | Depense$valideParResponsableAdminArgs<ExtArgs>
    valideParAdminGeneral?: boolean | Depense$valideParAdminGeneralArgs<ExtArgs>
    valideParDG?: boolean | Depense$valideParDGArgs<ExtArgs>
  }
  export type DepenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeDepense?: boolean | TypeDepenseDefaultArgs<ExtArgs>
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    soumisPar?: boolean | UserDefaultArgs<ExtArgs>
    valideParControleurFinancier?: boolean | Depense$valideParControleurFinancierArgs<ExtArgs>
    valideParControleurGestion?: boolean | Depense$valideParControleurGestionArgs<ExtArgs>
    valideParResponsableAdmin?: boolean | Depense$valideParResponsableAdminArgs<ExtArgs>
    valideParAdminGeneral?: boolean | Depense$valideParAdminGeneralArgs<ExtArgs>
    valideParDG?: boolean | Depense$valideParDGArgs<ExtArgs>
  }

  export type $DepensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Depense"
    objects: {
      typeDepense: Prisma.$TypeDepensePayload<ExtArgs>
      vehicule: Prisma.$VehiculePayload<ExtArgs>
      soumisPar: Prisma.$UserPayload<ExtArgs>
      valideParControleurFinancier: Prisma.$UserPayload<ExtArgs> | null
      valideParControleurGestion: Prisma.$UserPayload<ExtArgs> | null
      valideParResponsableAdmin: Prisma.$UserPayload<ExtArgs> | null
      valideParAdminGeneral: Prisma.$UserPayload<ExtArgs> | null
      valideParDG: Prisma.$UserPayload<ExtArgs> | null
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      commentaires: Prisma.$CommentairePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateIntervention: Date
      typeVehicule: string
      codeParc: string
      typeDepenseId: number
      libelle: string
      quantite: number | null
      montant: number
      statut: $Enums.StatutDepense
      dateCreation: Date
      commentaireControleurFinancier: string | null
      commentaireControleurGestion: string | null
      commentaireResponsableAdmin: string | null
      commentaireAdminGeneral: string | null
      commentaireDG: string | null
      commentaireLogisticien: string | null
      dateReport: Date | null
      vehiculeId: number
      soumisParId: number
      valideParControleurFinancierId: number | null
      valideParControleurGestionId: number | null
      valideParResponsableAdminId: number | null
      valideParAdminGeneralId: number | null
      valideParDGId: number | null
    }, ExtArgs["result"]["depense"]>
    composites: {}
  }

  type DepenseGetPayload<S extends boolean | null | undefined | DepenseDefaultArgs> = $Result.GetResult<Prisma.$DepensePayload, S>

  type DepenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepenseCountAggregateInputType | true
    }

  export interface DepenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Depense'], meta: { name: 'Depense' } }
    /**
     * Find zero or one Depense that matches the filter.
     * @param {DepenseFindUniqueArgs} args - Arguments to find a Depense
     * @example
     * // Get one Depense
     * const depense = await prisma.depense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepenseFindUniqueArgs>(args: SelectSubset<T, DepenseFindUniqueArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Depense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepenseFindUniqueOrThrowArgs} args - Arguments to find a Depense
     * @example
     * // Get one Depense
     * const depense = await prisma.depense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepenseFindUniqueOrThrowArgs>(args: SelectSubset<T, DepenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Depense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseFindFirstArgs} args - Arguments to find a Depense
     * @example
     * // Get one Depense
     * const depense = await prisma.depense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepenseFindFirstArgs>(args?: SelectSubset<T, DepenseFindFirstArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Depense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseFindFirstOrThrowArgs} args - Arguments to find a Depense
     * @example
     * // Get one Depense
     * const depense = await prisma.depense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepenseFindFirstOrThrowArgs>(args?: SelectSubset<T, DepenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Depenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Depenses
     * const depenses = await prisma.depense.findMany()
     * 
     * // Get first 10 Depenses
     * const depenses = await prisma.depense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depenseWithIdOnly = await prisma.depense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepenseFindManyArgs>(args?: SelectSubset<T, DepenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Depense.
     * @param {DepenseCreateArgs} args - Arguments to create a Depense.
     * @example
     * // Create one Depense
     * const Depense = await prisma.depense.create({
     *   data: {
     *     // ... data to create a Depense
     *   }
     * })
     * 
     */
    create<T extends DepenseCreateArgs>(args: SelectSubset<T, DepenseCreateArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Depenses.
     * @param {DepenseCreateManyArgs} args - Arguments to create many Depenses.
     * @example
     * // Create many Depenses
     * const depense = await prisma.depense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepenseCreateManyArgs>(args?: SelectSubset<T, DepenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Depenses and returns the data saved in the database.
     * @param {DepenseCreateManyAndReturnArgs} args - Arguments to create many Depenses.
     * @example
     * // Create many Depenses
     * const depense = await prisma.depense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Depenses and only return the `id`
     * const depenseWithIdOnly = await prisma.depense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepenseCreateManyAndReturnArgs>(args?: SelectSubset<T, DepenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Depense.
     * @param {DepenseDeleteArgs} args - Arguments to delete one Depense.
     * @example
     * // Delete one Depense
     * const Depense = await prisma.depense.delete({
     *   where: {
     *     // ... filter to delete one Depense
     *   }
     * })
     * 
     */
    delete<T extends DepenseDeleteArgs>(args: SelectSubset<T, DepenseDeleteArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Depense.
     * @param {DepenseUpdateArgs} args - Arguments to update one Depense.
     * @example
     * // Update one Depense
     * const depense = await prisma.depense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepenseUpdateArgs>(args: SelectSubset<T, DepenseUpdateArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Depenses.
     * @param {DepenseDeleteManyArgs} args - Arguments to filter Depenses to delete.
     * @example
     * // Delete a few Depenses
     * const { count } = await prisma.depense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepenseDeleteManyArgs>(args?: SelectSubset<T, DepenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Depenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Depenses
     * const depense = await prisma.depense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepenseUpdateManyArgs>(args: SelectSubset<T, DepenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Depenses and returns the data updated in the database.
     * @param {DepenseUpdateManyAndReturnArgs} args - Arguments to update many Depenses.
     * @example
     * // Update many Depenses
     * const depense = await prisma.depense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Depenses and only return the `id`
     * const depenseWithIdOnly = await prisma.depense.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepenseUpdateManyAndReturnArgs>(args: SelectSubset<T, DepenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Depense.
     * @param {DepenseUpsertArgs} args - Arguments to update or create a Depense.
     * @example
     * // Update or create a Depense
     * const depense = await prisma.depense.upsert({
     *   create: {
     *     // ... data to create a Depense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Depense we want to update
     *   }
     * })
     */
    upsert<T extends DepenseUpsertArgs>(args: SelectSubset<T, DepenseUpsertArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Depenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseCountArgs} args - Arguments to filter Depenses to count.
     * @example
     * // Count the number of Depenses
     * const count = await prisma.depense.count({
     *   where: {
     *     // ... the filter for the Depenses we want to count
     *   }
     * })
    **/
    count<T extends DepenseCountArgs>(
      args?: Subset<T, DepenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Depense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepenseAggregateArgs>(args: Subset<T, DepenseAggregateArgs>): Prisma.PrismaPromise<GetDepenseAggregateType<T>>

    /**
     * Group by Depense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepenseGroupByArgs} args - Group by arguments.
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
      T extends DepenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepenseGroupByArgs['orderBy'] }
        : { orderBy?: DepenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Depense model
   */
  readonly fields: DepenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Depense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    typeDepense<T extends TypeDepenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeDepenseDefaultArgs<ExtArgs>>): Prisma__TypeDepenseClient<$Result.GetResult<Prisma.$TypeDepensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicule<T extends VehiculeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculeDefaultArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    soumisPar<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    valideParControleurFinancier<T extends Depense$valideParControleurFinancierArgs<ExtArgs> = {}>(args?: Subset<T, Depense$valideParControleurFinancierArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    valideParControleurGestion<T extends Depense$valideParControleurGestionArgs<ExtArgs> = {}>(args?: Subset<T, Depense$valideParControleurGestionArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    valideParResponsableAdmin<T extends Depense$valideParResponsableAdminArgs<ExtArgs> = {}>(args?: Subset<T, Depense$valideParResponsableAdminArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    valideParAdminGeneral<T extends Depense$valideParAdminGeneralArgs<ExtArgs> = {}>(args?: Subset<T, Depense$valideParAdminGeneralArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    valideParDG<T extends Depense$valideParDGArgs<ExtArgs> = {}>(args?: Subset<T, Depense$valideParDGArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    documents<T extends Depense$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Depense$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commentaires<T extends Depense$commentairesArgs<ExtArgs> = {}>(args?: Subset<T, Depense$commentairesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Depense model
   */
  interface DepenseFieldRefs {
    readonly id: FieldRef<"Depense", 'Int'>
    readonly dateIntervention: FieldRef<"Depense", 'DateTime'>
    readonly typeVehicule: FieldRef<"Depense", 'String'>
    readonly codeParc: FieldRef<"Depense", 'String'>
    readonly typeDepenseId: FieldRef<"Depense", 'Int'>
    readonly libelle: FieldRef<"Depense", 'String'>
    readonly quantite: FieldRef<"Depense", 'Int'>
    readonly montant: FieldRef<"Depense", 'Int'>
    readonly statut: FieldRef<"Depense", 'StatutDepense'>
    readonly dateCreation: FieldRef<"Depense", 'DateTime'>
    readonly commentaireControleurFinancier: FieldRef<"Depense", 'String'>
    readonly commentaireControleurGestion: FieldRef<"Depense", 'String'>
    readonly commentaireResponsableAdmin: FieldRef<"Depense", 'String'>
    readonly commentaireAdminGeneral: FieldRef<"Depense", 'String'>
    readonly commentaireDG: FieldRef<"Depense", 'String'>
    readonly commentaireLogisticien: FieldRef<"Depense", 'String'>
    readonly dateReport: FieldRef<"Depense", 'DateTime'>
    readonly vehiculeId: FieldRef<"Depense", 'Int'>
    readonly soumisParId: FieldRef<"Depense", 'Int'>
    readonly valideParControleurFinancierId: FieldRef<"Depense", 'Int'>
    readonly valideParControleurGestionId: FieldRef<"Depense", 'Int'>
    readonly valideParResponsableAdminId: FieldRef<"Depense", 'Int'>
    readonly valideParAdminGeneralId: FieldRef<"Depense", 'Int'>
    readonly valideParDGId: FieldRef<"Depense", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Depense findUnique
   */
  export type DepenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    /**
     * Filter, which Depense to fetch.
     */
    where: DepenseWhereUniqueInput
  }

  /**
   * Depense findUniqueOrThrow
   */
  export type DepenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    /**
     * Filter, which Depense to fetch.
     */
    where: DepenseWhereUniqueInput
  }

  /**
   * Depense findFirst
   */
  export type DepenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    /**
     * Filter, which Depense to fetch.
     */
    where?: DepenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depenses to fetch.
     */
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Depenses.
     */
    cursor?: DepenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Depenses.
     */
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * Depense findFirstOrThrow
   */
  export type DepenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    /**
     * Filter, which Depense to fetch.
     */
    where?: DepenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depenses to fetch.
     */
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Depenses.
     */
    cursor?: DepenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Depenses.
     */
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * Depense findMany
   */
  export type DepenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    /**
     * Filter, which Depenses to fetch.
     */
    where?: DepenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depenses to fetch.
     */
    orderBy?: DepenseOrderByWithRelationInput | DepenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Depenses.
     */
    cursor?: DepenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depenses.
     */
    skip?: number
    distinct?: DepenseScalarFieldEnum | DepenseScalarFieldEnum[]
  }

  /**
   * Depense create
   */
  export type DepenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Depense.
     */
    data: XOR<DepenseCreateInput, DepenseUncheckedCreateInput>
  }

  /**
   * Depense createMany
   */
  export type DepenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Depenses.
     */
    data: DepenseCreateManyInput | DepenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Depense createManyAndReturn
   */
  export type DepenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * The data used to create many Depenses.
     */
    data: DepenseCreateManyInput | DepenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Depense update
   */
  export type DepenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Depense.
     */
    data: XOR<DepenseUpdateInput, DepenseUncheckedUpdateInput>
    /**
     * Choose, which Depense to update.
     */
    where: DepenseWhereUniqueInput
  }

  /**
   * Depense updateMany
   */
  export type DepenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Depenses.
     */
    data: XOR<DepenseUpdateManyMutationInput, DepenseUncheckedUpdateManyInput>
    /**
     * Filter which Depenses to update
     */
    where?: DepenseWhereInput
    /**
     * Limit how many Depenses to update.
     */
    limit?: number
  }

  /**
   * Depense updateManyAndReturn
   */
  export type DepenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * The data used to update Depenses.
     */
    data: XOR<DepenseUpdateManyMutationInput, DepenseUncheckedUpdateManyInput>
    /**
     * Filter which Depenses to update
     */
    where?: DepenseWhereInput
    /**
     * Limit how many Depenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Depense upsert
   */
  export type DepenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Depense to update in case it exists.
     */
    where: DepenseWhereUniqueInput
    /**
     * In case the Depense found by the `where` argument doesn't exist, create a new Depense with this data.
     */
    create: XOR<DepenseCreateInput, DepenseUncheckedCreateInput>
    /**
     * In case the Depense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepenseUpdateInput, DepenseUncheckedUpdateInput>
  }

  /**
   * Depense delete
   */
  export type DepenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
    /**
     * Filter which Depense to delete.
     */
    where: DepenseWhereUniqueInput
  }

  /**
   * Depense deleteMany
   */
  export type DepenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Depenses to delete
     */
    where?: DepenseWhereInput
    /**
     * Limit how many Depenses to delete.
     */
    limit?: number
  }

  /**
   * Depense.valideParControleurFinancier
   */
  export type Depense$valideParControleurFinancierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Depense.valideParControleurGestion
   */
  export type Depense$valideParControleurGestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Depense.valideParResponsableAdmin
   */
  export type Depense$valideParResponsableAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Depense.valideParAdminGeneral
   */
  export type Depense$valideParAdminGeneralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Depense.valideParDG
   */
  export type Depense$valideParDGArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Depense.documents
   */
  export type Depense$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Depense.commentaires
   */
  export type Depense$commentairesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    cursor?: CommentaireWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Depense without action
   */
  export type DepenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depense
     */
    select?: DepenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depense
     */
    omit?: DepenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepenseInclude<ExtArgs> | null
  }


  /**
   * Model Commentaire
   */

  export type AggregateCommentaire = {
    _count: CommentaireCountAggregateOutputType | null
    _avg: CommentaireAvgAggregateOutputType | null
    _sum: CommentaireSumAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  export type CommentaireAvgAggregateOutputType = {
    id: number | null
    depenseId: number | null
  }

  export type CommentaireSumAggregateOutputType = {
    id: number | null
    depenseId: number | null
  }

  export type CommentaireMinAggregateOutputType = {
    id: number | null
    texte: string | null
    auteur: string | null
    date: Date | null
    depenseId: number | null
  }

  export type CommentaireMaxAggregateOutputType = {
    id: number | null
    texte: string | null
    auteur: string | null
    date: Date | null
    depenseId: number | null
  }

  export type CommentaireCountAggregateOutputType = {
    id: number
    texte: number
    auteur: number
    date: number
    depenseId: number
    _all: number
  }


  export type CommentaireAvgAggregateInputType = {
    id?: true
    depenseId?: true
  }

  export type CommentaireSumAggregateInputType = {
    id?: true
    depenseId?: true
  }

  export type CommentaireMinAggregateInputType = {
    id?: true
    texte?: true
    auteur?: true
    date?: true
    depenseId?: true
  }

  export type CommentaireMaxAggregateInputType = {
    id?: true
    texte?: true
    auteur?: true
    date?: true
    depenseId?: true
  }

  export type CommentaireCountAggregateInputType = {
    id?: true
    texte?: true
    auteur?: true
    date?: true
    depenseId?: true
    _all?: true
  }

  export type CommentaireAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaire to aggregate.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commentaires
    **/
    _count?: true | CommentaireCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentaireAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentaireSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentaireMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentaireMaxAggregateInputType
  }

  export type GetCommentaireAggregateType<T extends CommentaireAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentaire]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentaire[P]>
      : GetScalarType<T[P], AggregateCommentaire[P]>
  }




  export type CommentaireGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentaireWhereInput
    orderBy?: CommentaireOrderByWithAggregationInput | CommentaireOrderByWithAggregationInput[]
    by: CommentaireScalarFieldEnum[] | CommentaireScalarFieldEnum
    having?: CommentaireScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentaireCountAggregateInputType | true
    _avg?: CommentaireAvgAggregateInputType
    _sum?: CommentaireSumAggregateInputType
    _min?: CommentaireMinAggregateInputType
    _max?: CommentaireMaxAggregateInputType
  }

  export type CommentaireGroupByOutputType = {
    id: number
    texte: string
    auteur: string
    date: Date
    depenseId: number
    _count: CommentaireCountAggregateOutputType | null
    _avg: CommentaireAvgAggregateOutputType | null
    _sum: CommentaireSumAggregateOutputType | null
    _min: CommentaireMinAggregateOutputType | null
    _max: CommentaireMaxAggregateOutputType | null
  }

  type GetCommentaireGroupByPayload<T extends CommentaireGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentaireGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentaireGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
            : GetScalarType<T[P], CommentaireGroupByOutputType[P]>
        }
      >
    >


  export type CommentaireSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texte?: boolean
    auteur?: boolean
    date?: boolean
    depenseId?: boolean
    depense?: boolean | DepenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texte?: boolean
    auteur?: boolean
    date?: boolean
    depenseId?: boolean
    depense?: boolean | DepenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    texte?: boolean
    auteur?: boolean
    date?: boolean
    depenseId?: boolean
    depense?: boolean | DepenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentaire"]>

  export type CommentaireSelectScalar = {
    id?: boolean
    texte?: boolean
    auteur?: boolean
    date?: boolean
    depenseId?: boolean
  }

  export type CommentaireOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "texte" | "auteur" | "date" | "depenseId", ExtArgs["result"]["commentaire"]>
  export type CommentaireInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depense?: boolean | DepenseDefaultArgs<ExtArgs>
  }
  export type CommentaireIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depense?: boolean | DepenseDefaultArgs<ExtArgs>
  }
  export type CommentaireIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depense?: boolean | DepenseDefaultArgs<ExtArgs>
  }

  export type $CommentairePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commentaire"
    objects: {
      depense: Prisma.$DepensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      texte: string
      auteur: string
      date: Date
      depenseId: number
    }, ExtArgs["result"]["commentaire"]>
    composites: {}
  }

  type CommentaireGetPayload<S extends boolean | null | undefined | CommentaireDefaultArgs> = $Result.GetResult<Prisma.$CommentairePayload, S>

  type CommentaireCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentaireFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentaireCountAggregateInputType | true
    }

  export interface CommentaireDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commentaire'], meta: { name: 'Commentaire' } }
    /**
     * Find zero or one Commentaire that matches the filter.
     * @param {CommentaireFindUniqueArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentaireFindUniqueArgs>(args: SelectSubset<T, CommentaireFindUniqueArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commentaire that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentaireFindUniqueOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentaireFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentaireFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentaireFindFirstArgs>(args?: SelectSubset<T, CommentaireFindFirstArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commentaire that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindFirstOrThrowArgs} args - Arguments to find a Commentaire
     * @example
     * // Get one Commentaire
     * const commentaire = await prisma.commentaire.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentaireFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentaireFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commentaires that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commentaires
     * const commentaires = await prisma.commentaire.findMany()
     * 
     * // Get first 10 Commentaires
     * const commentaires = await prisma.commentaire.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentaireFindManyArgs>(args?: SelectSubset<T, CommentaireFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commentaire.
     * @param {CommentaireCreateArgs} args - Arguments to create a Commentaire.
     * @example
     * // Create one Commentaire
     * const Commentaire = await prisma.commentaire.create({
     *   data: {
     *     // ... data to create a Commentaire
     *   }
     * })
     * 
     */
    create<T extends CommentaireCreateArgs>(args: SelectSubset<T, CommentaireCreateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commentaires.
     * @param {CommentaireCreateManyArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentaireCreateManyArgs>(args?: SelectSubset<T, CommentaireCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commentaires and returns the data saved in the database.
     * @param {CommentaireCreateManyAndReturnArgs} args - Arguments to create many Commentaires.
     * @example
     * // Create many Commentaires
     * const commentaire = await prisma.commentaire.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commentaires and only return the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentaireCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentaireCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commentaire.
     * @param {CommentaireDeleteArgs} args - Arguments to delete one Commentaire.
     * @example
     * // Delete one Commentaire
     * const Commentaire = await prisma.commentaire.delete({
     *   where: {
     *     // ... filter to delete one Commentaire
     *   }
     * })
     * 
     */
    delete<T extends CommentaireDeleteArgs>(args: SelectSubset<T, CommentaireDeleteArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commentaire.
     * @param {CommentaireUpdateArgs} args - Arguments to update one Commentaire.
     * @example
     * // Update one Commentaire
     * const commentaire = await prisma.commentaire.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentaireUpdateArgs>(args: SelectSubset<T, CommentaireUpdateArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commentaires.
     * @param {CommentaireDeleteManyArgs} args - Arguments to filter Commentaires to delete.
     * @example
     * // Delete a few Commentaires
     * const { count } = await prisma.commentaire.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentaireDeleteManyArgs>(args?: SelectSubset<T, CommentaireDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentaireUpdateManyArgs>(args: SelectSubset<T, CommentaireUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commentaires and returns the data updated in the database.
     * @param {CommentaireUpdateManyAndReturnArgs} args - Arguments to update many Commentaires.
     * @example
     * // Update many Commentaires
     * const commentaire = await prisma.commentaire.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commentaires and only return the `id`
     * const commentaireWithIdOnly = await prisma.commentaire.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentaireUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentaireUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commentaire.
     * @param {CommentaireUpsertArgs} args - Arguments to update or create a Commentaire.
     * @example
     * // Update or create a Commentaire
     * const commentaire = await prisma.commentaire.upsert({
     *   create: {
     *     // ... data to create a Commentaire
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commentaire we want to update
     *   }
     * })
     */
    upsert<T extends CommentaireUpsertArgs>(args: SelectSubset<T, CommentaireUpsertArgs<ExtArgs>>): Prisma__CommentaireClient<$Result.GetResult<Prisma.$CommentairePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commentaires.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireCountArgs} args - Arguments to filter Commentaires to count.
     * @example
     * // Count the number of Commentaires
     * const count = await prisma.commentaire.count({
     *   where: {
     *     // ... the filter for the Commentaires we want to count
     *   }
     * })
    **/
    count<T extends CommentaireCountArgs>(
      args?: Subset<T, CommentaireCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentaireCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentaireAggregateArgs>(args: Subset<T, CommentaireAggregateArgs>): Prisma.PrismaPromise<GetCommentaireAggregateType<T>>

    /**
     * Group by Commentaire.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentaireGroupByArgs} args - Group by arguments.
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
      T extends CommentaireGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentaireGroupByArgs['orderBy'] }
        : { orderBy?: CommentaireGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentaireGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentaireGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commentaire model
   */
  readonly fields: CommentaireFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commentaire.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentaireClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    depense<T extends DepenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepenseDefaultArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Commentaire model
   */
  interface CommentaireFieldRefs {
    readonly id: FieldRef<"Commentaire", 'Int'>
    readonly texte: FieldRef<"Commentaire", 'String'>
    readonly auteur: FieldRef<"Commentaire", 'String'>
    readonly date: FieldRef<"Commentaire", 'DateTime'>
    readonly depenseId: FieldRef<"Commentaire", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Commentaire findUnique
   */
  export type CommentaireFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findUniqueOrThrow
   */
  export type CommentaireFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire findFirst
   */
  export type CommentaireFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findFirstOrThrow
   */
  export type CommentaireFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaire to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commentaires.
     */
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire findMany
   */
  export type CommentaireFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter, which Commentaires to fetch.
     */
    where?: CommentaireWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commentaires to fetch.
     */
    orderBy?: CommentaireOrderByWithRelationInput | CommentaireOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commentaires.
     */
    cursor?: CommentaireWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commentaires from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commentaires.
     */
    skip?: number
    distinct?: CommentaireScalarFieldEnum | CommentaireScalarFieldEnum[]
  }

  /**
   * Commentaire create
   */
  export type CommentaireCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to create a Commentaire.
     */
    data: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
  }

  /**
   * Commentaire createMany
   */
  export type CommentaireCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commentaire createManyAndReturn
   */
  export type CommentaireCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * The data used to create many Commentaires.
     */
    data: CommentaireCreateManyInput | CommentaireCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaire update
   */
  export type CommentaireUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The data needed to update a Commentaire.
     */
    data: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
    /**
     * Choose, which Commentaire to update.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire updateMany
   */
  export type CommentaireUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
  }

  /**
   * Commentaire updateManyAndReturn
   */
  export type CommentaireUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * The data used to update Commentaires.
     */
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyInput>
    /**
     * Filter which Commentaires to update
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commentaire upsert
   */
  export type CommentaireUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * The filter to search for the Commentaire to update in case it exists.
     */
    where: CommentaireWhereUniqueInput
    /**
     * In case the Commentaire found by the `where` argument doesn't exist, create a new Commentaire with this data.
     */
    create: XOR<CommentaireCreateInput, CommentaireUncheckedCreateInput>
    /**
     * In case the Commentaire was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentaireUpdateInput, CommentaireUncheckedUpdateInput>
  }

  /**
   * Commentaire delete
   */
  export type CommentaireDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
    /**
     * Filter which Commentaire to delete.
     */
    where: CommentaireWhereUniqueInput
  }

  /**
   * Commentaire deleteMany
   */
  export type CommentaireDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commentaires to delete
     */
    where?: CommentaireWhereInput
    /**
     * Limit how many Commentaires to delete.
     */
    limit?: number
  }

  /**
   * Commentaire without action
   */
  export type CommentaireDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commentaire
     */
    select?: CommentaireSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commentaire
     */
    omit?: CommentaireOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentaireInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
    depenseId: number | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
    depenseId: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    url: string | null
    nom: string | null
    depenseId: number | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    url: string | null
    nom: string | null
    depenseId: number | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    url: number
    nom: number
    depenseId: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
    depenseId?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
    depenseId?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    url?: true
    nom?: true
    depenseId?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    url?: true
    nom?: true
    depenseId?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    url?: true
    nom?: true
    depenseId?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: number
    url: string
    nom: string
    depenseId: number
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    nom?: boolean
    depenseId?: boolean
    depense?: boolean | DepenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    nom?: boolean
    depenseId?: boolean
    depense?: boolean | DepenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    nom?: boolean
    depenseId?: boolean
    depense?: boolean | DepenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    url?: boolean
    nom?: boolean
    depenseId?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "nom" | "depenseId", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depense?: boolean | DepenseDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depense?: boolean | DepenseDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depense?: boolean | DepenseDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      depense: Prisma.$DepensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      nom: string
      depenseId: number
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
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
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
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
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    depense<T extends DepenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepenseDefaultArgs<ExtArgs>>): Prisma__DepenseClient<$Result.GetResult<Prisma.$DepensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'Int'>
    readonly url: FieldRef<"Document", 'String'>
    readonly nom: FieldRef<"Document", 'String'>
    readonly depenseId: FieldRef<"Document", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehiculeScalarFieldEnum: {
    id: 'id',
    type: 'type',
    immatriculation: 'immatriculation',
    codeParc: 'codeParc',
    description: 'description',
    statut: 'statut',
    createdAt: 'createdAt'
  };

  export type VehiculeScalarFieldEnum = (typeof VehiculeScalarFieldEnum)[keyof typeof VehiculeScalarFieldEnum]


  export const TypeDepenseScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type TypeDepenseScalarFieldEnum = (typeof TypeDepenseScalarFieldEnum)[keyof typeof TypeDepenseScalarFieldEnum]


  export const DepenseScalarFieldEnum: {
    id: 'id',
    dateIntervention: 'dateIntervention',
    typeVehicule: 'typeVehicule',
    codeParc: 'codeParc',
    typeDepenseId: 'typeDepenseId',
    libelle: 'libelle',
    quantite: 'quantite',
    montant: 'montant',
    statut: 'statut',
    dateCreation: 'dateCreation',
    commentaireControleurFinancier: 'commentaireControleurFinancier',
    commentaireControleurGestion: 'commentaireControleurGestion',
    commentaireResponsableAdmin: 'commentaireResponsableAdmin',
    commentaireAdminGeneral: 'commentaireAdminGeneral',
    commentaireDG: 'commentaireDG',
    commentaireLogisticien: 'commentaireLogisticien',
    dateReport: 'dateReport',
    vehiculeId: 'vehiculeId',
    soumisParId: 'soumisParId',
    valideParControleurFinancierId: 'valideParControleurFinancierId',
    valideParControleurGestionId: 'valideParControleurGestionId',
    valideParResponsableAdminId: 'valideParResponsableAdminId',
    valideParAdminGeneralId: 'valideParAdminGeneralId',
    valideParDGId: 'valideParDGId'
  };

  export type DepenseScalarFieldEnum = (typeof DepenseScalarFieldEnum)[keyof typeof DepenseScalarFieldEnum]


  export const CommentaireScalarFieldEnum: {
    id: 'id',
    texte: 'texte',
    auteur: 'auteur',
    date: 'date',
    depenseId: 'depenseId'
  };

  export type CommentaireScalarFieldEnum = (typeof CommentaireScalarFieldEnum)[keyof typeof CommentaireScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    url: 'url',
    nom: 'nom',
    depenseId: 'depenseId'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatutDepense'
   */
  export type EnumStatutDepenseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDepense'>
    


  /**
   * Reference to a field of type 'StatutDepense[]'
   */
  export type ListEnumStatutDepenseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDepense[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    nom?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    demandesSoumises?: DepenseListRelationFilter
    validationsControleurFinancier?: DepenseListRelationFilter
    validationsControleurGestion?: DepenseListRelationFilter
    validationsResponsableAdmin?: DepenseListRelationFilter
    validationsAdminGeneral?: DepenseListRelationFilter
    validationsDG?: DepenseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    demandesSoumises?: DepenseOrderByRelationAggregateInput
    validationsControleurFinancier?: DepenseOrderByRelationAggregateInput
    validationsControleurGestion?: DepenseOrderByRelationAggregateInput
    validationsResponsableAdmin?: DepenseOrderByRelationAggregateInput
    validationsAdminGeneral?: DepenseOrderByRelationAggregateInput
    validationsDG?: DepenseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nom?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    demandesSoumises?: DepenseListRelationFilter
    validationsControleurFinancier?: DepenseListRelationFilter
    validationsControleurGestion?: DepenseListRelationFilter
    validationsResponsableAdmin?: DepenseListRelationFilter
    validationsAdminGeneral?: DepenseListRelationFilter
    validationsDG?: DepenseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    nom?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehiculeWhereInput = {
    AND?: VehiculeWhereInput | VehiculeWhereInput[]
    OR?: VehiculeWhereInput[]
    NOT?: VehiculeWhereInput | VehiculeWhereInput[]
    id?: IntFilter<"Vehicule"> | number
    type?: StringFilter<"Vehicule"> | string
    immatriculation?: StringFilter<"Vehicule"> | string
    codeParc?: StringNullableFilter<"Vehicule"> | string | null
    description?: StringNullableFilter<"Vehicule"> | string | null
    statut?: StringNullableFilter<"Vehicule"> | string | null
    createdAt?: DateTimeFilter<"Vehicule"> | Date | string
    depenses?: DepenseListRelationFilter
  }

  export type VehiculeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    immatriculation?: SortOrder
    codeParc?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    depenses?: DepenseOrderByRelationAggregateInput
  }

  export type VehiculeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    immatriculation?: string
    AND?: VehiculeWhereInput | VehiculeWhereInput[]
    OR?: VehiculeWhereInput[]
    NOT?: VehiculeWhereInput | VehiculeWhereInput[]
    type?: StringFilter<"Vehicule"> | string
    codeParc?: StringNullableFilter<"Vehicule"> | string | null
    description?: StringNullableFilter<"Vehicule"> | string | null
    statut?: StringNullableFilter<"Vehicule"> | string | null
    createdAt?: DateTimeFilter<"Vehicule"> | Date | string
    depenses?: DepenseListRelationFilter
  }, "id" | "immatriculation">

  export type VehiculeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    immatriculation?: SortOrder
    codeParc?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: VehiculeCountOrderByAggregateInput
    _avg?: VehiculeAvgOrderByAggregateInput
    _max?: VehiculeMaxOrderByAggregateInput
    _min?: VehiculeMinOrderByAggregateInput
    _sum?: VehiculeSumOrderByAggregateInput
  }

  export type VehiculeScalarWhereWithAggregatesInput = {
    AND?: VehiculeScalarWhereWithAggregatesInput | VehiculeScalarWhereWithAggregatesInput[]
    OR?: VehiculeScalarWhereWithAggregatesInput[]
    NOT?: VehiculeScalarWhereWithAggregatesInput | VehiculeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehicule"> | number
    type?: StringWithAggregatesFilter<"Vehicule"> | string
    immatriculation?: StringWithAggregatesFilter<"Vehicule"> | string
    codeParc?: StringNullableWithAggregatesFilter<"Vehicule"> | string | null
    description?: StringNullableWithAggregatesFilter<"Vehicule"> | string | null
    statut?: StringNullableWithAggregatesFilter<"Vehicule"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vehicule"> | Date | string
  }

  export type TypeDepenseWhereInput = {
    AND?: TypeDepenseWhereInput | TypeDepenseWhereInput[]
    OR?: TypeDepenseWhereInput[]
    NOT?: TypeDepenseWhereInput | TypeDepenseWhereInput[]
    id?: IntFilter<"TypeDepense"> | number
    nom?: StringFilter<"TypeDepense"> | string
    description?: StringNullableFilter<"TypeDepense"> | string | null
    createdAt?: DateTimeFilter<"TypeDepense"> | Date | string
    depenses?: DepenseListRelationFilter
  }

  export type TypeDepenseOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    depenses?: DepenseOrderByRelationAggregateInput
  }

  export type TypeDepenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nom?: string
    AND?: TypeDepenseWhereInput | TypeDepenseWhereInput[]
    OR?: TypeDepenseWhereInput[]
    NOT?: TypeDepenseWhereInput | TypeDepenseWhereInput[]
    description?: StringNullableFilter<"TypeDepense"> | string | null
    createdAt?: DateTimeFilter<"TypeDepense"> | Date | string
    depenses?: DepenseListRelationFilter
  }, "id" | "nom">

  export type TypeDepenseOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TypeDepenseCountOrderByAggregateInput
    _avg?: TypeDepenseAvgOrderByAggregateInput
    _max?: TypeDepenseMaxOrderByAggregateInput
    _min?: TypeDepenseMinOrderByAggregateInput
    _sum?: TypeDepenseSumOrderByAggregateInput
  }

  export type TypeDepenseScalarWhereWithAggregatesInput = {
    AND?: TypeDepenseScalarWhereWithAggregatesInput | TypeDepenseScalarWhereWithAggregatesInput[]
    OR?: TypeDepenseScalarWhereWithAggregatesInput[]
    NOT?: TypeDepenseScalarWhereWithAggregatesInput | TypeDepenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TypeDepense"> | number
    nom?: StringWithAggregatesFilter<"TypeDepense"> | string
    description?: StringNullableWithAggregatesFilter<"TypeDepense"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TypeDepense"> | Date | string
  }

  export type DepenseWhereInput = {
    AND?: DepenseWhereInput | DepenseWhereInput[]
    OR?: DepenseWhereInput[]
    NOT?: DepenseWhereInput | DepenseWhereInput[]
    id?: IntFilter<"Depense"> | number
    dateIntervention?: DateTimeFilter<"Depense"> | Date | string
    typeVehicule?: StringFilter<"Depense"> | string
    codeParc?: StringFilter<"Depense"> | string
    typeDepenseId?: IntFilter<"Depense"> | number
    libelle?: StringFilter<"Depense"> | string
    quantite?: IntNullableFilter<"Depense"> | number | null
    montant?: IntFilter<"Depense"> | number
    statut?: EnumStatutDepenseFilter<"Depense"> | $Enums.StatutDepense
    dateCreation?: DateTimeFilter<"Depense"> | Date | string
    commentaireControleurFinancier?: StringNullableFilter<"Depense"> | string | null
    commentaireControleurGestion?: StringNullableFilter<"Depense"> | string | null
    commentaireResponsableAdmin?: StringNullableFilter<"Depense"> | string | null
    commentaireAdminGeneral?: StringNullableFilter<"Depense"> | string | null
    commentaireDG?: StringNullableFilter<"Depense"> | string | null
    commentaireLogisticien?: StringNullableFilter<"Depense"> | string | null
    dateReport?: DateTimeNullableFilter<"Depense"> | Date | string | null
    vehiculeId?: IntFilter<"Depense"> | number
    soumisParId?: IntFilter<"Depense"> | number
    valideParControleurFinancierId?: IntNullableFilter<"Depense"> | number | null
    valideParControleurGestionId?: IntNullableFilter<"Depense"> | number | null
    valideParResponsableAdminId?: IntNullableFilter<"Depense"> | number | null
    valideParAdminGeneralId?: IntNullableFilter<"Depense"> | number | null
    valideParDGId?: IntNullableFilter<"Depense"> | number | null
    typeDepense?: XOR<TypeDepenseScalarRelationFilter, TypeDepenseWhereInput>
    vehicule?: XOR<VehiculeScalarRelationFilter, VehiculeWhereInput>
    soumisPar?: XOR<UserScalarRelationFilter, UserWhereInput>
    valideParControleurFinancier?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    valideParControleurGestion?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    valideParResponsableAdmin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    valideParAdminGeneral?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    valideParDG?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    documents?: DocumentListRelationFilter
    commentaires?: CommentaireListRelationFilter
  }

  export type DepenseOrderByWithRelationInput = {
    id?: SortOrder
    dateIntervention?: SortOrder
    typeVehicule?: SortOrder
    codeParc?: SortOrder
    typeDepenseId?: SortOrder
    libelle?: SortOrder
    quantite?: SortOrderInput | SortOrder
    montant?: SortOrder
    statut?: SortOrder
    dateCreation?: SortOrder
    commentaireControleurFinancier?: SortOrderInput | SortOrder
    commentaireControleurGestion?: SortOrderInput | SortOrder
    commentaireResponsableAdmin?: SortOrderInput | SortOrder
    commentaireAdminGeneral?: SortOrderInput | SortOrder
    commentaireDG?: SortOrderInput | SortOrder
    commentaireLogisticien?: SortOrderInput | SortOrder
    dateReport?: SortOrderInput | SortOrder
    vehiculeId?: SortOrder
    soumisParId?: SortOrder
    valideParControleurFinancierId?: SortOrderInput | SortOrder
    valideParControleurGestionId?: SortOrderInput | SortOrder
    valideParResponsableAdminId?: SortOrderInput | SortOrder
    valideParAdminGeneralId?: SortOrderInput | SortOrder
    valideParDGId?: SortOrderInput | SortOrder
    typeDepense?: TypeDepenseOrderByWithRelationInput
    vehicule?: VehiculeOrderByWithRelationInput
    soumisPar?: UserOrderByWithRelationInput
    valideParControleurFinancier?: UserOrderByWithRelationInput
    valideParControleurGestion?: UserOrderByWithRelationInput
    valideParResponsableAdmin?: UserOrderByWithRelationInput
    valideParAdminGeneral?: UserOrderByWithRelationInput
    valideParDG?: UserOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    commentaires?: CommentaireOrderByRelationAggregateInput
  }

  export type DepenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DepenseWhereInput | DepenseWhereInput[]
    OR?: DepenseWhereInput[]
    NOT?: DepenseWhereInput | DepenseWhereInput[]
    dateIntervention?: DateTimeFilter<"Depense"> | Date | string
    typeVehicule?: StringFilter<"Depense"> | string
    codeParc?: StringFilter<"Depense"> | string
    typeDepenseId?: IntFilter<"Depense"> | number
    libelle?: StringFilter<"Depense"> | string
    quantite?: IntNullableFilter<"Depense"> | number | null
    montant?: IntFilter<"Depense"> | number
    statut?: EnumStatutDepenseFilter<"Depense"> | $Enums.StatutDepense
    dateCreation?: DateTimeFilter<"Depense"> | Date | string
    commentaireControleurFinancier?: StringNullableFilter<"Depense"> | string | null
    commentaireControleurGestion?: StringNullableFilter<"Depense"> | string | null
    commentaireResponsableAdmin?: StringNullableFilter<"Depense"> | string | null
    commentaireAdminGeneral?: StringNullableFilter<"Depense"> | string | null
    commentaireDG?: StringNullableFilter<"Depense"> | string | null
    commentaireLogisticien?: StringNullableFilter<"Depense"> | string | null
    dateReport?: DateTimeNullableFilter<"Depense"> | Date | string | null
    vehiculeId?: IntFilter<"Depense"> | number
    soumisParId?: IntFilter<"Depense"> | number
    valideParControleurFinancierId?: IntNullableFilter<"Depense"> | number | null
    valideParControleurGestionId?: IntNullableFilter<"Depense"> | number | null
    valideParResponsableAdminId?: IntNullableFilter<"Depense"> | number | null
    valideParAdminGeneralId?: IntNullableFilter<"Depense"> | number | null
    valideParDGId?: IntNullableFilter<"Depense"> | number | null
    typeDepense?: XOR<TypeDepenseScalarRelationFilter, TypeDepenseWhereInput>
    vehicule?: XOR<VehiculeScalarRelationFilter, VehiculeWhereInput>
    soumisPar?: XOR<UserScalarRelationFilter, UserWhereInput>
    valideParControleurFinancier?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    valideParControleurGestion?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    valideParResponsableAdmin?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    valideParAdminGeneral?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    valideParDG?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    documents?: DocumentListRelationFilter
    commentaires?: CommentaireListRelationFilter
  }, "id">

  export type DepenseOrderByWithAggregationInput = {
    id?: SortOrder
    dateIntervention?: SortOrder
    typeVehicule?: SortOrder
    codeParc?: SortOrder
    typeDepenseId?: SortOrder
    libelle?: SortOrder
    quantite?: SortOrderInput | SortOrder
    montant?: SortOrder
    statut?: SortOrder
    dateCreation?: SortOrder
    commentaireControleurFinancier?: SortOrderInput | SortOrder
    commentaireControleurGestion?: SortOrderInput | SortOrder
    commentaireResponsableAdmin?: SortOrderInput | SortOrder
    commentaireAdminGeneral?: SortOrderInput | SortOrder
    commentaireDG?: SortOrderInput | SortOrder
    commentaireLogisticien?: SortOrderInput | SortOrder
    dateReport?: SortOrderInput | SortOrder
    vehiculeId?: SortOrder
    soumisParId?: SortOrder
    valideParControleurFinancierId?: SortOrderInput | SortOrder
    valideParControleurGestionId?: SortOrderInput | SortOrder
    valideParResponsableAdminId?: SortOrderInput | SortOrder
    valideParAdminGeneralId?: SortOrderInput | SortOrder
    valideParDGId?: SortOrderInput | SortOrder
    _count?: DepenseCountOrderByAggregateInput
    _avg?: DepenseAvgOrderByAggregateInput
    _max?: DepenseMaxOrderByAggregateInput
    _min?: DepenseMinOrderByAggregateInput
    _sum?: DepenseSumOrderByAggregateInput
  }

  export type DepenseScalarWhereWithAggregatesInput = {
    AND?: DepenseScalarWhereWithAggregatesInput | DepenseScalarWhereWithAggregatesInput[]
    OR?: DepenseScalarWhereWithAggregatesInput[]
    NOT?: DepenseScalarWhereWithAggregatesInput | DepenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Depense"> | number
    dateIntervention?: DateTimeWithAggregatesFilter<"Depense"> | Date | string
    typeVehicule?: StringWithAggregatesFilter<"Depense"> | string
    codeParc?: StringWithAggregatesFilter<"Depense"> | string
    typeDepenseId?: IntWithAggregatesFilter<"Depense"> | number
    libelle?: StringWithAggregatesFilter<"Depense"> | string
    quantite?: IntNullableWithAggregatesFilter<"Depense"> | number | null
    montant?: IntWithAggregatesFilter<"Depense"> | number
    statut?: EnumStatutDepenseWithAggregatesFilter<"Depense"> | $Enums.StatutDepense
    dateCreation?: DateTimeWithAggregatesFilter<"Depense"> | Date | string
    commentaireControleurFinancier?: StringNullableWithAggregatesFilter<"Depense"> | string | null
    commentaireControleurGestion?: StringNullableWithAggregatesFilter<"Depense"> | string | null
    commentaireResponsableAdmin?: StringNullableWithAggregatesFilter<"Depense"> | string | null
    commentaireAdminGeneral?: StringNullableWithAggregatesFilter<"Depense"> | string | null
    commentaireDG?: StringNullableWithAggregatesFilter<"Depense"> | string | null
    commentaireLogisticien?: StringNullableWithAggregatesFilter<"Depense"> | string | null
    dateReport?: DateTimeNullableWithAggregatesFilter<"Depense"> | Date | string | null
    vehiculeId?: IntWithAggregatesFilter<"Depense"> | number
    soumisParId?: IntWithAggregatesFilter<"Depense"> | number
    valideParControleurFinancierId?: IntNullableWithAggregatesFilter<"Depense"> | number | null
    valideParControleurGestionId?: IntNullableWithAggregatesFilter<"Depense"> | number | null
    valideParResponsableAdminId?: IntNullableWithAggregatesFilter<"Depense"> | number | null
    valideParAdminGeneralId?: IntNullableWithAggregatesFilter<"Depense"> | number | null
    valideParDGId?: IntNullableWithAggregatesFilter<"Depense"> | number | null
  }

  export type CommentaireWhereInput = {
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    id?: IntFilter<"Commentaire"> | number
    texte?: StringFilter<"Commentaire"> | string
    auteur?: StringFilter<"Commentaire"> | string
    date?: DateTimeFilter<"Commentaire"> | Date | string
    depenseId?: IntFilter<"Commentaire"> | number
    depense?: XOR<DepenseScalarRelationFilter, DepenseWhereInput>
  }

  export type CommentaireOrderByWithRelationInput = {
    id?: SortOrder
    texte?: SortOrder
    auteur?: SortOrder
    date?: SortOrder
    depenseId?: SortOrder
    depense?: DepenseOrderByWithRelationInput
  }

  export type CommentaireWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentaireWhereInput | CommentaireWhereInput[]
    OR?: CommentaireWhereInput[]
    NOT?: CommentaireWhereInput | CommentaireWhereInput[]
    texte?: StringFilter<"Commentaire"> | string
    auteur?: StringFilter<"Commentaire"> | string
    date?: DateTimeFilter<"Commentaire"> | Date | string
    depenseId?: IntFilter<"Commentaire"> | number
    depense?: XOR<DepenseScalarRelationFilter, DepenseWhereInput>
  }, "id">

  export type CommentaireOrderByWithAggregationInput = {
    id?: SortOrder
    texte?: SortOrder
    auteur?: SortOrder
    date?: SortOrder
    depenseId?: SortOrder
    _count?: CommentaireCountOrderByAggregateInput
    _avg?: CommentaireAvgOrderByAggregateInput
    _max?: CommentaireMaxOrderByAggregateInput
    _min?: CommentaireMinOrderByAggregateInput
    _sum?: CommentaireSumOrderByAggregateInput
  }

  export type CommentaireScalarWhereWithAggregatesInput = {
    AND?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    OR?: CommentaireScalarWhereWithAggregatesInput[]
    NOT?: CommentaireScalarWhereWithAggregatesInput | CommentaireScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Commentaire"> | number
    texte?: StringWithAggregatesFilter<"Commentaire"> | string
    auteur?: StringWithAggregatesFilter<"Commentaire"> | string
    date?: DateTimeWithAggregatesFilter<"Commentaire"> | Date | string
    depenseId?: IntWithAggregatesFilter<"Commentaire"> | number
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: IntFilter<"Document"> | number
    url?: StringFilter<"Document"> | string
    nom?: StringFilter<"Document"> | string
    depenseId?: IntFilter<"Document"> | number
    depense?: XOR<DepenseScalarRelationFilter, DepenseWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    nom?: SortOrder
    depenseId?: SortOrder
    depense?: DepenseOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    url?: StringFilter<"Document"> | string
    nom?: StringFilter<"Document"> | string
    depenseId?: IntFilter<"Document"> | number
    depense?: XOR<DepenseScalarRelationFilter, DepenseWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    nom?: SortOrder
    depenseId?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Document"> | number
    url?: StringWithAggregatesFilter<"Document"> | string
    nom?: StringWithAggregatesFilter<"Document"> | string
    depenseId?: IntWithAggregatesFilter<"Document"> | number
  }

  export type UserCreateInput = {
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    demandesSoumises?: DepenseCreateNestedManyWithoutSoumisParInput
    validationsControleurFinancier?: DepenseCreateNestedManyWithoutValideParControleurFinancierInput
    validationsControleurGestion?: DepenseCreateNestedManyWithoutValideParControleurGestionInput
    validationsResponsableAdmin?: DepenseCreateNestedManyWithoutValideParResponsableAdminInput
    validationsAdminGeneral?: DepenseCreateNestedManyWithoutValideParAdminGeneralInput
    validationsDG?: DepenseCreateNestedManyWithoutValideParDGInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    demandesSoumises?: DepenseUncheckedCreateNestedManyWithoutSoumisParInput
    validationsControleurFinancier?: DepenseUncheckedCreateNestedManyWithoutValideParControleurFinancierInput
    validationsControleurGestion?: DepenseUncheckedCreateNestedManyWithoutValideParControleurGestionInput
    validationsResponsableAdmin?: DepenseUncheckedCreateNestedManyWithoutValideParResponsableAdminInput
    validationsAdminGeneral?: DepenseUncheckedCreateNestedManyWithoutValideParAdminGeneralInput
    validationsDG?: DepenseUncheckedCreateNestedManyWithoutValideParDGInput
  }

  export type UserUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesSoumises?: DepenseUpdateManyWithoutSoumisParNestedInput
    validationsControleurFinancier?: DepenseUpdateManyWithoutValideParControleurFinancierNestedInput
    validationsControleurGestion?: DepenseUpdateManyWithoutValideParControleurGestionNestedInput
    validationsResponsableAdmin?: DepenseUpdateManyWithoutValideParResponsableAdminNestedInput
    validationsAdminGeneral?: DepenseUpdateManyWithoutValideParAdminGeneralNestedInput
    validationsDG?: DepenseUpdateManyWithoutValideParDGNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesSoumises?: DepenseUncheckedUpdateManyWithoutSoumisParNestedInput
    validationsControleurFinancier?: DepenseUncheckedUpdateManyWithoutValideParControleurFinancierNestedInput
    validationsControleurGestion?: DepenseUncheckedUpdateManyWithoutValideParControleurGestionNestedInput
    validationsResponsableAdmin?: DepenseUncheckedUpdateManyWithoutValideParResponsableAdminNestedInput
    validationsAdminGeneral?: DepenseUncheckedUpdateManyWithoutValideParAdminGeneralNestedInput
    validationsDG?: DepenseUncheckedUpdateManyWithoutValideParDGNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiculeCreateInput = {
    type: string
    immatriculation: string
    codeParc?: string | null
    description?: string | null
    statut?: string | null
    createdAt?: Date | string
    depenses?: DepenseCreateNestedManyWithoutVehiculeInput
  }

  export type VehiculeUncheckedCreateInput = {
    id?: number
    type: string
    immatriculation: string
    codeParc?: string | null
    description?: string | null
    statut?: string | null
    createdAt?: Date | string
    depenses?: DepenseUncheckedCreateNestedManyWithoutVehiculeInput
  }

  export type VehiculeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    immatriculation?: StringFieldUpdateOperationsInput | string
    codeParc?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depenses?: DepenseUpdateManyWithoutVehiculeNestedInput
  }

  export type VehiculeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    immatriculation?: StringFieldUpdateOperationsInput | string
    codeParc?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depenses?: DepenseUncheckedUpdateManyWithoutVehiculeNestedInput
  }

  export type VehiculeCreateManyInput = {
    id?: number
    type: string
    immatriculation: string
    codeParc?: string | null
    description?: string | null
    statut?: string | null
    createdAt?: Date | string
  }

  export type VehiculeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    immatriculation?: StringFieldUpdateOperationsInput | string
    codeParc?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiculeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    immatriculation?: StringFieldUpdateOperationsInput | string
    codeParc?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeDepenseCreateInput = {
    nom: string
    description?: string | null
    createdAt?: Date | string
    depenses?: DepenseCreateNestedManyWithoutTypeDepenseInput
  }

  export type TypeDepenseUncheckedCreateInput = {
    id?: number
    nom: string
    description?: string | null
    createdAt?: Date | string
    depenses?: DepenseUncheckedCreateNestedManyWithoutTypeDepenseInput
  }

  export type TypeDepenseUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depenses?: DepenseUpdateManyWithoutTypeDepenseNestedInput
  }

  export type TypeDepenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depenses?: DepenseUncheckedUpdateManyWithoutTypeDepenseNestedInput
  }

  export type TypeDepenseCreateManyInput = {
    id?: number
    nom: string
    description?: string | null
    createdAt?: Date | string
  }

  export type TypeDepenseUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeDepenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepenseCreateInput = {
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    typeDepense: TypeDepenseCreateNestedOneWithoutDepensesInput
    vehicule: VehiculeCreateNestedOneWithoutDepensesInput
    soumisPar: UserCreateNestedOneWithoutDemandesSoumisesInput
    valideParControleurFinancier?: UserCreateNestedOneWithoutValidationsControleurFinancierInput
    valideParControleurGestion?: UserCreateNestedOneWithoutValidationsControleurGestionInput
    valideParResponsableAdmin?: UserCreateNestedOneWithoutValidationsResponsableAdminInput
    valideParAdminGeneral?: UserCreateNestedOneWithoutValidationsAdminGeneralInput
    valideParDG?: UserCreateNestedOneWithoutValidationsDGInput
    documents?: DocumentCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireCreateNestedManyWithoutDepenseInput
  }

  export type DepenseUncheckedCreateInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
    documents?: DocumentUncheckedCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDepenseInput
  }

  export type DepenseUpdateInput = {
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeDepense?: TypeDepenseUpdateOneRequiredWithoutDepensesNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutDepensesNestedInput
    soumisPar?: UserUpdateOneRequiredWithoutDemandesSoumisesNestedInput
    valideParControleurFinancier?: UserUpdateOneWithoutValidationsControleurFinancierNestedInput
    valideParControleurGestion?: UserUpdateOneWithoutValidationsControleurGestionNestedInput
    valideParResponsableAdmin?: UserUpdateOneWithoutValidationsResponsableAdminNestedInput
    valideParAdminGeneral?: UserUpdateOneWithoutValidationsAdminGeneralNestedInput
    valideParDG?: UserUpdateOneWithoutValidationsDGNestedInput
    documents?: DocumentUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
    documents?: DocumentUncheckedUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseCreateManyInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
  }

  export type DepenseUpdateManyMutationInput = {
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CommentaireCreateInput = {
    texte: string
    auteur: string
    date?: Date | string
    depense: DepenseCreateNestedOneWithoutCommentairesInput
  }

  export type CommentaireUncheckedCreateInput = {
    id?: number
    texte: string
    auteur: string
    date?: Date | string
    depenseId: number
  }

  export type CommentaireUpdateInput = {
    texte?: StringFieldUpdateOperationsInput | string
    auteur?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    depense?: DepenseUpdateOneRequiredWithoutCommentairesNestedInput
  }

  export type CommentaireUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    texte?: StringFieldUpdateOperationsInput | string
    auteur?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    depenseId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentaireCreateManyInput = {
    id?: number
    texte: string
    auteur: string
    date?: Date | string
    depenseId: number
  }

  export type CommentaireUpdateManyMutationInput = {
    texte?: StringFieldUpdateOperationsInput | string
    auteur?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    texte?: StringFieldUpdateOperationsInput | string
    auteur?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    depenseId?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentCreateInput = {
    url: string
    nom: string
    depense: DepenseCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: number
    url: string
    nom: string
    depenseId: number
  }

  export type DocumentUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    depense?: DepenseUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    depenseId?: IntFieldUpdateOperationsInput | number
  }

  export type DocumentCreateManyInput = {
    id?: number
    url: string
    nom: string
    depenseId: number
  }

  export type DocumentUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    depenseId?: IntFieldUpdateOperationsInput | number
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type DepenseListRelationFilter = {
    every?: DepenseWhereInput
    some?: DepenseWhereInput
    none?: DepenseWhereInput
  }

  export type DepenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehiculeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    immatriculation?: SortOrder
    codeParc?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
  }

  export type VehiculeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehiculeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    immatriculation?: SortOrder
    codeParc?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
  }

  export type VehiculeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    immatriculation?: SortOrder
    codeParc?: SortOrder
    description?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
  }

  export type VehiculeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TypeDepenseCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type TypeDepenseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TypeDepenseMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type TypeDepenseMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type TypeDepenseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumStatutDepenseFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDepense | EnumStatutDepenseFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDepense[] | ListEnumStatutDepenseFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDepense[] | ListEnumStatutDepenseFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDepenseFilter<$PrismaModel> | $Enums.StatutDepense
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TypeDepenseScalarRelationFilter = {
    is?: TypeDepenseWhereInput
    isNot?: TypeDepenseWhereInput
  }

  export type VehiculeScalarRelationFilter = {
    is?: VehiculeWhereInput
    isNot?: VehiculeWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type CommentaireListRelationFilter = {
    every?: CommentaireWhereInput
    some?: CommentaireWhereInput
    none?: CommentaireWhereInput
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentaireOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepenseCountOrderByAggregateInput = {
    id?: SortOrder
    dateIntervention?: SortOrder
    typeVehicule?: SortOrder
    codeParc?: SortOrder
    typeDepenseId?: SortOrder
    libelle?: SortOrder
    quantite?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    dateCreation?: SortOrder
    commentaireControleurFinancier?: SortOrder
    commentaireControleurGestion?: SortOrder
    commentaireResponsableAdmin?: SortOrder
    commentaireAdminGeneral?: SortOrder
    commentaireDG?: SortOrder
    commentaireLogisticien?: SortOrder
    dateReport?: SortOrder
    vehiculeId?: SortOrder
    soumisParId?: SortOrder
    valideParControleurFinancierId?: SortOrder
    valideParControleurGestionId?: SortOrder
    valideParResponsableAdminId?: SortOrder
    valideParAdminGeneralId?: SortOrder
    valideParDGId?: SortOrder
  }

  export type DepenseAvgOrderByAggregateInput = {
    id?: SortOrder
    typeDepenseId?: SortOrder
    quantite?: SortOrder
    montant?: SortOrder
    vehiculeId?: SortOrder
    soumisParId?: SortOrder
    valideParControleurFinancierId?: SortOrder
    valideParControleurGestionId?: SortOrder
    valideParResponsableAdminId?: SortOrder
    valideParAdminGeneralId?: SortOrder
    valideParDGId?: SortOrder
  }

  export type DepenseMaxOrderByAggregateInput = {
    id?: SortOrder
    dateIntervention?: SortOrder
    typeVehicule?: SortOrder
    codeParc?: SortOrder
    typeDepenseId?: SortOrder
    libelle?: SortOrder
    quantite?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    dateCreation?: SortOrder
    commentaireControleurFinancier?: SortOrder
    commentaireControleurGestion?: SortOrder
    commentaireResponsableAdmin?: SortOrder
    commentaireAdminGeneral?: SortOrder
    commentaireDG?: SortOrder
    commentaireLogisticien?: SortOrder
    dateReport?: SortOrder
    vehiculeId?: SortOrder
    soumisParId?: SortOrder
    valideParControleurFinancierId?: SortOrder
    valideParControleurGestionId?: SortOrder
    valideParResponsableAdminId?: SortOrder
    valideParAdminGeneralId?: SortOrder
    valideParDGId?: SortOrder
  }

  export type DepenseMinOrderByAggregateInput = {
    id?: SortOrder
    dateIntervention?: SortOrder
    typeVehicule?: SortOrder
    codeParc?: SortOrder
    typeDepenseId?: SortOrder
    libelle?: SortOrder
    quantite?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    dateCreation?: SortOrder
    commentaireControleurFinancier?: SortOrder
    commentaireControleurGestion?: SortOrder
    commentaireResponsableAdmin?: SortOrder
    commentaireAdminGeneral?: SortOrder
    commentaireDG?: SortOrder
    commentaireLogisticien?: SortOrder
    dateReport?: SortOrder
    vehiculeId?: SortOrder
    soumisParId?: SortOrder
    valideParControleurFinancierId?: SortOrder
    valideParControleurGestionId?: SortOrder
    valideParResponsableAdminId?: SortOrder
    valideParAdminGeneralId?: SortOrder
    valideParDGId?: SortOrder
  }

  export type DepenseSumOrderByAggregateInput = {
    id?: SortOrder
    typeDepenseId?: SortOrder
    quantite?: SortOrder
    montant?: SortOrder
    vehiculeId?: SortOrder
    soumisParId?: SortOrder
    valideParControleurFinancierId?: SortOrder
    valideParControleurGestionId?: SortOrder
    valideParResponsableAdminId?: SortOrder
    valideParAdminGeneralId?: SortOrder
    valideParDGId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumStatutDepenseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDepense | EnumStatutDepenseFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDepense[] | ListEnumStatutDepenseFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDepense[] | ListEnumStatutDepenseFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDepenseWithAggregatesFilter<$PrismaModel> | $Enums.StatutDepense
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDepenseFilter<$PrismaModel>
    _max?: NestedEnumStatutDepenseFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DepenseScalarRelationFilter = {
    is?: DepenseWhereInput
    isNot?: DepenseWhereInput
  }

  export type CommentaireCountOrderByAggregateInput = {
    id?: SortOrder
    texte?: SortOrder
    auteur?: SortOrder
    date?: SortOrder
    depenseId?: SortOrder
  }

  export type CommentaireAvgOrderByAggregateInput = {
    id?: SortOrder
    depenseId?: SortOrder
  }

  export type CommentaireMaxOrderByAggregateInput = {
    id?: SortOrder
    texte?: SortOrder
    auteur?: SortOrder
    date?: SortOrder
    depenseId?: SortOrder
  }

  export type CommentaireMinOrderByAggregateInput = {
    id?: SortOrder
    texte?: SortOrder
    auteur?: SortOrder
    date?: SortOrder
    depenseId?: SortOrder
  }

  export type CommentaireSumOrderByAggregateInput = {
    id?: SortOrder
    depenseId?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    nom?: SortOrder
    depenseId?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    depenseId?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    nom?: SortOrder
    depenseId?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    nom?: SortOrder
    depenseId?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    id?: SortOrder
    depenseId?: SortOrder
  }

  export type DepenseCreateNestedManyWithoutSoumisParInput = {
    create?: XOR<DepenseCreateWithoutSoumisParInput, DepenseUncheckedCreateWithoutSoumisParInput> | DepenseCreateWithoutSoumisParInput[] | DepenseUncheckedCreateWithoutSoumisParInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutSoumisParInput | DepenseCreateOrConnectWithoutSoumisParInput[]
    createMany?: DepenseCreateManySoumisParInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseCreateNestedManyWithoutValideParControleurFinancierInput = {
    create?: XOR<DepenseCreateWithoutValideParControleurFinancierInput, DepenseUncheckedCreateWithoutValideParControleurFinancierInput> | DepenseCreateWithoutValideParControleurFinancierInput[] | DepenseUncheckedCreateWithoutValideParControleurFinancierInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParControleurFinancierInput | DepenseCreateOrConnectWithoutValideParControleurFinancierInput[]
    createMany?: DepenseCreateManyValideParControleurFinancierInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseCreateNestedManyWithoutValideParControleurGestionInput = {
    create?: XOR<DepenseCreateWithoutValideParControleurGestionInput, DepenseUncheckedCreateWithoutValideParControleurGestionInput> | DepenseCreateWithoutValideParControleurGestionInput[] | DepenseUncheckedCreateWithoutValideParControleurGestionInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParControleurGestionInput | DepenseCreateOrConnectWithoutValideParControleurGestionInput[]
    createMany?: DepenseCreateManyValideParControleurGestionInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseCreateNestedManyWithoutValideParResponsableAdminInput = {
    create?: XOR<DepenseCreateWithoutValideParResponsableAdminInput, DepenseUncheckedCreateWithoutValideParResponsableAdminInput> | DepenseCreateWithoutValideParResponsableAdminInput[] | DepenseUncheckedCreateWithoutValideParResponsableAdminInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParResponsableAdminInput | DepenseCreateOrConnectWithoutValideParResponsableAdminInput[]
    createMany?: DepenseCreateManyValideParResponsableAdminInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseCreateNestedManyWithoutValideParAdminGeneralInput = {
    create?: XOR<DepenseCreateWithoutValideParAdminGeneralInput, DepenseUncheckedCreateWithoutValideParAdminGeneralInput> | DepenseCreateWithoutValideParAdminGeneralInput[] | DepenseUncheckedCreateWithoutValideParAdminGeneralInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParAdminGeneralInput | DepenseCreateOrConnectWithoutValideParAdminGeneralInput[]
    createMany?: DepenseCreateManyValideParAdminGeneralInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseCreateNestedManyWithoutValideParDGInput = {
    create?: XOR<DepenseCreateWithoutValideParDGInput, DepenseUncheckedCreateWithoutValideParDGInput> | DepenseCreateWithoutValideParDGInput[] | DepenseUncheckedCreateWithoutValideParDGInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParDGInput | DepenseCreateOrConnectWithoutValideParDGInput[]
    createMany?: DepenseCreateManyValideParDGInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseUncheckedCreateNestedManyWithoutSoumisParInput = {
    create?: XOR<DepenseCreateWithoutSoumisParInput, DepenseUncheckedCreateWithoutSoumisParInput> | DepenseCreateWithoutSoumisParInput[] | DepenseUncheckedCreateWithoutSoumisParInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutSoumisParInput | DepenseCreateOrConnectWithoutSoumisParInput[]
    createMany?: DepenseCreateManySoumisParInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseUncheckedCreateNestedManyWithoutValideParControleurFinancierInput = {
    create?: XOR<DepenseCreateWithoutValideParControleurFinancierInput, DepenseUncheckedCreateWithoutValideParControleurFinancierInput> | DepenseCreateWithoutValideParControleurFinancierInput[] | DepenseUncheckedCreateWithoutValideParControleurFinancierInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParControleurFinancierInput | DepenseCreateOrConnectWithoutValideParControleurFinancierInput[]
    createMany?: DepenseCreateManyValideParControleurFinancierInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseUncheckedCreateNestedManyWithoutValideParControleurGestionInput = {
    create?: XOR<DepenseCreateWithoutValideParControleurGestionInput, DepenseUncheckedCreateWithoutValideParControleurGestionInput> | DepenseCreateWithoutValideParControleurGestionInput[] | DepenseUncheckedCreateWithoutValideParControleurGestionInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParControleurGestionInput | DepenseCreateOrConnectWithoutValideParControleurGestionInput[]
    createMany?: DepenseCreateManyValideParControleurGestionInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseUncheckedCreateNestedManyWithoutValideParResponsableAdminInput = {
    create?: XOR<DepenseCreateWithoutValideParResponsableAdminInput, DepenseUncheckedCreateWithoutValideParResponsableAdminInput> | DepenseCreateWithoutValideParResponsableAdminInput[] | DepenseUncheckedCreateWithoutValideParResponsableAdminInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParResponsableAdminInput | DepenseCreateOrConnectWithoutValideParResponsableAdminInput[]
    createMany?: DepenseCreateManyValideParResponsableAdminInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseUncheckedCreateNestedManyWithoutValideParAdminGeneralInput = {
    create?: XOR<DepenseCreateWithoutValideParAdminGeneralInput, DepenseUncheckedCreateWithoutValideParAdminGeneralInput> | DepenseCreateWithoutValideParAdminGeneralInput[] | DepenseUncheckedCreateWithoutValideParAdminGeneralInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParAdminGeneralInput | DepenseCreateOrConnectWithoutValideParAdminGeneralInput[]
    createMany?: DepenseCreateManyValideParAdminGeneralInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseUncheckedCreateNestedManyWithoutValideParDGInput = {
    create?: XOR<DepenseCreateWithoutValideParDGInput, DepenseUncheckedCreateWithoutValideParDGInput> | DepenseCreateWithoutValideParDGInput[] | DepenseUncheckedCreateWithoutValideParDGInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParDGInput | DepenseCreateOrConnectWithoutValideParDGInput[]
    createMany?: DepenseCreateManyValideParDGInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DepenseUpdateManyWithoutSoumisParNestedInput = {
    create?: XOR<DepenseCreateWithoutSoumisParInput, DepenseUncheckedCreateWithoutSoumisParInput> | DepenseCreateWithoutSoumisParInput[] | DepenseUncheckedCreateWithoutSoumisParInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutSoumisParInput | DepenseCreateOrConnectWithoutSoumisParInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutSoumisParInput | DepenseUpsertWithWhereUniqueWithoutSoumisParInput[]
    createMany?: DepenseCreateManySoumisParInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutSoumisParInput | DepenseUpdateWithWhereUniqueWithoutSoumisParInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutSoumisParInput | DepenseUpdateManyWithWhereWithoutSoumisParInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseUpdateManyWithoutValideParControleurFinancierNestedInput = {
    create?: XOR<DepenseCreateWithoutValideParControleurFinancierInput, DepenseUncheckedCreateWithoutValideParControleurFinancierInput> | DepenseCreateWithoutValideParControleurFinancierInput[] | DepenseUncheckedCreateWithoutValideParControleurFinancierInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParControleurFinancierInput | DepenseCreateOrConnectWithoutValideParControleurFinancierInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutValideParControleurFinancierInput | DepenseUpsertWithWhereUniqueWithoutValideParControleurFinancierInput[]
    createMany?: DepenseCreateManyValideParControleurFinancierInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutValideParControleurFinancierInput | DepenseUpdateWithWhereUniqueWithoutValideParControleurFinancierInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutValideParControleurFinancierInput | DepenseUpdateManyWithWhereWithoutValideParControleurFinancierInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseUpdateManyWithoutValideParControleurGestionNestedInput = {
    create?: XOR<DepenseCreateWithoutValideParControleurGestionInput, DepenseUncheckedCreateWithoutValideParControleurGestionInput> | DepenseCreateWithoutValideParControleurGestionInput[] | DepenseUncheckedCreateWithoutValideParControleurGestionInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParControleurGestionInput | DepenseCreateOrConnectWithoutValideParControleurGestionInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutValideParControleurGestionInput | DepenseUpsertWithWhereUniqueWithoutValideParControleurGestionInput[]
    createMany?: DepenseCreateManyValideParControleurGestionInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutValideParControleurGestionInput | DepenseUpdateWithWhereUniqueWithoutValideParControleurGestionInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutValideParControleurGestionInput | DepenseUpdateManyWithWhereWithoutValideParControleurGestionInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseUpdateManyWithoutValideParResponsableAdminNestedInput = {
    create?: XOR<DepenseCreateWithoutValideParResponsableAdminInput, DepenseUncheckedCreateWithoutValideParResponsableAdminInput> | DepenseCreateWithoutValideParResponsableAdminInput[] | DepenseUncheckedCreateWithoutValideParResponsableAdminInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParResponsableAdminInput | DepenseCreateOrConnectWithoutValideParResponsableAdminInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutValideParResponsableAdminInput | DepenseUpsertWithWhereUniqueWithoutValideParResponsableAdminInput[]
    createMany?: DepenseCreateManyValideParResponsableAdminInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutValideParResponsableAdminInput | DepenseUpdateWithWhereUniqueWithoutValideParResponsableAdminInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutValideParResponsableAdminInput | DepenseUpdateManyWithWhereWithoutValideParResponsableAdminInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseUpdateManyWithoutValideParAdminGeneralNestedInput = {
    create?: XOR<DepenseCreateWithoutValideParAdminGeneralInput, DepenseUncheckedCreateWithoutValideParAdminGeneralInput> | DepenseCreateWithoutValideParAdminGeneralInput[] | DepenseUncheckedCreateWithoutValideParAdminGeneralInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParAdminGeneralInput | DepenseCreateOrConnectWithoutValideParAdminGeneralInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutValideParAdminGeneralInput | DepenseUpsertWithWhereUniqueWithoutValideParAdminGeneralInput[]
    createMany?: DepenseCreateManyValideParAdminGeneralInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutValideParAdminGeneralInput | DepenseUpdateWithWhereUniqueWithoutValideParAdminGeneralInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutValideParAdminGeneralInput | DepenseUpdateManyWithWhereWithoutValideParAdminGeneralInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseUpdateManyWithoutValideParDGNestedInput = {
    create?: XOR<DepenseCreateWithoutValideParDGInput, DepenseUncheckedCreateWithoutValideParDGInput> | DepenseCreateWithoutValideParDGInput[] | DepenseUncheckedCreateWithoutValideParDGInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParDGInput | DepenseCreateOrConnectWithoutValideParDGInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutValideParDGInput | DepenseUpsertWithWhereUniqueWithoutValideParDGInput[]
    createMany?: DepenseCreateManyValideParDGInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutValideParDGInput | DepenseUpdateWithWhereUniqueWithoutValideParDGInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutValideParDGInput | DepenseUpdateManyWithWhereWithoutValideParDGInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DepenseUncheckedUpdateManyWithoutSoumisParNestedInput = {
    create?: XOR<DepenseCreateWithoutSoumisParInput, DepenseUncheckedCreateWithoutSoumisParInput> | DepenseCreateWithoutSoumisParInput[] | DepenseUncheckedCreateWithoutSoumisParInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutSoumisParInput | DepenseCreateOrConnectWithoutSoumisParInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutSoumisParInput | DepenseUpsertWithWhereUniqueWithoutSoumisParInput[]
    createMany?: DepenseCreateManySoumisParInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutSoumisParInput | DepenseUpdateWithWhereUniqueWithoutSoumisParInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutSoumisParInput | DepenseUpdateManyWithWhereWithoutSoumisParInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseUncheckedUpdateManyWithoutValideParControleurFinancierNestedInput = {
    create?: XOR<DepenseCreateWithoutValideParControleurFinancierInput, DepenseUncheckedCreateWithoutValideParControleurFinancierInput> | DepenseCreateWithoutValideParControleurFinancierInput[] | DepenseUncheckedCreateWithoutValideParControleurFinancierInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParControleurFinancierInput | DepenseCreateOrConnectWithoutValideParControleurFinancierInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutValideParControleurFinancierInput | DepenseUpsertWithWhereUniqueWithoutValideParControleurFinancierInput[]
    createMany?: DepenseCreateManyValideParControleurFinancierInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutValideParControleurFinancierInput | DepenseUpdateWithWhereUniqueWithoutValideParControleurFinancierInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutValideParControleurFinancierInput | DepenseUpdateManyWithWhereWithoutValideParControleurFinancierInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseUncheckedUpdateManyWithoutValideParControleurGestionNestedInput = {
    create?: XOR<DepenseCreateWithoutValideParControleurGestionInput, DepenseUncheckedCreateWithoutValideParControleurGestionInput> | DepenseCreateWithoutValideParControleurGestionInput[] | DepenseUncheckedCreateWithoutValideParControleurGestionInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParControleurGestionInput | DepenseCreateOrConnectWithoutValideParControleurGestionInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutValideParControleurGestionInput | DepenseUpsertWithWhereUniqueWithoutValideParControleurGestionInput[]
    createMany?: DepenseCreateManyValideParControleurGestionInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutValideParControleurGestionInput | DepenseUpdateWithWhereUniqueWithoutValideParControleurGestionInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutValideParControleurGestionInput | DepenseUpdateManyWithWhereWithoutValideParControleurGestionInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseUncheckedUpdateManyWithoutValideParResponsableAdminNestedInput = {
    create?: XOR<DepenseCreateWithoutValideParResponsableAdminInput, DepenseUncheckedCreateWithoutValideParResponsableAdminInput> | DepenseCreateWithoutValideParResponsableAdminInput[] | DepenseUncheckedCreateWithoutValideParResponsableAdminInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParResponsableAdminInput | DepenseCreateOrConnectWithoutValideParResponsableAdminInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutValideParResponsableAdminInput | DepenseUpsertWithWhereUniqueWithoutValideParResponsableAdminInput[]
    createMany?: DepenseCreateManyValideParResponsableAdminInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutValideParResponsableAdminInput | DepenseUpdateWithWhereUniqueWithoutValideParResponsableAdminInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutValideParResponsableAdminInput | DepenseUpdateManyWithWhereWithoutValideParResponsableAdminInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseUncheckedUpdateManyWithoutValideParAdminGeneralNestedInput = {
    create?: XOR<DepenseCreateWithoutValideParAdminGeneralInput, DepenseUncheckedCreateWithoutValideParAdminGeneralInput> | DepenseCreateWithoutValideParAdminGeneralInput[] | DepenseUncheckedCreateWithoutValideParAdminGeneralInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParAdminGeneralInput | DepenseCreateOrConnectWithoutValideParAdminGeneralInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutValideParAdminGeneralInput | DepenseUpsertWithWhereUniqueWithoutValideParAdminGeneralInput[]
    createMany?: DepenseCreateManyValideParAdminGeneralInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutValideParAdminGeneralInput | DepenseUpdateWithWhereUniqueWithoutValideParAdminGeneralInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutValideParAdminGeneralInput | DepenseUpdateManyWithWhereWithoutValideParAdminGeneralInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseUncheckedUpdateManyWithoutValideParDGNestedInput = {
    create?: XOR<DepenseCreateWithoutValideParDGInput, DepenseUncheckedCreateWithoutValideParDGInput> | DepenseCreateWithoutValideParDGInput[] | DepenseUncheckedCreateWithoutValideParDGInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutValideParDGInput | DepenseCreateOrConnectWithoutValideParDGInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutValideParDGInput | DepenseUpsertWithWhereUniqueWithoutValideParDGInput[]
    createMany?: DepenseCreateManyValideParDGInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutValideParDGInput | DepenseUpdateWithWhereUniqueWithoutValideParDGInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutValideParDGInput | DepenseUpdateManyWithWhereWithoutValideParDGInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseCreateNestedManyWithoutVehiculeInput = {
    create?: XOR<DepenseCreateWithoutVehiculeInput, DepenseUncheckedCreateWithoutVehiculeInput> | DepenseCreateWithoutVehiculeInput[] | DepenseUncheckedCreateWithoutVehiculeInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutVehiculeInput | DepenseCreateOrConnectWithoutVehiculeInput[]
    createMany?: DepenseCreateManyVehiculeInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseUncheckedCreateNestedManyWithoutVehiculeInput = {
    create?: XOR<DepenseCreateWithoutVehiculeInput, DepenseUncheckedCreateWithoutVehiculeInput> | DepenseCreateWithoutVehiculeInput[] | DepenseUncheckedCreateWithoutVehiculeInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutVehiculeInput | DepenseCreateOrConnectWithoutVehiculeInput[]
    createMany?: DepenseCreateManyVehiculeInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DepenseUpdateManyWithoutVehiculeNestedInput = {
    create?: XOR<DepenseCreateWithoutVehiculeInput, DepenseUncheckedCreateWithoutVehiculeInput> | DepenseCreateWithoutVehiculeInput[] | DepenseUncheckedCreateWithoutVehiculeInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutVehiculeInput | DepenseCreateOrConnectWithoutVehiculeInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutVehiculeInput | DepenseUpsertWithWhereUniqueWithoutVehiculeInput[]
    createMany?: DepenseCreateManyVehiculeInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutVehiculeInput | DepenseUpdateWithWhereUniqueWithoutVehiculeInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutVehiculeInput | DepenseUpdateManyWithWhereWithoutVehiculeInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseUncheckedUpdateManyWithoutVehiculeNestedInput = {
    create?: XOR<DepenseCreateWithoutVehiculeInput, DepenseUncheckedCreateWithoutVehiculeInput> | DepenseCreateWithoutVehiculeInput[] | DepenseUncheckedCreateWithoutVehiculeInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutVehiculeInput | DepenseCreateOrConnectWithoutVehiculeInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutVehiculeInput | DepenseUpsertWithWhereUniqueWithoutVehiculeInput[]
    createMany?: DepenseCreateManyVehiculeInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutVehiculeInput | DepenseUpdateWithWhereUniqueWithoutVehiculeInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutVehiculeInput | DepenseUpdateManyWithWhereWithoutVehiculeInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseCreateNestedManyWithoutTypeDepenseInput = {
    create?: XOR<DepenseCreateWithoutTypeDepenseInput, DepenseUncheckedCreateWithoutTypeDepenseInput> | DepenseCreateWithoutTypeDepenseInput[] | DepenseUncheckedCreateWithoutTypeDepenseInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutTypeDepenseInput | DepenseCreateOrConnectWithoutTypeDepenseInput[]
    createMany?: DepenseCreateManyTypeDepenseInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseUncheckedCreateNestedManyWithoutTypeDepenseInput = {
    create?: XOR<DepenseCreateWithoutTypeDepenseInput, DepenseUncheckedCreateWithoutTypeDepenseInput> | DepenseCreateWithoutTypeDepenseInput[] | DepenseUncheckedCreateWithoutTypeDepenseInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutTypeDepenseInput | DepenseCreateOrConnectWithoutTypeDepenseInput[]
    createMany?: DepenseCreateManyTypeDepenseInputEnvelope
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
  }

  export type DepenseUpdateManyWithoutTypeDepenseNestedInput = {
    create?: XOR<DepenseCreateWithoutTypeDepenseInput, DepenseUncheckedCreateWithoutTypeDepenseInput> | DepenseCreateWithoutTypeDepenseInput[] | DepenseUncheckedCreateWithoutTypeDepenseInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutTypeDepenseInput | DepenseCreateOrConnectWithoutTypeDepenseInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutTypeDepenseInput | DepenseUpsertWithWhereUniqueWithoutTypeDepenseInput[]
    createMany?: DepenseCreateManyTypeDepenseInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutTypeDepenseInput | DepenseUpdateWithWhereUniqueWithoutTypeDepenseInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutTypeDepenseInput | DepenseUpdateManyWithWhereWithoutTypeDepenseInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type DepenseUncheckedUpdateManyWithoutTypeDepenseNestedInput = {
    create?: XOR<DepenseCreateWithoutTypeDepenseInput, DepenseUncheckedCreateWithoutTypeDepenseInput> | DepenseCreateWithoutTypeDepenseInput[] | DepenseUncheckedCreateWithoutTypeDepenseInput[]
    connectOrCreate?: DepenseCreateOrConnectWithoutTypeDepenseInput | DepenseCreateOrConnectWithoutTypeDepenseInput[]
    upsert?: DepenseUpsertWithWhereUniqueWithoutTypeDepenseInput | DepenseUpsertWithWhereUniqueWithoutTypeDepenseInput[]
    createMany?: DepenseCreateManyTypeDepenseInputEnvelope
    set?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    disconnect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    delete?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    connect?: DepenseWhereUniqueInput | DepenseWhereUniqueInput[]
    update?: DepenseUpdateWithWhereUniqueWithoutTypeDepenseInput | DepenseUpdateWithWhereUniqueWithoutTypeDepenseInput[]
    updateMany?: DepenseUpdateManyWithWhereWithoutTypeDepenseInput | DepenseUpdateManyWithWhereWithoutTypeDepenseInput[]
    deleteMany?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
  }

  export type TypeDepenseCreateNestedOneWithoutDepensesInput = {
    create?: XOR<TypeDepenseCreateWithoutDepensesInput, TypeDepenseUncheckedCreateWithoutDepensesInput>
    connectOrCreate?: TypeDepenseCreateOrConnectWithoutDepensesInput
    connect?: TypeDepenseWhereUniqueInput
  }

  export type VehiculeCreateNestedOneWithoutDepensesInput = {
    create?: XOR<VehiculeCreateWithoutDepensesInput, VehiculeUncheckedCreateWithoutDepensesInput>
    connectOrCreate?: VehiculeCreateOrConnectWithoutDepensesInput
    connect?: VehiculeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDemandesSoumisesInput = {
    create?: XOR<UserCreateWithoutDemandesSoumisesInput, UserUncheckedCreateWithoutDemandesSoumisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDemandesSoumisesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutValidationsControleurFinancierInput = {
    create?: XOR<UserCreateWithoutValidationsControleurFinancierInput, UserUncheckedCreateWithoutValidationsControleurFinancierInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidationsControleurFinancierInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutValidationsControleurGestionInput = {
    create?: XOR<UserCreateWithoutValidationsControleurGestionInput, UserUncheckedCreateWithoutValidationsControleurGestionInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidationsControleurGestionInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutValidationsResponsableAdminInput = {
    create?: XOR<UserCreateWithoutValidationsResponsableAdminInput, UserUncheckedCreateWithoutValidationsResponsableAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidationsResponsableAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutValidationsAdminGeneralInput = {
    create?: XOR<UserCreateWithoutValidationsAdminGeneralInput, UserUncheckedCreateWithoutValidationsAdminGeneralInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidationsAdminGeneralInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutValidationsDGInput = {
    create?: XOR<UserCreateWithoutValidationsDGInput, UserUncheckedCreateWithoutValidationsDGInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidationsDGInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutDepenseInput = {
    create?: XOR<DocumentCreateWithoutDepenseInput, DocumentUncheckedCreateWithoutDepenseInput> | DocumentCreateWithoutDepenseInput[] | DocumentUncheckedCreateWithoutDepenseInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDepenseInput | DocumentCreateOrConnectWithoutDepenseInput[]
    createMany?: DocumentCreateManyDepenseInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type CommentaireCreateNestedManyWithoutDepenseInput = {
    create?: XOR<CommentaireCreateWithoutDepenseInput, CommentaireUncheckedCreateWithoutDepenseInput> | CommentaireCreateWithoutDepenseInput[] | CommentaireUncheckedCreateWithoutDepenseInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutDepenseInput | CommentaireCreateOrConnectWithoutDepenseInput[]
    createMany?: CommentaireCreateManyDepenseInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutDepenseInput = {
    create?: XOR<DocumentCreateWithoutDepenseInput, DocumentUncheckedCreateWithoutDepenseInput> | DocumentCreateWithoutDepenseInput[] | DocumentUncheckedCreateWithoutDepenseInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDepenseInput | DocumentCreateOrConnectWithoutDepenseInput[]
    createMany?: DocumentCreateManyDepenseInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type CommentaireUncheckedCreateNestedManyWithoutDepenseInput = {
    create?: XOR<CommentaireCreateWithoutDepenseInput, CommentaireUncheckedCreateWithoutDepenseInput> | CommentaireCreateWithoutDepenseInput[] | CommentaireUncheckedCreateWithoutDepenseInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutDepenseInput | CommentaireCreateOrConnectWithoutDepenseInput[]
    createMany?: CommentaireCreateManyDepenseInputEnvelope
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatutDepenseFieldUpdateOperationsInput = {
    set?: $Enums.StatutDepense
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TypeDepenseUpdateOneRequiredWithoutDepensesNestedInput = {
    create?: XOR<TypeDepenseCreateWithoutDepensesInput, TypeDepenseUncheckedCreateWithoutDepensesInput>
    connectOrCreate?: TypeDepenseCreateOrConnectWithoutDepensesInput
    upsert?: TypeDepenseUpsertWithoutDepensesInput
    connect?: TypeDepenseWhereUniqueInput
    update?: XOR<XOR<TypeDepenseUpdateToOneWithWhereWithoutDepensesInput, TypeDepenseUpdateWithoutDepensesInput>, TypeDepenseUncheckedUpdateWithoutDepensesInput>
  }

  export type VehiculeUpdateOneRequiredWithoutDepensesNestedInput = {
    create?: XOR<VehiculeCreateWithoutDepensesInput, VehiculeUncheckedCreateWithoutDepensesInput>
    connectOrCreate?: VehiculeCreateOrConnectWithoutDepensesInput
    upsert?: VehiculeUpsertWithoutDepensesInput
    connect?: VehiculeWhereUniqueInput
    update?: XOR<XOR<VehiculeUpdateToOneWithWhereWithoutDepensesInput, VehiculeUpdateWithoutDepensesInput>, VehiculeUncheckedUpdateWithoutDepensesInput>
  }

  export type UserUpdateOneRequiredWithoutDemandesSoumisesNestedInput = {
    create?: XOR<UserCreateWithoutDemandesSoumisesInput, UserUncheckedCreateWithoutDemandesSoumisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDemandesSoumisesInput
    upsert?: UserUpsertWithoutDemandesSoumisesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDemandesSoumisesInput, UserUpdateWithoutDemandesSoumisesInput>, UserUncheckedUpdateWithoutDemandesSoumisesInput>
  }

  export type UserUpdateOneWithoutValidationsControleurFinancierNestedInput = {
    create?: XOR<UserCreateWithoutValidationsControleurFinancierInput, UserUncheckedCreateWithoutValidationsControleurFinancierInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidationsControleurFinancierInput
    upsert?: UserUpsertWithoutValidationsControleurFinancierInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutValidationsControleurFinancierInput, UserUpdateWithoutValidationsControleurFinancierInput>, UserUncheckedUpdateWithoutValidationsControleurFinancierInput>
  }

  export type UserUpdateOneWithoutValidationsControleurGestionNestedInput = {
    create?: XOR<UserCreateWithoutValidationsControleurGestionInput, UserUncheckedCreateWithoutValidationsControleurGestionInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidationsControleurGestionInput
    upsert?: UserUpsertWithoutValidationsControleurGestionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutValidationsControleurGestionInput, UserUpdateWithoutValidationsControleurGestionInput>, UserUncheckedUpdateWithoutValidationsControleurGestionInput>
  }

  export type UserUpdateOneWithoutValidationsResponsableAdminNestedInput = {
    create?: XOR<UserCreateWithoutValidationsResponsableAdminInput, UserUncheckedCreateWithoutValidationsResponsableAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidationsResponsableAdminInput
    upsert?: UserUpsertWithoutValidationsResponsableAdminInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutValidationsResponsableAdminInput, UserUpdateWithoutValidationsResponsableAdminInput>, UserUncheckedUpdateWithoutValidationsResponsableAdminInput>
  }

  export type UserUpdateOneWithoutValidationsAdminGeneralNestedInput = {
    create?: XOR<UserCreateWithoutValidationsAdminGeneralInput, UserUncheckedCreateWithoutValidationsAdminGeneralInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidationsAdminGeneralInput
    upsert?: UserUpsertWithoutValidationsAdminGeneralInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutValidationsAdminGeneralInput, UserUpdateWithoutValidationsAdminGeneralInput>, UserUncheckedUpdateWithoutValidationsAdminGeneralInput>
  }

  export type UserUpdateOneWithoutValidationsDGNestedInput = {
    create?: XOR<UserCreateWithoutValidationsDGInput, UserUncheckedCreateWithoutValidationsDGInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidationsDGInput
    upsert?: UserUpsertWithoutValidationsDGInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutValidationsDGInput, UserUpdateWithoutValidationsDGInput>, UserUncheckedUpdateWithoutValidationsDGInput>
  }

  export type DocumentUpdateManyWithoutDepenseNestedInput = {
    create?: XOR<DocumentCreateWithoutDepenseInput, DocumentUncheckedCreateWithoutDepenseInput> | DocumentCreateWithoutDepenseInput[] | DocumentUncheckedCreateWithoutDepenseInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDepenseInput | DocumentCreateOrConnectWithoutDepenseInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutDepenseInput | DocumentUpsertWithWhereUniqueWithoutDepenseInput[]
    createMany?: DocumentCreateManyDepenseInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutDepenseInput | DocumentUpdateWithWhereUniqueWithoutDepenseInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutDepenseInput | DocumentUpdateManyWithWhereWithoutDepenseInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CommentaireUpdateManyWithoutDepenseNestedInput = {
    create?: XOR<CommentaireCreateWithoutDepenseInput, CommentaireUncheckedCreateWithoutDepenseInput> | CommentaireCreateWithoutDepenseInput[] | CommentaireUncheckedCreateWithoutDepenseInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutDepenseInput | CommentaireCreateOrConnectWithoutDepenseInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutDepenseInput | CommentaireUpsertWithWhereUniqueWithoutDepenseInput[]
    createMany?: CommentaireCreateManyDepenseInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutDepenseInput | CommentaireUpdateWithWhereUniqueWithoutDepenseInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutDepenseInput | CommentaireUpdateManyWithWhereWithoutDepenseInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutDepenseNestedInput = {
    create?: XOR<DocumentCreateWithoutDepenseInput, DocumentUncheckedCreateWithoutDepenseInput> | DocumentCreateWithoutDepenseInput[] | DocumentUncheckedCreateWithoutDepenseInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutDepenseInput | DocumentCreateOrConnectWithoutDepenseInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutDepenseInput | DocumentUpsertWithWhereUniqueWithoutDepenseInput[]
    createMany?: DocumentCreateManyDepenseInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutDepenseInput | DocumentUpdateWithWhereUniqueWithoutDepenseInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutDepenseInput | DocumentUpdateManyWithWhereWithoutDepenseInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type CommentaireUncheckedUpdateManyWithoutDepenseNestedInput = {
    create?: XOR<CommentaireCreateWithoutDepenseInput, CommentaireUncheckedCreateWithoutDepenseInput> | CommentaireCreateWithoutDepenseInput[] | CommentaireUncheckedCreateWithoutDepenseInput[]
    connectOrCreate?: CommentaireCreateOrConnectWithoutDepenseInput | CommentaireCreateOrConnectWithoutDepenseInput[]
    upsert?: CommentaireUpsertWithWhereUniqueWithoutDepenseInput | CommentaireUpsertWithWhereUniqueWithoutDepenseInput[]
    createMany?: CommentaireCreateManyDepenseInputEnvelope
    set?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    disconnect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    delete?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    connect?: CommentaireWhereUniqueInput | CommentaireWhereUniqueInput[]
    update?: CommentaireUpdateWithWhereUniqueWithoutDepenseInput | CommentaireUpdateWithWhereUniqueWithoutDepenseInput[]
    updateMany?: CommentaireUpdateManyWithWhereWithoutDepenseInput | CommentaireUpdateManyWithWhereWithoutDepenseInput[]
    deleteMany?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
  }

  export type DepenseCreateNestedOneWithoutCommentairesInput = {
    create?: XOR<DepenseCreateWithoutCommentairesInput, DepenseUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: DepenseCreateOrConnectWithoutCommentairesInput
    connect?: DepenseWhereUniqueInput
  }

  export type DepenseUpdateOneRequiredWithoutCommentairesNestedInput = {
    create?: XOR<DepenseCreateWithoutCommentairesInput, DepenseUncheckedCreateWithoutCommentairesInput>
    connectOrCreate?: DepenseCreateOrConnectWithoutCommentairesInput
    upsert?: DepenseUpsertWithoutCommentairesInput
    connect?: DepenseWhereUniqueInput
    update?: XOR<XOR<DepenseUpdateToOneWithWhereWithoutCommentairesInput, DepenseUpdateWithoutCommentairesInput>, DepenseUncheckedUpdateWithoutCommentairesInput>
  }

  export type DepenseCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DepenseCreateWithoutDocumentsInput, DepenseUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DepenseCreateOrConnectWithoutDocumentsInput
    connect?: DepenseWhereUniqueInput
  }

  export type DepenseUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<DepenseCreateWithoutDocumentsInput, DepenseUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DepenseCreateOrConnectWithoutDocumentsInput
    upsert?: DepenseUpsertWithoutDocumentsInput
    connect?: DepenseWhereUniqueInput
    update?: XOR<XOR<DepenseUpdateToOneWithWhereWithoutDocumentsInput, DepenseUpdateWithoutDocumentsInput>, DepenseUncheckedUpdateWithoutDocumentsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatutDepenseFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDepense | EnumStatutDepenseFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDepense[] | ListEnumStatutDepenseFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDepense[] | ListEnumStatutDepenseFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDepenseFilter<$PrismaModel> | $Enums.StatutDepense
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumStatutDepenseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDepense | EnumStatutDepenseFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDepense[] | ListEnumStatutDepenseFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDepense[] | ListEnumStatutDepenseFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDepenseWithAggregatesFilter<$PrismaModel> | $Enums.StatutDepense
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDepenseFilter<$PrismaModel>
    _max?: NestedEnumStatutDepenseFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DepenseCreateWithoutSoumisParInput = {
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    typeDepense: TypeDepenseCreateNestedOneWithoutDepensesInput
    vehicule: VehiculeCreateNestedOneWithoutDepensesInput
    valideParControleurFinancier?: UserCreateNestedOneWithoutValidationsControleurFinancierInput
    valideParControleurGestion?: UserCreateNestedOneWithoutValidationsControleurGestionInput
    valideParResponsableAdmin?: UserCreateNestedOneWithoutValidationsResponsableAdminInput
    valideParAdminGeneral?: UserCreateNestedOneWithoutValidationsAdminGeneralInput
    valideParDG?: UserCreateNestedOneWithoutValidationsDGInput
    documents?: DocumentCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireCreateNestedManyWithoutDepenseInput
  }

  export type DepenseUncheckedCreateWithoutSoumisParInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
    documents?: DocumentUncheckedCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDepenseInput
  }

  export type DepenseCreateOrConnectWithoutSoumisParInput = {
    where: DepenseWhereUniqueInput
    create: XOR<DepenseCreateWithoutSoumisParInput, DepenseUncheckedCreateWithoutSoumisParInput>
  }

  export type DepenseCreateManySoumisParInputEnvelope = {
    data: DepenseCreateManySoumisParInput | DepenseCreateManySoumisParInput[]
    skipDuplicates?: boolean
  }

  export type DepenseCreateWithoutValideParControleurFinancierInput = {
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    typeDepense: TypeDepenseCreateNestedOneWithoutDepensesInput
    vehicule: VehiculeCreateNestedOneWithoutDepensesInput
    soumisPar: UserCreateNestedOneWithoutDemandesSoumisesInput
    valideParControleurGestion?: UserCreateNestedOneWithoutValidationsControleurGestionInput
    valideParResponsableAdmin?: UserCreateNestedOneWithoutValidationsResponsableAdminInput
    valideParAdminGeneral?: UserCreateNestedOneWithoutValidationsAdminGeneralInput
    valideParDG?: UserCreateNestedOneWithoutValidationsDGInput
    documents?: DocumentCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireCreateNestedManyWithoutDepenseInput
  }

  export type DepenseUncheckedCreateWithoutValideParControleurFinancierInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
    documents?: DocumentUncheckedCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDepenseInput
  }

  export type DepenseCreateOrConnectWithoutValideParControleurFinancierInput = {
    where: DepenseWhereUniqueInput
    create: XOR<DepenseCreateWithoutValideParControleurFinancierInput, DepenseUncheckedCreateWithoutValideParControleurFinancierInput>
  }

  export type DepenseCreateManyValideParControleurFinancierInputEnvelope = {
    data: DepenseCreateManyValideParControleurFinancierInput | DepenseCreateManyValideParControleurFinancierInput[]
    skipDuplicates?: boolean
  }

  export type DepenseCreateWithoutValideParControleurGestionInput = {
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    typeDepense: TypeDepenseCreateNestedOneWithoutDepensesInput
    vehicule: VehiculeCreateNestedOneWithoutDepensesInput
    soumisPar: UserCreateNestedOneWithoutDemandesSoumisesInput
    valideParControleurFinancier?: UserCreateNestedOneWithoutValidationsControleurFinancierInput
    valideParResponsableAdmin?: UserCreateNestedOneWithoutValidationsResponsableAdminInput
    valideParAdminGeneral?: UserCreateNestedOneWithoutValidationsAdminGeneralInput
    valideParDG?: UserCreateNestedOneWithoutValidationsDGInput
    documents?: DocumentCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireCreateNestedManyWithoutDepenseInput
  }

  export type DepenseUncheckedCreateWithoutValideParControleurGestionInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
    documents?: DocumentUncheckedCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDepenseInput
  }

  export type DepenseCreateOrConnectWithoutValideParControleurGestionInput = {
    where: DepenseWhereUniqueInput
    create: XOR<DepenseCreateWithoutValideParControleurGestionInput, DepenseUncheckedCreateWithoutValideParControleurGestionInput>
  }

  export type DepenseCreateManyValideParControleurGestionInputEnvelope = {
    data: DepenseCreateManyValideParControleurGestionInput | DepenseCreateManyValideParControleurGestionInput[]
    skipDuplicates?: boolean
  }

  export type DepenseCreateWithoutValideParResponsableAdminInput = {
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    typeDepense: TypeDepenseCreateNestedOneWithoutDepensesInput
    vehicule: VehiculeCreateNestedOneWithoutDepensesInput
    soumisPar: UserCreateNestedOneWithoutDemandesSoumisesInput
    valideParControleurFinancier?: UserCreateNestedOneWithoutValidationsControleurFinancierInput
    valideParControleurGestion?: UserCreateNestedOneWithoutValidationsControleurGestionInput
    valideParAdminGeneral?: UserCreateNestedOneWithoutValidationsAdminGeneralInput
    valideParDG?: UserCreateNestedOneWithoutValidationsDGInput
    documents?: DocumentCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireCreateNestedManyWithoutDepenseInput
  }

  export type DepenseUncheckedCreateWithoutValideParResponsableAdminInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
    documents?: DocumentUncheckedCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDepenseInput
  }

  export type DepenseCreateOrConnectWithoutValideParResponsableAdminInput = {
    where: DepenseWhereUniqueInput
    create: XOR<DepenseCreateWithoutValideParResponsableAdminInput, DepenseUncheckedCreateWithoutValideParResponsableAdminInput>
  }

  export type DepenseCreateManyValideParResponsableAdminInputEnvelope = {
    data: DepenseCreateManyValideParResponsableAdminInput | DepenseCreateManyValideParResponsableAdminInput[]
    skipDuplicates?: boolean
  }

  export type DepenseCreateWithoutValideParAdminGeneralInput = {
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    typeDepense: TypeDepenseCreateNestedOneWithoutDepensesInput
    vehicule: VehiculeCreateNestedOneWithoutDepensesInput
    soumisPar: UserCreateNestedOneWithoutDemandesSoumisesInput
    valideParControleurFinancier?: UserCreateNestedOneWithoutValidationsControleurFinancierInput
    valideParControleurGestion?: UserCreateNestedOneWithoutValidationsControleurGestionInput
    valideParResponsableAdmin?: UserCreateNestedOneWithoutValidationsResponsableAdminInput
    valideParDG?: UserCreateNestedOneWithoutValidationsDGInput
    documents?: DocumentCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireCreateNestedManyWithoutDepenseInput
  }

  export type DepenseUncheckedCreateWithoutValideParAdminGeneralInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParDGId?: number | null
    documents?: DocumentUncheckedCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDepenseInput
  }

  export type DepenseCreateOrConnectWithoutValideParAdminGeneralInput = {
    where: DepenseWhereUniqueInput
    create: XOR<DepenseCreateWithoutValideParAdminGeneralInput, DepenseUncheckedCreateWithoutValideParAdminGeneralInput>
  }

  export type DepenseCreateManyValideParAdminGeneralInputEnvelope = {
    data: DepenseCreateManyValideParAdminGeneralInput | DepenseCreateManyValideParAdminGeneralInput[]
    skipDuplicates?: boolean
  }

  export type DepenseCreateWithoutValideParDGInput = {
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    typeDepense: TypeDepenseCreateNestedOneWithoutDepensesInput
    vehicule: VehiculeCreateNestedOneWithoutDepensesInput
    soumisPar: UserCreateNestedOneWithoutDemandesSoumisesInput
    valideParControleurFinancier?: UserCreateNestedOneWithoutValidationsControleurFinancierInput
    valideParControleurGestion?: UserCreateNestedOneWithoutValidationsControleurGestionInput
    valideParResponsableAdmin?: UserCreateNestedOneWithoutValidationsResponsableAdminInput
    valideParAdminGeneral?: UserCreateNestedOneWithoutValidationsAdminGeneralInput
    documents?: DocumentCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireCreateNestedManyWithoutDepenseInput
  }

  export type DepenseUncheckedCreateWithoutValideParDGInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    documents?: DocumentUncheckedCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDepenseInput
  }

  export type DepenseCreateOrConnectWithoutValideParDGInput = {
    where: DepenseWhereUniqueInput
    create: XOR<DepenseCreateWithoutValideParDGInput, DepenseUncheckedCreateWithoutValideParDGInput>
  }

  export type DepenseCreateManyValideParDGInputEnvelope = {
    data: DepenseCreateManyValideParDGInput | DepenseCreateManyValideParDGInput[]
    skipDuplicates?: boolean
  }

  export type DepenseUpsertWithWhereUniqueWithoutSoumisParInput = {
    where: DepenseWhereUniqueInput
    update: XOR<DepenseUpdateWithoutSoumisParInput, DepenseUncheckedUpdateWithoutSoumisParInput>
    create: XOR<DepenseCreateWithoutSoumisParInput, DepenseUncheckedCreateWithoutSoumisParInput>
  }

  export type DepenseUpdateWithWhereUniqueWithoutSoumisParInput = {
    where: DepenseWhereUniqueInput
    data: XOR<DepenseUpdateWithoutSoumisParInput, DepenseUncheckedUpdateWithoutSoumisParInput>
  }

  export type DepenseUpdateManyWithWhereWithoutSoumisParInput = {
    where: DepenseScalarWhereInput
    data: XOR<DepenseUpdateManyMutationInput, DepenseUncheckedUpdateManyWithoutSoumisParInput>
  }

  export type DepenseScalarWhereInput = {
    AND?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
    OR?: DepenseScalarWhereInput[]
    NOT?: DepenseScalarWhereInput | DepenseScalarWhereInput[]
    id?: IntFilter<"Depense"> | number
    dateIntervention?: DateTimeFilter<"Depense"> | Date | string
    typeVehicule?: StringFilter<"Depense"> | string
    codeParc?: StringFilter<"Depense"> | string
    typeDepenseId?: IntFilter<"Depense"> | number
    libelle?: StringFilter<"Depense"> | string
    quantite?: IntNullableFilter<"Depense"> | number | null
    montant?: IntFilter<"Depense"> | number
    statut?: EnumStatutDepenseFilter<"Depense"> | $Enums.StatutDepense
    dateCreation?: DateTimeFilter<"Depense"> | Date | string
    commentaireControleurFinancier?: StringNullableFilter<"Depense"> | string | null
    commentaireControleurGestion?: StringNullableFilter<"Depense"> | string | null
    commentaireResponsableAdmin?: StringNullableFilter<"Depense"> | string | null
    commentaireAdminGeneral?: StringNullableFilter<"Depense"> | string | null
    commentaireDG?: StringNullableFilter<"Depense"> | string | null
    commentaireLogisticien?: StringNullableFilter<"Depense"> | string | null
    dateReport?: DateTimeNullableFilter<"Depense"> | Date | string | null
    vehiculeId?: IntFilter<"Depense"> | number
    soumisParId?: IntFilter<"Depense"> | number
    valideParControleurFinancierId?: IntNullableFilter<"Depense"> | number | null
    valideParControleurGestionId?: IntNullableFilter<"Depense"> | number | null
    valideParResponsableAdminId?: IntNullableFilter<"Depense"> | number | null
    valideParAdminGeneralId?: IntNullableFilter<"Depense"> | number | null
    valideParDGId?: IntNullableFilter<"Depense"> | number | null
  }

  export type DepenseUpsertWithWhereUniqueWithoutValideParControleurFinancierInput = {
    where: DepenseWhereUniqueInput
    update: XOR<DepenseUpdateWithoutValideParControleurFinancierInput, DepenseUncheckedUpdateWithoutValideParControleurFinancierInput>
    create: XOR<DepenseCreateWithoutValideParControleurFinancierInput, DepenseUncheckedCreateWithoutValideParControleurFinancierInput>
  }

  export type DepenseUpdateWithWhereUniqueWithoutValideParControleurFinancierInput = {
    where: DepenseWhereUniqueInput
    data: XOR<DepenseUpdateWithoutValideParControleurFinancierInput, DepenseUncheckedUpdateWithoutValideParControleurFinancierInput>
  }

  export type DepenseUpdateManyWithWhereWithoutValideParControleurFinancierInput = {
    where: DepenseScalarWhereInput
    data: XOR<DepenseUpdateManyMutationInput, DepenseUncheckedUpdateManyWithoutValideParControleurFinancierInput>
  }

  export type DepenseUpsertWithWhereUniqueWithoutValideParControleurGestionInput = {
    where: DepenseWhereUniqueInput
    update: XOR<DepenseUpdateWithoutValideParControleurGestionInput, DepenseUncheckedUpdateWithoutValideParControleurGestionInput>
    create: XOR<DepenseCreateWithoutValideParControleurGestionInput, DepenseUncheckedCreateWithoutValideParControleurGestionInput>
  }

  export type DepenseUpdateWithWhereUniqueWithoutValideParControleurGestionInput = {
    where: DepenseWhereUniqueInput
    data: XOR<DepenseUpdateWithoutValideParControleurGestionInput, DepenseUncheckedUpdateWithoutValideParControleurGestionInput>
  }

  export type DepenseUpdateManyWithWhereWithoutValideParControleurGestionInput = {
    where: DepenseScalarWhereInput
    data: XOR<DepenseUpdateManyMutationInput, DepenseUncheckedUpdateManyWithoutValideParControleurGestionInput>
  }

  export type DepenseUpsertWithWhereUniqueWithoutValideParResponsableAdminInput = {
    where: DepenseWhereUniqueInput
    update: XOR<DepenseUpdateWithoutValideParResponsableAdminInput, DepenseUncheckedUpdateWithoutValideParResponsableAdminInput>
    create: XOR<DepenseCreateWithoutValideParResponsableAdminInput, DepenseUncheckedCreateWithoutValideParResponsableAdminInput>
  }

  export type DepenseUpdateWithWhereUniqueWithoutValideParResponsableAdminInput = {
    where: DepenseWhereUniqueInput
    data: XOR<DepenseUpdateWithoutValideParResponsableAdminInput, DepenseUncheckedUpdateWithoutValideParResponsableAdminInput>
  }

  export type DepenseUpdateManyWithWhereWithoutValideParResponsableAdminInput = {
    where: DepenseScalarWhereInput
    data: XOR<DepenseUpdateManyMutationInput, DepenseUncheckedUpdateManyWithoutValideParResponsableAdminInput>
  }

  export type DepenseUpsertWithWhereUniqueWithoutValideParAdminGeneralInput = {
    where: DepenseWhereUniqueInput
    update: XOR<DepenseUpdateWithoutValideParAdminGeneralInput, DepenseUncheckedUpdateWithoutValideParAdminGeneralInput>
    create: XOR<DepenseCreateWithoutValideParAdminGeneralInput, DepenseUncheckedCreateWithoutValideParAdminGeneralInput>
  }

  export type DepenseUpdateWithWhereUniqueWithoutValideParAdminGeneralInput = {
    where: DepenseWhereUniqueInput
    data: XOR<DepenseUpdateWithoutValideParAdminGeneralInput, DepenseUncheckedUpdateWithoutValideParAdminGeneralInput>
  }

  export type DepenseUpdateManyWithWhereWithoutValideParAdminGeneralInput = {
    where: DepenseScalarWhereInput
    data: XOR<DepenseUpdateManyMutationInput, DepenseUncheckedUpdateManyWithoutValideParAdminGeneralInput>
  }

  export type DepenseUpsertWithWhereUniqueWithoutValideParDGInput = {
    where: DepenseWhereUniqueInput
    update: XOR<DepenseUpdateWithoutValideParDGInput, DepenseUncheckedUpdateWithoutValideParDGInput>
    create: XOR<DepenseCreateWithoutValideParDGInput, DepenseUncheckedCreateWithoutValideParDGInput>
  }

  export type DepenseUpdateWithWhereUniqueWithoutValideParDGInput = {
    where: DepenseWhereUniqueInput
    data: XOR<DepenseUpdateWithoutValideParDGInput, DepenseUncheckedUpdateWithoutValideParDGInput>
  }

  export type DepenseUpdateManyWithWhereWithoutValideParDGInput = {
    where: DepenseScalarWhereInput
    data: XOR<DepenseUpdateManyMutationInput, DepenseUncheckedUpdateManyWithoutValideParDGInput>
  }

  export type DepenseCreateWithoutVehiculeInput = {
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    typeDepense: TypeDepenseCreateNestedOneWithoutDepensesInput
    soumisPar: UserCreateNestedOneWithoutDemandesSoumisesInput
    valideParControleurFinancier?: UserCreateNestedOneWithoutValidationsControleurFinancierInput
    valideParControleurGestion?: UserCreateNestedOneWithoutValidationsControleurGestionInput
    valideParResponsableAdmin?: UserCreateNestedOneWithoutValidationsResponsableAdminInput
    valideParAdminGeneral?: UserCreateNestedOneWithoutValidationsAdminGeneralInput
    valideParDG?: UserCreateNestedOneWithoutValidationsDGInput
    documents?: DocumentCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireCreateNestedManyWithoutDepenseInput
  }

  export type DepenseUncheckedCreateWithoutVehiculeInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
    documents?: DocumentUncheckedCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDepenseInput
  }

  export type DepenseCreateOrConnectWithoutVehiculeInput = {
    where: DepenseWhereUniqueInput
    create: XOR<DepenseCreateWithoutVehiculeInput, DepenseUncheckedCreateWithoutVehiculeInput>
  }

  export type DepenseCreateManyVehiculeInputEnvelope = {
    data: DepenseCreateManyVehiculeInput | DepenseCreateManyVehiculeInput[]
    skipDuplicates?: boolean
  }

  export type DepenseUpsertWithWhereUniqueWithoutVehiculeInput = {
    where: DepenseWhereUniqueInput
    update: XOR<DepenseUpdateWithoutVehiculeInput, DepenseUncheckedUpdateWithoutVehiculeInput>
    create: XOR<DepenseCreateWithoutVehiculeInput, DepenseUncheckedCreateWithoutVehiculeInput>
  }

  export type DepenseUpdateWithWhereUniqueWithoutVehiculeInput = {
    where: DepenseWhereUniqueInput
    data: XOR<DepenseUpdateWithoutVehiculeInput, DepenseUncheckedUpdateWithoutVehiculeInput>
  }

  export type DepenseUpdateManyWithWhereWithoutVehiculeInput = {
    where: DepenseScalarWhereInput
    data: XOR<DepenseUpdateManyMutationInput, DepenseUncheckedUpdateManyWithoutVehiculeInput>
  }

  export type DepenseCreateWithoutTypeDepenseInput = {
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehicule: VehiculeCreateNestedOneWithoutDepensesInput
    soumisPar: UserCreateNestedOneWithoutDemandesSoumisesInput
    valideParControleurFinancier?: UserCreateNestedOneWithoutValidationsControleurFinancierInput
    valideParControleurGestion?: UserCreateNestedOneWithoutValidationsControleurGestionInput
    valideParResponsableAdmin?: UserCreateNestedOneWithoutValidationsResponsableAdminInput
    valideParAdminGeneral?: UserCreateNestedOneWithoutValidationsAdminGeneralInput
    valideParDG?: UserCreateNestedOneWithoutValidationsDGInput
    documents?: DocumentCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireCreateNestedManyWithoutDepenseInput
  }

  export type DepenseUncheckedCreateWithoutTypeDepenseInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
    documents?: DocumentUncheckedCreateNestedManyWithoutDepenseInput
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDepenseInput
  }

  export type DepenseCreateOrConnectWithoutTypeDepenseInput = {
    where: DepenseWhereUniqueInput
    create: XOR<DepenseCreateWithoutTypeDepenseInput, DepenseUncheckedCreateWithoutTypeDepenseInput>
  }

  export type DepenseCreateManyTypeDepenseInputEnvelope = {
    data: DepenseCreateManyTypeDepenseInput | DepenseCreateManyTypeDepenseInput[]
    skipDuplicates?: boolean
  }

  export type DepenseUpsertWithWhereUniqueWithoutTypeDepenseInput = {
    where: DepenseWhereUniqueInput
    update: XOR<DepenseUpdateWithoutTypeDepenseInput, DepenseUncheckedUpdateWithoutTypeDepenseInput>
    create: XOR<DepenseCreateWithoutTypeDepenseInput, DepenseUncheckedCreateWithoutTypeDepenseInput>
  }

  export type DepenseUpdateWithWhereUniqueWithoutTypeDepenseInput = {
    where: DepenseWhereUniqueInput
    data: XOR<DepenseUpdateWithoutTypeDepenseInput, DepenseUncheckedUpdateWithoutTypeDepenseInput>
  }

  export type DepenseUpdateManyWithWhereWithoutTypeDepenseInput = {
    where: DepenseScalarWhereInput
    data: XOR<DepenseUpdateManyMutationInput, DepenseUncheckedUpdateManyWithoutTypeDepenseInput>
  }

  export type TypeDepenseCreateWithoutDepensesInput = {
    nom: string
    description?: string | null
    createdAt?: Date | string
  }

  export type TypeDepenseUncheckedCreateWithoutDepensesInput = {
    id?: number
    nom: string
    description?: string | null
    createdAt?: Date | string
  }

  export type TypeDepenseCreateOrConnectWithoutDepensesInput = {
    where: TypeDepenseWhereUniqueInput
    create: XOR<TypeDepenseCreateWithoutDepensesInput, TypeDepenseUncheckedCreateWithoutDepensesInput>
  }

  export type VehiculeCreateWithoutDepensesInput = {
    type: string
    immatriculation: string
    codeParc?: string | null
    description?: string | null
    statut?: string | null
    createdAt?: Date | string
  }

  export type VehiculeUncheckedCreateWithoutDepensesInput = {
    id?: number
    type: string
    immatriculation: string
    codeParc?: string | null
    description?: string | null
    statut?: string | null
    createdAt?: Date | string
  }

  export type VehiculeCreateOrConnectWithoutDepensesInput = {
    where: VehiculeWhereUniqueInput
    create: XOR<VehiculeCreateWithoutDepensesInput, VehiculeUncheckedCreateWithoutDepensesInput>
  }

  export type UserCreateWithoutDemandesSoumisesInput = {
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    validationsControleurFinancier?: DepenseCreateNestedManyWithoutValideParControleurFinancierInput
    validationsControleurGestion?: DepenseCreateNestedManyWithoutValideParControleurGestionInput
    validationsResponsableAdmin?: DepenseCreateNestedManyWithoutValideParResponsableAdminInput
    validationsAdminGeneral?: DepenseCreateNestedManyWithoutValideParAdminGeneralInput
    validationsDG?: DepenseCreateNestedManyWithoutValideParDGInput
  }

  export type UserUncheckedCreateWithoutDemandesSoumisesInput = {
    id?: number
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    validationsControleurFinancier?: DepenseUncheckedCreateNestedManyWithoutValideParControleurFinancierInput
    validationsControleurGestion?: DepenseUncheckedCreateNestedManyWithoutValideParControleurGestionInput
    validationsResponsableAdmin?: DepenseUncheckedCreateNestedManyWithoutValideParResponsableAdminInput
    validationsAdminGeneral?: DepenseUncheckedCreateNestedManyWithoutValideParAdminGeneralInput
    validationsDG?: DepenseUncheckedCreateNestedManyWithoutValideParDGInput
  }

  export type UserCreateOrConnectWithoutDemandesSoumisesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDemandesSoumisesInput, UserUncheckedCreateWithoutDemandesSoumisesInput>
  }

  export type UserCreateWithoutValidationsControleurFinancierInput = {
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    demandesSoumises?: DepenseCreateNestedManyWithoutSoumisParInput
    validationsControleurGestion?: DepenseCreateNestedManyWithoutValideParControleurGestionInput
    validationsResponsableAdmin?: DepenseCreateNestedManyWithoutValideParResponsableAdminInput
    validationsAdminGeneral?: DepenseCreateNestedManyWithoutValideParAdminGeneralInput
    validationsDG?: DepenseCreateNestedManyWithoutValideParDGInput
  }

  export type UserUncheckedCreateWithoutValidationsControleurFinancierInput = {
    id?: number
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    demandesSoumises?: DepenseUncheckedCreateNestedManyWithoutSoumisParInput
    validationsControleurGestion?: DepenseUncheckedCreateNestedManyWithoutValideParControleurGestionInput
    validationsResponsableAdmin?: DepenseUncheckedCreateNestedManyWithoutValideParResponsableAdminInput
    validationsAdminGeneral?: DepenseUncheckedCreateNestedManyWithoutValideParAdminGeneralInput
    validationsDG?: DepenseUncheckedCreateNestedManyWithoutValideParDGInput
  }

  export type UserCreateOrConnectWithoutValidationsControleurFinancierInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutValidationsControleurFinancierInput, UserUncheckedCreateWithoutValidationsControleurFinancierInput>
  }

  export type UserCreateWithoutValidationsControleurGestionInput = {
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    demandesSoumises?: DepenseCreateNestedManyWithoutSoumisParInput
    validationsControleurFinancier?: DepenseCreateNestedManyWithoutValideParControleurFinancierInput
    validationsResponsableAdmin?: DepenseCreateNestedManyWithoutValideParResponsableAdminInput
    validationsAdminGeneral?: DepenseCreateNestedManyWithoutValideParAdminGeneralInput
    validationsDG?: DepenseCreateNestedManyWithoutValideParDGInput
  }

  export type UserUncheckedCreateWithoutValidationsControleurGestionInput = {
    id?: number
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    demandesSoumises?: DepenseUncheckedCreateNestedManyWithoutSoumisParInput
    validationsControleurFinancier?: DepenseUncheckedCreateNestedManyWithoutValideParControleurFinancierInput
    validationsResponsableAdmin?: DepenseUncheckedCreateNestedManyWithoutValideParResponsableAdminInput
    validationsAdminGeneral?: DepenseUncheckedCreateNestedManyWithoutValideParAdminGeneralInput
    validationsDG?: DepenseUncheckedCreateNestedManyWithoutValideParDGInput
  }

  export type UserCreateOrConnectWithoutValidationsControleurGestionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutValidationsControleurGestionInput, UserUncheckedCreateWithoutValidationsControleurGestionInput>
  }

  export type UserCreateWithoutValidationsResponsableAdminInput = {
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    demandesSoumises?: DepenseCreateNestedManyWithoutSoumisParInput
    validationsControleurFinancier?: DepenseCreateNestedManyWithoutValideParControleurFinancierInput
    validationsControleurGestion?: DepenseCreateNestedManyWithoutValideParControleurGestionInput
    validationsAdminGeneral?: DepenseCreateNestedManyWithoutValideParAdminGeneralInput
    validationsDG?: DepenseCreateNestedManyWithoutValideParDGInput
  }

  export type UserUncheckedCreateWithoutValidationsResponsableAdminInput = {
    id?: number
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    demandesSoumises?: DepenseUncheckedCreateNestedManyWithoutSoumisParInput
    validationsControleurFinancier?: DepenseUncheckedCreateNestedManyWithoutValideParControleurFinancierInput
    validationsControleurGestion?: DepenseUncheckedCreateNestedManyWithoutValideParControleurGestionInput
    validationsAdminGeneral?: DepenseUncheckedCreateNestedManyWithoutValideParAdminGeneralInput
    validationsDG?: DepenseUncheckedCreateNestedManyWithoutValideParDGInput
  }

  export type UserCreateOrConnectWithoutValidationsResponsableAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutValidationsResponsableAdminInput, UserUncheckedCreateWithoutValidationsResponsableAdminInput>
  }

  export type UserCreateWithoutValidationsAdminGeneralInput = {
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    demandesSoumises?: DepenseCreateNestedManyWithoutSoumisParInput
    validationsControleurFinancier?: DepenseCreateNestedManyWithoutValideParControleurFinancierInput
    validationsControleurGestion?: DepenseCreateNestedManyWithoutValideParControleurGestionInput
    validationsResponsableAdmin?: DepenseCreateNestedManyWithoutValideParResponsableAdminInput
    validationsDG?: DepenseCreateNestedManyWithoutValideParDGInput
  }

  export type UserUncheckedCreateWithoutValidationsAdminGeneralInput = {
    id?: number
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    demandesSoumises?: DepenseUncheckedCreateNestedManyWithoutSoumisParInput
    validationsControleurFinancier?: DepenseUncheckedCreateNestedManyWithoutValideParControleurFinancierInput
    validationsControleurGestion?: DepenseUncheckedCreateNestedManyWithoutValideParControleurGestionInput
    validationsResponsableAdmin?: DepenseUncheckedCreateNestedManyWithoutValideParResponsableAdminInput
    validationsDG?: DepenseUncheckedCreateNestedManyWithoutValideParDGInput
  }

  export type UserCreateOrConnectWithoutValidationsAdminGeneralInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutValidationsAdminGeneralInput, UserUncheckedCreateWithoutValidationsAdminGeneralInput>
  }

  export type UserCreateWithoutValidationsDGInput = {
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    demandesSoumises?: DepenseCreateNestedManyWithoutSoumisParInput
    validationsControleurFinancier?: DepenseCreateNestedManyWithoutValideParControleurFinancierInput
    validationsControleurGestion?: DepenseCreateNestedManyWithoutValideParControleurGestionInput
    validationsResponsableAdmin?: DepenseCreateNestedManyWithoutValideParResponsableAdminInput
    validationsAdminGeneral?: DepenseCreateNestedManyWithoutValideParAdminGeneralInput
  }

  export type UserUncheckedCreateWithoutValidationsDGInput = {
    id?: number
    nom: string
    email: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    demandesSoumises?: DepenseUncheckedCreateNestedManyWithoutSoumisParInput
    validationsControleurFinancier?: DepenseUncheckedCreateNestedManyWithoutValideParControleurFinancierInput
    validationsControleurGestion?: DepenseUncheckedCreateNestedManyWithoutValideParControleurGestionInput
    validationsResponsableAdmin?: DepenseUncheckedCreateNestedManyWithoutValideParResponsableAdminInput
    validationsAdminGeneral?: DepenseUncheckedCreateNestedManyWithoutValideParAdminGeneralInput
  }

  export type UserCreateOrConnectWithoutValidationsDGInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutValidationsDGInput, UserUncheckedCreateWithoutValidationsDGInput>
  }

  export type DocumentCreateWithoutDepenseInput = {
    url: string
    nom: string
  }

  export type DocumentUncheckedCreateWithoutDepenseInput = {
    id?: number
    url: string
    nom: string
  }

  export type DocumentCreateOrConnectWithoutDepenseInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutDepenseInput, DocumentUncheckedCreateWithoutDepenseInput>
  }

  export type DocumentCreateManyDepenseInputEnvelope = {
    data: DocumentCreateManyDepenseInput | DocumentCreateManyDepenseInput[]
    skipDuplicates?: boolean
  }

  export type CommentaireCreateWithoutDepenseInput = {
    texte: string
    auteur: string
    date?: Date | string
  }

  export type CommentaireUncheckedCreateWithoutDepenseInput = {
    id?: number
    texte: string
    auteur: string
    date?: Date | string
  }

  export type CommentaireCreateOrConnectWithoutDepenseInput = {
    where: CommentaireWhereUniqueInput
    create: XOR<CommentaireCreateWithoutDepenseInput, CommentaireUncheckedCreateWithoutDepenseInput>
  }

  export type CommentaireCreateManyDepenseInputEnvelope = {
    data: CommentaireCreateManyDepenseInput | CommentaireCreateManyDepenseInput[]
    skipDuplicates?: boolean
  }

  export type TypeDepenseUpsertWithoutDepensesInput = {
    update: XOR<TypeDepenseUpdateWithoutDepensesInput, TypeDepenseUncheckedUpdateWithoutDepensesInput>
    create: XOR<TypeDepenseCreateWithoutDepensesInput, TypeDepenseUncheckedCreateWithoutDepensesInput>
    where?: TypeDepenseWhereInput
  }

  export type TypeDepenseUpdateToOneWithWhereWithoutDepensesInput = {
    where?: TypeDepenseWhereInput
    data: XOR<TypeDepenseUpdateWithoutDepensesInput, TypeDepenseUncheckedUpdateWithoutDepensesInput>
  }

  export type TypeDepenseUpdateWithoutDepensesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeDepenseUncheckedUpdateWithoutDepensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiculeUpsertWithoutDepensesInput = {
    update: XOR<VehiculeUpdateWithoutDepensesInput, VehiculeUncheckedUpdateWithoutDepensesInput>
    create: XOR<VehiculeCreateWithoutDepensesInput, VehiculeUncheckedCreateWithoutDepensesInput>
    where?: VehiculeWhereInput
  }

  export type VehiculeUpdateToOneWithWhereWithoutDepensesInput = {
    where?: VehiculeWhereInput
    data: XOR<VehiculeUpdateWithoutDepensesInput, VehiculeUncheckedUpdateWithoutDepensesInput>
  }

  export type VehiculeUpdateWithoutDepensesInput = {
    type?: StringFieldUpdateOperationsInput | string
    immatriculation?: StringFieldUpdateOperationsInput | string
    codeParc?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiculeUncheckedUpdateWithoutDepensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    immatriculation?: StringFieldUpdateOperationsInput | string
    codeParc?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutDemandesSoumisesInput = {
    update: XOR<UserUpdateWithoutDemandesSoumisesInput, UserUncheckedUpdateWithoutDemandesSoumisesInput>
    create: XOR<UserCreateWithoutDemandesSoumisesInput, UserUncheckedCreateWithoutDemandesSoumisesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDemandesSoumisesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDemandesSoumisesInput, UserUncheckedUpdateWithoutDemandesSoumisesInput>
  }

  export type UserUpdateWithoutDemandesSoumisesInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validationsControleurFinancier?: DepenseUpdateManyWithoutValideParControleurFinancierNestedInput
    validationsControleurGestion?: DepenseUpdateManyWithoutValideParControleurGestionNestedInput
    validationsResponsableAdmin?: DepenseUpdateManyWithoutValideParResponsableAdminNestedInput
    validationsAdminGeneral?: DepenseUpdateManyWithoutValideParAdminGeneralNestedInput
    validationsDG?: DepenseUpdateManyWithoutValideParDGNestedInput
  }

  export type UserUncheckedUpdateWithoutDemandesSoumisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validationsControleurFinancier?: DepenseUncheckedUpdateManyWithoutValideParControleurFinancierNestedInput
    validationsControleurGestion?: DepenseUncheckedUpdateManyWithoutValideParControleurGestionNestedInput
    validationsResponsableAdmin?: DepenseUncheckedUpdateManyWithoutValideParResponsableAdminNestedInput
    validationsAdminGeneral?: DepenseUncheckedUpdateManyWithoutValideParAdminGeneralNestedInput
    validationsDG?: DepenseUncheckedUpdateManyWithoutValideParDGNestedInput
  }

  export type UserUpsertWithoutValidationsControleurFinancierInput = {
    update: XOR<UserUpdateWithoutValidationsControleurFinancierInput, UserUncheckedUpdateWithoutValidationsControleurFinancierInput>
    create: XOR<UserCreateWithoutValidationsControleurFinancierInput, UserUncheckedCreateWithoutValidationsControleurFinancierInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutValidationsControleurFinancierInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutValidationsControleurFinancierInput, UserUncheckedUpdateWithoutValidationsControleurFinancierInput>
  }

  export type UserUpdateWithoutValidationsControleurFinancierInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesSoumises?: DepenseUpdateManyWithoutSoumisParNestedInput
    validationsControleurGestion?: DepenseUpdateManyWithoutValideParControleurGestionNestedInput
    validationsResponsableAdmin?: DepenseUpdateManyWithoutValideParResponsableAdminNestedInput
    validationsAdminGeneral?: DepenseUpdateManyWithoutValideParAdminGeneralNestedInput
    validationsDG?: DepenseUpdateManyWithoutValideParDGNestedInput
  }

  export type UserUncheckedUpdateWithoutValidationsControleurFinancierInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesSoumises?: DepenseUncheckedUpdateManyWithoutSoumisParNestedInput
    validationsControleurGestion?: DepenseUncheckedUpdateManyWithoutValideParControleurGestionNestedInput
    validationsResponsableAdmin?: DepenseUncheckedUpdateManyWithoutValideParResponsableAdminNestedInput
    validationsAdminGeneral?: DepenseUncheckedUpdateManyWithoutValideParAdminGeneralNestedInput
    validationsDG?: DepenseUncheckedUpdateManyWithoutValideParDGNestedInput
  }

  export type UserUpsertWithoutValidationsControleurGestionInput = {
    update: XOR<UserUpdateWithoutValidationsControleurGestionInput, UserUncheckedUpdateWithoutValidationsControleurGestionInput>
    create: XOR<UserCreateWithoutValidationsControleurGestionInput, UserUncheckedCreateWithoutValidationsControleurGestionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutValidationsControleurGestionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutValidationsControleurGestionInput, UserUncheckedUpdateWithoutValidationsControleurGestionInput>
  }

  export type UserUpdateWithoutValidationsControleurGestionInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesSoumises?: DepenseUpdateManyWithoutSoumisParNestedInput
    validationsControleurFinancier?: DepenseUpdateManyWithoutValideParControleurFinancierNestedInput
    validationsResponsableAdmin?: DepenseUpdateManyWithoutValideParResponsableAdminNestedInput
    validationsAdminGeneral?: DepenseUpdateManyWithoutValideParAdminGeneralNestedInput
    validationsDG?: DepenseUpdateManyWithoutValideParDGNestedInput
  }

  export type UserUncheckedUpdateWithoutValidationsControleurGestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesSoumises?: DepenseUncheckedUpdateManyWithoutSoumisParNestedInput
    validationsControleurFinancier?: DepenseUncheckedUpdateManyWithoutValideParControleurFinancierNestedInput
    validationsResponsableAdmin?: DepenseUncheckedUpdateManyWithoutValideParResponsableAdminNestedInput
    validationsAdminGeneral?: DepenseUncheckedUpdateManyWithoutValideParAdminGeneralNestedInput
    validationsDG?: DepenseUncheckedUpdateManyWithoutValideParDGNestedInput
  }

  export type UserUpsertWithoutValidationsResponsableAdminInput = {
    update: XOR<UserUpdateWithoutValidationsResponsableAdminInput, UserUncheckedUpdateWithoutValidationsResponsableAdminInput>
    create: XOR<UserCreateWithoutValidationsResponsableAdminInput, UserUncheckedCreateWithoutValidationsResponsableAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutValidationsResponsableAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutValidationsResponsableAdminInput, UserUncheckedUpdateWithoutValidationsResponsableAdminInput>
  }

  export type UserUpdateWithoutValidationsResponsableAdminInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesSoumises?: DepenseUpdateManyWithoutSoumisParNestedInput
    validationsControleurFinancier?: DepenseUpdateManyWithoutValideParControleurFinancierNestedInput
    validationsControleurGestion?: DepenseUpdateManyWithoutValideParControleurGestionNestedInput
    validationsAdminGeneral?: DepenseUpdateManyWithoutValideParAdminGeneralNestedInput
    validationsDG?: DepenseUpdateManyWithoutValideParDGNestedInput
  }

  export type UserUncheckedUpdateWithoutValidationsResponsableAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesSoumises?: DepenseUncheckedUpdateManyWithoutSoumisParNestedInput
    validationsControleurFinancier?: DepenseUncheckedUpdateManyWithoutValideParControleurFinancierNestedInput
    validationsControleurGestion?: DepenseUncheckedUpdateManyWithoutValideParControleurGestionNestedInput
    validationsAdminGeneral?: DepenseUncheckedUpdateManyWithoutValideParAdminGeneralNestedInput
    validationsDG?: DepenseUncheckedUpdateManyWithoutValideParDGNestedInput
  }

  export type UserUpsertWithoutValidationsAdminGeneralInput = {
    update: XOR<UserUpdateWithoutValidationsAdminGeneralInput, UserUncheckedUpdateWithoutValidationsAdminGeneralInput>
    create: XOR<UserCreateWithoutValidationsAdminGeneralInput, UserUncheckedCreateWithoutValidationsAdminGeneralInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutValidationsAdminGeneralInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutValidationsAdminGeneralInput, UserUncheckedUpdateWithoutValidationsAdminGeneralInput>
  }

  export type UserUpdateWithoutValidationsAdminGeneralInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesSoumises?: DepenseUpdateManyWithoutSoumisParNestedInput
    validationsControleurFinancier?: DepenseUpdateManyWithoutValideParControleurFinancierNestedInput
    validationsControleurGestion?: DepenseUpdateManyWithoutValideParControleurGestionNestedInput
    validationsResponsableAdmin?: DepenseUpdateManyWithoutValideParResponsableAdminNestedInput
    validationsDG?: DepenseUpdateManyWithoutValideParDGNestedInput
  }

  export type UserUncheckedUpdateWithoutValidationsAdminGeneralInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesSoumises?: DepenseUncheckedUpdateManyWithoutSoumisParNestedInput
    validationsControleurFinancier?: DepenseUncheckedUpdateManyWithoutValideParControleurFinancierNestedInput
    validationsControleurGestion?: DepenseUncheckedUpdateManyWithoutValideParControleurGestionNestedInput
    validationsResponsableAdmin?: DepenseUncheckedUpdateManyWithoutValideParResponsableAdminNestedInput
    validationsDG?: DepenseUncheckedUpdateManyWithoutValideParDGNestedInput
  }

  export type UserUpsertWithoutValidationsDGInput = {
    update: XOR<UserUpdateWithoutValidationsDGInput, UserUncheckedUpdateWithoutValidationsDGInput>
    create: XOR<UserCreateWithoutValidationsDGInput, UserUncheckedCreateWithoutValidationsDGInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutValidationsDGInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutValidationsDGInput, UserUncheckedUpdateWithoutValidationsDGInput>
  }

  export type UserUpdateWithoutValidationsDGInput = {
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesSoumises?: DepenseUpdateManyWithoutSoumisParNestedInput
    validationsControleurFinancier?: DepenseUpdateManyWithoutValideParControleurFinancierNestedInput
    validationsControleurGestion?: DepenseUpdateManyWithoutValideParControleurGestionNestedInput
    validationsResponsableAdmin?: DepenseUpdateManyWithoutValideParResponsableAdminNestedInput
    validationsAdminGeneral?: DepenseUpdateManyWithoutValideParAdminGeneralNestedInput
  }

  export type UserUncheckedUpdateWithoutValidationsDGInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    demandesSoumises?: DepenseUncheckedUpdateManyWithoutSoumisParNestedInput
    validationsControleurFinancier?: DepenseUncheckedUpdateManyWithoutValideParControleurFinancierNestedInput
    validationsControleurGestion?: DepenseUncheckedUpdateManyWithoutValideParControleurGestionNestedInput
    validationsResponsableAdmin?: DepenseUncheckedUpdateManyWithoutValideParResponsableAdminNestedInput
    validationsAdminGeneral?: DepenseUncheckedUpdateManyWithoutValideParAdminGeneralNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutDepenseInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutDepenseInput, DocumentUncheckedUpdateWithoutDepenseInput>
    create: XOR<DocumentCreateWithoutDepenseInput, DocumentUncheckedCreateWithoutDepenseInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutDepenseInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutDepenseInput, DocumentUncheckedUpdateWithoutDepenseInput>
  }

  export type DocumentUpdateManyWithWhereWithoutDepenseInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutDepenseInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: IntFilter<"Document"> | number
    url?: StringFilter<"Document"> | string
    nom?: StringFilter<"Document"> | string
    depenseId?: IntFilter<"Document"> | number
  }

  export type CommentaireUpsertWithWhereUniqueWithoutDepenseInput = {
    where: CommentaireWhereUniqueInput
    update: XOR<CommentaireUpdateWithoutDepenseInput, CommentaireUncheckedUpdateWithoutDepenseInput>
    create: XOR<CommentaireCreateWithoutDepenseInput, CommentaireUncheckedCreateWithoutDepenseInput>
  }

  export type CommentaireUpdateWithWhereUniqueWithoutDepenseInput = {
    where: CommentaireWhereUniqueInput
    data: XOR<CommentaireUpdateWithoutDepenseInput, CommentaireUncheckedUpdateWithoutDepenseInput>
  }

  export type CommentaireUpdateManyWithWhereWithoutDepenseInput = {
    where: CommentaireScalarWhereInput
    data: XOR<CommentaireUpdateManyMutationInput, CommentaireUncheckedUpdateManyWithoutDepenseInput>
  }

  export type CommentaireScalarWhereInput = {
    AND?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    OR?: CommentaireScalarWhereInput[]
    NOT?: CommentaireScalarWhereInput | CommentaireScalarWhereInput[]
    id?: IntFilter<"Commentaire"> | number
    texte?: StringFilter<"Commentaire"> | string
    auteur?: StringFilter<"Commentaire"> | string
    date?: DateTimeFilter<"Commentaire"> | Date | string
    depenseId?: IntFilter<"Commentaire"> | number
  }

  export type DepenseCreateWithoutCommentairesInput = {
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    typeDepense: TypeDepenseCreateNestedOneWithoutDepensesInput
    vehicule: VehiculeCreateNestedOneWithoutDepensesInput
    soumisPar: UserCreateNestedOneWithoutDemandesSoumisesInput
    valideParControleurFinancier?: UserCreateNestedOneWithoutValidationsControleurFinancierInput
    valideParControleurGestion?: UserCreateNestedOneWithoutValidationsControleurGestionInput
    valideParResponsableAdmin?: UserCreateNestedOneWithoutValidationsResponsableAdminInput
    valideParAdminGeneral?: UserCreateNestedOneWithoutValidationsAdminGeneralInput
    valideParDG?: UserCreateNestedOneWithoutValidationsDGInput
    documents?: DocumentCreateNestedManyWithoutDepenseInput
  }

  export type DepenseUncheckedCreateWithoutCommentairesInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
    documents?: DocumentUncheckedCreateNestedManyWithoutDepenseInput
  }

  export type DepenseCreateOrConnectWithoutCommentairesInput = {
    where: DepenseWhereUniqueInput
    create: XOR<DepenseCreateWithoutCommentairesInput, DepenseUncheckedCreateWithoutCommentairesInput>
  }

  export type DepenseUpsertWithoutCommentairesInput = {
    update: XOR<DepenseUpdateWithoutCommentairesInput, DepenseUncheckedUpdateWithoutCommentairesInput>
    create: XOR<DepenseCreateWithoutCommentairesInput, DepenseUncheckedCreateWithoutCommentairesInput>
    where?: DepenseWhereInput
  }

  export type DepenseUpdateToOneWithWhereWithoutCommentairesInput = {
    where?: DepenseWhereInput
    data: XOR<DepenseUpdateWithoutCommentairesInput, DepenseUncheckedUpdateWithoutCommentairesInput>
  }

  export type DepenseUpdateWithoutCommentairesInput = {
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeDepense?: TypeDepenseUpdateOneRequiredWithoutDepensesNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutDepensesNestedInput
    soumisPar?: UserUpdateOneRequiredWithoutDemandesSoumisesNestedInput
    valideParControleurFinancier?: UserUpdateOneWithoutValidationsControleurFinancierNestedInput
    valideParControleurGestion?: UserUpdateOneWithoutValidationsControleurGestionNestedInput
    valideParResponsableAdmin?: UserUpdateOneWithoutValidationsResponsableAdminNestedInput
    valideParAdminGeneral?: UserUpdateOneWithoutValidationsAdminGeneralNestedInput
    valideParDG?: UserUpdateOneWithoutValidationsDGNestedInput
    documents?: DocumentUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateWithoutCommentairesInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
    documents?: DocumentUncheckedUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseCreateWithoutDocumentsInput = {
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    typeDepense: TypeDepenseCreateNestedOneWithoutDepensesInput
    vehicule: VehiculeCreateNestedOneWithoutDepensesInput
    soumisPar: UserCreateNestedOneWithoutDemandesSoumisesInput
    valideParControleurFinancier?: UserCreateNestedOneWithoutValidationsControleurFinancierInput
    valideParControleurGestion?: UserCreateNestedOneWithoutValidationsControleurGestionInput
    valideParResponsableAdmin?: UserCreateNestedOneWithoutValidationsResponsableAdminInput
    valideParAdminGeneral?: UserCreateNestedOneWithoutValidationsAdminGeneralInput
    valideParDG?: UserCreateNestedOneWithoutValidationsDGInput
    commentaires?: CommentaireCreateNestedManyWithoutDepenseInput
  }

  export type DepenseUncheckedCreateWithoutDocumentsInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
    commentaires?: CommentaireUncheckedCreateNestedManyWithoutDepenseInput
  }

  export type DepenseCreateOrConnectWithoutDocumentsInput = {
    where: DepenseWhereUniqueInput
    create: XOR<DepenseCreateWithoutDocumentsInput, DepenseUncheckedCreateWithoutDocumentsInput>
  }

  export type DepenseUpsertWithoutDocumentsInput = {
    update: XOR<DepenseUpdateWithoutDocumentsInput, DepenseUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DepenseCreateWithoutDocumentsInput, DepenseUncheckedCreateWithoutDocumentsInput>
    where?: DepenseWhereInput
  }

  export type DepenseUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DepenseWhereInput
    data: XOR<DepenseUpdateWithoutDocumentsInput, DepenseUncheckedUpdateWithoutDocumentsInput>
  }

  export type DepenseUpdateWithoutDocumentsInput = {
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeDepense?: TypeDepenseUpdateOneRequiredWithoutDepensesNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutDepensesNestedInput
    soumisPar?: UserUpdateOneRequiredWithoutDemandesSoumisesNestedInput
    valideParControleurFinancier?: UserUpdateOneWithoutValidationsControleurFinancierNestedInput
    valideParControleurGestion?: UserUpdateOneWithoutValidationsControleurGestionNestedInput
    valideParResponsableAdmin?: UserUpdateOneWithoutValidationsResponsableAdminNestedInput
    valideParAdminGeneral?: UserUpdateOneWithoutValidationsAdminGeneralNestedInput
    valideParDG?: UserUpdateOneWithoutValidationsDGNestedInput
    commentaires?: CommentaireUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
    commentaires?: CommentaireUncheckedUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseCreateManySoumisParInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
  }

  export type DepenseCreateManyValideParControleurFinancierInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
  }

  export type DepenseCreateManyValideParControleurGestionInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
  }

  export type DepenseCreateManyValideParResponsableAdminInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
  }

  export type DepenseCreateManyValideParAdminGeneralInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParDGId?: number | null
  }

  export type DepenseCreateManyValideParDGInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
  }

  export type DepenseUpdateWithoutSoumisParInput = {
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeDepense?: TypeDepenseUpdateOneRequiredWithoutDepensesNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutDepensesNestedInput
    valideParControleurFinancier?: UserUpdateOneWithoutValidationsControleurFinancierNestedInput
    valideParControleurGestion?: UserUpdateOneWithoutValidationsControleurGestionNestedInput
    valideParResponsableAdmin?: UserUpdateOneWithoutValidationsResponsableAdminNestedInput
    valideParAdminGeneral?: UserUpdateOneWithoutValidationsAdminGeneralNestedInput
    valideParDG?: UserUpdateOneWithoutValidationsDGNestedInput
    documents?: DocumentUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateWithoutSoumisParInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
    documents?: DocumentUncheckedUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateManyWithoutSoumisParInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DepenseUpdateWithoutValideParControleurFinancierInput = {
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeDepense?: TypeDepenseUpdateOneRequiredWithoutDepensesNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutDepensesNestedInput
    soumisPar?: UserUpdateOneRequiredWithoutDemandesSoumisesNestedInput
    valideParControleurGestion?: UserUpdateOneWithoutValidationsControleurGestionNestedInput
    valideParResponsableAdmin?: UserUpdateOneWithoutValidationsResponsableAdminNestedInput
    valideParAdminGeneral?: UserUpdateOneWithoutValidationsAdminGeneralNestedInput
    valideParDG?: UserUpdateOneWithoutValidationsDGNestedInput
    documents?: DocumentUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateWithoutValideParControleurFinancierInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
    documents?: DocumentUncheckedUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateManyWithoutValideParControleurFinancierInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DepenseUpdateWithoutValideParControleurGestionInput = {
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeDepense?: TypeDepenseUpdateOneRequiredWithoutDepensesNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutDepensesNestedInput
    soumisPar?: UserUpdateOneRequiredWithoutDemandesSoumisesNestedInput
    valideParControleurFinancier?: UserUpdateOneWithoutValidationsControleurFinancierNestedInput
    valideParResponsableAdmin?: UserUpdateOneWithoutValidationsResponsableAdminNestedInput
    valideParAdminGeneral?: UserUpdateOneWithoutValidationsAdminGeneralNestedInput
    valideParDG?: UserUpdateOneWithoutValidationsDGNestedInput
    documents?: DocumentUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateWithoutValideParControleurGestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
    documents?: DocumentUncheckedUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateManyWithoutValideParControleurGestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DepenseUpdateWithoutValideParResponsableAdminInput = {
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeDepense?: TypeDepenseUpdateOneRequiredWithoutDepensesNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutDepensesNestedInput
    soumisPar?: UserUpdateOneRequiredWithoutDemandesSoumisesNestedInput
    valideParControleurFinancier?: UserUpdateOneWithoutValidationsControleurFinancierNestedInput
    valideParControleurGestion?: UserUpdateOneWithoutValidationsControleurGestionNestedInput
    valideParAdminGeneral?: UserUpdateOneWithoutValidationsAdminGeneralNestedInput
    valideParDG?: UserUpdateOneWithoutValidationsDGNestedInput
    documents?: DocumentUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateWithoutValideParResponsableAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
    documents?: DocumentUncheckedUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateManyWithoutValideParResponsableAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DepenseUpdateWithoutValideParAdminGeneralInput = {
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeDepense?: TypeDepenseUpdateOneRequiredWithoutDepensesNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutDepensesNestedInput
    soumisPar?: UserUpdateOneRequiredWithoutDemandesSoumisesNestedInput
    valideParControleurFinancier?: UserUpdateOneWithoutValidationsControleurFinancierNestedInput
    valideParControleurGestion?: UserUpdateOneWithoutValidationsControleurGestionNestedInput
    valideParResponsableAdmin?: UserUpdateOneWithoutValidationsResponsableAdminNestedInput
    valideParDG?: UserUpdateOneWithoutValidationsDGNestedInput
    documents?: DocumentUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateWithoutValideParAdminGeneralInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
    documents?: DocumentUncheckedUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateManyWithoutValideParAdminGeneralInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DepenseUpdateWithoutValideParDGInput = {
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeDepense?: TypeDepenseUpdateOneRequiredWithoutDepensesNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutDepensesNestedInput
    soumisPar?: UserUpdateOneRequiredWithoutDemandesSoumisesNestedInput
    valideParControleurFinancier?: UserUpdateOneWithoutValidationsControleurFinancierNestedInput
    valideParControleurGestion?: UserUpdateOneWithoutValidationsControleurGestionNestedInput
    valideParResponsableAdmin?: UserUpdateOneWithoutValidationsResponsableAdminNestedInput
    valideParAdminGeneral?: UserUpdateOneWithoutValidationsAdminGeneralNestedInput
    documents?: DocumentUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateWithoutValideParDGInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    documents?: DocumentUncheckedUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateManyWithoutValideParDGInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DepenseCreateManyVehiculeInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    typeDepenseId: number
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
  }

  export type DepenseUpdateWithoutVehiculeInput = {
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    typeDepense?: TypeDepenseUpdateOneRequiredWithoutDepensesNestedInput
    soumisPar?: UserUpdateOneRequiredWithoutDemandesSoumisesNestedInput
    valideParControleurFinancier?: UserUpdateOneWithoutValidationsControleurFinancierNestedInput
    valideParControleurGestion?: UserUpdateOneWithoutValidationsControleurGestionNestedInput
    valideParResponsableAdmin?: UserUpdateOneWithoutValidationsResponsableAdminNestedInput
    valideParAdminGeneral?: UserUpdateOneWithoutValidationsAdminGeneralNestedInput
    valideParDG?: UserUpdateOneWithoutValidationsDGNestedInput
    documents?: DocumentUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateWithoutVehiculeInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
    documents?: DocumentUncheckedUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateManyWithoutVehiculeInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    typeDepenseId?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DepenseCreateManyTypeDepenseInput = {
    id?: number
    dateIntervention: Date | string
    typeVehicule: string
    codeParc: string
    libelle: string
    quantite?: number | null
    montant: number
    statut?: $Enums.StatutDepense
    dateCreation?: Date | string
    commentaireControleurFinancier?: string | null
    commentaireControleurGestion?: string | null
    commentaireResponsableAdmin?: string | null
    commentaireAdminGeneral?: string | null
    commentaireDG?: string | null
    commentaireLogisticien?: string | null
    dateReport?: Date | string | null
    vehiculeId: number
    soumisParId: number
    valideParControleurFinancierId?: number | null
    valideParControleurGestionId?: number | null
    valideParResponsableAdminId?: number | null
    valideParAdminGeneralId?: number | null
    valideParDGId?: number | null
  }

  export type DepenseUpdateWithoutTypeDepenseInput = {
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicule?: VehiculeUpdateOneRequiredWithoutDepensesNestedInput
    soumisPar?: UserUpdateOneRequiredWithoutDemandesSoumisesNestedInput
    valideParControleurFinancier?: UserUpdateOneWithoutValidationsControleurFinancierNestedInput
    valideParControleurGestion?: UserUpdateOneWithoutValidationsControleurGestionNestedInput
    valideParResponsableAdmin?: UserUpdateOneWithoutValidationsResponsableAdminNestedInput
    valideParAdminGeneral?: UserUpdateOneWithoutValidationsAdminGeneralNestedInput
    valideParDG?: UserUpdateOneWithoutValidationsDGNestedInput
    documents?: DocumentUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateWithoutTypeDepenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
    documents?: DocumentUncheckedUpdateManyWithoutDepenseNestedInput
    commentaires?: CommentaireUncheckedUpdateManyWithoutDepenseNestedInput
  }

  export type DepenseUncheckedUpdateManyWithoutTypeDepenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateIntervention?: DateTimeFieldUpdateOperationsInput | Date | string
    typeVehicule?: StringFieldUpdateOperationsInput | string
    codeParc?: StringFieldUpdateOperationsInput | string
    libelle?: StringFieldUpdateOperationsInput | string
    quantite?: NullableIntFieldUpdateOperationsInput | number | null
    montant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutDepenseFieldUpdateOperationsInput | $Enums.StatutDepense
    dateCreation?: DateTimeFieldUpdateOperationsInput | Date | string
    commentaireControleurFinancier?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireControleurGestion?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireResponsableAdmin?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireAdminGeneral?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireDG?: NullableStringFieldUpdateOperationsInput | string | null
    commentaireLogisticien?: NullableStringFieldUpdateOperationsInput | string | null
    dateReport?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehiculeId?: IntFieldUpdateOperationsInput | number
    soumisParId?: IntFieldUpdateOperationsInput | number
    valideParControleurFinancierId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParControleurGestionId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParResponsableAdminId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParAdminGeneralId?: NullableIntFieldUpdateOperationsInput | number | null
    valideParDGId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocumentCreateManyDepenseInput = {
    id?: number
    url: string
    nom: string
  }

  export type CommentaireCreateManyDepenseInput = {
    id?: number
    texte: string
    auteur: string
    date?: Date | string
  }

  export type DocumentUpdateWithoutDepenseInput = {
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateWithoutDepenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateManyWithoutDepenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
  }

  export type CommentaireUpdateWithoutDepenseInput = {
    texte?: StringFieldUpdateOperationsInput | string
    auteur?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUncheckedUpdateWithoutDepenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    texte?: StringFieldUpdateOperationsInput | string
    auteur?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentaireUncheckedUpdateManyWithoutDepenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    texte?: StringFieldUpdateOperationsInput | string
    auteur?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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