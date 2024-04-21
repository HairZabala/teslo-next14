import HeaderPage from "@/components/ui/HeaderPage";
import PaginationData from "@/components/ui/PaginationData";
import { getPaginatedProducts } from "@/features/products/actions";
import ProductGrid from "@/features/products/components/ProductGrid";
import { Gender } from "@/graphql/generated";
import { capitalise } from "@/utils/utils";
import { redirect, usePathname } from "next/navigation";

const REGISTERS_PER_PAGE = 12;

interface CategoryPageProps {
  params: {
    gender: Gender;
  };
  searchParams: {
    first?: string;
    last?: string;
    after?: string;
    before?: string;
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { gender } = params;

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
    gender: gender,
  });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  return (
    <>
      <HeaderPage
        title={`${capitalise(gender)} Products`}
        subtitle="Welcome to the store"
        className="mb-2"
      />
      <ProductGrid products={products} />
      <PaginationData
        perPage={first ?? REGISTERS_PER_PAGE}
        pageInfo={pageInfo!}
        pageData={pageData!}
      />
    </>
  );
}
