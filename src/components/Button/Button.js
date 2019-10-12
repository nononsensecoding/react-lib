import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.button`
  font-weight: ${({ theme, isHovering }) =>
    isHovering ? theme.buttonHoverFontWeight : "normal"};
`;

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
    const { children, theme, ...attrs } = this.props;
    const { isHovering } = this.state;

    return (
      <Container
        {...attrs}
        isHovering={isHovering}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        theme={theme}
      >
        {children}
      </Container>
    );
  }
}
export default Button;
