export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Boolean: boolean;
  Float: number;
  ID: string;
  Int: number;
  String: string;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Lift = {
  __typename?: 'Lift';
  capacity: Scalars['Int'];
  elevationGain: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  night: Scalars['Boolean'];
  status?: Maybe<LiftStatus>;
  trailAccess: Array<Trail>;
};

export enum LiftStatus {
  Closed = 'CLOSED',
  Hold = 'HOLD',
  Open = 'OPEN',
}

export type Mutation = {
  __typename?: 'Mutation';
  setLiftStatus: Lift;
  setTrailStatus: Trail;
};

export type MutationSetLiftStatusArgs = {
  id: Scalars['ID'];
  status: LiftStatus;
};

export type MutationSetTrailStatusArgs = {
  id: Scalars['ID'];
  status: TrailStatus;
};

export type Query = {
  Lift: Lift;
  Trail: Trail;
  __typename?: 'Query';
  allLifts: Array<Lift>;
  allTrails: Array<Trail>;
  liftCount: Scalars['Int'];
  search: Array<SearchResult>;
  trailCount: Scalars['Int'];
};

export type QueryLiftArgs = {
  id: Scalars['ID'];
};

export type QueryTrailArgs = {
  id: Scalars['ID'];
};

export type QueryAllLiftsArgs = {
  status?: InputMaybe<LiftStatus>;
};

export type QueryAllTrailsArgs = {
  status?: InputMaybe<TrailStatus>;
};

export type QueryLiftCountArgs = {
  status?: InputMaybe<LiftStatus>;
};

export type QuerySearchArgs = {
  status?: InputMaybe<LiftStatus>;
  term?: InputMaybe<Scalars['String']>;
};

export type QueryTrailCountArgs = {
  status?: InputMaybe<TrailStatus>;
};

export type SearchResult = Lift | Trail;

export type Subscription = {
  __typename?: 'Subscription';
  liftStatusChange?: Maybe<Lift>;
  trailStatusChange?: Maybe<Trail>;
};

export type Trail = {
  __typename?: 'Trail';
  accessedByLifts: Array<Lift>;
  difficulty: Scalars['String'];
  groomed: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  night: Scalars['Boolean'];
  status?: Maybe<TrailStatus>;
  trees: Scalars['Boolean'];
};

export enum TrailStatus {
  Closed = 'CLOSED',
  Open = 'OPEN',
}
