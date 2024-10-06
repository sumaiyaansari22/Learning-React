import React, { useState } from 'react';
import { useNotes } from '../../context/noteContext';

function NoteItem({ note }) {
  const [isNoteEditable, setIsNoteEditable] = useState(false);
  const [noteContent, setNoteContent] = useState(note.note);
  const { editNote,deleteNote } = useNotes();

  const handleSave = () => {
    if (!noteContent) return;
    editNote(note.id, { note: noteContent });
    setIsNoteEditable(false);
  };

  const handleDelete = () => {

  }
  return (
    <div className="flex justify-center">
    <div className="flex border border-gray-300 rounded-md p-4 mb-4 w-3/4 h-auto">
      <textarea
        className={`w-full border items-center ${
          isNoteEditable ? 'border-transparent text-3xl' : 'border-transparent'
        } rounded-md text-3xl`}
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
        readOnly={!isNoteEditable}
      />
      
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
          onClick={() => {
            if (isNoteEditable) {
              handleSave();
            } else {
              setIsNoteEditable(true);
            }
          }}
        >
          {isNoteEditable ?  "Save" : "Edit"}
        </button>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </button>
  </div>
    </div>
  );
}

export default NoteItem;
