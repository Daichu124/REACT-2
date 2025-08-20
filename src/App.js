import logo from './logo.svg';
import './App.css';
import Header from './components/Header';


import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");


  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      id: Date.now(),
      text: newTask,
      completed: false
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Todo App</h1>


      <input
        type="text"
        placeholder="Nhập công việc..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Thêm</button>


      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginBottom: "8px"
            }}
          >
            <span onClick={() => toggleComplete(task.id)} style={{ cursor: "pointer" }}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

