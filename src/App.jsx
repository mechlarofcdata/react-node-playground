import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/Users/auth/user-login";
import UserRegister from "./pages/Users/auth/user-register";
import UserProfile from "./pages/Users/user-layout/profile/user-profile";
import UserLayout from "./pages/Users/user-layout/layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/" element={<UserLayout />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;