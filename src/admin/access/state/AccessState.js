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
                "insurance_name": "بیمه عمر",
                "company_name": "خاورمیانه",
                "periods": [
                    {
                        "year": 'ماه 1 تا 12',
                        "percent": 40
                    },
                    {
                        "year": 'ماه 13 تا 24',
                        "percent": 10
                    },
                    {
                        "year": 'ماه 25 تا 36 ',
                        "percent": 30
                    },
                    {
                        "year": 'ماه 37 تا 48',
                        "percent": 15
                    },
                    {
                        "year": 'ماه 49 تا 60',
                        "percent": 20
                    }
                ]
            },
            {
                "id": 2,
                "insurance_id": 2,
                "insurance_name": "بیمه درمان",
                "company_name": "کمک رسان",
                "periods": [
                    {
                        "year": 'ماه 1 تا 12',
                        "percent": 20
                    },
                    {
                        "year": 'ماه 13 تا 24',
                        "percent": 20
                    },
                    {
                        "year": 'ماه 25 تا 36 ',
                        "percent": 20
                    },
                ]
            },
            {
                "id": 3,
                "insurance_id": 2,
                "insurance_name": "بیمه درمان",
                "company_name": "کارآفرین",
                "periods": [
                    {
                        "year": 'ماه 1 تا 12',
                        "percent": 20
                    }
                ]
                ,
                'plans': [
                    {
                        'plan' : 'طرح 1',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح 2',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح 3',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح 4',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح 5',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح 6',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح 7',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح ممتاز 8',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح VIP',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح تجمعی 1',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح تجمعی 2',
                        'percent' : '20'
                    },
                ]
            },
            {
                "id": 4,
                "insurance_id": 2,
                "insurance_name": "بیمه درمان",
                "company_name": "سامان",
                "periods": [
                    {
                        "year": 'ماه 1 تا 12',
                        "percent": 20
                    }
                ]
                ,
                'plans': [
                    {
                        'plan' : 'طرح نسیم',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح سروش',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح عقیق',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح ویژه',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح وصال',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح جامع',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح اقتصادی',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح ممتاز سامان',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح منتخب',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح ویژه محدود',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح اقتصادی محدود',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح جامع محدود',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح منتخب محدود',
                        'percent' : '20'
                    },
                    {
                        'plan' : 'طرح مهر',
                        'percent' : '20'
                    },
                
                ]
            },
            {
                "id": 5,
                "insurance_id": 3,
                "insurance_name": "مسئولیت",
                "company_name": "کارآفرین",
                "periods": [
                    {
                        "year": 'ماه 1 تا 12',
                        "percent": 20
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
            // if (res) {
            //     dispatch({ type: 'set_percents', payload: group(res.items) })
            // } else {
                dispatch({ type: 'set_percents', payload: group(defData.items) })
            // }
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
