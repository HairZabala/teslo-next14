import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String']['output'];
  user: User;
};

export type Category = {
  __typename?: 'Category';
  /** Id of the category */
  id: Scalars['ID']['output'];
  /** Name of the category */
  name: Scalars['String']['output'];
  /** Products of the category */
  products?: Maybe<Array<Product>>;
};

export type CreateCategoryInput = {
  /** Name of the category */
  name: Scalars['String']['input'];
};

export type CreateProductInput = {
  /** Category ID of the product */
  categoryId: Scalars['String']['input'];
  /** Description of the product */
  description: Scalars['String']['input'];
  /** Gender of the product */
  gender: Gender;
  /** Units in stock of the product */
  inStock: Scalars['Float']['input'];
  /** Price of the product */
  price: Scalars['Float']['input'];
  /** Available sizes of the product */
  sizes: Array<ProductSize>;
  /** Slug of the product */
  slug: Scalars['String']['input'];
  /** Tags of the product */
  tags: Array<Scalars['String']['input']>;
  /** Title of the product */
  title: Scalars['String']['input'];
};

export enum Gender {
  Kid = 'Kid',
  Men = 'Men',
  Unisex = 'Unisex',
  Women = 'Women'
}

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  blockUser: User;
  createCategory: Category;
  createProduct: Product;
  /** Execute seed database */
  executeSeed: Scalars['Boolean']['output'];
  login: AuthResponse;
  removeProduct: Product;
  signUp: AuthResponse;
  updateProduct: Product;
  updateUser: User;
};


export type MutationBlockUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationUpdateProductArgs = {
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type PageData = {
  __typename?: 'PageData';
  count: Scalars['Float']['output'];
  limit: Scalars['Float']['output'];
  offset: Scalars['Float']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Product = {
  __typename?: 'Product';
  /** Category with the issues */
  category: Category;
  /** Description of the product */
  description: Scalars['String']['output'];
  /** Gender of the product */
  gender: Gender;
  /** Id of the product */
  id: Scalars['ID']['output'];
  /** Images of the product */
  images: Array<ProductImage>;
  /** Units in stock of the product */
  inStock: Scalars['Float']['output'];
  /** Price of the product */
  price: Scalars['Float']['output'];
  /** Available sizes of the product */
  sizes: Array<ProductSize>;
  /** Slug of the product */
  slug: Scalars['String']['output'];
  /** Tags of the product */
  tags: Array<Scalars['String']['output']>;
  /** Title of the product */
  title: Scalars['String']['output'];
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  edges?: Maybe<Array<ProductEdge>>;
  pageInfo?: Maybe<PageInfo>;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<Product>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  /** Id of the product */
  id: Scalars['ID']['output'];
  /** Product of the image */
  product: Product;
  /** Title of the product */
  url: Scalars['String']['output'];
};

export type ProductPageResponse = {
  __typename?: 'ProductPageResponse';
  page: ProductConnection;
  pageData?: Maybe<PageData>;
};

export enum ProductSize {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'XL',
  Xs = 'XS',
  Xxl = 'XXL',
  Xxxl = 'XXXL'
}

export type Query = {
  __typename?: 'Query';
  category: Category;
  product: Product;
  products: ProductPageResponse;
  revalidate: AuthResponse;
  user: User;
  users: Array<User>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  roles?: InputMaybe<Array<ValidRoles>>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type SignUpInput = {
  email: Scalars['String']['input'];
  fullName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UpdateProductInput = {
  /** Category ID of the product */
  categoryId?: InputMaybe<Scalars['String']['input']>;
  /** Description of the product */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Gender of the product */
  gender?: InputMaybe<Gender>;
  id: Scalars['ID']['input'];
  /** Units in stock of the product */
  inStock?: InputMaybe<Scalars['Float']['input']>;
  /** Price of the product */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** Available sizes of the product */
  sizes?: InputMaybe<Array<ProductSize>>;
  /** Slug of the product */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Tags of the product */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Title of the product */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<ValidRoles>>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  roles: Array<ValidRoles>;
};

export enum ValidRoles {
  Admin = 'admin',
  User = 'user'
}

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'User', id: string, email: string, fullName: string, roles: Array<ValidRoles>, isActive: boolean } } };

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'AuthResponse', token: string, user: { __typename?: 'User', id: string, email: string, fullName: string, roles: Array<ValidRoles>, isActive: boolean } } };

export type ProductsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Float']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
}>;


export type ProductsQuery = { __typename?: 'Query', products: { __typename?: 'ProductPageResponse', pageData?: { __typename?: 'PageData', count: number, limit: number, offset: number } | null, page: { __typename?: 'ProductConnection', edges?: Array<{ __typename?: 'ProductEdge', cursor?: string | null, node?: { __typename?: 'Product', id: string, title: string, description: string, inStock: number, price: number, sizes: Array<ProductSize>, slug: string, tags: Array<string>, gender: Gender, images: Array<{ __typename?: 'ProductImage', id: string, url: string }> } | null }> | null, pageInfo?: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } | null } } };

export type PageDataBaseFragment = { __typename?: 'PageData', count: number, limit: number, offset: number };

export type PageInfoBaseFragment = { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null };

export type ProductBaseFragment = { __typename?: 'Product', id: string, title: string, description: string, inStock: number, price: number, sizes: Array<ProductSize>, slug: string, tags: Array<string>, gender: Gender, images: Array<{ __typename?: 'ProductImage', id: string, url: string }> };

export type ProductConnectionBaseFragment = { __typename?: 'ProductConnection', edges?: Array<{ __typename?: 'ProductEdge', cursor?: string | null, node?: { __typename?: 'Product', id: string, title: string, description: string, inStock: number, price: number, sizes: Array<ProductSize>, slug: string, tags: Array<string>, gender: Gender, images: Array<{ __typename?: 'ProductImage', id: string, url: string }> } | null }> | null, pageInfo?: { __typename?: 'PageInfo', endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null } | null };

export type ProductEdgeBaseFragment = { __typename?: 'ProductEdge', cursor?: string | null, node?: { __typename?: 'Product', id: string, title: string, description: string, inStock: number, price: number, sizes: Array<ProductSize>, slug: string, tags: Array<string>, gender: Gender, images: Array<{ __typename?: 'ProductImage', id: string, url: string }> } | null };

export type UserBaseFragment = { __typename?: 'User', id: string, email: string, fullName: string, roles: Array<ValidRoles>, isActive: boolean };

export const PageDataBaseFragmentDoc = gql`
    fragment PageDataBase on PageData {
  count
  limit
  offset
}
    `;
export const ProductBaseFragmentDoc = gql`
    fragment ProductBase on Product {
  id
  title
  description
  inStock
  price
  sizes
  slug
  tags
  gender
  images {
    id
    url
  }
}
    `;
export const ProductEdgeBaseFragmentDoc = gql`
    fragment ProductEdgeBase on ProductEdge {
  cursor
  node {
    ...ProductBase
  }
}
    ${ProductBaseFragmentDoc}`;
export const PageInfoBaseFragmentDoc = gql`
    fragment PageInfoBase on PageInfo {
  endCursor
  hasNextPage
  hasPreviousPage
  startCursor
}
    `;
export const ProductConnectionBaseFragmentDoc = gql`
    fragment ProductConnectionBase on ProductConnection {
  edges {
    ...ProductEdgeBase
  }
  pageInfo {
    ...PageInfoBase
  }
}
    ${ProductEdgeBaseFragmentDoc}
${PageInfoBaseFragmentDoc}`;
export const UserBaseFragmentDoc = gql`
    fragment UserBase on User {
  id
  email
  fullName
  roles
  isActive
}
    `;
export const LoginDocument = gql`
    mutation Login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    token
    user {
      ...UserBase
    }
  }
}
    ${UserBaseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($signUpInput: SignUpInput!) {
  signUp(signUpInput: $signUpInput) {
    token
    user {
      ...UserBase
    }
  }
}
    ${UserBaseFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      signUpInput: // value for 'signUpInput'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const ProductsDocument = gql`
    query Products($first: Float, $before: String, $after: String, $last: Float) {
  products(first: $first, before: $before, after: $after, last: $last) {
    pageData {
      ...PageDataBase
    }
    page {
      ...ProductConnectionBase
    }
  }
}
    ${PageDataBaseFragmentDoc}
${ProductConnectionBaseFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      before: // value for 'before'
 *      after: // value for 'after'
 *      last: // value for 'last'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;