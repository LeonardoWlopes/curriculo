import { useContext } from "react";
import UserContext from "../../../Context/UserContext";
import { colors } from "../../../Styles/styles";
import * as S from "./styles";

export default function SkillCard() {
  const { user } = useContext(UserContext);

  return (
    <S.Container>
      <img
        alt="Github stats"
        height={"100%"}
        width={"100%"}
        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
          user?.login
        }&langs_count=7&hide_border=true&bg_color=${colors.bgcards.substring(
          1,
          8
        )}&title_color=${colors.textcolor.substring(
          1,
          8
        )}&text_color=${colors.textcolor.substring(1, 8)}&locale=pt-br`}
      />
    </S.Container>
  );
}

/* {Skills.map((item, index) => (
    <Item name={item.name} key={index} />
    ))} */

/*const Skills: Array<ItemProps> = [
    { name: "JAVA SCRIPT" },
    { name: "Type SCRIPT" },
    { name: "React Js" },
    { name: "React Native" },
  
    { name: "html 5" },
    { name: "css 3" },
    { name: "styled components" },
    { name: "node js" },
  
    { name: "postgresql" },
    { name: "prisma" },
  ];
  
  function Item({ name }: ItemProps) {
    return (
      <S.ItemContainer>
        <S.Skill className="notranslate">{name}</S.Skill>
      </S.ItemContainer>
    );
  } */
