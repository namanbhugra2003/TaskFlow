import { useEffect, useState } from "react";
import { getUsers, createUser } from "../services/userApi";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";


export default function AdminDashboard() {
  const { user } = useSelector((state) => state.auth);

  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "manager",
  });

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

 useEffect(() => {
  if (user) {
    fetchUsers();
  }
}, [user]);
  const handleCreate = async () => {
    await createUser(form);
    fetchUsers();
  };

  return (
    <>
      <Navbar />

      <div className="p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">
          Admin Dashboard
        </h1>

        {/* Create User Card */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Create New User
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <input
              placeholder="Name"
              className="border border-gray-300 rounded-lg px-4 py-2"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              placeholder="Email"
              className="border border-gray-300 rounded-lg px-4 py-2"
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-4 py-2"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <select
              className="border border-gray-300 rounded-lg px-4 py-2"
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="manager">Manager</option>
              <option value="user">User</option>
            </select>

            <button
              onClick={handleCreate}
              className="bg-blue-600 hover:bg-blue-700 transition text-white rounded-lg px-4 py-2 font-medium"
            >
              Create
            </button>
          </div>
        </div>

        {/* Users List Card */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6 text-gray-700">
            All Users
          </h2>

          {users.length === 0 ? (
            <p className="text-gray-500">No users found</p>
          ) : (
            <div className="space-y-3">
              {users.map((u) => (
                <div
                  key={u.id}
                  className="flex justify-between items-center border border-gray-200 rounded-lg p-4 hover:shadow-sm transition"
                >
                  <div>
                    <p className="font-medium text-gray-800">{u.name}</p>
                    <p className="text-sm text-gray-500">{u.email}</p>
                  </div>

                  <span className="capitalize text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                    {u.role}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
