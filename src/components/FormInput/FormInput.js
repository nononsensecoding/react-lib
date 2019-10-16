import React, { useContext } from "react";
import FormFieldContext from "../FormField/FormFieldContext";
import Input from "../Input";

const FormInput = ({ theme, validator, validateOnEvents, disabled }) => {
  const { name, isValid, isInvalid, setValidationFlags } = useContext(
    FormFieldContext
  );

  const validateOnBlur =
    validateOnEvents && validateOnEvents.find(e => e === "blur");

  return (
    <Input
      name={name}
      isValid={isValid}
      isInvalid={isInvalid}
      disabled={disabled}
      theme={theme}
      onBlur={
        validateOnBlur
          ? () => {
              const isValid = validator(event.target.value);
              setValidationFlags({ isValid, isInvalid: !isValid });
            }
          : null
      }
    />
  );
};

export default FormInput;
