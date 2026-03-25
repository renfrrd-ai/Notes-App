import Note from "./Note";

function Notes() {
  return (
    <div>
      <div className="grid grid-cols-[6fr_1fr]">
        <h3 className="text-base font-semibold">Recent Notes</h3>
        <span className="max-w-20 text-xs text-gray-400 bg-black rounded-full flex text-center items-center justify-center">
          3 Notes
        </span>
      </div>
      <Note
        title="Database Schema"
        content="Remember to add the 'created_at' timestamp to the notes table"
      />
      <Note
        title="Database Schema"
        content="Remember to add the 'created_at' timestamp to the notes table"
      />
    </div>
  );
}

export default Notes;
