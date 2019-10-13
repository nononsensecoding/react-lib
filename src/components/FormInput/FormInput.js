import React, { Component } from "react";
import Input from "../Input";
import { valid } from "../Input/Input.stories";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      isValid: true
    };
  }

  handleBlur(event) {
    this.setValidState(event.target.value);
  }

  setValidState(val) {
    const { validator } = this.props;

    if (validator) {
      this.setState({
        isValid: validator(val)
      });
    }
  }

  render() {
    const { theme, validator, ...others } = this.props;
    const { isValid } = this.state;

    return (
      <Input
        isValid={isValid}
        theme={theme}
        onBlur={this.handleBlur}
        {...others}
      />
    );
  }
}
export default FormInput;
