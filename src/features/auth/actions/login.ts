"use server";
import { signIn } from "@/auth.config";
import { LoginValues } from "../formik/LoginFormValues";

export async function login(values: LoginValues) {
  try {
    await signIn("sign-in", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
  } catch (error) {
    return "CredentialSignIn";
  }
}
