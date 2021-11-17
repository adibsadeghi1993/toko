import React from "react";
import { useHistory } from "react-router";
import { ReactComponent as Logo } from "shared/icons/logo.svg";
import { ReactComponent as TV } from "shared/icons/sidebar/tv.svg";

const SideBar = React.memo(() => {
  const history = useHistory();
  return (
    <div className="bg-white hidden md:block md:fixed right-0 border-r sidenav">
      <div className="h-screen sidenav-header">
        <div className="bg-white h-auto mb-0 mr-0 max-h-screen relative top-0 left-0  box-content w-auto max-w-none m-0 p-0 border-0">
          <div className="h-78 pt-6 flex justify-center items-cener">
            <Logo
              className="cursor-pointer max-h-8"
              onClick={() => history.push("/")}
            />
          </div>
          <div className="navbar-list pl-6 mt-2">
            <div className="list-none -mx-6 px-6">
              <ul className="flex-col -mx-6 min-w-full pr-0 space-y-0.5">
                <li>
                  <a
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6"
                  >
                    <TV className="icon-dashboard text-other-color" />
                    داشبورد
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 font-sm"
                  >
                    <TV className="icon-dashboard text-other-color" />
                    داشبورد
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
export default SideBar;
