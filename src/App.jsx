import { Route, Routes } from "react-router-dom";
import PostsRoute from "./routes/PostsRoute";
import ProfileRoute from "./routes/ProfileRoute";
import LoginRoute from "./routes/LoginRoute";
import RegisterRoute from "./routes/RegisterRoute";
import NavBar from "./components/NavBar";
import "./global.css";

//after reading through thinking in react a few times i am chaning my routes to be in the app.jsx file to keep the navbar reusable, flexible, and maintainable
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/posts" element={<PostsRoute />} />
        <Route path="/profile" element={<ProfileRoute />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/register" element={<RegisterRoute />} />
      </Routes>
    </div>
  );
}
export default App;
