import HeaderPage from "@/components/ui/HeaderPage";
import ProductGrid from "@/features/products/components/ProductGrid";
import { Category, initialData } from "@/seed/seed";
import { capitalise } from "@/utils/utils";
import { notFound } from "next/navigation";
import React from "react";

interface CategoryPageProps {
  params: {
    id: Category;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { id } = params;

  if (!Object.values(Category).includes(id)) {
    notFound();
  }

  const products = initialData.products.filter(
    (product) => product.gender === id
  );

  return (
    <>
      <HeaderPage
        title={`${capitalise(id)} Products`}
        subtitle="Welcome to the store"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
