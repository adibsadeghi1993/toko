import React, { useCallback, useContext, useState } from "react";
import { useHistory } from "react-router";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import { ReactComponent as Logo } from "shared/icons/logo.svg";

import { ReactComponent as TV } from "shared/icons/sidebar/tv.svg";
import { ReactComponent as Card } from "shared/icons/card.svg";
// planet-svgrepo-com.svg
import { ReactComponent as PlanetSvg } from "shared/icons/sidebar/planet-svgrepo-com.svg";
import { ReactComponent as Category } from "shared/icons/sidebar/category.svg";
import { ReactComponent as Sell } from "shared/icons/sidebar/sell.svg";
import { ReactComponent as Cart } from "shared/icons/sidebar/cart.svg";
import { ReactComponent as Users } from "shared/icons/sidebar/users.svg";
import { ReactComponent as Email } from "shared/icons/sidebar/E-mail.svg";
import { ReactComponent as Blog } from "shared/icons/sidebar/blog.svg";
import { ReactComponent as Company } from "shared/icons/sidebar/company.svg";
import { ReactComponent as Admin } from "shared/icons/sidebar/admin.svg";

const SideBar = React.memo(() => {
  const { clearSession } = useContext(SessionContext);
  const history = useHistory();
  const [openSubList, setOpenSubList] = useState(0);
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
                    <TV className="icon-dashboard text-other-background" />
                    داشبورد
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/sale")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <Sell className="icon-dashboard text-other-background" />
                    فروش
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/payments")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <Card className="icon-dashboard text-other-background" />
                    اقساط
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  // onClick={() => history.push("/")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                    onClick={() => setOpenSubList((prv) => (prv === 2 ? 0 : 2))}
                  >
                    <Cart className="icon-dashboard text-other-background" />
                    تراکنش ها
                  </span>
                  <ul
                    className={`pr-2  ${
                      openSubList === 2
                        ? "block transition-opacity	duration-200	ease-in-out	"
                        : "hidden"
                    }`}
                  >
                    <li onClick={() => history.push("/transactions/invite")}>
                      <span className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink">
                        <Category className="icon-dashboard text-other-background" />
                        تراکنش های دعوت از دوستان
                      </span>
                    </li>
                    <li onClick={() => history.push("/transactions/sale")}>
                      <span className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink">
                        <Category className="icon-dashboard text-other-background" />
                        تراکنش های شبکه فروش
                      </span>
                    </li>
                  </ul>
                </li>
                {/* <li
                  className="cursor-pointer"
                  onClick={() => history.push("/promoters")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <Admin className="icon-dashboard text-other-background" />
                    پروموتر ها
                  </span>
                </li> */}
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/members")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <Users className="icon-dashboard text-other-background" />
                    لیست کاربران
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/companies")}
                >
                  <span className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink">
                    <Company className="icon-dashboard text-other-background" />
                    لیست شرکت ها
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/products")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <Company className="icon-dashboard text-other-background" />
                    لیست محصولات
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
                    <Blog className="icon-dashboard text-other-background" />
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
                    <Category className="icon-dashboard text-other-background" />
                    دسته بندی پست
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => history.push("/news-letter")}
                >
                  <span
                    href="#"
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <Email className="icon-dashboard text-other-background" />
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
                    <PlanetSvg className="icon-dashboard" fill="#324234" />
                    سایت
                  </span>
                </li>
                <li
                  className="cursor-pointer"
                  // onClick={() => history.push("/category")}
                >
                  <span
                    // href="#"
                    onClick={useCallback(() => {
                      clearSession();
                      history.push("/sign-in")
                    }, [clearSession,history])}
                    className="flex gap-x-2.5 py-2.5 items-center px-6 transition duration-0.3 ease-in font-medium text-sm text-other-navLink"
                  >
                    <PlanetSvg className="icon-dashboard" fill="#324234" />
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
