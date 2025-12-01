import React, { useEffect, useState } from "react";
import { getNotes, createNote } from "./api";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const loadNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNote({ title, description });
    setTitle("");
    setDescription("");
    loadNotes();
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>NoteX</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br /><br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br /><br />

        <button type="submit">Create Note</button>
      </form>

      <hr />

      <h2>Your Notes</h2>
      {notes.map((n) => (
        <div key={n.id} style={{ marginBottom: 10 }}>
          <b>{n.title}</b>
          <p>{n.description}</p>
          <small>{n.created_at}</small>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;