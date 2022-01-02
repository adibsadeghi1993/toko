import { MainContext } from "main/state/MainState";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import Avatar from "shared/images/avatar.jpg";

const HeaderPanel = React.memo(() => {
  const { full_name } = useContext(MainContext);
  return (
    <div className="flex flex-row bg-primary-background w-full pb-1-5 border-bottom-navbar-dark">
      <header className="py-4">
        <div className="px-16 flex justify-start">
          <div className="flex flex-row gap-x-2 items-center">
            <img src={Avatar} className="rounded avatar" alt="" srcSet="" />
            <span className="text-white text-sm font-bold">{full_name}</span>
          </div>
        </div>
      </header>
    </div>
  );
});
export default HeaderPanel;
