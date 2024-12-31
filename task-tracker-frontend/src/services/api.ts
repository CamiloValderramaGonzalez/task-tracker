import axios from "axios";

/* Se debe colocar en un archivo de enviroment */
const API_BASE_URL = "https://localhost:7123/api/tasks";

export interface Task {
  id?: string;
  name: string;
  description: string;
}

export const getTasks = async (): Promise<Task[]> => {
  console.log("API_BASE_URL", API_BASE_URL);
  const response = await axios.get<Task[]>(API_BASE_URL);
  return response.data;
};

export const createTask = async (task: Task): Promise<Task> => {
  const response = await axios.post<Task>(API_BASE_URL, task);
  return response.data;
};
