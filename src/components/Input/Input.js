import styled from "styled-components";

const Input = styled.input`
  min-width: 100px;
  border-color: ${({ isValid, isInvalid }) =>
    isValid ? "green" : isInvalid ? "red" : "#333"};
`;

export default Input;
