import React, { useState } from 'react';
import { useNotes } from '../../context/noteContext';
import Navbar from '../Navbar/Navbar';

function AddingNotes() {
    const [note, setNote] = useState("");
    const {addNote} = useNotes();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!note.trim()) return;
        addNote( note );
        setNote(" ");
      };

      return(
        <form onSubmit={handleSubmit}  className="flex justify-center m-10">
        <textarea
            type="text"
            placeholder="Add a Note"
            className="text-4xl w-2/3 h-52 border border-black rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            value={note}
            onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit" className="rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0">
            Add
        </button>
    </form>
      )
}

export default AddingNotes;