import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import UserDashboard from "./pages/UserDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      <Route path="/admin" element={
  <ProtectedRoute role="admin">
    <AdminDashboard />
  </ProtectedRoute>
} />

<Route path="/manager" element={
  <ProtectedRoute role="manager">
    <ManagerDashboard />
  </ProtectedRoute>
} />

<Route path="/user" element={
  <ProtectedRoute role="user">
    <UserDashboard />
  </ProtectedRoute>
} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
