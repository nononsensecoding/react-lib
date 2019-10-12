import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: props.isDefaultHovering
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setHoverState(true);
  }

  handleMouseLeave() {
    this.setHoverState(false);
  }

  setHoverState(isHovering) {
    this.setState({ isHovering });
  }

  render() {
    const { children, ...attrs } = this.props;
    const { isHovering } = this.state;

    return (
      <button
        {...attrs}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {`${children} ${isHovering ? " hovering" : ""}`}
      </button>
    );
  }
}
export default Button;
