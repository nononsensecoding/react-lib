import React, { useState } from "react";
import styled from "styled-components";
import FormFieldContext from "./FormFieldContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  > label {
    margin-bottom: 6px;
  }
`;

const FormField = ({ isDefaultValid, isDefaultInvalid, children }) => {
  const [isValid, setIsValid] = useState(isDefaultValid);
  const [isInvalid, setIsInvalid] = useState(isDefaultInvalid);

  return (
    <FormFieldContext.Provider
      value={{
        isValid,
        isInvalid,
        setIsValid,
        setIsInvalid
      }}
    >
      <Container>{children}</Container>
    </FormFieldContext.Provider>
  );
};

export default FormField;
