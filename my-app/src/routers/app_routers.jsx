import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Protected from '../pages/container';
import Register from '../components/register/register';
import LoginForm from '../components/login/login';
import LoginPage from '../pages/login/login';
import RegisterPge from '../pages/login/register';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/login" component={ LoginPage } exact={ true } />
                    <Route path="/register" component={ RegisterPge } exact={ true } />
                    <Route path="/" component={ Protected } exact={ true } />
                </Switch>
            </div>
        </BrowserRouter>
    );
};
export default AppRouter;
