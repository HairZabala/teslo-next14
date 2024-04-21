import * as Yup from "yup";

export enum SignUpFields {
  FULL_NAME = "fullName",
  EMAIL = "email",
  PASSWORD = "password",
}

export interface SignUpValues {
  [SignUpFields.FULL_NAME]: string;
  [SignUpFields.EMAIL]: string;
  [SignUpFields.PASSWORD]: string;
}

export const signUpValidationSchema = Yup.object({
  [SignUpFields.FULL_NAME]: Yup.string().required("Full name is required"),
  [SignUpFields.EMAIL]: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
  [SignUpFields.PASSWORD]: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
