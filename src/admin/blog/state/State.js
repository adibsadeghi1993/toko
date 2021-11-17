import React, { useReducer } from "react";
import BlogReducer from "admin/blog/state/Reducer";
import FetchRequest from "shared/controls/FetchRequest";

export const BlogContext = React.createContext();

const BlogState = ({ children }) => {
  const initialState = {};
  const [state, dispatch] = useReducer(BlogReducer, initialState);
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
  return (
    <BlogContext.Provider
      value={{
        ...state,
        category,
        dispatch,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogState;
