import { createContext, useCallback, useContext, useMemo } from "react";
import { useHistory, useLocation } from "react-router";

export const AdminContext = createContext(null);

export const AdminProvider = ({ children, navigation }) => {
  const history = useHistory();
  const location = useLocation();
  const currentNav = useMemo(() => {
    const current = navigation.find(item => {
      return (`/admin${item.path}` === location.pathname);
    });
    return current;
  }, [location, navigation]);

  const navGoTo = useCallback((path) => {
    history.push(path);
  }, [history]);

  const nav = {
    items: navigation,
    current: currentNav,
    go: navGoTo
  }
  return (
    <AdminContext.Provider value={{
      navigation: nav
    }}>
      {children}
    </AdminContext.Provider>
  )
}

export const useNav = () => {
  const admin = useContext(AdminContext);
  return admin.navigation;
}