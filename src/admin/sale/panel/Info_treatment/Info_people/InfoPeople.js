import { SaleContext } from "admin/sale/state/SaleState";
import React, { useContext } from "react";
import Insurance_person from "./Insurance_person";
import Info_person from "./Info_person";

const Info_people = React.memo(({ setCollspace }) => {
  const { insurer_treatment, _family_person_info } = useContext(SaleContext);
  const props = { details: _family_person_info, setCollspace: setCollspace };
  return (
    <>
      {!!_family_person_info && (
        <>
          {!!insurer_treatment && <Insurance_person {...props} />}
          {!insurer_treatment && <Info_person {...props} />}
        </>
      )}
    </>
  );
});

export default Info_people;
