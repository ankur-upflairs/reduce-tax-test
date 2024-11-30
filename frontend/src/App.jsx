import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  AuthProvider  from "./context/AuthContext";
import SignUpPage from "./pages/SignUp";
import SignupPage from "./pages/SignupBlackbox";
import Signup from "./pages/Signup1";
import LoginPage from "./pages/Login";
import BlogPage from './blogs/BlogPage'
import BlogForm from "./blogs/CreateBlog";
import IncomeForm from "./userForm/IncomeSources";
import UserForm from "./userForm/UserForm";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <AuthProvider>
        <Router>
          {/* <nav>
            <Link to="/">Home</Link> | <Link to="/admin">Admin Dashboard</Link>{" "}
            <Link to="/admin/settings">Admin Settings</Link>
          </nav> */}
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route path="/signup" element={<Signup/>} />
            <Route path="signup1" element={<SignupPage/>} />
            <Route path='login' element={<LoginPage/>} />
            <Route path='blogs' element={<BlogPage/>} />
            <Route path='create' element={<BlogForm/>}/>
            <Route path='userform' element={<UserForm/>}/>
            {/* <Route path="/unauthorized" element={<Unauthorized />} /> */}

            {/* Grouped Admin Routes - Nested under RoleProtectedRoute */}
            {/* <Route element={<RoleProtectedRoute requiredRoles={["admin"]} />}>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/settings" element={<AdminSettings />} />
            </Route> */}
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
