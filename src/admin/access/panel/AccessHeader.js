import React, { useContext, useCallback, useState, Fragment } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Person } from "shared/icons/person.svg";
import { ReactComponent as Graph } from "shared/icons/chart.svg";
import { ReactComponent as Card } from "shared/icons/card.svg";
import { ReactComponent as Trash } from "shared/icons/trash.svg";
import { ReactComponent as People } from "shared/icons/people.svg";
import { ReactComponent as ActiveUser } from "shared/icons/icon_change_user.svg";

import { AcceessContex } from "admin/access/state/AccessState";
import { Dialog, Transition } from "@headlessui/react";

export default React.memo(({ id }) => {
  const { deactiveUser, details_user } = useContext(AcceessContex);
  const [isOpen, setIsOpen] = useState(false);

  const DeactiveUser = useCallback(() => {
    // if (
    //   window.confirm(
    //     `آیا برای ${
    //       details_user?.isActive ? "غیر فعال" : "فعال"
    //     } کردن کابر مطمئن هستید؟`
    //   )
    // ) {
    //   deactiveUser({ tooko_user_id: id });
    // }
    setIsOpen(true);
  }, [deactiveUser, details_user]);
  const closeModal = () => {
    setIsOpen(false);
  };

  const _deactive_user = () => {
    deactiveUser({ tooko_user_id: id }, () => {
      setIsOpen(false);
    });
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block  max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl border border-gray-300">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 text-center"
                >
                  {details_user?.is_active
                    ? "غیرفعال سازی کاربر"
                    : "فعال سازی کاربر"}
                </Dialog.Title>
                <div className="mt-6 text-right">
                  آیا برای{" "}
                  {details_user?.is_active ? "غیر فعال کردن" : "فعال کردن"} کابر
                  مطمئن هستید؟
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={_deactive_user}
                  >
                    {details_user?.is_active ? "غیرفعال" : "فعال"}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <div className="flex flex-col md:flex-row items-center ">
        <div className="flex items-center">
          <div className="tooltip mx-1">
            {details_user?.is_active ? (
              <Trash className="cursor-pointer" onClick={DeactiveUser} />
            ) : (
              <ActiveUser
                className="cursor-pointer w-8 h-8"
                onClick={DeactiveUser}
              />
            )}
            <span className="tooltiptext">
              {details_user?.is_active ? "غیرفعال" : "فعال"}
            </span>
          </div>
          <div className="tooltip mx-1">
            <Link to={`/members/details/${id}`}>
              <Person />
            </Link>
            <span className="tooltiptext">مشاهده کاربر</span>
          </div>
          <div className="tooltip mx-1">
            <Link to={`/members/${id}/families`}>
              <People />
            </Link>
            <span className="tooltiptext">خانواده من</span>
          </div>

          <div className="tooltip mx-1">
            <Link to={`/members/chart/${id}`}>
              <Graph />
            </Link>
            <span className="tooltiptext">مشاهده چارت</span>
          </div>

          <div className="tooltip mx-1">
            <Link to="/members/transactions">
              <Card />
            </Link>
            <span className="tooltiptext">تراکنش ها</span>
          </div>
        </div>

        <Link to={`/members/details/${id}`}>
          <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 my-2 px-3 text-xs rounded">
            بازگشت به لیست
          </button>
        </Link>
      </div>
    </>
  );
});
