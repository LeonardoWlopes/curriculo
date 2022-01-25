import axios from "axios";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { IUser } from "../Interfaces/User.interface";

interface IUserContext {
  user: IUser | null;
  loged: boolean;
  setUserLogin: Dispatch<SetStateAction<any>>;
  userLogin: string;
  setLockSearch: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [userLogin, setUserLogin] = useState("leonardoWlopes");
  const [lockSearch, setLockSearch] = useState(false);

  useEffect(() => {
    !userLogin && setUserLogin("leonardoWlopes");
  }, [userLogin]);

  const GitHubApi = (): Promise<IUser> =>
    axios
      .get(`https://api.github.com/users/${userLogin}`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log("User does not exist");
      });

  useEffect(() => {
    (async () => {
      setUser(await GitHubApi());
    })();
  }, [, userLogin]);

  return (
    <UserContext.Provider
      value={{ loged: !user, user, setUserLogin, userLogin, setLockSearch }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
