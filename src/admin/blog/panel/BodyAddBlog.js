import React from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import { CKEditor } from "ckeditor4-react";

import "@pathofdev/react-tag-input/build/index.css";
import { BlogContext } from "admin/blog/state/State";

const BodyAddBlog = React.memo(() => {
  const { categories } = React.useContext(BlogContext);
  const [tags, setTags] = React.useState([]);

  return (
    <>
      <div className="flex flex-col mb-6">
        <label className="pb-2 font-normal text-base text-other-labelColor ">
          Logo
        </label>
        <input
          type="file"
          className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm rounded-sm"
        />
        <span className="mt-1 text-other-muted text-xs">
          عکس خودرا در فرمت jpg آپلود کنید
        </span>
      </div>
      <h6 className="py-1 mb-6 text-other-muted text-xs font-semibold">
        مشخصات سئو
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 items-center border-b border-gray-200 py-6">
        {/* input category */}
        <div className="flex flex-col">
          <label className="pb-2 font-semibold text-sm text-other-labelColor ">
            دسته بندی
          </label>
          <select className="border bg-white border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm">
            {categories.map((item) => (
              <option value={item.id}>{item.seo_title}</option>
            ))}
          </select>
        </div>
        {/* input seoName */}
        <div className="flex flex-col">
          <label className="pb-2 font-semibold text-sm text-other-labelColor  ">
            SeoName
          </label>
          <input
            type="text"
            placeholder="SeoName"
            className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm"
          />
        </div>
        {/* row */}
        {/* input SeoTitle */}
        <div className="flex flex-col">
          <label className="pb-2 font-semibold text-sm text-other-labelColor  ">
            SeoTitle
          </label>
          <input
            type="text"
            placeholder="SeoTitle"
            className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm"
          />
        </div>
        {/* input SeoDescription */}
        <div className="flex flex-col">
          <label className="pb-2 font-semibold text-sm text-other-labelColor  ">
            SeoDescription
          </label>
          <input
            placeholder="SeoDescription"
            type="text"
            className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm"
          />
        </div>
      </div>{" "}
      {/* end div grid */}
      {/* start box information */}
      <div className="flex flex-col">
        <label className="pb-1 my-6 font-semibold text-xs text-other-labelColor ">
          اطلاعات پست
        </label>
        <div className="flex flex-col">
          <label className="pb-2 font-semibold text-sm text-other-labelColor  ">
            عنوان
          </label>
          <input
            type="text"
            placeholder="عنوان"
            className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm rounded-sm"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label className="pb-2 font-semibold text-sm text-other-labelColor  ">
            متن
          </label>
          {/* <input
                      type="text"
                      placeholder="عنوان"
                      className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm rounded-sm"
                    /> */}
          <CKEditor
            onInstanceReady={() => {
              //   alert("Editor is ready!");
            }}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="pb-2 font-semibold text-sm text-other-labelColor  ">
            نمایش پست
          </label>
          <select
            dir="ltr"
            className="border bg-white border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm"
          >
            <option>پیش نویس</option>
            <option>نویس</option>
            <option>حذف</option>
          </select>
        </div>
        <div className="flex flex-col px-4 mt-2">
          <label className="pb-2 font-semibold text-sm text-other-labelColor  ">
            alt
          </label>
          <input
            type="text"
            placeholder="عنوان"
            className="border border-gray-100 px-3 py-2.5 font-normal text-other-muted text-sm rounded-sm"
          />
        </div>
        <div className="flex flex-col px-4 mt-8">
          <ReactTagInput
            tags={tags}
            onChange={(newTags) => setTags(newTags)}
            removeOnBackspace={true}
            placeholder={"Add tags with enter"}
          />
        </div>

        <div className="flex justify-start pt-10 mb-6">
          <button className="bg-secondary-background rounded-md text-sm font-normal text-white py-2.5 px-4 flex flex-row items-center justify-center gap-x-0.5">
            ثبت
          </button>
        </div>
      </div>
    </>
  );
});

export default BodyAddBlog;
