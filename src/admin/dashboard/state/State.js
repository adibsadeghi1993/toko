import React, { useContext, useReducer } from "react";
import DashboardReducer from "./Reducer";

export const DashboardContext = React.createContext();

const DashboardState = ({ children }) => {
  const initialState = { companies: [] };
  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  return (
    <DashboardContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
