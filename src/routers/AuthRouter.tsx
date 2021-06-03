import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <Switch>
            <Route exact path="/auth/login" component={LoginScreen}></Route>
            <Route exact path="/auth/register" component={RegisterScreen}></Route>
            <Redirect to="/auth/login"></Redirect>
        </Switch>
    )
}
