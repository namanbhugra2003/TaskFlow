import { useEffect, useState } from "react";
import { getMyTasks, updateTask } from "../services/taskApi";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const { user } = useSelector((state) => state.auth);

export default function UserDashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await getMyTasks();
    setTasks(res.data);
  };

 useEffect(() => {
  if (user) {
    fetchData();
  }
}, [user]);

  const changeStatus = async (id, status) => {
    await updateTask(id, { status });
    fetchTasks();
  };

  const statusColor = (status) => {
    if (status === "todo") return "bg-yellow-100 text-yellow-700";
    if (status === "inprogress") return "bg-blue-100 text-blue-700";
    if (status === "done") return "bg-green-100 text-green-700";
  };

  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          My Tasks
        </h1>

        {tasks.length === 0 ? (
          <div className="bg-white shadow-md rounded-xl p-6 text-center text-gray-500">
            No tasks assigned to you yet
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tasks.map((t) => (
              <div
                key={t.id}
                className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {t.title}
                </h2>

                <span
                  className={`inline-block px-3 py-1 text-sm rounded-full mb-4 ${statusColor(
                    t.status
                  )}`}
                >
                  {t.status}
                </span>

                <div>
                  <label className="text-sm text-gray-600 mr-2">
                    Update Status:
                  </label>
                  <select
                    className="border border-gray-300 rounded-lg px-3 py-1"
                    value={t.status}
                    onChange={(e) =>
                      changeStatus(t.id, e.target.value)
                    }
                  >
                    <option value="todo">Todo</option>
                    <option value="inprogress">In Progress</option>
                    <option value="done">Done</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
