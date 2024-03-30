import DefaultButton from "@/components/ui/ButtonComponent";
import { secondaryFont } from "@/utils/font";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${secondaryFont.className} text-4xl mb-5`}>LogIn</h1>

      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email"
        />

        <label htmlFor="email">Password</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5"
          type="email"
        />

        <DefaultButton text="LogIn" />

        {/* divisor l ine */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link href="/auth/signup">
          <DefaultButton text="Sign up" variant="outline" />
        </Link>
      </div>
    </main>
  );
}
