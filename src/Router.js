import Admin from "./pages/Admin";
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";
import Login from "./pages/Login";
import FourOFour from "./404";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={FourOFour} />
      </Switch>
    </HashRouter>
  )
}

export default Router;