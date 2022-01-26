import { SaleContext } from "admin/sale/state/SaleState";
import React, { useContext } from "react";
import Insurance_person from "./Insurance_person";
import Info_person from "./Info_person";

const Info_people = React.memo(({ setCollspace }) => {
  const { insurer_treatment, details } = useContext(SaleContext);
  return (
    <>
      {!!insurer_treatment && (
        // if بیمه گذار display specific information
        <Insurance_person setCollspace={setCollspace} details={details} />
      )}
      {!insurer_treatment && <Info_person setCollspace={setCollspace} />}
    </>
  );
});

export default Info_people;
