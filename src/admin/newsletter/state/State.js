import React, { useCallback, useContext, useReducer } from "react";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import NewsLetterReducer from "./Reducer";

export const NewsLetterContext = React.createContext();

const NewsLetterState = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(NewsLetterReducer, initialState);
  const { _axios } = useContext(SessionContext);

  /**
   * @description get lists subscribes
   * @return Array
   * @param {number} page_number
   * @param {number} row
   */
  const getSubscribe = useCallback(
    async (page_number, row) => {
      try {
        let res = await _axios().get("admin_panel/subscribe", {
          params: {
            page_number,
            row,
          },
        });
        if (res) {
          dispatch({ type: "SET_SUBSCRIBE", payload: res.data });
        }
      } catch (e) {
        console.log("e:", e);
      }
    },
    [_axios, dispatch]
  );
  return (
    <NewsLetterContext.Provider
      value={{
        ...state,
        dispatch,
        getSubscribe,
      }}
    >
      {children}
    </NewsLetterContext.Provider>
  );
};

export default NewsLetterState;
