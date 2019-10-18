import React, { useContext, useEffect } from "react";
import { FormFieldContext } from "./FormField.context";
import { FormContext } from "./Form.context";

export const FormFieldProvider = ({
  name,
  isDefaultValid,
  isDefaultInvalid,
  children
}) => {
  const { getField, registerField, setFieldValidationFlags } = useContext(
    FormContext
  );

  useEffect(() => {
    registerField({
      name,
      isValid: isDefaultValid || false,
      isInvalid: isDefaultInvalid || false
    });
  }, [name]);

  const { isValid, isInvalid } = getField(name) || {};

  return (
    <FormFieldContext.Provider
      value={{
        name,
        isValid,
        isInvalid,
        setValidationFlags: flags => {
          setFieldValidationFlags(name, flags);
        }
      }}
    >
      {children}
    </FormFieldContext.Provider>
  );
};

export default FormField;
