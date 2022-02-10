const Trans_saleReducer = (state, action) => {
    switch (action.type) {
        case 'set_insurance_name':
            return {
                ...state,
                insurance_name : action.payload 
            }
        case 'set_search_name':
            return {
                ...state,
                search_name : action.payload 
            }
        case 'set_insurance':
            return {
                ...state,
                insurance : action.payload 
            }
        case 'set_number':
            return {
                ...state,
                number : action.payload 
            }
        case 'set_insurance_show':
            return {
                ...state,
                insurance_show : action.payload
            }
        case 'set_FromTime':
            return {
                ...state,
                FromTime : action.payload
            }
        case 'set_insurance_show':
        return {
            ...state,
            insurance_show : action.payload
        }
        case 'set_ToTime':
            return {
                ...state,
                ToTime : action.payload
            }
        default:
            return state
    }
}

export default Trans_saleReducer;