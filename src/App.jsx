import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostsRoute from "./routes/PostsRoutes";
import ProfileRoute from "./routes/ProfileRoute";
import LoginRoute from "./routes/LoginRoute";
import RegisterRoute from "./routes/RegisterRoute";
import "./global.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/posts" component={PostsRoute} />
        <Route path="/profile" component={ProfileRoute} />
        <Route path="/login" component={LoginRoute} />
        <Route path="/register" component={RegisterRoute} />
      </Switch>
    </Router>
  );
}

export default App;
