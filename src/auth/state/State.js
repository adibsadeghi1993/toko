import React, { useContext, useReducer, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import AuthReducer from "./Reducer";
import { ToastContainer, toast } from "react-toastify";

export const AuthContext = React.createContext();

const AuthState = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  const initialState = {
    formEmail: false,
    step: "login",
    loading: false,
  };
  const { _axios, openSession, clearSession } = useContext(SessionContext);
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const submit_phone = useCallback(
    async ({ phoneNumber }) => {
      try {
        console.log("phoneNumber::", phoneNumber);
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().post("admin_panel/otp_request", {
          cell: parseInt(phoneNumber),
        });
        if (res && res?.status === 200) {
          toast.info(`OTP:${res.data.otp}`); // @TODO: remove this line
          dispatch({ type: "SET_PHONE_NUMBER", payload: phoneNumber });
          dispatch({ type: "SET_VERIFY" });
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        toast("مشکلی برای ورود وجود دارد!");

        console.log("e:::", e);
        return;
      }
    },
    [dispatch, _axios]
  );

  const submit_verfiy = useCallback(
    async ({ otp, phoneNumber }) => {
      try {
        dispatch({ type: "SET_LOADING" });
        let res = await _axios().post("admin_panel/sign_in/cell", {
          cell: phoneNumber,
          otp: otp,
        });
        if (res && res?.status === 200) {
          setTimeout(() => history.push({ pathname: "/" }), 100);
          openSession({
            refresh_token: res.data?.refresh,
            token: res.data?.access_token,
          });
        }
        dispatch({ type: "SET_LOADING" });
      } catch (e) {
        dispatch({ type: "SET_LOADING" });
        console.log("e:::", e);
        toast("خطا در احراز هویت کد!");
        clearSession();
      }
    },
    [openSession, _axios, dispatch, clearSession, history]
  );
  return (
    <AuthContext.Provider
      value={{
        ...state,
        submit_phone,
        submit_verfiy,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
