import React, { Component } from "react";
import styled from "styled-components";
import Input from "../Input";
import Label from "../Label";
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
          <Label>Username:</Label>
          <Input name="username" />
        </FormField>
        <FormField>
          <Label>Password:</Label>
          <Input name="password" type="password" />
        </FormField>
        <FormActions>
          <Button>Submit</Button>
        </FormActions>
      </Container>
    );
  }
}

export default LoginForm;
