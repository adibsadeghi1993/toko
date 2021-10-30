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
                promoter_level_item: payload
            }
        case 'set_id_level':
            return {
                ...state,
                level_id: payload
            }
        case 'set_id_member':
            return {
                ...state,
                member_id: payload
            }
        case 'set_percents':
            return {
                ...state,
                percents: payload
            }
        case 'update_percents': {
            let indx = ("" + payload.getAttribute('data-index')).split("#")
            let access = state.percents
            access[indx[0]][indx[1]].periods[indx[2]].percent = payload.value
            return {
                ...state,
                percents: access,
                isUpdate: true,
            }
        }
        case 'set_message_succes': {
            return {
                ...state,
                message_success: payload
            }
        }
        default:
            return state
    }
}

export default reducer;