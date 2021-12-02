import React, { useContext, useReducer } from "react";
import CompanyReducer from "./Reducer";

export const CompanyContext = React.createContext();

const CompanyState = ({ children }) => {
  const initialState = { companies: [] };
  const [state, dispatch] = useReducer(CompanyReducer, initialState);

  return (
    <CompanyContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export default CompanyState;
