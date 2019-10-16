import React from "react";

const FormFieldContext = React.createContext({
  name: null,
  isValid: false,
  isInvalid: false,
  setValidationFlags: () => {}
});

export default FormFieldContext;
