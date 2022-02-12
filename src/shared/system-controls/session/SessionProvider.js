import React, { useReducer, useCallback, useEffect } from "react";
import axios from "axios";
import SessionReducer from "shared/system-controls/session/SessionReducer";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import useCookie from "../hooks/useCookie";

export const SessionContext = React.createContext();
export const SessionProvider = React.memo(({ sessionName, children }) => {
  const initialSession = {
    refresh_token: null,
    token: null,
  };
  const history = useHistory();
  const [session, dispatch] = useReducer(SessionReducer, initialSession);
  const [cookie, updateCookie, eraseCookie] = useCookie(sessionName + "_tkn");

  const _axios = useCallback(
    (options) => {
      const token = cookie;
      // console.log('baseURL', process.env);
      const instance = axios.create({
        baseURL:
          process.env?.REACT_APP_BASEURL || "https://django.bimetooko.ir/api/",
        headers: { Authorization: token ? "Bearer " + token : "" },
      });

      instance.interceptors.response.use(
        (response) => {
          toast.dismiss(response.config.config.toast_id);

          return response;
        },
        (error) => {
          const expectedError =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
          if (error.response.status === 401) {
            clearSession();
            history.push("/sign-in");
          }
          // if (!expectedError) {
          toast.update(error.response.config.config.toast_id, {
            render: "مشکل در انجام فرآیند!",
            type: "error",
            isLoading: false,
            autoClose: 1000,
          });

          return Promise.reject(error);
        }
      );

      instance.interceptors.request.use((request) => {
        const id = toast.loading("در حال انجام درخواست ...");
        request.config = {
          ...(request.config ?? {}),
          toast_id: id,
        };
        return request;
      });
      return instance;
    },
    [sessionName, cookie, updateCookie, eraseCookie]
  );

  const clearSession = useCallback(() => {
    axios.defaults.headers.common["Authorization"] = null;
    localStorage.removeItem(sessionName + "_dat");
    // localStorage.removeItem(sessionName + "_tkn");
    eraseCookie();
    dispatch({ type: "CLEAR_SESSION" });
  }, [sessionName]);

  const openSession = useCallback(
    ({ token, refresh_token }) => {
      if (!token) {
        throw new Error("Server is wrong!");
      }
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      // localStorage.setItem(sessionName + "_tkn", token);
      localStorage.setItem(sessionName + "_ref", refresh_token);
      updateCookie(token, 20);
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
    const token = cookie;
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
    const token = cookie;
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
