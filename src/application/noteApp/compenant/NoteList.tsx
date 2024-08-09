import { useNote } from "../module/Note.hook";
import { noteService } from "../module/note.service";

export const NoteList = () => {
    const notes = useNote();

    return (
        <div className="p-4 bg-transparent rounded-md shadow-none max-w-md mx-auto">
            {notes.map((note, index) => (
                <div key={index} className="flex flex-col sm:flex-row gap-4 items-center p-2 border border-gray-300 rounded-md mb-2 bg-white">
                    <input 
                        type="checkbox" 
                        className="h-5 w-5 text-gray-600 focus:ring-gray-400 rounded"
                        onChange={() => noteService.toggleNote(note.id)}
                        checked={note.state}
                    />
                    <p className={`${note.state ? 'line-through text-gray-500' : 'text-gray-800'} flex-1`}>
                        {note.text}
                    </p>
                    <button 
                        className="text-gray-700 px-4 py-2 rounded border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        onClick={() => noteService.deleteNote(note)}
                    >
                        Supprimer
                    </button>
                </div>
            ))}
        </div>
    );
};
