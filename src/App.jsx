import "./global.css";
import PostsRoute from "./routes/PostsRoute";
import ProfileRoute from "./routes/ProfileRoute";
import LoginRoute from "./routes/LoginRoute";
import LoginForm from "./components/LoginForm";
import RegisterRoute from "./routes/RegisterRoute";
import NavBar from "./components/NavBar";
import { useState, useContext } from "react";
import { handleLoginClick, toggleTheme } from "./utils/helpers";
import { ThemeContext } from "./utils/context";
import { AuthProvider, AuthContext } from "./components/AuthProvider";
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
  const auth = useContext(AuthContext);
  const { login } = auth;

  const authenticate = (userData) => {
    login(userData);
  };

  return (
    <AuthProvider>
      <ThemeContext.Provider
        value={{ theme, toggleTheme: () => toggleTheme(setTheme) }}
      >
        <NavBar
          onLoginClick={() => handleLoginClick(setShowLoginForm, navigate)}
        />
        {showLoginForm && location.pathname !== "/register" && (
          <LoginForm
            onClose={() => setShowLoginForm(false)}
            authenticate={authenticate}
          />
        )}
        <Routes>
          <Route path="/" element={<Navigate to="/" />} />
          <Route path="/posts" element={<PostsRoute navigate={navigate} />} />
          <Route
            path="/profile"
            element={<ProfileRoute navigate={navigate} />}
          />
          <Route path="/login" element={<LoginRoute navigate={navigate} />} />
          <Route
            path="/register"
            element={<RegisterRoute navigate={navigate} />}
          />
        </Routes>
      </ThemeContext.Provider>
    </AuthProvider>
  );
}

export default App;
