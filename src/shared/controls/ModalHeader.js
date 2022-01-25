import React from "react";
import { ReactComponent as IconClose } from "shared/icons/action/icon-close.svg";
import { ReactComponent as IconNav } from "shared/icons/navigation/icon-arrow-right.svg";
const ModalHeader = ({
  title,
  close,
  admin,
  onBack,
  back,
  customer,
  BoldText,
}) => {
  return (
    <>
      {!!customer && (
        <div className="w-full">
          <div className="grid grid-cols-5  bg-white items-center md:max-w-md mx-auto md:px-6 px-4 pt-3 pb-1.5">
            {!onBack && <div />}
            {!!onBack && (
              <IconNav
                onClick={back}
                className=" icon-md24 text-matn-secondary justify-self-start cursor-pointer  "
              />
            )}
            <div className="col-span-3 flex flex-col justify-center items-center  justify-self-center self-center ">
              <h2
                className={`mt-1.5 text-matn-primary ${
                  !!BoldText ? "text-xl" : ""
                }`}
              >
                {title}
              </h2>
            </div>
            <IconClose
              onClick={close}
              className=" icon-md24 text-matn-secondary justify-self-end cursor-pointer  "
            />
          </div>
        </div>
      )}
      {!customer && (
        <div className="w-full bg-red-600">
          <div className="grid grid-cols-5 bg-white  items-center mx-auto pt-3.5 pb-2">
            {!onBack && <div />}
            {!!onBack && (
              <IconNav
                onClick={back}
                className=" icon-md24 text-matn-secondary justify-self-end cursor-pointer  "
              />
            )}
            <div className=" flex flex-col justify-center items-center col-span-3  justify-self-center self-center ">
              <h2
                className={`mt-1.5 text-matn-primary ${
                  !!BoldText ? "text-xl" : ""
                }`}
              >
                {title}
              </h2>
            </div>
            <IconClose
              onClick={close}
              className=" icon-md24 text-matn-secondary justify-self-end cursor-pointer  "
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalHeader;
