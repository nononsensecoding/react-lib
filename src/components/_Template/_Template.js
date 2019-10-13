import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  color: ${({ theme }) => theme._TemplateColor || "#000"};
`;

class _Template extends Component {
  render() {
    const { children, theme } = this.props;

    return <Container theme={theme}>{children}</Container>;
  }
}
export default _Template;
