import React from "react";
import { useHistory } from "react-router";
import { ReactComponent as Logo } from "shared/icons/logo.svg";
import { ReactComponent as TV } from "shared/icons/sidebar/tv.svg";
// planet-svgrepo-com.svg
import { ReactComponent as PlanetSvg } from "shared/icons/sidebar/planet-svgrepo-com.svg";
import { ReactComponent as Dashboard } from "shared/icons/sidebar/dashboard.svg";
import { ReactComponent as Sell } from "shared/icons/sidebar/sell.svg";
import { ReactComponent as Cart } from "shared/icons/sidebar/cart.svg";
import { ReactComponent as Users } from "shared/icons/sidebar/users.svg";

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
            <div className="flex flex-col list-none -mx-6 px-6">
              <ul className="flex flex-col -mx-6 min-w-full pr-40 space-y-0.5">
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <Dashboard className="icon-dashboard text-other-color" />
                    داشبورد
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <Sell className="icon-dashboard text-other-color" />
                    فروش
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <Cart className="icon-dashboard text-other-color" />
                    تراکنش ها
                  </span>
                </li>
                {/*  */}
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <TV className="icon-dashboard text-other-color" />
                    پروموتر ها
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <Users className="icon-dashboard text-other-color" />
                    لیست کاربران
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <TV className="icon-dashboard text-other-color" />
                    لیست شرکت ها
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/blog")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <TV className="icon-dashboard text-other-color" />
                    وبلاگ
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/category")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <TV className="icon-dashboard text-other-color" />
                    دسته بندی سایت
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <TV className="icon-dashboard text-other-color" />
                    عضویت در خبرنامه
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/blog")}
                >
                  <span
                    // href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <PlanetSvg className="icon-dashboard" fill="#fb6340" />
                    سایت
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  // onClick={() => history.push("/category")}
                >
                  <span
                    // href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <PlanetSvg className="icon-dashboard" fill="#fb6340" />
                    خروج
                  </span>
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
