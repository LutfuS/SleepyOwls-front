import { useEffect, useState } from "react";
import { Note } from "./Note";
import { noteStore } from "./Note.store";
import { map } from "rxjs";

export const useNote = () => {
    const [notes, setNotes] = useState<Note[]>([])

    useEffect(()=>{
        const noteSub = noteStore.Notes$().subscribe((notes)=> {setNotes([...notes])})
        return() => noteSub.unsubscribe()
    },[])
    return notes
}

export const useNoteCount = () => {
    const [noteCount, setNoteCount] = useState(0);

    useEffect(() => {
        const noteSub = noteStore.Notes$()
            .pipe(map(_Note => _Note.filter(t => !t.state).length))
            .subscribe((noteCount) => setNoteCount(noteCount));

        return () => noteSub.unsubscribe(); 
    }, []);

    return noteCount;
};