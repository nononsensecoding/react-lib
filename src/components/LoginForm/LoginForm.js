import React, { Component } from "react";
import styled from "styled-components";
import FormInput from "../FormInput";
import Label from "../Label";
import FormField from "../FormField";
import FormFieldManager from "../FormFieldManager";
import Button from "../Button";
import FormActions from "../FormActions";

const Container = styled.form``;

class LoginForm extends Component {
  render() {
    const { theme } = this.props;

    return (
      <Container theme={theme}>
        <FormFieldManager>
          {({ isValid }) => (
            <FormField>
              <Label isValid={isValid}>Username:</Label>
              <FormInput
                validateOnEvents={["blur"]}
                validator={val => val === "terry"}
                name="username"
              />
            </FormField>
          )}
        </FormFieldManager>
        <FormFieldManager>
          {({ isValid }) => (
            <FormField>
              <Label isValid={isValid}>Password:</Label>
              <FormInput name="password" type="password" />
            </FormField>
          )}
        </FormFieldManager>
        <FormActions>
          <Button>Submit</Button>
        </FormActions>
      </Container>
    );
  }
}

export default LoginForm;
