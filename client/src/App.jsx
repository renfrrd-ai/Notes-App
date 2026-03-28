import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await axios.get("/api/notes");
        setNotes(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchNotes();
  }, []);

  return (
    <>
      <Header />
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        <NoteForm updateNotes={setNotes} />
        <Notes notes={notes} updateNotes={setNotes} />
      </div>
    </>
  );
}

export default App;
