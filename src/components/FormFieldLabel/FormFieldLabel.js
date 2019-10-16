import React, { useContext } from "react";
import FormFieldContext from "../FormField/FormFieldContext";
import Label from "../Label";

const FormFieldLabel = props => {
  const context = useContext(FormFieldContext);

  return <Label {...context} {...props} />;
};

export default FormFieldLabel;
