const reducer = (state, { type, payload }) => {
  console.log("payload:", payload);
  switch (type) {
    case "SET_PRODUCT_CATEGORIES": {
      return {
        ...state,
        insurancesCategoriy: payload,
      };
    }
    case "SET_INSURANCE_NAME": {
      return {
        ...state,
        insuranceName: payload,
      };
    }
    case "SET_PRODUCTS": {
      return {
        ...state,
        products: payload,
      };
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "SET_QUERY": {
      return {
        ...state,
        query: payload,
      };
    }
    case "SET_DETAIL_LOADING": {
      return {
        ...state,
        loadingDetailes: payload,
      };
    }
    case "SET_PRODUCT_DETAILS": {
      return {
        ...state,
        productDetailes: payload,
        loadingDetailes: false,
      };
    }
    case "SET_SHOW_PRODUCT_DETAILS":
      return {
        ...state,
        showProductDetail: payload,
      };
    case "UPDATE_NAME":
      return {
        ...state,
        productDetailes: {
          ...state.productDetailes,
          name: payload,
        },
      };
    case "UPDATE_DESCRIPTION":
      return {
        ...state,
        productDetailes: {
          ...state.productDetailes,
          description: payload,
        },
      };
    case "UPDATE_INVITED_PRICE":
      return {
        ...state,
        productDetailes: {
          ...state?.productDetailes,
          invited_fix_price: payload,
        },
      };
    case "UPDATE_COMPANY":
      return {
        ...state,
        productDetailes: {
          ...state?.productDetailes,
          company_id: payload,
    
        },
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
        productDetailes: {
          ...state.productDetailes,
          id_type_id: payload,
          
        },
      };
    case "UPDATE_PERCENT":
      return {
        ...state,
        productDetailes: {
          ...state.productDetailes,
          product_percents: {
            range: [
              ...state.productDetailes.product_percents.range,
              payload,
            ],
          },
        },
      };
      case "LOADING_EDIT":{
        return {
          ...state,
          loadingEdit:payload
        }
      }
      case "LOADING_DELETE":{
        return {
          ...state,loadingDelete:payload
        }
      }
    default:
      return state;
  }
};

export default reducer;
