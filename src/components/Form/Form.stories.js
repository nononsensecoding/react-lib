import React from "react";
import Form from "./Form";
import FormField from "./FormField";
import FormFieldLabel from "./FormFieldLabel";
import FormFieldInput from "./FormFieldInput";

export default {
  title: "Form"
};

export const defaultUsage = () => (
  <Form>
    <FormField name="field1">
      <FormFieldLabel>Field 1</FormFieldLabel>
      <FormFieldInput validateOnEvents={["blur"]} validator={() => false} />
    </FormField>
    <FormField name="field2">
      <FormFieldLabel>Field 2</FormFieldLabel>
      <FormFieldInput validateOnEvents={["blur"]} validator={() => true} />
    </FormField>
  </Form>
);
