import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import {firebase} from '../firebase/config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { useState } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import { setNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user:any) => { 
            if (user?.uid){
                dispatch(  login(user.uid, user.displayName) )
                setIsLoggedIn(true)
                const notes = await loadNotes(user.uid);
                dispatch( setNotes(notes) );
            } else{
                setIsLoggedIn(false)
            }
            setChecking(false);
         })
    }, [dispatch, checking, setIsLoggedIn])

    if(checking){
        return(
            <h1>Please wait g.....</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        isAuthenticated={isLoggedIn} 
                        component={AuthRouter}
                    />
                    <PrivateRoute 
                        exact 
                        path="/"
                        isAuthenticated={isLoggedIn} 
                        component={JournalScreen}
                    />
                    <Redirect to="/auth/login"></Redirect>
                </Switch>

            </div>
        </Router>
    )
}
