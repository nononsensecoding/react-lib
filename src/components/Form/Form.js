import React, { useState } from "react";
import { FormContext } from "./Form.context";

export const Form = ({ children, action }) => {
  const [fields, setFields] = useState({});

  return (
    <FormContext.Provider
      value={{
        fields,
        setFields,
        getField: name => fields[name] || {},
        registerField: field => {
          setFields(prevState => ({
            ...prevState,
            [field.name]: field
          }));
        },
        setFieldValidationFlags: (name, flags) =>
          setFields(prevState => ({
            ...prevState,
            [name]: {
              ...prevState[name],
              ...flags
            }
          }))
      }}
    >
      <form action={action}>{children}</form>
    </FormContext.Provider>
  );
};

export default Form;
