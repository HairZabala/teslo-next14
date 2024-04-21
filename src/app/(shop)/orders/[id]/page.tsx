import PrimaryButton from "@/components/ui/ButtonComponent";
import HeaderPage from "@/components/ui/HeaderPage";
import QuantitySelector from "@/features/product/components/QuantitySelector";
import { initialData } from "@/seed/seed";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export interface OrderPageProps {
  params: {
    id: string;
  };
}

export default function OrderPage({ params }: OrderPageProps) {
  const { id } = params;

  // TODO: validations

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <HeaderPage title={`Order #${id}`} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <div
              className={cn(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-green-700": false,
                  "bg-red-500": true,
                }
              )}
            >
              <IoCardOutline size={30} />
              <span className="mx-2">Pending</span>
              {/* <span className="mx-2">Paid</span> */}
            </div>

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
            <div className="grid grid-cols-2 mb-5">
              <span>No. Products</span>
              <span className="text-right">3 items</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Tax (15%)</span>
              <span className="text-right">$100</span>

              <span className="text-2xl mt-5">Total</span>
              <span className="text-2xl mt-5 text-right">$100</span>
            </div>

            <div
              className={cn(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-green-500": true,
                  "bg-red-700": false,
                }
              )}
            >
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pending</span> */}
              <span className="mx-2">Paid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
