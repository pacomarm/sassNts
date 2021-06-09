import { authReducer } from "../../reducers/authReducer"
import { types } from "../../types/types"

describe('tests for authReducer', () => {
    
    test('should do the login', () => {

        const initialState =  {}

        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Paco'
            }
        }
        const state = authReducer(initialState, action)

        expect (state).toEqual({
            uid: 'abc',
            name: 'Paco'
        })
        
    })

    test('should do the logout', () => {

        const initialState =  {
            uid: 'abc',
            displayName: 'Paco'
        }

        const action = {
            type: types.logout,
        }
        const state = authReducer(initialState, action)

        expect (state).toEqual({})
        
    })

    test('should not recognize action type', () => {

        const initialState =  {
            uid: 'abc',
            displayName: 'Paco'
        }

        const action = {
            type: 'hi',
        }
        const state = authReducer(initialState, action)

        expect (state).toEqual(initialState)
        
    })
    

})
