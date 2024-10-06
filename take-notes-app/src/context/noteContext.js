import {createContext, useContext, useState} from "react";

export const NotesContext = createContext({
    notes: [
        {
            id: 1,
            note: "Text",
        }
    ],

    addNote: (note) => {},
    editNote: (id, note) => {},
    deleteNote: (id) => {}
})

export const useNotes = () => {
    return useContext(NotesContext);
};

export const NotesProvider = NotesContext.Provider;