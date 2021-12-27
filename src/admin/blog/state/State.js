import React, { useCallback, useContext, useReducer } from "react";
import BlogReducer from "admin/blog/state/Reducer";
import FetchRequest from "shared/controls/FetchRequest";
import { SessionContext } from "shared/system-controls/session/SessionProvider";
import { useHistory } from "react-router-dom";
import { STASTUS } from "config/constant";
import { toast } from "react-toastify";

export const BlogContext = React.createContext();

const BlogState = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(BlogReducer, initialState);
  const { _axios } = useContext(SessionContext);
  const location = useHistory();
  const category = [
    { id: 1, name: "بیمه" },
    { id: 2, name: "بیمه سرمایه گذاری و پس انداز" },
    { id: 3, name: "بیمه آتش سوزی" },
    { id: 4, name: "مشاوره مالی و سرمایه گذاری" },
    { id: 5, name: "مستمری و بازنشستگی" },
    { id: 6, name: "بیمه های زندگی" },
    { id: 7, name: "سایت" },
    { id: 8, name: "بیمه درمان و یا بیمه تکمیلی" },
    { id: 9, name: "بیمه شخص ثالث" },
    { id: 10, name: "بیمه تامین اجتماعی" },
    { id: 11, name: "بیمه عمر" },
  ];
  const dataBlog = [
    {
      id: 1,
      title: "در مورد بیمه استارت آپ چه می دانید؟",
      body: `          استارت آپ چیست؟ آیا با تاریخچه استارتاپ آشنایی دارید؟ چگونه
                می‌توان برای استارت آپ بیمه خریداری کرد؟ آیا در جهان امروز
                خریداری بیمه برای استارت آپ نیاز است؟ انواع بیمه برای استارت
                آپ‌ها کدام ...`,
      image:
        "https://acp.tooko.co/Files/post-6252/poster.jpg?v=6a9f935a-bcc6-4be2-8f56-3bf812f134c9",
      date: "1400-08-24",
    },
    {
      id: 1,
      title: "در مورد بیمه استارت آپ چه می دانید؟",
      body: `          استارت آپ چیست؟ آیا با تاریخچه استارتاپ آشنایی دارید؟ چگونه
                می‌توان برای استارت آپ بیمه خریداری کرد؟ آیا در جهان امروز
                خریداری بیمه برای استارت آپ نیاز است؟ انواع بیمه برای استارت
                آپ‌ها کدام ...`,
      image:
        "https://acp.tooko.co/Files/post-6252/poster.jpg?v=6a9f935a-bcc6-4be2-8f56-3bf812f134c9",
      date: "1400-08-24",
    },
    {
      id: 1,
      title: "در مورد بیمه استارت آپ چه می دانید؟",
      body: `          استارت آپ چیست؟ آیا با تاریخچه استارتاپ آشنایی دارید؟ چگونه
                می‌توان برای استارت آپ بیمه خریداری کرد؟ آیا در جهان امروز
                خریداری بیمه برای استارت آپ نیاز است؟ انواع بیمه برای استارت
                آپ‌ها کدام ...`,
      image:
        "https://acp.tooko.co/Files/post-6252/poster.jpg?v=6a9f935a-bcc6-4be2-8f56-3bf812f134c9",
      date: "1400-08-24",
    },
    {
      id: 1,
      title: "در مورد بیمه استارت آپ چه می دانید؟",
      body: `          استارت آپ چیست؟ آیا با تاریخچه استارتاپ آشنایی دارید؟ چگونه
                می‌توان برای استارت آپ بیمه خریداری کرد؟ آیا در جهان امروز
                خریداری بیمه برای استارت آپ نیاز است؟ انواع بیمه برای استارت
                آپ‌ها کدام ...`,
      image:
        "https://acp.tooko.co/Files/post-6252/poster.jpg?v=6a9f935a-bcc6-4be2-8f56-3bf812f134c9",
      date: "1400-08-24",
    },
  ];

  const getBlogs = useCallback(
    async (page_number, row) => {
      try {
        let res = await _axios().get("admin_panel/blog/post", {
          params: {
            page_number,
            row,
          },
        });
        if (res.status === 200) {
          dispatch({ type: "SET_BLOGS", payload: res.data });
        }
        console.log("res::::", res);
      } catch (e) {
        console.log("e:", e);
      }
    },
    [_axios, dispatch]
  );

  const getCategory = useCallback(async () => {
    try {
      let res = await _axios().get("admin_panel/blog/category_ids");
      if (res.status === 200) {
        dispatch({ type: "SET_CATEGORIES", payload: res.data });
      }
      console.log("res::::", res);
    } catch (e) {
      console.log("e:", e);
    }
  }, [_axios, dispatch]);

  const addBlog = useCallback(async () => {
    try {
      let res = await _axios().post("admin_panel/blog/post", {
        id_category: state?.category,
        seo_title: state?.seo_title,
        seo_name: state?.seo_name,
        seo_description: state?.seo_description,
        alt: state?.alt,
        title: state?.title,
        body: state?.description || "",
        id_status: state?.status,
        tags: state?.tags?.join(",") || "",
        image: state?.category,
      });
      if (res.status === 200) {
        location.push("/blog");
        // dispatch({ type: "SET_CATEGORIES", payload: res.data });
      }
      console.log("res::::", res);
    } catch (e) {
      console.log("e:", e);
    }
  }, [_axios, location, state, dispatch]);

  const filterBlog = useCallback(
    async (page, row, q) => {
      try {
        let res = await _axios().get("admin_panel/blog/post_specific", {
          params: {
            ...state?.search,
          },
        });
      } catch (e) {
        //\
        console.log("eee:", e);
      }
    },
    [_axios, state, dispatch]
  );

  const deletePost = useCallback(
    async (post_id) => {
      try {
        let res = await _axios().delete("admin_panel/blog/post", {
          params: {
            post_id: post_id,
          },
        });
        if (res && res?.status === STASTUS.success) {
          toast.success("حذف با موفقیت انجام شد.");
          dispatch({ type: "UPDATE_PAGE" });
        }
        console.log("res:", res);
      } catch (e) {
        //
      }
    },
    [_axios, dispatch]
  );

  return (
    <BlogContext.Provider
      value={{
        ...state,
        category,
        dataBlog,
        dispatch,
        getBlogs,
        getCategory,
        addBlog,
        deletePost,
        filterBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogState;
