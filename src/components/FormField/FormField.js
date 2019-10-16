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

const FormField = ({ name, children }) => {
  const { getField, setFieldValidationFlags } = useContext(FormContext);

  useEffect(() => {
    setFieldValidationFlags(name, {
      isValid: false,
      isInvalid: false
    });
  }, [name]);

  return (
    <FormFieldContext.Provider
      value={{
        name,
        isValid: getField(name).isValid,
        isInvalid: getField(name).isInvalid,
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
