import React, { Component } from "react";
import styled from "styled-components";
import Input from "../Input";
import Label from "../Label";

const Container = styled.form``;

class LoginForm extends Component {
  render() {
    const { theme } = this.props;

    return (
      <Container theme={theme}>
        <Label>Username:</Label>
        <Input name="username" />

        <Label>Password:</Label>
        <Input name="password" type="password" />
      </Container>
    );
  }
}

export default LoginForm;
