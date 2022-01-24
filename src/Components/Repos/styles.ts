import styled from "styled-components";
import { colors } from "../../Styles/styles";

import SVG from "react-inlinesvg";

interface props {
  color?: string;
  open?: Boolean;
}

export const Container = styled.div`
  width: 100%;
  // background-color: blue;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row;
  max-width: 100%;
  height: 85px;
  background: ${colors.bgcards};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  padding: 0px 32px;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: ${colors.textcolor};
`;

export const Link = styled.a`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: ${colors.textcolor};
`;

export const ReposContainer = styled.div<props>`
  margin: 16px auto;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  //background-color: red;
  top: 0px;
  position: relative;
  overflow-y: auto;
  width: 100%;
  height: ${(props) => (props.open ? "auto" : "410px")};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  min-width: 300px;
  width: 100%;
  height: 186px;
  margin: 8px auto;
  background: ${colors.bgcards};
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
`;

export const Head = styled.div`
  width: auto;
  height: min-content;
  align-items: center;
  margin-top: 28px;
  padding: 0px 32px;
  // background-color: blue;
`;

export const Icon = styled(SVG)`
  width: 25px;
  height: 25px;
  color: ${colors.textcolor};
  margin-right: 8px;
`;

export const RepoTitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.textcolor};
`;

export const Body = styled.div`
  //background-color: rgba(0, 0, 0, 0.2);
  padding: 0px 32px;
  margin-top: 16px;
  height: 40%;
  align-items: center;
`;

export const BodyText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.textcolor};
`;

export const Foot = styled.div`
  padding: 0px 32px;
  margin-top: 16px;
  height: 40%;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const FootLeft = styled.div`
  justify-content: space-between;
  height: 100%;
  width: 30%;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const FootRight = styled.div`
  padding: 0px 32px;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

export const LanguageColor = styled.div<props>`
  width: 15px;
  height: 15px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  border: 2px solid #837e9f;
  margin-right: 8px;
`;

export const Rocket = styled.img`
  width: 25px;
  margin-left: auto;
  display: block;
  transition: 0.2s;
  &&:hover {
    width: 30px;
  }
`;
