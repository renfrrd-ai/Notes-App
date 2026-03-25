import axios from "axios";

function Note({ id, title, content, onDelete }) {
  async function deleteNote() {
    try {
      await axios.delete(`/notes/${id}`);
      onDelete(id);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="my-4 border-[.5px] border-neutral-600 rounded-lg p-4 grid grid-cols-[5fr_1fr]">
      <div>
        <h4 className="text-md font-semibold block mb-1">{title}</h4>
        <p className="text-sm text-gray-400">{content}</p>
      </div>
      <div className="flex justify-between flex-col">
        <button
          className="text-red-400 text-sm font-medium"
          onClick={deleteNote}
        >
          Delete
        </button>
        <button className="invisible text-cyan-300 text-sm font-medium">
          Save
        </button>
      </div>
    </div>
  );
}

export default Note;
