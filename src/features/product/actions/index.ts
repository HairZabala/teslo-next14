"use server";

import {
  Product,
  ProductBySlugDocument,
  ProductBySlugQueryResult,
} from "@/graphql/generated";
import { apolloClient } from "@/utils/apolloServer";

export const getProductBySlug = async (slug: string) => {
  try {
    const { data } = (await apolloClient().query({
      query: ProductBySlugDocument,
      variables: {
        slug,
      },
    })) as ProductBySlugQueryResult;

    return data?.productBySlug as Product;
  } catch (error) {
    console.debug(error);
    throw new Error("Error fetching product");
  }
};
