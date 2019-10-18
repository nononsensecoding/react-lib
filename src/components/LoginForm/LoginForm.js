import React, { Component } from "react";
import styled from "styled-components";
import FormActions from "../Form/FormActions";
import FormField from "../Form/FormField";
import FormFieldInput from "../Form/FormFieldInput";
import FormFieldLabel from "../Form/FormFieldLabel";
import Button from "../Button";

const Container = styled.form``;

class LoginForm extends Component {
  render() {
    const { theme } = this.props;

    return (
      <Container theme={theme}>
        <FormField>
          <FormFieldLabel>Username:</FormFieldLabel>
          <FormFieldInput
            validateOnEvents={["blur"]}
            validator={val => val === "terry"}
            name="username"
          />
        </FormField>
        <FormField>
          <FormFieldLabel>Password:</FormFieldLabel>
          <FormFieldInput name="password" type="password" />
        </FormField>
        <FormActions>
          <Button>Submit</Button>
        </FormActions>
      </Container>
    );
  }
}

export default LoginForm;
