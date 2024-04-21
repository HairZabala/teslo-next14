import LoginForm from "@/features/auth/components/LoginForm";
import { secondaryFont } from "@/utils/font";
import { Suspense } from "react";

export default function LoginPage() {
  return (
    <main className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${secondaryFont.className} text-4xl mb-5`}>LogIn</h1>
      <Suspense>
        <LoginForm />
      </Suspense>
    </main>
  );
}
