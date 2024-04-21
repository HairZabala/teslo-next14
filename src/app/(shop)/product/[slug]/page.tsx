export const revalidate = 604800; // 7 days

import Title from "@/components/typography/Title";
import PrimaryButton from "@/components/ui/ButtonComponent";
import { getProductBySlug } from "@/features/product/actions";
import MobileSlideShow from "@/features/product/components/MobileSlideShow";
import QuantitySelector from "@/features/product/components/QuantitySelector";
import SizeSelector from "@/features/product/components/SizeSelector";
import SlideShow from "@/features/product/components/SlideShow";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className="col-span-1 md:col-span-2">
        <MobileSlideShow
          images={product.images.map((image) => image.url)}
          title={product.title}
          className="md:hidden"
        />
        <SlideShow
          images={product.images.map((image) => image.url)}
          title={product.title}
          className="hidden md:block"
        />
      </div>

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
