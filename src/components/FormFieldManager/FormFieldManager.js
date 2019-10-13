import React, { Component } from "react";

class FormFieldManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValid: false,
      isInvalid: false
    };

    this.setValidState = this.setValidState.bind(this);
    this.setInvalidState = this.setInvalidState.bind(this);
  }

  setValidState(isValid) {
    this.setState({
      isValid
    });
  }

  setInvalidState(isInvalid) {
    this.setState({
      isInvalid
    });
  }

  render() {
    const { children } = this.props;
    return children({
      ...this.state,
      setInvalidState: this.setInvalidState,
      setValidState: this.setValidState
    });
  }
}

export default FormFieldManager;
