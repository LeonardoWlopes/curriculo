import { useContext } from "react";
import UserContext from "../../../Context/UserContext";
import { HiOutlinePencil } from "react-icons/hi";
import * as S from "./styles";
import { colors } from "../../../Styles/styles";

export default function UserCard() {
  const { user, setUserLogin, userLogin, setLockSearch } =
    useContext(UserContext);

  return (
    <S.Container>
      <S.Foto src={user?.avatar_url} />

      <S.InfosContainer>
        <S.UserNameContainer>
          <S.UserName
            type={"text"}
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
            
          />
          <HiOutlinePencil size={24} color={colors.textcolor} />
        </S.UserNameContainer>
        <S.UserBio>{user?.bio}</S.UserBio>
      </S.InfosContainer>
    </S.Container>
  );
}
