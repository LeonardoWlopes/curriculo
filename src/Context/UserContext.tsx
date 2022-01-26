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
  GitHubApi: () => void;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [userLogin, setUserLogin] = useState("leonardoWlopes");

  const GitHubApi = () =>
    axios
      .get(`https://api.github.com/users/${userLogin}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch(() => {
        console.log("User does not exist");
        setUserLogin("leonardoWlopes");
      });

  useEffect(() => {
    GitHubApi();
  }, []);

  return (
    <UserContext.Provider
      value={{ loged: !user, user, setUserLogin, userLogin, GitHubApi }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
