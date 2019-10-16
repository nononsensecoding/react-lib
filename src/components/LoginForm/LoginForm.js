import React, { Component } from "react";
import styled from "styled-components";
import FormInput from "../FormInput";
import FormFieldLabel from "../FormFieldLabel";
import FormField from "../FormField";
import Button from "../Button";
import FormActions from "../FormActions";

const Container = styled.form``;

class LoginForm extends Component {
  render() {
    const { theme } = this.props;

    return (
      <Container theme={theme}>
        <FormField>
          <FormFieldLabel>Username:</FormFieldLabel>
          <FormInput
            validateOnEvents={["blur"]}
            validator={val => val === "terry"}
            name="username"
          />
        </FormField>
        <FormField>
          <FormFieldLabel>Password:</FormFieldLabel>
          <FormInput name="password" type="password" />
        </FormField>
        <FormActions>
          <Button>Submit</Button>
        </FormActions>
      </Container>
    );
  }
}

export default LoginForm;
