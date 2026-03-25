import Header from "./components/Header";
import NoteForm from "./components/NoteForm";

function App() {
  return (
    <>
      <Header />
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        <NoteForm />
        <div className="text-base font-semibold">
          <h3>Recent Notes</h3>
        </div>
      </div>
    </>
  );
}

export default App;
