import DefaultButton from "@/components/ui/ButtonComponent";
import LoginForm from "@/features/auth/components/LoginForm";
import { secondaryFont } from "@/utils/font";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${secondaryFont.className} text-4xl mb-5`}>LogIn</h1>

      <LoginForm />
    </main>
  );
}
