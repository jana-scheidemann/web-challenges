import styled from "styled-components";

const BoxWithStyledComponents = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  margin: 2rem;

  &:hover {
    background-color: red;
  }

  ${({ $isBlack }) => {
    if ($isBlack) {
      return "background-color: black;";
    }
  }}
`;

export default BoxWithStyledComponents;
