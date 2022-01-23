import React, { useEffect, useState } from "react";

const Modal = ({ children, open, onClose, backdrop }) => {
  const [scrollPostion, setScrollPostion] = useState();
  const enable = () => {
    let enableScrollPosition = window.pageYOffset;
    setScrollPostion(enableScrollPosition);
    document.body.classList.add("disable-scroll");
    document.body.style.top = `-${enableScrollPosition}px`;
  };
  const disable = () => {
    document.body.classList.remove("disable-scroll");
    scrollPostion && window.scrollTo(0, scrollPostion);
  };

  useEffect(() => {
    if (open) {
      setTimeout(() => document.body.scrollTo(0, 0), 500);
      enable();
    } else {
      disable();
    }
  });

  return (
    <div
      className={`fixed ${
        open
          ? "visible opacity-100 transition-opacity"
          : "invisible opacity-0 transition-all"
      } left-0 right-0 top-0 bottom-0 z-50  `}
    >
      <div
        className={
          (backdrop &&
            onClose &&
            "w-full h-full flex justify-center items-center") ||
          ""
        }
      >
        {backdrop && onClose && (
          <div
            className="bg-matn-primary bg-opacity-50 absolute w-full h-full "
            onClick={onClose}
          />
        )}

        {children}
      </div>
    </div>
  );
};

export default Modal;
