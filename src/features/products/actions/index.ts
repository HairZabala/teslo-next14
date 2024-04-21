import {
  ProductEdge,
  ProductsDocument,
  ProductsQueryResult,
} from "@/graphql/generated";
import { PaginationArgs } from "@/interfaces";
import { apolloClient } from "@/utils/apolloServer";

const REGISTERS_PER_PAGE = 12;

export const getPaginatedProducts = async ({
  first,
  after,
  last,
  before,
}: PaginationArgs) => {
  try {
    const { data } = (await apolloClient().query({
      fetchPolicy: "cache-first",
      query: ProductsDocument,
      variables: {
        first,
        after,
        last,
        before,
      },
    })) as ProductsQueryResult;

    const products = data?.products.page.edges as ProductEdge[];
    let totalPages = 1;
    if (data?.products.pageData?.count) {
      totalPages = Math.ceil(
        data?.products.pageData?.count! / (first ?? REGISTERS_PER_PAGE)
      );
    }

    return {
      products,
      totalPages,
      pageData: data?.products.pageData,
      pageInfo: data?.products.page.pageInfo,
    };
  } catch (error) {
    console.debug(error);
    throw new Error("Error fetching products");
  }
};
