import * as Yup from "yup";

export enum LoginFields {
  EMAIL = "email",
  PASSWORD = "password",
}

export interface LoginValues {
  [LoginFields.EMAIL]: string;
  [LoginFields.PASSWORD]: string;
}

export const loginValidationSchema = Yup.object({
  [LoginFields.EMAIL]: Yup.string()
    .required("Email is required")
    .email("Email is invalid"),
  [LoginFields.PASSWORD]: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
