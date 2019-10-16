import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import FormFieldContext from "./FormFieldContext";
import FormContext from "../Form/FormContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  > label {
    margin-bottom: 6px;
  }
`;

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

export default FormField;
