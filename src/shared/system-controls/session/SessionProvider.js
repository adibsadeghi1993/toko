import React, { useReducer, useCallback, useEffect } from "react";
import axios from "axios";
import SessionReducer from "shared/system-controls/session/SessionReducer";

export const SessionContext = React.createContext();
export const SessionProvider = React.memo(({ sessionName, children }) => {
  const initialSession = {
    sessionData: {},
    token: null,
  };
  const [session, dispatch] = useReducer(SessionReducer, initialSession);
  const _axios = useCallback(
    (options) => {
      const token = localStorage.getItem(sessionName + "_tkn");
      // console.log('baseURL', process.env);
      const instance = axios.create({
        baseURL: process.env?.REACT_APP_BASEURL || "https://api.ir",
        headers: { Authorization: token ? "JWT " + token : "" },
      });
      return instance;
    },
    [sessionName]
  );

  const clearSession = useCallback(() => {
    axios.defaults.headers.common["Authorization"] = null;
    localStorage.removeItem(sessionName + "_dat");
    localStorage.removeItem(sessionName + "_tkn");
    dispatch({ type: "CLEAR_SESSION" });
  }, [sessionName]);

  const openSession = useCallback(
    ({ token, sessionData }) => {
      if (!token) {
        throw new Error("Server is wrong!");
      }
      axios.defaults.headers.common["Authorization"] = "JWT " + token;
      localStorage.setItem(sessionName + "_tkn", token);
      localStorage.setItem(sessionName + "_dat", JSON.stringify(sessionData));

      dispatch({
        type: "SET_SESSION",
        payload: { sessionData: sessionData, token: token },
      });
    },
    [sessionName]
  );

  useEffect(() => {
    const sessionData = localStorage.getItem(sessionName + "_dat");
    const token = localStorage.getItem(sessionName + "_tkn");
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    dispatch({
      type: "SET_SESSION",
      payload: { sessionData: JSON.parse(sessionData || "{}"), token: token },
    });
  }, [sessionName]);
  const sessionActive = () => {
    const token = localStorage.getItem(sessionName + "_tkn");
    return token ? true : false;
  };
  return (
    <SessionContext.Provider
      value={{
        session,
        sessionName,
        ...session,
        openSession,
        clearSession,
        _axios,
        sessionActive: sessionActive(),
      }}
    >
      {children}
    </SessionContext.Provider>
  );
});
