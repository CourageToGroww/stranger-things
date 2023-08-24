import PostsRoute from "./routes/PostsRoute";
import ProfileRoute from "./routes/ProfileRoute";
import LoginForm from "./components/LoginForm";
import RegisterRoute from "./routes/RegisterRoute";
import NavBar from "./components/NavBar";
import { useState } from "react";
import "./global.css";
import { useAuth } from "./utils/auth";
import {
  handleLoginClick,
  handleLoginFormClose,
  handleRegisterClick,
  toggleTheme,
  ThemeContext,
  AuthContext,
} from "./utils/helpers";
import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";

//after reading through thinking in react a few times i am chaning my routes to be in the app.jsx file to keep the navbar reusable, flexible, and maintainable
function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [theme, setTheme] = useState("dark");
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, login, logout } = useAuth();

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      <ThemeContext.Provider
        value={{ theme, toggleTheme: () => toggleTheme(setTheme) }}
      >
        <NavBar
          onRegisterClick={handleRegisterClick(setShowLoginForm, navigate)}
          onLoginClick={handleLoginClick(setShowLoginForm, navigate)}
        />
        {showLoginForm && location.pathname !== "/register" && (
          <LoginForm onClose={handleLoginFormClose(setShowLoginForm)} />
        )}
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<PostsRoute />} />
          <Route path="/profile" element={<ProfileRoute />} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" element={<RegisterRoute />} />
        </Routes>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}
export default App;
