import { createContext, useEffect, useState } from "react";
import { IUser } from "../Interfaces/User.interface";
import GitHubApi from "../Services/GitHubApi";

interface IUserContext {
  user: IUser | null;
  loged: boolean;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    (async () => {
      setUser(await GitHubApi());
    })();
  }, []);

  return (
    <UserContext.Provider value={{ loged: !user, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
