const reducer = (state, { type, payload }) => {
    console.log("state: ", type, payload, state)
    switch (type) {
        case "set_access": {
            let access = []
            if (state.access.indexOf(payload) > -1) {
                access = state.access.filter(element => element !== payload)
            }
            else {
                access = [...state.access, payload]
            }
            return {
                ...state,
                access: access
            }
        }
        case 'set_loading':
            return {
                ...state,
                loading: payload
            }
        case 'set_promoter':
            return {
                ...state,
                promoter: payload
            }
        case 'set_promoter_level':
            return {
                ...state,
                promoter_level: payload
            }
        default:
            return state
    }
}

export default reducer;