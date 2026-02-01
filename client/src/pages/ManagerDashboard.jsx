import { useEffect, useState } from "react";
import { getProjects, createProject } from "../services/projectApi";
import { createTask } from "../services/taskApi";
import { getEmployees } from "../services/userApi";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
const { user } = useSelector((state) => state.auth);

export default function ManagerDashboard() {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
  });

  const [taskForm, setTaskForm] = useState({
    title: "",
    project_id: "",
    assigned_to: "",
  });

  const fetchData = async () => {
    const p = await getProjects();
    const u = await getEmployees();
    setProjects(p.data);
    setUsers(u.data);
  };

useEffect(() => {
  if (user) {
    fetchData();
  }
}, [user]);

  const handleProjectCreate = async () => {
    await createProject(projectForm);
    fetchData();
  };

  const handleTaskCreate = async () => {
    await createTask({
      ...taskForm,
      project_id: Number(taskForm.project_id),
      assigned_to: Number(taskForm.assigned_to),
    });
    alert("Task Created");
  };

  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          Manager Dashboard
        </h1>

        {/* Create Project Card */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Create Project
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              placeholder="Project Title"
              className="border border-gray-300 rounded-lg px-4 py-2"
              onChange={(e) =>
                setProjectForm({ ...projectForm, title: e.target.value })
              }
            />
            <input
              placeholder="Description"
              className="border border-gray-300 rounded-lg px-4 py-2"
              onChange={(e) =>
                setProjectForm({ ...projectForm, description: e.target.value })
              }
            />
            <button
              onClick={handleProjectCreate}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 font-medium"
            >
              Create Project
            </button>
          </div>
        </div>

        {/* Projects List */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Projects
          </h2>

          {projects.length === 0 ? (
            <p className="text-gray-500">No projects created</p>
          ) : (
            <div className="space-y-3">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition"
                >
                  <p className="font-medium text-gray-800">{p.title}</p>
                  <p className="text-sm text-gray-500">{p.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Create Task Card */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Create Task
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              placeholder="Task Title"
              className="border border-gray-300 rounded-lg px-4 py-2"
              onChange={(e) =>
                setTaskForm({ ...taskForm, title: e.target.value })
              }
            />

            <select
              className="border border-gray-300 rounded-lg px-4 py-2"
              onChange={(e) =>
                setTaskForm({ ...taskForm, project_id: e.target.value })
              }
            >
              <option>Select Project</option>
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>

            <select
              className="border border-gray-300 rounded-lg px-4 py-2"
              onChange={(e) =>
                setTaskForm({ ...taskForm, assigned_to: e.target.value })
              }
            >
              <option>Select User</option>
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>

            <button
              onClick={handleTaskCreate}
              className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2 font-medium"
            >
              Create Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
