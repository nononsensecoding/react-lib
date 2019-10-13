import React from "react";
import FormField from "./FormField";
import Input from "../Input";
import Label from "../Label";

export default {
  title: "FormField"
};

export const defaultUsage = () => (
  <FormField>
    <Label>Username:</Label>
    <Input name="username" />
  </FormField>
);
