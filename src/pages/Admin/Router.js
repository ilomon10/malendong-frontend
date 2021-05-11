import {
  Switch,
  Route
} from "react-router-dom";
import { useNav } from "./hoc";

const Router = () => {
  const navigation = useNav();
  return (
    <Switch>
      {navigation.items.map((item) => (
        <Route key={item.path} name={item.text} path={`/admin${item.path}`} component={item.component} />
      ))}
    </Switch>
  )
}

export default Router;