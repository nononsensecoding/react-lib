import React from "react";
import Label from "./Label";

export default {
  title: "Label"
};

export const defaultUsage = () => <Label>This is a label</Label>;

export const validState = () => <Label isValid>This is a valid label</Label>;
export const invalidState = () => (
  <Label isInvalid={true}>This is an invalid label</Label>
);
