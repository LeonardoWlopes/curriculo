import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./styles";

import Folder from "../../Assets/folder.svg";
import Star from "../../Assets/star.svg";
import Branch from "../../Assets/git-branch.svg";
import Rocket from "../../Assets/rocket.png";

interface ICard {
  id: number;
  name: string;
  description: string;
  stargazers_count: string;
  forks: string;
  language: string;
  html_url: string;
  updated_at: string;
  homepage: string;
}

export default function Repos() {
  const [repos, setRepos] = useState<Array<ICard>>();
  const [colors, setColors] = useState<any>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/LeonardoWlopes/repos")
      .then((res) => {
        console.log(res.data);
        setRepos(res.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
      )
      .then((res) => {
        console.log(res.data);
        setColors(res.data);
      });
  }, []);

  function RepoCard({
    id,
    name,
    description,
    stargazers_count,
    forks,
    language,
    html_url,
    homepage,
  }: ICard) {
    return (
      <S.CardContainer
        onClick={() => {
          window.open(html_url, "_blank");
        }}
        className="RepoCard notranslate"
      >
        <S.Head>
          <S.Icon src={Folder} />
          <S.RepoTitle >{name}</S.RepoTitle>
          {!!homepage && (
            <S.Rocket
              src={Rocket}
              alt="Icone foguete"
              onClick={() => {
                window.open(homepage, "_blank");
              }}
            />
          )}
        </S.Head>
        <S.Body>
          <S.BodyText>{description}</S.BodyText>
        </S.Body>
        <S.Foot>
          <S.FootLeft>
            <div>
              <S.Icon src={Star} />
              <S.BodyText>{stargazers_count}</S.BodyText>
            </div>
            <div>
              <S.Icon src={Branch} />
              <S.BodyText>{forks}</S.BodyText>
            </div>
          </S.FootLeft>
          {!!language && (
            <S.FootRight>
              <S.LanguageColor color={!!colors && colors[language].color} />

              <S.BodyText>{language}</S.BodyText>
            </S.FootRight>
          )}
        </S.Foot>
      </S.CardContainer>
    );
  }

  const OrderedRepos = repos?.sort(function (a, b) {
    return b.updated_at.localeCompare(a.updated_at);
  });

  return (
    <S.Container>
      <S.TitleContainer onClick={() => setOpen(!open)} className="RepoCard">
        <S.Title>Meus Projetos</S.Title>
        <S.Link
          href="https://github.com/LeonardoWlopes?tab=repositories"
          target="_blank"
        >
          Ver todos
        </S.Link>
      </S.TitleContainer>
      <S.ReposContainer open={open}>
        {OrderedRepos?.map((repo) => (
          <RepoCard
            key={repo.id}
            id={repo.id}
            name={repo.name}
            description={repo.description}
            stargazers_count={repo.stargazers_count}
            forks={repo.forks}
            language={repo.language}
            html_url={repo.html_url}
            updated_at={repo.updated_at}
            homepage={repo.homepage}
          />
        ))}
      </S.ReposContainer>
    </S.Container>
  );
}
