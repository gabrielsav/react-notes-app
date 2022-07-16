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

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
};

export default App;