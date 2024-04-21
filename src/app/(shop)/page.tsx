export const dynamic = "force-dynamic";

import HeaderPage from "@/components/ui/HeaderPage";
import PaginationData from "@/components/ui/PaginationData";
import { getPaginatedProducts } from "@/features/products/actions";
import ProductGrid from "@/features/products/components/ProductGrid";
import { ProductEdge } from "@/graphql/generated";
import { redirect } from "next/navigation";

const REGISTERS_PER_PAGE = 12;

interface Props {
  searchParams: {
    first?: string;
    last?: string;
    after?: string;
    before?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const first = searchParams.first
    ? isNaN(Number(searchParams.first))
      ? null
      : parseInt(searchParams.first)
    : REGISTERS_PER_PAGE;

  const last = searchParams.last
    ? Number(searchParams.last) ?? REGISTERS_PER_PAGE
    : null;

  const { products, pageData, pageInfo } = await getPaginatedProducts({
    first,
    last,
    after: searchParams.after,
    before: searchParams.before,
  });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <>
      <HeaderPage
        title="Products"
        subtitle="Welcome to the store"
        className="mb-2"
      />
      <ProductGrid products={products as ProductEdge[]} />
      <PaginationData
        perPage={first ?? REGISTERS_PER_PAGE}
        pageInfo={pageInfo!}
        pageData={pageData!}
      />
    </>
  );
}
