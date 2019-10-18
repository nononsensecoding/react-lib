import styled from "styled-components";
import Button from "../Button";

const ButtonSecondary = styled(Button)`
  color: ${({ theme }) => theme.buttonSecondaryColor || "#000"};
  background-color: ${({ theme }) =>
    theme.buttonSecondaryBackgroundColor || "#eee"};
  border-color: ${({ theme }) => theme.buttonSecondaryBorderColor || "#eee"};
  font-size: ${({ theme }) => theme.buttonSecondaryFontSize || "16px"};

  &:hover {
    color: #fff;
    background-color: #444;
    border-color: #666;
  }
`;

export default ButtonSecondary;
