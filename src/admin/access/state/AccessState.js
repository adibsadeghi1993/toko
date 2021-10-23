import React, { useReducer } from "react"
import AccessReducer from 'admin/access/state/AccessReducer'

export const AcceessContex = React.createContext();

const AccessState = ({ children }) => {
    const initialState = {
    }
    const [state, dispatch] = useReducer(AccessReducer, initialState);

    return (
        <AcceessContex.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </AcceessContex.Provider>
    )
}

export default AccessState
