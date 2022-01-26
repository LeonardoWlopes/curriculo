import styled from "styled-components";

interface props {
  isColumn: boolean;
}

export const Container = styled.div<props>`
  min-height: 100vh;
  background-color: #22212c;

  flex-direction: ${(props) => (props.isColumn ? "column" : "row")};
`;

export const LeftContainer = styled.div<props>`
  //background-color: brown;
  min-height: 100%;
  max-width: ${(props) => (props.isColumn ? "100%" : "25%")};
  padding: 42px;
  flex-direction: column;
  align-items: center;
`;

export const RightContainer = styled.div<props>`
  //background-color: blue;
  min-height: 100%;
  width: auto;
  //margin: auto;
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.isColumn ? "0px" : "58px")} 16px;
`;
