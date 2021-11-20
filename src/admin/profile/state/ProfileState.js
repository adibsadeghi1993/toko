import React, { useReducer } from "react"
import ProfileReducer from 'admin/profile/state/ProfileReducer'
import FetchRequest from "shared/controls/FetchRequest";

export const ProfileContex = React.createContext();

const ProfileState = ({ children }) => {
    const initialState = {

    }
    const [state, dispatch] = useReducer(ProfileReducer, initialState);
    return (
        <ProfileContex.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </ProfileContex.Provider>
    )
}

export default ProfileState
