"use client";

import DefaultButton from "@/components/ui/ButtonComponent";
import { Formik, FormikProps } from "formik";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import { login } from "../actions";
import {
  LoginFields,
  LoginValues,
  loginValidationSchema,
} from "../formik/LoginFormValues";

const INITIAL_VALUES: LoginValues = {
  [LoginFields.EMAIL]: "hair@google.com",
  [LoginFields.PASSWORD]: "Abc123",
};

const LoginForm = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("callbackUrl");

  const formRef = useRef<FormikProps<LoginValues>>(null);

  const onSubmit = useCallback(
    async (values: LoginValues) => {
      try {
        await login(values);
        window.location.replace(search ?? "/");
      } catch (error) {
        console.debug(error);
      }
    },
    [search]
  );

  return (
    <Formik<LoginValues>
      innerRef={formRef}
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={loginValidationSchema}
      validateOnChange
      validateOnMount
    >
      {({
        handleBlur,
        handleSubmit,
        handleChange,
        errors,
        touched,
        isSubmitting,
        values,
      }: FormikProps<LoginValues>) => {
        return (
          <form className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id={LoginFields.EMAIL}
              name={LoginFields.EMAIL}
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              className="px-5 py-2 border bg-gray-200 rounded mb-5"
            />
            {touched.email && errors.email && (
              <div className="text-red-500">{errors.email}</div>
            )}

            <label htmlFor="email" className="pt-2">
              Password
            </label>
            <input
              className="px-5 py-2 border bg-gray-200 rounded mb-5"
              type="password"
              id={LoginFields.PASSWORD}
              name={LoginFields.PASSWORD}
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {touched.password && errors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}

            <DefaultButton
              type="submit"
              text="LogIn"
              onClick={handleSubmit}
              disabled={isSubmitting}
            />

            {/* divisor l ine */}
            <div className="flex items-center my-5">
              <div className="flex-1 border-t border-gray-500"></div>
              <div className="px-2 text-gray-800">O</div>
              <div className="flex-1 border-t border-gray-500"></div>
            </div>

            <Link href="/auth/signup">
              <DefaultButton text="Sign up" variant="outline" />
            </Link>
          </form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
