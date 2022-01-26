import { useContext } from "react";
import UserContext from "../../../Context/UserContext";
import * as S from "./styles";

export default function UserCard() {
  const { user } = useContext(UserContext);

  return (
    <S.Container>
      <S.Foto src={user?.avatar_url} />

      <S.InfosContainer>
        <S.UserName>{user?.name}</S.UserName>
        <S.UserBio>{user?.bio}</S.UserBio>
      </S.InfosContainer>
    </S.Container>
  );
}
