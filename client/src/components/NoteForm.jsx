function NoteForm() {
  return (
    <div className="">
      <p className="text-base">Add New Note</p>
      <div className="bg-neutral-800 rounded-xl p-5 md:py-4 mt-4 border-[.5px] border-neutral-600">
        <form action="" method="post">
          <label htmlFor="title">TITLE</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Note title..."
          />
          <label htmlFor="content">CONTENT</label>
          <textarea
            name="content"
            id="content"
            placeholder="Write Something..."
            cols="10"
            rows="4"
            className="resize-none"
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
