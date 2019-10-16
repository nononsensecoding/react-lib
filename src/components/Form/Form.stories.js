import React from "react";
import Form from "./Form";
import FormField from "../FormField";
import FormFieldLabel from "../FormFieldLabel";
import FormInput from "../FormInput";

export default {
  title: "Form"
};

export const defaultUsage = () => (
  <Form>
    <FormField name="field1">
      <FormFieldLabel>Field 1</FormFieldLabel>
      <FormInput validateOnEvents={["blur"]} validator={() => false} />
    </FormField>
    <FormField name="field2">
      <FormFieldLabel>Field 2</FormFieldLabel>
      <FormInput validateOnEvents={["blur"]} validator={() => true} />
    </FormField>
  </Form>
);
