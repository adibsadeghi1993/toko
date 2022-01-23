import React from "react";
import { ReactComponent as IconClose } from "shared/icons/action/icon-close.svg";
const ModalHeaderSm = ({ onClose, title }) => {
  return (
    <div className="py-4 grid grid-cols-7 ">
      <div />
      <h3 className="text-matn-primary px-4 col-span-5 text-center">{title}</h3>
      <IconClose
        onClick={onClose}
        className=" icon-md24 text-matn-secondary justify-self-end cursor-pointer"
      />
    </div>
  );
};

export default ModalHeaderSm;
