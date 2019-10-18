import React from "react";
import Form from "./Form";
import FormField from "./FormField";
import FormFieldInput from "./FormFieldInput";
import FormFieldLabel from "./FormFieldLabel";

export default {
  title: "FormField"
};

export const defaultUsage = () => (
  <Form>
    <FormField name="field1">
      <FormFieldLabel>Username:</FormFieldLabel>
      <FormFieldInput />
    </FormField>
  </Form>
);

export const validState = () => (
  <Form>
    <FormField name="field1" isDefaultValid={true}>
      <FormFieldLabel>Username:</FormFieldLabel>
      <FormFieldInput />
    </FormField>
  </Form>
);

export const invalidState = () => (
  <Form>
    <FormField name="field1" isDefaultInvalid={true}>
      <FormFieldLabel>Username:</FormFieldLabel>
      <FormFieldInput />
    </FormField>
  </Form>
);
