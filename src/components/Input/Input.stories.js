import React from "react";
import Input from "./Input";

export default {
  title: "Input"
};

export const defaultUsage = () => <Input />;

export const valid = () => <Input isValid />;
export const invalid = () => <Input isValid={false} />;
