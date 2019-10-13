import React, { Component } from "react";
import Input from "../Input";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      isValid: false,
      isInvalid: false
    };
  }

  handleBlur(event) {
    this.setValidStates(event.target.value);
  }

  setValidStates(val) {
    const { validator, setValidState, setInvalidState } = this.props;
    const isValid = validator(val);

    if (validator) {
      this.setState({
        isValid,
        isInvalid: !isValid
      });
    }

    if (setValidState) {
      setValidState(isValid);
      setInvalidState(!isValid);
    }
  }

  render() {
    const { theme, validator, validateOnEvents, ...others } = this.props;
    const { isValid, isInvalid } = this.state;

    const validateOnBlur =
      validateOnEvents && validateOnEvents.find(e => e === "blur");

    return (
      <Input
        isValid={isValid}
        isInvalid={isInvalid}
        theme={theme}
        onBlur={validateOnBlur ? this.handleBlur : null}
        {...others}
      />
    );
  }
}

export default FormInput;
