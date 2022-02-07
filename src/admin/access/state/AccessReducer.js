const reducer = (state, { type, payload }) => {
  console.log("state: ", type, payload, state);
  switch (type) {
    case "set_access": {
      let access = [];
      if (state.access.indexOf(payload) > -1) {
        access = state.access.filter((element) => element !== payload);
      } else {
        access = [...state.access, payload];
      }
      return {
        ...state,
        access: access,
      };
    }

    case "set_id_member":
      return {
        ...state,
        member_id: payload,
      };
    case "SET_PERCENTS":
      return {
        ...state,
        percents: payload,
      };
    case "update_percents": {
      let indx = ("" + payload.getAttribute("data-index")).split("#");
      let access = state.percents;
      access[indx[0]][indx[1]].periods[indx[2]].percent = payload.value;
      return {
        ...state,
        percents: access,
        isUpdate: true,
      };
    }
    case "set_message_succes": {
      return {
        ...state,
        message_success: payload,
      };
    }

    case "SET_ROLE_SELECT":
      return {
        ...state,
        role_select: [...state?.role_select, payload],
      };
    case "SET_ROLES":
      return {
        ...state,
        roles: payload,
      };
    case "SET_DETAILSUSER":
      return {
        ...state,
        details: payload,
      };
    case "SET_PROMOTERS":
      return {
        ...state,
        promoters: payload,
      };
    case "SET_ID_PROMOTER_LEVEL":
      return {
        ...state,
        level_id: payload,
      };
    case "SET_ID_PROMOTER_ITEM_ID":
      return {
        ...state,
        level_item_id: payload,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: payload,
      };
    case "SET_PROMOTER_LEVEL":
      return {
        ...state,
        promoter_level_items: payload,
      };
    case "SET_DATA_PERCENT": {
      let data = state?.update_percent;
      if (data?.filter((item) => item.id === payload[0].id).length > 0) {
        console.log(
          "find",
          state?.update_percent?.filter((item) => item.id === payload[0].id)
        );
        data[
          state?.update_percent?.findIndex(
            (item) => item.id === payload[0].id
          ) || 0
        ] = payload[0];
        return {
          ...state,
          update_percent: data,
        };
      } else {
        return {
          ...state,
          update_percent: [...(state?.update_percent || []), payload[0]],
        };
      }
    }

    case "CLEAR_CHANGE_PERCENT": {
      return {
        ...state,
        update_percent: [],
      };
    }
    case "SET_DETAILS_USER":
      return {
        ...state,
        details_user: payload,
      };
    case "SET_DELETE_USER":
      return {
        ...state,
        details_user: {
          ...state?.details_user,
          is_active: !state?.details_user?.is_active,
        },
      };

    default:
      return state;
  }
};

export default reducer;
