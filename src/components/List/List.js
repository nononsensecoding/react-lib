import styled from "styled-components";

const List = styled.ul`
  font-family: ${({ theme }) => theme.fontFamily};
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
`;

export default List;
