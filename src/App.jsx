import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLogin from "./pages/Users/auth/user-login";
import UserRegister from "./pages/Users/auth/user-register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;