import React, { useReducer, useCallback, useEffect } from "react";
import axios from "axios";
import SessionReducer from "shared/system-controls/session/SessionReducer";

export const SessionContext = React.createContext();
export const SessionProvider = React.memo(({ sessionName, children }) => {
  const initialSession = {
    refresh_token: null,
    token: null,
  };
  const [session, dispatch] = useReducer(SessionReducer, initialSession);
  const _axios = useCallback(
    (options) => {
      const token = localStorage.getItem(sessionName + "_tkn");
      // console.log('baseURL', process.env);
      const instance = axios.create({
        baseURL:
          process.env?.REACT_APP_BASEURL || "http://185.172.3.199:8000/api/",
        headers: { Authorization: token ? "Bearer " + token : "" },
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
    ({ token, refresh_token }) => {
      if (!token) {
        throw new Error("Server is wrong!");
      }
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem(sessionName + "_tkn", token);
      localStorage.setItem(sessionName + "_ref", refresh_token);

      dispatch({
        type: "SET_SESSION",
        payload: { refresh_token: refresh_token, token: token },
        // payload: { sessionData: sessionData, token: token },
      });
    },
    [sessionName]
  );

  useEffect(() => {
    const refresh_token = localStorage.getItem(sessionName + "_dat");
    const token = localStorage.getItem(sessionName + "_tkn");
    axios.defaults.headers.common["Authorization"] = "JWT " + token;
    dispatch({
      type: "SET_SESSION",
      payload: {
        refresh_token: JSON.parse(refresh_token || "{}"),
        token: token,
      },
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
