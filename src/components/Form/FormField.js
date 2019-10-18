import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { FormFieldContext } from "./FormField.context";
import { FormContext } from "./Form.context";

const FormField = ({ name, isDefaultValid, isDefaultInvalid, children }) => {
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
      <Container>{children}</Container>
    </FormFieldContext.Provider>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  > label {
    margin-bottom: 6px;
  }
`;

export default FormField;
