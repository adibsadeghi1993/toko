import React, { useReducer } from "react";
import MainReducer from "main/state/MainReducer";
import { useEffect } from "react/cjs/react.development";

export const MainContext = React.createContext();

const MainState = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(MainReducer, initialState);

  useEffect(() => {
    console.info("run app....");
  }, [dispatch]);
  return (
    <MainContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainState;
