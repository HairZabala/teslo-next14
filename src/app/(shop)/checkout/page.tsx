import PrimaryButton from "@/components/ui/ButtonComponent";
import HeaderPage from "@/components/ui/HeaderPage";
import QuantitySelector from "@/features/product/QuantitySelector";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <HeaderPage title="Cart" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Add more items</span>
            <Link href="/" className="underline mb-5">
              Keep shopping
            </Link>
            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-2">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>${product.price} * 3</p>
                  <p className="font-bold">Subtotal ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Delivery Address</h2>
            <div className="mb-10">
              <p>Hair Zabala</p>
              <p>10 Trinity st,</p>
              <p>Fortitude Valley</p>
              <p>Brisbane</p>
              <p>QLD</p>
              <p>4006</p>
              <p>0414039719</p>
            </div>

            <h2 className="text-2xl mb-2">Order summary</h2>
            <div className="grid grid-cols-2 ">
              <span>No. Products</span>
              <span className="text-right">3 items</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Tax (15%)</span>
              <span className="text-right">$100</span>

              <span className="text-2xl mt-5">Total</span>
              <span className="text-2xl mt-5 text-right">$100</span>
            </div>

            <Link href="/orders/123">
              <PrimaryButton text="Order" className="mt-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
