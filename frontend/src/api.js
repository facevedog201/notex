const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";

export const getNotes = async () => {
  const res = await fetch(`${API_URL}/notes`);
  return res.json();
};

export const createNote = async (note) => {
  const res = await fetch(`${API_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(note),
  });
  return res.json();
};