const PaymentsReducer = (state, action) => {
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
        case 'set_demonstrate':

            // only for demonstraion 
            state.insurances[0]['شماره قسط'] = '12345'
            state.insurances[1]['شماره قسط'] = '45678'
            state.insurances[2]['شماره قسط'] = '15935'
            
            state.insurances[0]['تاریخ واریز قسط'] = '1400/10/27'
            state.insurances[1]['تاریخ واریز قسط'] = '1400/10/28'
            state.insurances[2]['تاریخ واریز قسط'] = '1400/10/29'


            state.insurances[0]['کارمزد دریافتی از شرکت'] = '10000'
            state.insurances[1]['کارمزد دریافتی از شرکت'] = '20000'
            state.insurances[2]['کارمزد دریافتی از شرکت'] = '30000'

            state.differences.push({
                'شماره بیمه نامه' : '123456789',
                'مقدار مغایرت' : '2.000.000',
                'شرکت' : 'خاورمیانه'
            })
            return {
                ...state
            }
        default:
            return state
    }
}

export default PaymentsReducer;