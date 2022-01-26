import { colors } from "./../../../Styles/styles";
import styled from "styled-components";

import SVG from "react-inlinesvg";

export const Container = styled.div`
  margin: 16px 0px;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  min-width: 207px;
  //min-height: 200px;
  background: ${colors.bgcards};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Linha = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 80%;
  margin: 8px auto;
`;

export const Icone = styled(SVG)`
  width: 25px;
  height: 25px;
  color: ${colors.textcolor};
  margin-right: 8px;
`;

export const Text = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: ${colors.textcolor};
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: ${colors.textcolor};
  text-decoration: none;
`;
