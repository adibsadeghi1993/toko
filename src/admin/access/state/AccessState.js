import React, { useReducer } from "react"
import AccessReducer from 'admin/access/state/AccessReducer'
import FetchRequest from "shared/controls/FetchRequest";

export const AcceessContex = React.createContext();

const AccessState = ({ children }) => {
    const initialState = {
        access: [],
        promoter: [],
        percents: []
    }
    const [state, dispatch] = useReducer(AccessReducer, initialState);

    const promoter_level = async () => {
        // 
        let res = await FetchRequest('http://81.91.145.250:8002/outsource/promoter_level/', {}, 'GET')
        if (res) {
            dispatch({ type: 'set_promoter', payload: res })
            dispatch({ type: 'set_loading', payload: false })
        }
    }
    const MemmberLevel = async (id_level) => {
        dispatch({ type: 'set_loading', payload: true })
        dispatch({ type: 'set_id_level', payload: id_level })
        let res = await FetchRequest('http://81.91.145.250:8002/outsource/parent_level_members/', { id_level: parseInt(id_level) }, 'POST')
        if (res) {
            dispatch({ type: 'set_promoter_level', payload: res })
        }
        dispatch({ type: 'set_loading', payload: false })
    }
    const defData = {
        "items": [
            {
                "id": 1,
                "insurance_id": 1,
                "insurance_name": "عمر",
                "company_name": "خاورمیانه",
                "periods": [
                    {
                        "year": 1,
                        "percent": 0.5
                    },
                    {
                        "year": 2,
                        "percent": 0.4
                    },
                    {
                        "year": 3,
                        "percent": 0.3
                    },
                    {
                        "year": 4,
                        "percent": 0.1
                    },
                    {
                        "year": 5,
                        "percent": 0.1
                    }
                ]
            },
            {
                "id": 2,
                "insurance_id": 2,
                "insurance_name": "درمان",
                "company_name": "سامان",
                "periods": [
                    {
                        "year": 1,
                        "percent": 0.2
                    }
                ]
            },
            {
                "id": 3,
                "insurance_id": 2,
                "insurance_name": "درمان",
                "company_name": "کارآفرین",
                "periods": [
                    {
                        "year": 1,
                        "percent": 0.1
                    }
                ]
            },
            {
                "id": 4,
                "insurance_id": 2,
                "insurance_name": "درمان",
                "company_name": "کمک رسان",
                "periods": [
                    {
                        "year": 1,
                        "percent": 0.2
                    }
                ]
            },
            {
                "id": 5,
                "insurance_id": 3,
                "insurance_name": "مسئولیت",
                "company_name": "کارآفرین",
                "periods": [
                    {
                        "year": 1,
                        "percent": 0.1
                    }
                ]
            }
        ]
    };
    const group = (items) => {
        let gp = items.reduce(function (r, a) {
            r[a.insurance_name] = r[a.insurance_name] || [];
            r[a.insurance_name].push(a);
            return r;
        }, Object.create(null));
        return gp;
    }

    const PercentsDefault = async (id_member) => {
        dispatch({ type: 'set_loading', payload: true })
        dispatch({ type: 'set_id_member', payload: id_member })
        try {
            let res = await FetchRequest('http://81.91.145.250:8002/outsource/sale_percents_default/', {
                id_level: state.level_id ? parseInt(state.level_id) : 1,
                id_parent: parseInt(id_member)
            }, 'POST')
            console.log("res: ", res)
            if (res) {
                dispatch({ type: 'set_percents', payload: group(res.items) })
            } else {
                dispatch({ type: 'set_percents', payload: group(defData.items) })
            }
            dispatch({ type: 'set_loading', payload: false })
        }
        catch (e) {
            console.log("e: ", e)
        }
    }
    const updatePercent = async () => {
        dispatch({ type: 'set_loading', payload: true })
        let items = { 'items': [] }
        Object.keys(state.percents).map((key, inx) => {
            state.percents[key].map((item, ind) => {
                items['items'].push(item)
            })
        })
        try {
            let res = await FetchRequest('http://81.91.145.250:8002/outsource/sale_percents_update/', items, 'POST')
            console.log("res: ", res)
            dispatch({ type: 'set_message_succes', payload: 'ثبت با موفقیت انجام شد!' })
            dispatch({ type: 'set_loading', payload: false })
        }
        catch (e) {
            console.log("e: ", e)
        }
    }
    return (
        <AcceessContex.Provider
            value={{
                ...state,
                promoter_level,
                PercentsDefault,
                updatePercent,
                MemmberLevel,
                dispatch,
            }}
        >
            {children}
        </AcceessContex.Provider>
    )
}

export default AccessState
