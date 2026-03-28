import axios from "axios";
import { useState, useRef } from "react";

function Note({ id, title, content, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [note, setNote] = useState({ title, content });

  async function handleInput(e) {
    const attr = e.target.getAttribute("name");
    const value = e.target.textContent.trim();
    setNote((prev) => ({ ...prev, [attr]: value }));
    setIsEditing(true);
  }

  async function handleSave() {
    try {
      await axios.put(`/api/notes/${id}`, note);
      setIsEditing(false);
    } catch (err) {
      console.error("Save failed", err);
    }
  }

  async function deleteNote() {
    try {
      await axios.delete(`/api/notes/${id}`);
      onDelete(id);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className="my-4 border-[.5px] border-neutral-600 rounded-lg p-4 grid grid-cols-[5fr_1fr]">
      <div>
        <h4
          className="text-md font-semibold block mb-1"
          contentEditable="true"
          onInput={handleInput}
          name="title"
          suppressContentEditableWarning={true}
        >
          {title}
        </h4>
        <p
          className="text-sm text-gray-400 whitespace-pre-wrap"
          contentEditable="true"
          onInput={handleInput}
          name="content"
          suppressContentEditableWarning={true}
        >
          {content}
        </p>
      </div>
      <div className="flex justify-between flex-col">
        <button
          className="text-red-400 text-sm font-medium"
          onClick={deleteNote}
        >
          Delete
        </button>{" "}
        {isEditing && (
          <button
            className="text-cyan-300 text-sm font-medium"
            onClick={handleSave}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
}

export default Note;
