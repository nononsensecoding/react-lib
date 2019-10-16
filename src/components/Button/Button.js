import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.button`
  color: ${({ theme }) => theme.buttonColor || "#000"};
  background-color: ${({ theme }) => theme.buttonBackgroundColor || "#eee"};
  border-color: ${({ theme }) => theme.buttonBorderColor || "#eee"};
  font-size: ${({ theme }) => theme.buttonFontSize || "16px"};
  font-weight: ${({ theme, isHovering, disabled }) =>
    isHovering && !disabled ? theme.buttonHoverFontWeight : "normal"};
  min-width: 100px;
  padding: 6px 4px;
`;

const Button = ({ children, theme, isDefaultHovering, ...attrs }) => {
  const [isHovering, setHovering] = useState(isDefaultHovering);

  return (
    <Container
      {...attrs}
      isHovering={isHovering}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      theme={theme}
    >
      {children}
    </Container>
  );
};

export default Button;
