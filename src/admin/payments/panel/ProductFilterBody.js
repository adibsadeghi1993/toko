import React, { useContext } from "react";
import { PaymentsContext } from "../state/PaymentsState";

const ProductFilterBody = React.memo(
  ({ settoggle1, productCategory, mobile }) => {
    const { dispatch, insurance_show, installment } =
      useContext(PaymentsContext);
      console.log('fil', productCategory)
    return (
      <div
        className={`flex items-center flex-wrap ${
          mobile ? "flex-col justify-center w-64" : ""
        } `}
      >
        {insurance_show &&
          productCategory?.map((item, index) => (
            <button
              onClick={(e) => {
                // set_product_category_id product_category_id
                dispatch({ type: "set_insurance", 
                payload: item.category_id });
                dispatch({
                  type: "SET_PRODUCT_CATEGORY_ID",
                  payload: item.category_id,
                });
                dispatch({
                  type: "set_insurance_show",
                  payload: !insurance_show,
                });
                settoggle1((toggle) => !toggle);
                dispatch({
                  type: "set_insurance_name",
                  payload: e.target.value,
                });
              }}
              key={index}
              className="w-full md:w-36 md:text-sm md:whitespace-nowrap md:px-1 md:mx-1 my-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              value={item.category_name}
            >
              {item.category_name}
            </button>
          ))}
        {insurance_show && (
          <button
            onClick={(e) => {
              dispatch({ type: "set_insurance", payload: undefined });
              dispatch({
                type: "set_insurance_show",
                payload: !insurance_show,
              });
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
  }
);

export default ProductFilterBody;
