import React from "react";
import FormFieldInput from "./FormFieldInput";

export default {
  title: "FormFieldInput"
};

export const defaultUsage = () => <FormFieldInput />;

export const number = () => <FormFieldInput type="number" />;
