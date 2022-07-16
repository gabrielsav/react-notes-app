import { useState } from 'react';
import{ nanoid } from 'nanoid';
import NotesList from './components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([

    {
      id: nanoid(),
      text:"First note!",
      date: "15/07/2022",
    },
    {
      id: nanoid(),
      text:"Second note!",
      date: "16/07/2022",
    },
    {
      id: nanoid(),
      text:"Third note!",
      date: "17/07/2022",
    },
    {
      id: nanoid(),
      text:"Four note!",
      date: "18/07/2022",
    },

]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
}

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  );
};

export default App;