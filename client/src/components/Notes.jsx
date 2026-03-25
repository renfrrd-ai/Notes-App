import Note from "./Note";

function Notes({ notes }) {
  return (
    <div>
      <div className="grid grid-cols-[6fr_1fr]">
        <h3 className="text-base font-semibold">Recent Notes</h3>
        <span className="max-w-20 text-xs text-gray-400 bg-black rounded-full flex text-center items-center justify-center">
          3 Notes
        </span>
      </div>
      {notes
        .sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at);
        })
        .map((note) => (
          <Note key={note.id} title={note.title} content={note.content} />
        ))}
    </div>
  );
}

export default Notes;
