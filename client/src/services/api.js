import axios from "axios";

const api = axios.create({
  baseURL: "https://taskflow-fggn.onrender.com/api",
  withCredentials: true,
});

export default api;

// tasks
export const getMyTasks = () => api.get("/tasks/my");
export const updateTask = (id, data) => api.put(`/tasks/${id}`, data);
