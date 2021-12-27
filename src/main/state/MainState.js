import React, { useReducer } from "react";
import MainReducer from "main/state/MainReducer";

export const MainContext = React.createContext();

const MainState = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(MainReducer, initialState);

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
