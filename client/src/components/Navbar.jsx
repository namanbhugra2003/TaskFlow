import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await api.post("/auth/logout");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="bg-white shadow-md border-b px-8 py-4 flex items-center justify-between">
      {/* Left: Branding */}
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 text-white font-bold px-3 py-1 rounded">
          TF
        </div>
        <h1 className="text-xl font-semibold text-gray-800 tracking-wide">
          TaskFlow
        </h1>
      </div>

      {/* Right: User info + Logout */}
      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-sm font-medium text-gray-700">{user?.name}</p>
          <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
