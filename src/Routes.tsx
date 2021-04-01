import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { SocialPage } from "./components/SocialPage/SocialPage";
import { CalendarPage } from "./pages/CalendarPage/CalendarPage";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import { Store } from "./store/store";

export default function Routes(): JSX.Element {
  const auth = useSelector((state: Store) => state.auth);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <ProtectedRoute
          path="/calendar"
          redirect="/login"
          condition={auth.isAuthenticated}
          component={<CalendarPage />}
        />
        <ProtectedRoute
          path="/social"
          redirect="/login"
          condition={auth.isAuthenticated}
          component={<SocialPage />}
        />
      </Switch>
    </Router>
  );
}
