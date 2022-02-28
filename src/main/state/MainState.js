import React, { useCallback, useReducer } from "react";
import MainReducer from "main/state/MainReducer";
import { useEffect } from "react/cjs/react.development";
import { useContext } from "react";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import useCookie from "shared/system-controls/hooks/useCookie";
import { v4 as uuidv4 } from "uuid";

export const MainContext = React.createContext();

const MainState = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(MainReducer, initialState);
  const sessionName = "ADMIN_APP";
  const { _axios } = useContext(SessionContext);
  const [cookie] = useCookie(sessionName + "_tkn");

  const getInformaionUser = useCallback(async () => {
    if (cookie) {
      let res = await _axios().post("/admin_panel/promoter/name");
      if (res?.data) {
        dispatch({ type: "SET_INFORMATION", payload: res?.data?.full_name });
      }
    }
  }, [dispatch, _axios, cookie]);

  const uploadMedia = useCallback(
    async (file, fileName = undefined, callback) => {
      try {
        const uuid = uuidv4();
        const res = await _axios().post("Auth/SetMedia", {
          // code: uuid,
          title: fileName,
          base64: file,
        });
        console.log("Res:::", res);
        callback?.(res.data?.id);
      } catch (err) {
        Promise.reject(err);
      }
    },
    [_axios]
  );
  useEffect(() => {
    getInformaionUser?.();
  }, [dispatch, sessionName]);
  return (
    <MainContext.Provider
      value={{
        ...state,
        dispatch,
        uploadMedia,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainState;
