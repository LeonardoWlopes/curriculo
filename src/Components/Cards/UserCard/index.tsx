import { useContext } from "react";
import UserContext from "../../../Context/UserContext";
import { BiSearch } from "react-icons/bi";
import * as S from "./styles";
import { colors } from "../../../Styles/styles";

export default function UserCard() {
  const { user, setUserLogin, userLogin, GitHubApi } = useContext(UserContext);

  return (
    <S.Container>
      <S.Foto
        src={
          !!user
            ? user.avatar_url
            : "https://icones.pro/wp-content/uploads/2021/06/icone-github-noir.png"
        }
      />

      <S.InfosContainer>
        <S.UserNameContainer>
          <S.UserName
            type={"text"}
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
          />
          <BiSearch
            size={24}
            color={colors.textcolor}
            onClick={GitHubApi}
            className="button"
          />
        </S.UserNameContainer>
        <S.UserBio>{user?.bio}</S.UserBio>
      </S.InfosContainer>
    </S.Container>
  );
}
