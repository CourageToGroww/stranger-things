import { Route, Routes, useLocation } from "react-router-dom";
import PostsRoute from "./routes/PostsRoute";
import ProfileRoute from "./routes/ProfileRoute";
import LoginRoute from "./routes/LoginRoute";
import RegisterRoute from "./routes/RegisterRoute";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import { useState } from "react";
import "./global.css";
import {
  handleLoginClick,
  handleLoginFormClose,
  handleRegisterClick,
  toggleTheme,
  ThemeContext,
} from "./utils/helpers";

//after reading through thinking in react a few times i am chaning my routes to be in the app.jsx file to keep the navbar reusable, flexible, and maintainable
function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [theme, setTheme] = useState("dark");
  const location = useLocation();

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme: () => toggleTheme(setTheme) }}
    >
      {" "}
      <NavBar
        onRegisterClick={() => handleRegisterClick(setShowLoginForm)()}
        onLoginClick={() => handleLoginClick(setShowLoginForm)()}
      />
      {showLoginForm && location.pathname !== "/register" && (
        <LoginForm onClose={handleLoginFormClose(setShowLoginForm)} />
      )}
      <Routes>
        <Route path="/posts" element={<PostsRoute />} />
        <Route path="/profile" element={<ProfileRoute />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/register" element={<RegisterRoute />} />
      </Routes>
    </ThemeContext.Provider>
  );
}
export default App;
