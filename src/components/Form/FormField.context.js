import React from "react";

export const FormFieldContext = React.createContext({
  name: null,
  isValid: false,
  isInvalid: false,
  setValidationFlags: () => {}
});

export default FormFieldContext;
