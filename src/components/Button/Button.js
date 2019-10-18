import styled from "styled-components";

const Button = styled.button`
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.buttonBackgroundColor || "#fff"};
  border-color: ${({ theme }) => theme.buttonBorderColor || "#ccc"};
  color: ${({ theme }) => theme.buttonColor || "#000"};
  font-size: ${({ theme }) => theme.buttonFontSize || "16px"};
  min-width: 100px;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  padding: 6px 12px;
  line-height: 1.4;
  border-radius: 4px;
  user-select: none;

  &:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }
`;

export default Button;
