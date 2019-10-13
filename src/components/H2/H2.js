import styled from "styled-components";

const H2 = styled.h2`
  color: ${({ theme }) => theme.h2Color || "#000"};
`;

export default H2;
