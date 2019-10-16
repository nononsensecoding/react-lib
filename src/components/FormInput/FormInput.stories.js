import React from "react";
import FormInput from "./FormInput";

export default {
  title: "FormInput"
};

export const defaultUsage = () => <FormInput />;

export const number = () => <FormInput type="number" />;

// Move to unit tests
// export const withCustomValidator = () => (
//   <FormField>
//     <FormInput validateOnEvents={["blur", "keydown"]} validator={() => true} />
//   </FormField>
// );
