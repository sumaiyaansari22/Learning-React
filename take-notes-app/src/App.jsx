import { useState } from 'react'
import './App.css'
import { NotesProvider } from './context/noteContext'
import AddingNotes from './Components/AddNote/AddNote'
import NoteItem from './Components/EditNote/EditNote'
import Navbar from './Components/Navbar/Navbar'

function App() {
  const [notes, setNotes] = useState([])

  const addNote = (note) =>{
    const newNote = { id: Date.now(), note };
    setNotes([...notes, newNote]);
  }

  const editNote = (id, note) => {
    setNotes((prev) => prev.map((prevNotes) => (prevNotes.id === id ? note : prevNotes)))
  }

  const deleteNote = (id) => 
  setNotes((prev) => prev.filter((note) => note.id !== id));

  return (
    <NotesProvider value={{notes, addNote, editNote, deleteNote}}>
      <Navbar/>
        <AddingNotes />
        {notes.map((note) => (
              <div key={note.id}
                className='w-full'
              >
                <NoteItem note={note} />
              </div>
            ))}
    </NotesProvider>
    
  )
}

export default App;
