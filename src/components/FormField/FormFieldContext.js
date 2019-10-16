import React from "react";

const FormFieldContext = React.createContext({
  isValid: false,
  isInvalid: false,
  setIsValid: () => {},
  setIsInvalid: () => {}
});

export default FormFieldContext;
