import React from 'react'
import configureStore from 'redux-mock-store' 
import thunk from 'redux-thunk'
import { startNewNote } from '../../actions/notes'
import { db, googleAuthProvider, firebase } from '../../firebase/config';
 
const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const store = mockStore({
    auth:{
        uid: 'TESTING'
    }
})

describe('tests for notes actions', () => {
    
    test('should create a note', async() => {
        await store.dispatch( startNewNote() as any);
    })
    

})
