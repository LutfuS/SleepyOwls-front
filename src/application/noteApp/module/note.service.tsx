import { Note } from "./Note";
import { NoteStore, noteStore } from "./Note.store";

export class NoteService {
    constructor(
        public _noteStore: NoteStore
    ){}

    addNote(note: Note) {
        this._noteStore.Notes$().next([...this._noteStore.Notes$().getValue(), note])
    }
    deleteNote(note: Note) {
        this._noteStore.Notes$().next([...this._noteStore.Notes$().getValue().filter(t => t.id !== note.id)])
    }
    toggleNote(id: number) {
        this._noteStore.Notes$().next([...this._noteStore.Notes$().getValue().map(t => t.id === id ? {...t,state: !t.state}:t)])
    }
}

export const noteService = new NoteService(noteStore)