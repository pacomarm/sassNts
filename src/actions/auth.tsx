import { types } from "../types/types"

export const startLoginEmailPassword = (email: any, password: any) => {
    return (dispatch:any) => { 
        setTimeout(() => {
            dispatch( login(123, 'Paqueño') )
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