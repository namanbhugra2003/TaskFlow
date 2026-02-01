import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export default api;
export const getMyTasks = () => api.get("/tasks/my");
export const updateTask = (id, data) => api.put(`/tasks/${id}`, data);
