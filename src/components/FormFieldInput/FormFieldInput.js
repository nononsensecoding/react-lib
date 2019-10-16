import React, { useContext } from "react";
import FormFieldContext from "../FormField/FormFieldContext";
import Input from "../Input";

const FormFieldInput = ({
  theme,
  validator,
  validateOnEvents,
  disabled,
  type
}) => {
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
      type={type}
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

export default FormFieldInput;
