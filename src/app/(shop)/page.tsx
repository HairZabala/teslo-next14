import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import HeaderPage from "@/components/ui/HeaderPage";
import ProductGrid from "@/features/products/ProductGrid";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <>
      <HeaderPage
        title="Products"
        subtitle="Welcome to the store"
        className="mb-2"
      />
      <ProductGrid products={products} />
    </>
  );
}
