import { ErrorAxiosResponse } from "@/types";
import { ApolloError } from "@apollo/client";
import axios, { AxiosError } from "axios";

export enum ErrorCodes {
  UserNotFound = "UserNotFound",
}

export const errorCodesToMessage: { [key in string]: string } = {
  [ErrorCodes.UserNotFound]: "User not found",
};

export const apolloErrorToString: (
  error: ApolloError | AxiosError
) => string = (error) => {
  if (axios.isAxiosError(error)) {
    return errorCodesToMessage[
      (error.response?.data as ErrorAxiosResponse).message
    ];
  } else if (error.message === "Unexpected token < in JSON at position 0") {
    return "Unexpected server error";
  } else if (error.message in errorCodesToMessage) {
    return errorCodesToMessage[error.message];
  } else if (error.networkError) {
    return "Encountered network error.";
  } else if (error.message) {
    return error.message;
  } else {
    return "An unexpected error occurred";
  }
};
