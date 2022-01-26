import "./Styles/App.scss";
import "./Styles/ScrollBar.scss";
import { UserProvider } from "./Context/UserContext";
import AppRoutes from "./Routes/App.routes";

export default function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}
