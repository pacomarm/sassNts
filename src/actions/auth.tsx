import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/config'

export const startLoginEmailPassword = (email: any, password: any) => {
    return (dispatch:any) => { 
        setTimeout(() => {
            dispatch( login(123, 'Paqueño') )
        }, 3500);
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
})