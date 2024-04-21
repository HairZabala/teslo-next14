import React from "react";
import ProductGridItem from "./ProductGridItem";
import { Product, ProductEdge } from "@/graphql/generated";

export interface ProductGridProps {
  products: ProductEdge[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 ">
      {products.map((product) => (
        <ProductGridItem key={product.node?.slug} product={product.node!} />
      ))}
    </div>
  );
};

export default ProductGrid;
