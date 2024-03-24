import React, { useState, useEffect } from "react";
import styles from "./NoteAndTodo.module.css";

const NoteBlock = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  const addNote = () => {
    if (notes.length >= 9) {
      alert("You have reached the limit of 9 notes.");
      return;
    }

    const newNotes = [
      ...notes,
      { text: newNote, dateAdded: new Date().toLocaleString() },
    ];
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
    setNewNote("");
  };

  const removeNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Previne o comportamento padrão do ENTER (que é inserir uma nova linha)
      addNote();
    }
  };

  return (
    <div
      style={{
        width: "380px",
        height: "650px",
        border: "1px solid #ccc",
        padding: "1px",
      }}
    >
      <h2 className={styles.notepadTitle}>Notepad</h2>
      <textarea
        className={styles.taskInput}
        value={newNote}
        onChange={(e) => {
          if (e.target.value.length <= 180) {
            setNewNote(e.target.value);
          }
        }}
        onKeyPress={handleKeyPress} // Adiciona o manipulador de eventos onKeyPress
        placeholder="Enter your note here..."
      />

      <button onClick={addNote} className={styles.addNoteButton}>
        Add Note
      </button>

      <ul style={{ maxHeight: "600px", overflowY: "auto" }}>
        {notes.map((note, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => removeNote(index)}
              className={styles.removeButton}
            >
              X
            </button>
            <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <div
                style={{
                  marginRight: "auto",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span>{note.text}</span>
                <span style={{ fontSize: "0.8em", color: "#888" }}>
                  {note.dateAdded}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteBlock;
