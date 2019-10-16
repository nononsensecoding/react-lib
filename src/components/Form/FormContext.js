import React from "react";

const FormContext = React.createContext({
  fields: {},
  getField: () => {},
  setFields: () => {},
  setFieldValidationFlags: () => {}
});

export default FormContext;
