import React, { useState } from "react";
import { createTask, Task } from "../services/api";

interface TaskFormProps {
  onTaskAdded: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description) {
      alert("El nombre y la descripción son obligatorios");
      return;
    }

    const newTask: Task = { name, description };
    await createTask(newTask);
    setName("");
    setDescription("");
    onTaskAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <h2 className="form-title">Agregar Nueva Tarea</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="textarea-field"
        />
      </div>
      <button type="submit" className="submit-button">
        Agregar Tarea
      </button>
    </form>
  );
};

export default TaskForm;
