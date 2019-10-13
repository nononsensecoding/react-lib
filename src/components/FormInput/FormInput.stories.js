import React from "react";
import FormInput from "./FormInput";
import { isValidUsername } from "../../utils";

export default {
  title: "FormInput"
};

export const defaultUsage = () => <FormInput />;

export const number = () => <FormInput type="number" />;

export const withCustomValidator = () => (
  <FormInput
    validateOnEvents={["blur", "keydown"]}
    validator={isValidUsername}
  />
);
