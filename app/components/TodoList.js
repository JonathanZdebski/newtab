import React, { useState, useEffect } from "react";
import styles from "./NoteAndTodo.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const addTodo = () => {
    if (todos.length >= 9) {
      alert("You have reached the limit of 9 lists.");
      return;
    }

    const newTodos = [
      ...todos,
      {
        text: newTodo,
        completed: false,
        dateAdded: new Date().toLocaleString(),
      },
    ];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setNewTodo("");
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Previne o comportamento padrão do ENTER (que é inserir uma nova linha)
      addTodo();
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
      <h2 className={styles.notepadTitle}>To-Do-List</h2>
      <textarea
        className={styles.taskInput}
        value={newTodo}
        onChange={(e) => {
          if (e.target.value.length <= 180) {
            setNewTodo(e.target.value);
          }
        }}
        onKeyPress={handleKeyPress} // Adiciona o manipulador de eventos onKeyPress
        placeholder="Enter your task here..."
      />

      <button onClick={addTodo} className={styles.addTaskButton}>
        Add Task
      </button>
      <ul style={{ maxHeight: "600px", overflowY: "auto" }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <button
              onClick={() => removeTodo(index)}
              className={styles.removeButton}
            >
              X
            </button>
            <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <input
                type="checkbox"
                className={styles.customcheckbox}
                checked={todo.completed}
                onChange={() => toggleTodo(index)}
              />
              <div
                style={{
                  marginLeft: "10px",
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <span>{todo.text}</span>
                <span style={{ fontSize: "0.8em", color: "#888" }}>
                  {todo.dateAdded}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
