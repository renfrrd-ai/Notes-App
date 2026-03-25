import Header from "./components/Header";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <Header />
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        <NoteForm />
        <Notes />
      </div>
    </>
  );
}

export default App;
