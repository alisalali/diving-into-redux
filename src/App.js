import { Fragment } from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  console.log(isAuth);
  return (
    <Fragment>
      {isAuth && <Header />}
      {!isAuth && <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
