import DefaultButton from "@/components/ui/ButtonComponent";
import HeaderPage from "@/components/ui/HeaderPage";
import Link from "next/link";

export default function AddressPage() {
  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">
      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">
        <HeaderPage title="Address" subtitle="Delivery address" />

        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
          <div className="flex flex-col mb-2">
            <span>Names</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col mb-2">
            <span>Last name</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col mb-2">
            <span>Address</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col mb-2">
            <span>Address 2 (optional)</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col mb-2">
            <span>Postal code</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col mb-2">
            <span>City</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <div className="flex flex-col mb-2">
            <span>Country</span>
            <select className="p-2 border rounded-md bg-gray-200">
              <option value="">[ select ]</option>
              <option value="CRI">Costa Rica</option>
            </select>
          </div>

          <div className="flex flex-col mb-2">
            <span>Mobile number</span>
            <input type="text" className="p-2 border rounded-md bg-gray-200" />
          </div>

          <Link href="/checkout" className="w-full sm:w-1/2 justify-center">
            <DefaultButton text="Next" />
          </Link>
        </div>
      </div>
    </div>
  );
}
