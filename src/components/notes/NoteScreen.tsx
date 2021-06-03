import React from 'react'
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input 
                    type="text" 
                    placeholder="Title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happened"
                    className="notes__textarea"  
                ></textarea>

                <div className="notes__image">
                    <img 
                        src="https://picsum.photos/750" alt="img" 
                    />
                </div>
            </div>

        </div>
    )
}
