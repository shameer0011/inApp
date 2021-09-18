import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";
import Header from "../../components/header/header";
import Home from "../../components/home/home";
import Plan from "../../components/plans/plan";
import { About } from "../../components/aboutUs/about";
import LoginForm from "../../components/login/login";
import Register from "../../components/register/register";
import RegisterPge from "../login/register";
import LoginPage from "../login/login";
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
        <Route path="/plan" component={ Plan } exact={ true } />
        <Route path="/about" component={ About } exact={ true } />
        <Route path="/register" component={ RegisterPge } exact={ true } />
        <Route path="/" component={ Home } exact={ true } />
        {/* <Route path="/login" component={ LoginPage } exact={ true } /> */ }
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
