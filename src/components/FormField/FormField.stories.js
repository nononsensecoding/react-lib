import React from "react";
import FormField from "./FormField";
import FormInput from "../FormInput";
import Label from "../Label";

export default {
  title: "FormField"
};

export const defaultUsage = () => (
  <FormField>
    <Label>Username:</Label>
    <FormInput name="username" />
  </FormField>
);

export const validState = () => (
  <FormField>
    <Label isValid={true}>Username:</Label>
    <FormInput isValid={true} name="username" />
  </FormField>
);

export const invalidState = () => (
  <FormField>
    <Label isInvalid={true}>Username:</Label>
    <FormInput isInvalid={true} name="username" />
  </FormField>
);
