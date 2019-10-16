import React from "react";
import FormField from "./FormField";
import FormInput from "../FormInput";
import FormFieldLabel from "../FormFieldLabel";

export default {
  title: "FormField"
};

export const defaultUsage = () => (
  <FormField>
    <FormFieldLabel>Username:</FormFieldLabel>
    <FormInput name="username" />
  </FormField>
);

export const validState = () => (
  <FormField isDefaultValid={true}>
    <FormFieldLabel>Username:</FormFieldLabel>
    <FormInput name="username" />
  </FormField>
);

export const invalidState = () => (
  <FormField isDefaultInvalid={true}>
    <FormFieldLabel>Username:</FormFieldLabel>
    <FormInput name="username" />
  </FormField>
);
