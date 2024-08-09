import { useState } from "react";
import { noteService } from "../module/note.service";

export const NoteForm = () => {
    const [cNote, setCNote] = useState('');

    return (
        <div className="flex flex-col gap-4 items-center bg-transparent p-4 rounded-md shadow-none max-w-md mx-auto mb-6">
            <input
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                type="text"
                placeholder="Ajouter une note"
                onChange={(e) => setCNote(e.target.value)}
                value={cNote}
            />
            <button
                className="w-full px-4 py-2 rounded-md border border-gray-500 text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
                onClick={() => {
                    noteService.addNote({ text: cNote, state: false, id: Date.now() });
                    setCNote('');
                }}
            >
                Ajouter
            </button>
        </div>
    );
};


