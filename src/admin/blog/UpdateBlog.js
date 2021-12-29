import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router";
import { BlogContext } from "admin/blog/state/State";
import BodyAddBlog from "./panel/BodyAddBlog";
import { useParams } from "react-router-dom";

const AddBlog = React.memo(() => {
  const history = useHistory();
  const { getCategory } = useContext(BlogContext);
  const editorConfiguration = {
    toolbar: ["bold", "italic"],
  };
  const { id } = useParams();
  useEffect(() => {}, [id]);

  useEffect(() => {
    getCategory?.();
  }, [getCategory]);

  return (
    <>
      <div className="relative pb-72 h-100 z-10">
        <span className="mask bg-secondary-background "></span>
      </div>
      <div className="relative top-0 z-30 w-full px-2 md:px-30 -mt-72 ">
        <div className="card flex flex-col min-h-screen">
          {/* card header */}
          <div className="card-header py-4 px-2 md:px-6 border-b border-gray-100">
            <div className="grid grid-cols-4">
              <h3 className="col-span-2 text-primary-color pr-5  text-base font-semibold">
                پست جدید
              </h3>
              <div className="col-span-2 flex justify-end md:justify-start">
                <button
                  onClick={() => history.push("/blog")}
                  className="btn-hover text-xs font-semibold bg-secondary-background rounded-sm shadow-btn-small text-white px-2 py-1 flex flex-row items-center justify-center gap-x-0.5"
                >
                  بازگشت به لیست
                </button>
              </div>
            </div>
          </div>
          {/* end header card */}
          <div className="card-body p-2 md:p-6">
            <div className="flex flex-col">
              <BodyAddBlog />
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
export default AddBlog;
