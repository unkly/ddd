import { graphql } from 'msw'
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Community = {
  __typename?: 'Community';
  createdAt: Scalars['String']['output'];
  createdBy: User;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  users?: Maybe<Array<User>>;
};

export type CreatePostInput = {
  calories?: InputMaybe<Scalars['Int']['input']>;
  detail: Scalars['String']['input'];
  difficulty: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  materials?: InputMaybe<Array<MaterialInput>>;
  title: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type Material = {
  __typename?: 'Material';
  count: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type MaterialInput = {
  count: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<ReturnResultPayload>;
};


export type MutationCreatePostArgs = {
  input: CreatePostInput;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCorsor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
};

export type Post = {
  __typename?: 'Post';
  calories?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['String']['output'];
  detail: Scalars['String']['output'];
  difficulty: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  materials?: Maybe<Array<Material>>;
  title: Scalars['String']['output'];
  user: User;
};

export type PostConnection = {
  __typename?: 'PostConnection';
  edges: Array<Post>;
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  communities?: Maybe<Array<Community>>;
  posts?: Maybe<PostConnection>;
  users?: Maybe<Array<User>>;
};


export type QueryPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ReturnResultPayload = {
  __typename?: 'ReturnResultPayload';
  result: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type PostsQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  first: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type PostsQuery = { __typename?: 'Query', posts?: { __typename?: 'PostConnection', edges: Array<{ __typename?: 'Post', calories?: number | null, createdAt: string, detail: string, difficulty: number, id: string, title: string, user: { __typename?: 'User', email: string, id: string, name: string } }>, pageInfo: { __typename?: 'PageInfo', endCorsor?: string | null, hasNextPage: boolean } } | null };

export type CommunitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type CommunitiesQuery = { __typename?: 'Query', communities?: Array<{ __typename?: 'Community', id: string, name: string, createdAt: string, createdBy: { __typename?: 'User', name: string } }> | null };

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'ReturnResultPayload', result: boolean } | null };


/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockPostsQuery((req, res, ctx) => {
 *   const { after, first, userId } = req.variables;
 *   return res(
 *     ctx.data({ posts })
 *   )
 * })
 */
export const mockPostsQuery = (resolver: Parameters<typeof graphql.query<PostsQuery, PostsQueryVariables>>[1]) =>
  graphql.query<PostsQuery, PostsQueryVariables>(
    'posts',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCommunitiesQuery((req, res, ctx) => {
 *   return res(
 *     ctx.data({ communities })
 *   )
 * })
 */
export const mockCommunitiesQuery = (resolver: Parameters<typeof graphql.query<CommunitiesQuery, CommunitiesQueryVariables>>[1]) =>
  graphql.query<CommunitiesQuery, CommunitiesQueryVariables>(
    'communities',
    resolver
  )

/**
 * @param resolver a function that accepts a captured request and may return a mocked response.
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCreatePostMutation((req, res, ctx) => {
 *   const { input } = req.variables;
 *   return res(
 *     ctx.data({ createPost })
 *   )
 * })
 */
export const mockCreatePostMutation = (resolver: Parameters<typeof graphql.mutation<CreatePostMutation, CreatePostMutationVariables>>[1]) =>
  graphql.mutation<CreatePostMutation, CreatePostMutationVariables>(
    'createPost',
    resolver
  )
