/**
 * @see https://gcanti.github.io/fp-ts/modules/Either.ts.html
 **/

export type EitherType<E, A> = {
  left: E;
  right: A;
};
