import React from "react";

export default React.memo(() => {
  return (
    <ul className="flex flex-row cursor-pointer justify-center">
      <li>
        <span className="py-1 px-3  activated text-blue-500 border rounded-r">
          1
        </span>
      </li>
      <li>
        <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
          2
        </span>
      </li>
      <li>
        <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
          3
        </span>
      </li>
      <li>
        <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
          4
        </span>
      </li>
      <li>
        <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
          5
        </span>
      </li>
      <li>
        <span className="py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border">
          6
        </span>
      </li>
      <li>
        <span className="py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border">
          7
        </span>
      </li>
      <li>
        <span className="py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border">
          8
        </span>
      </li>
      <li>
        <span className="py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border">
          9
        </span>
      </li>
      <li>
        <span className="py-1 px-3 hover:bg-blue-100 hidden lg:inline text-blue-500 border">
          10
        </span>
      </li>
      <li>
        <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
          ...
        </span>
      </li>
      <li>
        <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
          &#62;
        </span>
      </li>
      <li>
        <span className="py-1 px-3 hover:bg-blue-100  text-blue-500 border">
          &#62; &#62;
        </span>
      </li>
    </ul>
  );
});
