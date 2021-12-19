import React, { useCallback, useContext } from "react";
import { MemmberContext } from "../state/State";

export default React.memo(({ roles }) => {
  const { dispatch } = useContext(MemmberContext);
  return (
    !!roles &&
    roles?.map((item, index) => (
      <button
        key={index}
        onClick={() =>
          dispatch({ type: "SET_ROLE_FILTER", payload: item?.role_id })
        }
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded focus:text-white focus:bg-blue-500 m-2 text-sm"
      >
        {item.role_farsi}
      </button>
    ))
  );
});
