import styled from "styled-components";

const H1 = styled.h1`
  color: ${({ theme }) => theme.h1Color || "#000"};
`;

export default H1;
