import styled from "styled-components";

const H3 = styled.h3`
  color: ${({ theme }) => theme.h3Color || "#000"};
`;

export default H3;
