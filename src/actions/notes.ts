import {db} from '../firebase/config'
import { types } from '../types/types';

export const startNewNote = () => {
    return async (dispatch: any, getState: () => any) => {
        const uid = getState().auth.uid;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch( activeNote(doc.id, newNote))

    }
}

export const activeNote = (id:any, note:any) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const setNotes = (notes:any) => ({
    type: types.notesLoad,
    payload: notes
})


