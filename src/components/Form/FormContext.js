import React from "react";

const FormContext = React.createContext({
  getField: () => {},
  setFieldValidationFlags: () => {},
  registerField: () => {}
});

export default FormContext;
