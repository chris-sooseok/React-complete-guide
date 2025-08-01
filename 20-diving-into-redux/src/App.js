import { Counter } from './components/Counter.js';
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);

  return (
      <>
        <Header />
          {!isAuth && <Auth />}
          {isAuth && <UserProfile />}
        <Counter />
      </>
  );
}

export default App;
