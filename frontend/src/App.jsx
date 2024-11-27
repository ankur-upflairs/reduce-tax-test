import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  AuthProvider  from "./context/AuthContext";
import SignUpPage from "./pages/SignUp";
import SignupPage from "./pages/SignupBlackbox";
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
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="signup1" element={<SignupPage/>} />

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
