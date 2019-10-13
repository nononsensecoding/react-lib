import styled from "styled-components";

const Label = styled.label`
  font-family: Arial, sans-serif;
  color: ${({ isValid, isInvalid }) =>
    isValid ? "green" : isInvalid ? "red" : "#333"};
`;

export default Label;
