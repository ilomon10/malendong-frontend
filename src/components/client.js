import SiriusAdapter from "@edgarjeremy/sirius.adapter";
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

const host = process.env["REACT_APP_SERVER_HOST"];
const port = process.env["REACT_APP_SERVER_PORT"];

const adapter = new SiriusAdapter(host, port, localStorage);

export const ClientContext = createContext(null);

export const ClientProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const factories = useRef(null);
  const authentication = useRef(adapter.getAuthProvider());

  async function authenticate(data) {
    try {
      const res = await authentication.current.set(data);
      console.log(res);
      setIsAuthenticated(true);
    } catch (err) {
      throw new Error(err);
    }
  }

  const client = useMemo(() => {
    return {
      adapter,
      authenticate,
      authentication: authentication.current,
      factories: factories.current,
      isAuthenticated() { return isAuthenticated },
      isConnected() { return isConnected },
      __connected: isConnected,
      __authenticated: isAuthenticated,
    }
  }, [isConnected, isAuthenticated]);

  useEffect(() => {
    if (isConnected) return;
    const fetch = async () => {
      const f = await client.adapter.connect();
      factories.current = f;
      setIsConnected(true);
    }
    fetch();
  }, [client, isConnected]);

  return (
    <ClientContext.Provider value={client}>
      {children}
    </ClientContext.Provider>
  )
}

export const useClient = () => {
  const client = useContext(ClientContext);
  return client;
}