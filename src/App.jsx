import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserLogin from "./pages/Users/auth/user-login";
import UserProfile from "./pages/Users/user-layout/profile/user-profile";
import UserLayout from "./pages/Users/user-layout/layout";
import UserBlog from "./pages/Users/user-layout/blog/user-blog";
import Home from "./pages/home/Home"
import AddBlog from "./pages/admin/admin-blog/add-blog"

function App() {
  // checking if a user logged-in or not and store it 
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<UserLogin />}/>
        
        {/* redirecting if logged-in true */}
        <Route path="/layout" element={isLoggedIn ? <UserLayout /> : <Navigate to="/login" />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="usrblog" element={<UserBlog />} />
        </Route>
        <Route path="/admin-add-blog" element={<AddBlog />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;