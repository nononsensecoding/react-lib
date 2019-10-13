import React from "react";
import FormActions from "./FormActions";
import Button from "../Button";

export default {
  title: "FormActions"
};

export const defaultUsage = () => (
  <FormActions>
    <Button>Submit</Button>
    <Button>Reset</Button>
  </FormActions>
);

export const withLinks = () => (
  <FormActions>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
  </FormActions>
);
