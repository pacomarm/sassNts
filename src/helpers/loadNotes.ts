import { db } from "../firebase/config"

export const loadNotes = async(uid:any) => {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();
    const notes: any[] = [];

    notesSnap.forEach((e:any) => {
        notes.push({
            id: e.id,
            ...e.data()
        });
    });

    return notes;
}
