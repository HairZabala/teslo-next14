"use client";

import DefaultButton from "@/components/ui/ButtonComponent";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  SignUpFields,
  SignUpValues,
  signUpValidationSchema,
} from "../formik/SignUpFormValues";
import { Formik, FormikProps } from "formik";
import { apolloErrorToString } from "@/utils/apolloErrors";
import { useSignUpMutation } from "@/graphql/generated";
import { login } from "../actions";

const INITIAL_VALUES: SignUpValues = {
  [SignUpFields.FULL_NAME]: "Test",
  [SignUpFields.EMAIL]: "test1@google.com",
  [SignUpFields.PASSWORD]: "Abc123",
};

const SignUpForm = () => {
  const formRef = useRef<FormikProps<SignUpValues>>(null);

  const [error, setError] = useState("");

  const [signUpMutation, { error: apolloError }] = useSignUpMutation();

  const onSubmit = useCallback(
    async (values: SignUpValues) => {
      try {
        setError("");
        await signUpMutation({
          variables: {
            signUpInput: {
              email: values.email,
              fullName: values.fullName,
              password: values.password,
            },
          },
        });
        await login({
          email: values.email,
          password: values.password,
        });

        // Redirect to home page
        window.location.replace("/");
      } catch (error) {
        // Error handle by Apollo
      }
    },
    [signUpMutation]
  );

  useEffect(() => {
    if (apolloError) {
      setError(apolloErrorToString(apolloError));
    }
  }, [apolloError]);

  return (
    <Formik<SignUpValues>
      innerRef={formRef}
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={signUpValidationSchema}
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
      }: FormikProps<SignUpValues>) => {
        return (
          <form className="flex flex-col">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id={SignUpFields.FULL_NAME}
              name={SignUpFields.FULL_NAME}
              value={values[SignUpFields.FULL_NAME]}
              onBlur={handleBlur}
              onChange={handleChange}
              className="px-5 py-2 border bg-gray-200 rounded mb-5"
            />
            {touched[SignUpFields.FULL_NAME] &&
              errors[SignUpFields.FULL_NAME] && (
                <div className="text-red-500">
                  {errors[SignUpFields.FULL_NAME]}
                </div>
              )}

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id={SignUpFields.EMAIL}
              name={SignUpFields.EMAIL}
              value={values[SignUpFields.EMAIL]}
              onBlur={handleBlur}
              onChange={handleChange}
              className="px-5 py-2 border bg-gray-200 rounded mb-5"
            />
            {touched[SignUpFields.EMAIL] && errors[SignUpFields.EMAIL] && (
              <div className="text-red-500">{errors[SignUpFields.EMAIL]}</div>
            )}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id={SignUpFields.PASSWORD}
              name={SignUpFields.PASSWORD}
              value={values[SignUpFields.PASSWORD]}
              onBlur={handleBlur}
              onChange={handleChange}
              className="px-5 py-2 border bg-gray-200 rounded mb-5"
            />
            {touched[SignUpFields.PASSWORD] &&
              errors[SignUpFields.PASSWORD] && (
                <div className="text-red-500">
                  {errors[SignUpFields.PASSWORD]}
                </div>
              )}

            {error && <div className="text-red-500">{error}</div>}

            <DefaultButton
              type="submit"
              text="Sign Up"
              onClick={handleSubmit}
              disabled={isSubmitting}
            />

            {/* divisor line */}
            <div className="flex items-center my-5">
              <div className="flex-1 border-t border-gray-500"></div>
              <div className="px-2 text-gray-800">O</div>
              <div className="flex-1 border-t border-gray-500"></div>
            </div>

            <Link href="/auth/login">
              <DefaultButton text="Sign In" variant="outline" />
            </Link>
          </form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
