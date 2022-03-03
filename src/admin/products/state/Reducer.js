const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_PRODUCT_CATEGORIES": {
      return { ...state, insurancesCategoriy: payload };
    }
    case "SET_INSURANCE_NAME":{
      return {...state,insuranceName:payload}
    }
    case "SET_PRODUCTS":{
      return {...state,products:payload}
    }
    case "SET_LOADING":{
      return {...state,loading:true}
    }
    case "SET_QUERY":{
      return {...state,query:payload}
    }
    case "SET_DETAIL_LOADING":{
      return {...state,loadingDetailes:true}
    }
    case "SET_PRODUCT_DETAILS":{
      return {...state,productDetailes:payload,loadingDetailes:false}
    }
    default:
      return state;
  }
};

export default reducer;
