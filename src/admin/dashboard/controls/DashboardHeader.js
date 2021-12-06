import React from "react";

export default React.memo(() => {
  return (
    <div className="flex flex-row justify-between">
      <h6 className="text-white mb-0 text-xl font-semibold">خانه</h6>
      <div />
      <nav class="ml-6">
        <ol class="breadcrumb breadcrumb-links breadcrumb-dark py-3 px-4 flex rounded-md flex-wrap bg-other-borderColor">
          <li class="breadcrumb-item flex">
            <a href="#">Home</a>
          </li>
          <li class="breadcrumb-item">
            <a href="#">داشبورد</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            خانه
          </li>
        </ol>
      </nav>
    </div>
  );
});
