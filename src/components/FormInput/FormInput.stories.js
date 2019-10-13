import React from "react";
import FormInput from "./FormInput";

export default {
  title: "FormInput"
};

export const defaultUsage = () => <FormInput />;

export const number = () => <FormInput type="number" />;

export const withCustomValidator = () => (
  <FormInput
    validator={val => {
      return val !== "";
    }}
  />
);
