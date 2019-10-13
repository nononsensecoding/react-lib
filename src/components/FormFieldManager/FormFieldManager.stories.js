import React from "react";
import FormFieldManager from "./FormFieldManager";
import FormField from "../FormField";
import FormInput from "../FormInput";
import Label from "../Label";
import { isValidUsername } from "../../utils";

export default {
  title: "FormFieldManager"
};

export const defaultUsage = () => (
  <FormFieldManager>
    {({ isValid, isInvalid, setInvalidState, setValidState }) => (
      <FormField>
        <Label isValid={isValid} isInvalid={isInvalid}>
          Username:
        </Label>
        <FormInput
          validator={isValidUsername}
          setValidState={setValidState}
          setInvalidState={setInvalidState}
          validateOnEvents={["blur"]}
          name="username"
        />
      </FormField>
    )}
  </FormFieldManager>
);
