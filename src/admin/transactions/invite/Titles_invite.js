import React, { useContext } from "react";
import { TransactionContext } from "./state/TransactionState";

const Titles_invite = React.memo(({
  settoggle1,
  insurance_list,
  mobile,
}) => {



  
  const { dispatch, insurance_show } = useContext(TransactionContext)
  return (
    <div
      className={`flex   items-center ${
        mobile ? "flex-col justify-center w-64" : "insurances"
      } `}
    >
      {insurance_show &&
        insurance_list?.map((i) => (
          <button
            onClick={(e) => {
              dispatch({ type: "set_insurance", payload: i.insurance_id });
              dispatch({ type: "set_insurance_show", payload: !insurance_show })
              settoggle1((toggle) => !toggle);
              dispatch({ type: "set_insurance_name", payload: e.target.value });
            }}
            key={i.insurance_id}
            className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            value={i.insurance_name}
          >
            {i.insurance_name}
          </button>
        ))}
      {insurance_show && (
        <button
          onClick={(e) => {
            dispatch({ type: "set_insurance", payload: '' });
            dispatch({ type: "set_insurance_show", payload: !insurance_show })
            settoggle1((toggle) => !toggle);
            dispatch({ type: "set_insurance_name", payload: "همه" });
          }}
          className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          همه
        </button>
      )}
    </div>
  );
})

export default Titles_invite;