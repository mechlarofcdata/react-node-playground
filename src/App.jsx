import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/Users/auth/user-login";
import UserRegister from "./pages/Users/auth/user-register";
import AdminLogin from "./pages/admin/admin-auth/admin-login";
import AdminDashboard from "./pages/admin/dashboard/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/admin" element ={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;