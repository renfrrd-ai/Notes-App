import { useState } from "react";

function NoteForm() {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(e) {
    const attr = e.target.name;
    const value = e.target.value;

    setNote((prev) => {
      return { ...prev, [attr]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();
      console.log(data);

      setNote({ title: "", content: "" });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h3 className="text-base font-semibold">Add New Note</h3>
      <div className="bg-neutral-800 rounded-xl p-5 md:py-4 mt-4 border-[.5px] border-neutral-600">
        <form onSubmit={handleSubmit} method="post">
          <label htmlFor="title">TITLE</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Note title..."
            value={note.title}
            onChange={handleChange}
          />
          <label htmlFor="content">CONTENT</label>
          <textarea
            name="content"
            id="content"
            placeholder="Write Something..."
            cols="10"
            rows="4"
            className="resize-none"
            onChange={handleChange}
            value={note.content}
          ></textarea>

          <button type="submit" className="btn">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
}

export default NoteForm;
