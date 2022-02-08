import React from "react";

export default React.memo(() => {
  return (
    <div className="flex flex-row justify-between">
      <h6 className="text-white mb-0 text-xl font-semibold">خانه</h6>
      <div />
      <nav className="ml-6">
        <ol className="breadcrumb breadcrumb-links breadcrumb-dark py-3 px-4 flex rounded-md flex-wrap bg-other-borderColor gap-x-1">
          <li className="breadcrumb-item flex border-l">
            <a href="#">خانه</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">داشبورد</a>
          </li>
          {/* <li className="breadcrumb-item active" aria-current="page">
            خانه
          </li> */}
        </ol>
      </nav>
    </div>
  );
});
