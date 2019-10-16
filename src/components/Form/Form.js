import React, { useState } from "react";
import FormContext from "./FormContext";
import { isFormValid, isFormInvalid } from "../../utils";

const Form = ({ children }) => {
  const [fields, setFields] = useState({});

  return (
    <form>
      <FormContext.Provider
        value={{
          fields,
          setFields,
          getField: name => fields[name] || {},
          setFieldValidationFlags: (name, flags) => {
            setFields(prevState => ({
              ...prevState,
              [name]: {
                ...prevState[name],
                ...flags
              }
            }));
          }
        }}
      >
        Valid: {isFormValid(fields) ? "true" : "false"}
        <br />
        Invalid: {isFormInvalid(fields) ? "true" : "false"}
        {children}
      </FormContext.Provider>
    </form>
  );
};

export default Form;
