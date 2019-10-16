import React, { useContext } from "react";
import FormFieldContext from "../FormField/FormFieldContext";
import Label from "../Label";

const FormFieldLabel = props => {
  const { name, isValid, isInvalid } = useContext(FormFieldContext);

  return (
    <Label htmlFor={name} isValid={isValid} isInvalid={isInvalid} {...props} />
  );
};

export default FormFieldLabel;
