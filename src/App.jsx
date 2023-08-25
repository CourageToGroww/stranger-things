// /home/jake/learning/stranger-things/src/App.jsx
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
          onLoginClick={() => handleLoginClick(setShowLoginForm, navigate)}
        />
        {showLoginForm && location.pathname !== "/register" && (
          <LoginForm onClose={handleLoginFormClose(setShowLoginForm)} />
        )}
        <Routes>
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="/posts" element={<PostsRoute navigate={navigate} />} />
          <Route
            path="/profile"
            element={<ProfileRoute navigate={navigate} />}
          />
          <Route
            path="/login"
            element={
              <LoginForm onClose={handleLoginFormClose(setShowLoginForm)} />
            }
          />
          <Route
            path="/register"
            element={<RegisterRoute navigate={navigate} />}
          />
        </Routes>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
