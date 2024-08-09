import { BehaviorSubject } from "rxjs";
import { Note } from "./Note.tsx";

export class NoteStore {
    public _Notes:  BehaviorSubject<Note[]>

    constructor() {
        this._Notes = new BehaviorSubject<Note[]>([])
    }

    Notes$ = (): BehaviorSubject<Note[]> => {
        return this._Notes
    }
}

export const noteStore: NoteStore = new NoteStore()