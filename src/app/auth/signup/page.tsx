import SignUpForm from "@/features/auth/components/SignUpForm";
import { secondaryFont } from "@/utils/font";

export default function SignUpPage() {
  return (
    <main className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${secondaryFont.className} text-4xl mb-5`}>Sign Up</h1>

      <SignUpForm />
    </main>
  );
}
