import { useContext } from "react";
import UserContext from "../../../Context/UserContext";
import * as S from "./styles";
import * as Cg from "react-icons/cg";

import { IUser } from "../../../Interfaces/User.interface";

import MapPin from "../../../Assets/map-pin.svg";
import GitHub from "../../../Assets/github.svg";
import Linkedin from "../../../Assets/linkedin.svg";
import Instagram from "../../../Assets/instagram.svg";
import Email from "../../../Assets/mail.svg";
import { colors } from "../../../Styles/styles";

export default function ContactCard() {
  const { user } = useContext(UserContext);

  const { company, location, html_url, login } = user as IUser;

  return (
    <>
      <S.Container>
        {!!company && (
          <S.Linha>
            <Cg.CgWorkAlt
              size="28px"
              color={colors.textcolor}
              style={{ marginRight: "5px" }}
            />
            <S.Text>{company}</S.Text>
          </S.Linha>
        )}
        {!!location && (
          <S.Linha>
            <S.Icone src={MapPin} />
            <S.Text>{location}</S.Text>
          </S.Linha>
        )}
        <S.Linha>
          <S.Icone src={GitHub} />
          <S.Link href={html_url} target={"_blank"}>
            {login}
          </S.Link>
        </S.Linha>

        {login === "LeonardoWlopes" && (
          <S.Linha>
            <S.Icone src={Linkedin} />
            <S.Link
              href="https://www.linkedin.com/in/leonardowilliamlopes/"
              target={"_blank"}
            >
              Leonardo William Lopes
            </S.Link>
          </S.Linha>
        )}
        {login === "LeonardoWlopes" && (
          <S.Linha>
            <S.Icone src={Instagram} />
            <S.Link
              href="https://www.instagram.com/leonardowlopes/?hl=pt-br"
              target={"_blank"}
            >
              LeonardoWLopes
            </S.Link>
          </S.Linha>
        )}
        {login === "LeonardoWlopes" && (
          <S.Linha>
            <S.Icone src={Email} />
            <S.Link
              href="mailto:leonardolopessocial@gmail.com"
              target={"_blank"}
            >
              leonardolopessocial@gmail.com
            </S.Link>
          </S.Linha>
        )}
      </S.Container>
    </>
  );
}
