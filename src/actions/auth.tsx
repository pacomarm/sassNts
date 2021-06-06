import { types } from "../types/types"
import {firebase, googleAuthProvider} from '../firebase/config'

export const startLoginEmailPassword = (email: any, password: any) => {
    return (dispatch:any) => { 
        dispatch( login(123, 'Paqueño') )
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
})