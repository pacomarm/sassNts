import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/config'
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email: any, password: any) => {
    return (dispatch:any) => { 
        dispatch( startLoading() )
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}: any) => {
                dispatch( login( user.uid, user.displayName))
            })
            .catch( (e:Error) => {
                console.log(e)
            })
            .finally( () => {
                dispatch( finishLoading() )
            })
    }
}

export const startRegisterWEmailPassName = (email: any, password: any, name: any) => {
    return (dispatch:any) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({user}: any) => {
                await user.updateProfile({displayName: name})
                dispatch( login(user.uid, user.displayName) );            
            } )
            .catch( (e:Error) => {
                console.log(e)
            })
    }
    
}

export const startGoogleLogin = () => {
    return (dispatch: any) => {
        setTimeout(() => {
            firebase.auth().signInWithPopup( googleAuthProvider )
                .then( ({user}: any) => {
                    dispatch(
                        login( user.uid, user.displayName)
                    )
                } )
        }, 3500);
    }
}

export const login = (uid: any, displayName: any) => ({
    type: types.login,
    payload: {
        uid, 
        displayName
    }
});

export const startLogout = () => {
    return async(dispatch:any) => {
        await firebase.auth().signOut();
        dispatch( logout() )
    }
}

export const logout = () => ({
    type: types.logout
})