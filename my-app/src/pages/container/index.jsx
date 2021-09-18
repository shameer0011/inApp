import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import Header from "../../components/header/header";
import LoginForm from "../../components/login/login";
import Register from "../../components/register/register";
import RegisterPge from "../login/register";
import LoginPage from "../login/login";
import Profile from '../profile';
import ReadLater from '../readlater';
import Home from '../home';
const Dashbord = () => {
  const history = useHistory();
  const [redirect, setRedirect] = useState(false);

  const gotoDashbord = () => {
    console.log("in dashbord logout button");
    sessionStorage.clear();
    history.push("/login", document.title, window.location);
    window.addEventListener("popstate", function (event) {
      history.push("/login", document.title, window.location);
    });
  };
  let routes = (
    <BrowserRouter>
      <div>
        <Header gotoDashbord={ gotoDashbord } />
      </div>

      <Switch>
        <Route path="/profile" component={ Profile } exact={ true } />
        <Route path="/readlater" component={ ReadLater } exact={ true } />
        <Route path="/" component={ Home } exact={ true } />
      </Switch>
    </BrowserRouter>
  );

  return (
    <>
      <div>{ routes }</div>
    </>
  );
};
export default Dashbord;
