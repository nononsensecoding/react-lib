import styled from "styled-components";

const Input = styled.input`
  min-width: 100px;

  border-color: ${({ isValid }) => (isValid ? "green" : "red")};
`;

export default Input;
