"use client";

import DefaultButton from "@/components/ui/ButtonComponent";
import Link from "next/link";
import React, { useCallback, useRef } from "react";
import {
  LoginFields,
  LoginValues,
  loginValidationSchema,
} from "../formik/CreateRiskAssessmentFormValues";
import { Formik, FormikProps } from "formik";

const INITIAL_VALUES: LoginValues = {
  [LoginFields.EMAIL]: "",
  [LoginFields.PASSWORD]: "",
};

const LoginForm = () => {
  const formRef = useRef<FormikProps<LoginValues>>(null);

  const onSubmit = useCallback((values: LoginValues) => {
    console.debug(values);
  }, []);

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
      }: FormikProps<LoginValues>) => {
        return (
          <form className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id={LoginFields.EMAIL}
              name={LoginFields.EMAIL}
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
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {touched.password && errors.password && (
              <div className="text-red-500">{errors.password}</div>
            )}

            <DefaultButton type="submit" text="LogIn" onClick={handleSubmit} />

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
