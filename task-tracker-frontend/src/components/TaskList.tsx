import React from "react";
import { Task } from "../services/api";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="task-list-container">
      <h2 className="list-title">Lista de Tareas</h2>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <h3 className="task-name">{task.name}</h3>
            <p className="task-description">{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
