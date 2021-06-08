import {db} from '../firebase/config'
import { types } from '../types/types';
import { loadNotes } from '../helpers/loadNotes';
import Swal from 'sweetalert2';
// import SwalModal from 'sweetalert2';
import { fileUpload } from '../helpers/fileUpload';

export const startNewNote = () => {
    return async (dispatch: any, getState: () => any) => {
        const uid = getState().auth.uid;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch( activeNote(doc.id, newNote));
        dispatch( addNewNote(doc.id, newNote) )

    }
}

export const activeNote = (id:any, note:any) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})

export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})


export const startLoadingNotes = (uid: any) => {
    return async(dispatch:any) => {
        const notes = await loadNotes(uid);
        dispatch( setNotes( notes ) );
    } 
}


export const setNotes = (notes:any) => ({
    type: types.notesLoad,
    payload: notes
})

export const startSaveNote = (note:any) => {
    return async(dispatch:any, getState:any) => {
        const {uid} = getState().auth;

        if( !note.url ){
            delete note.url;
        }

        const noteToFirestore = {...note};
        delete noteToFirestore.id;
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch( refreshNote(note.id, noteToFirestore) );
        Swal.fire('Saved', note.title, 'success')
    }
}

export const refreshNote = (id: any, note: any) => ({
    type: types.notesUpdated,
    payload: {
        id, 
        note: {
            id, ...note
        }
    }
})

export const startUploading = (file) => {
    return async(dispatch, getState) => {
        const {active} = getState().notes;

        Swal.fire({
            title: 'Uploading....',
            text: 'Please wait...',
            allowOutsideClick: false,
            // onBeforeOpen:  () => {
            //     Swal.showLoading();
            // }
        })

        const fileUrl = await fileUpload(file);
        active.url = fileUrl;
        
        dispatch( startSaveNote(active) )

        Swal.close();

    }
}

export const startDeleting = (id) => {
    return async(dispatch, getState) => {
        const uid = getState().auth.uid
        await db.doc(`${uid}/journal/notes/${id}`).delete();

        dispatch( deleteNote(id) )
    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id   
})

export const noteLogout = () => ({
    type: types.notesLogoutCleaning
})


    





