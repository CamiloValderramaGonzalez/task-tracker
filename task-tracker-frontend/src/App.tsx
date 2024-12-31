import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks, Task } from "./services/api";
import "./index.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const fetchedTasks = await getTasks();
    setTasks(fetchedTasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app-container">
      <h1 className="main-title">Gestor de Tareas</h1>
      <TaskForm onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
