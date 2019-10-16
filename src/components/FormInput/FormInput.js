import React, { useContext } from "react";
import FormFieldContext from "../FormField/FormFieldContext";
import Input from "../Input";

const FormInput = ({ theme, validator, validateOnEvents, disabled }) => {
  const { isValid, setIsValid, isInvalid, setIsInvalid } = useContext(
    FormFieldContext
  );

  const validateOnBlur =
    validateOnEvents && validateOnEvents.find(e => e === "blur");

  return (
    <Input
      isValid={isValid}
      isInvalid={isInvalid}
      disabled={disabled}
      theme={theme}
      onBlur={
        validateOnBlur
          ? () => {
              const isValid = validator(event.target.value);
              setIsValid(isValid);
              setIsInvalid(!isValid);
            }
          : null
      }
    />
  );
};

export default FormInput;
