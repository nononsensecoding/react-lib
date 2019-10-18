import React from "react";

export const FormContext = React.createContext({
  getField: () => {},
  setFieldValidationFlags: () => {},
  registerField: () => {}
});

export default FormContext;
