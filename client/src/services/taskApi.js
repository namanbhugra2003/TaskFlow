import api from "./api";

export const createTask = (data) => api.post("/tasks", data);

export const getMyTasks = () => api.get("/tasks/my");   // ✅ ADD THIS

export const updateTask = (id, data) =>
  api.put(`/tasks/${id}`, data);
