import Title from "@/components/typography/Title";
import PrimaryButton from "@/components/ui/ButtonComponent";
import QuantitySelector from "@/features/product/QuantitySelector";
import SizeSelector from "@/features/product/SizeSelector";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;

  const product = initialData.products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2">SlideShow</div>

      {/* Details */}
      <div className="col-span-1 px-5 ">
        <Title className="text-xl font-bold">{product.title}</Title>
        <p className="text-lg mb-5">${product.price}</p>

        {/* Sizes selector */}
        <SizeSelector
          availableSizes={product.sizes}
          // selectedSize={product.sizes[0]}
        />

        {/* Quantity selector */}
        <QuantitySelector quantity={1} />

        <PrimaryButton text="Primary" className="mb-2" />

        {/* Description */}
        <h3 className="font-bold text-sm">Description</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
