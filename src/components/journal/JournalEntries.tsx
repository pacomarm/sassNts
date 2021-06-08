import React from 'react'
import { JournalEntry } from './JournalEntry'
import { useSelector } from 'react-redux';

export const JournalEntries = () => {

    const {notes} = useSelector( (state:any) => state.notes );

    return (
        <div className="journal__entries">
            {
                notes.map((e:any) => (
                    <JournalEntry 
                        key={e.id}
                        {...e}
                    />
                ))
            }
        </div>
    )
}
