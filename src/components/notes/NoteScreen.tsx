import React, { useEffect, useRef } from 'react'
import { NotesAppBar } from './NotesAppBar';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { activeNote, startDeleting } from '../../actions/notes';

export const NoteScreen = () => {

    const {active: note} = useSelector( (state:any) => state.notes );
    const [values, handleInputChange, reset] = useForm( note );
    const dispatch = useDispatch();
    const {body, title, id} = values;

    const activeId = useRef( note.id );

    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }
    }, [note,reset]);

    useEffect(() => {
        dispatch( activeNote(values.id, {...values}) )
    }, [values, dispatch])

    const handleDelete = () => {
        dispatch( startDeleting(id) );
    }

    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input 
                    type="text" 
                    name= "title"
                    placeholder="Title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    name= "body"
                    placeholder="What happened"
                    className="notes__textarea"  
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {
                    note.url &&
                    <div className="notes__image">
                        <img 
                            src={note.url} alt="img" 
                        />
                    </div>
                }

            </div>

            <button 
                className="btn btn-danger"
                onClick={handleDelete}
            >
                Delete
            </button>

        </div>
    )
}
