import styled from "styled-components";
import Button from "../Button";

const ButtonSecondary = styled(Button)`
  color: ${({ theme }) => theme.buttonSecondaryColor || "#000"};
  background-color: ${({ theme }) =>
    theme.buttonSecondaryBackgroundColor || "#eee"};
  border-color: ${({ theme }) => theme.buttonSecondaryBorderColor || "#eee"};
  font-size: ${({ theme }) => theme.buttonSecondaryFontSize || "16px"};
  font-weight: ${({ theme, isHovering }) =>
    isHovering ? theme.buttonSecondaryHoverFontWeight : "normal"};
  min-width: 100px;
  padding: 6px 4px;
`;

export default ButtonSecondary;
