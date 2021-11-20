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
  const dataBlog = [
    {
      id: 1,
      title: "در مورد بیمه استارت آپ چه می دانید؟",
      body: `          استارت آپ چیست؟ آیا با تاریخچه استارتاپ آشنایی دارید؟ چگونه
                می‌توان برای استارت آپ بیمه خریداری کرد؟ آیا در جهان امروز
                خریداری بیمه برای استارت آپ نیاز است؟ انواع بیمه برای استارت
                آپ‌ها کدام ...`,
      image: "https://acp.tooko.co/Files/post-6252/poster.jpg?v=6a9f935a-bcc6-4be2-8f56-3bf812f134c9",
      date: "1400-08-24"
    },
    {
      id: 1,
      title: "در مورد بیمه استارت آپ چه می دانید؟",
      body: `          استارت آپ چیست؟ آیا با تاریخچه استارتاپ آشنایی دارید؟ چگونه
                می‌توان برای استارت آپ بیمه خریداری کرد؟ آیا در جهان امروز
                خریداری بیمه برای استارت آپ نیاز است؟ انواع بیمه برای استارت
                آپ‌ها کدام ...`,
      image: "https://acp.tooko.co/Files/post-6252/poster.jpg?v=6a9f935a-bcc6-4be2-8f56-3bf812f134c9",
      date: "1400-08-24"
    },
    {
      id: 1,
      title: "در مورد بیمه استارت آپ چه می دانید؟",
      body: `          استارت آپ چیست؟ آیا با تاریخچه استارتاپ آشنایی دارید؟ چگونه
                می‌توان برای استارت آپ بیمه خریداری کرد؟ آیا در جهان امروز
                خریداری بیمه برای استارت آپ نیاز است؟ انواع بیمه برای استارت
                آپ‌ها کدام ...`,
      image: "https://acp.tooko.co/Files/post-6252/poster.jpg?v=6a9f935a-bcc6-4be2-8f56-3bf812f134c9",
      date: "1400-08-24"
    },
    {
      id: 1,
      title: "در مورد بیمه استارت آپ چه می دانید؟",
      body: `          استارت آپ چیست؟ آیا با تاریخچه استارتاپ آشنایی دارید؟ چگونه
                می‌توان برای استارت آپ بیمه خریداری کرد؟ آیا در جهان امروز
                خریداری بیمه برای استارت آپ نیاز است؟ انواع بیمه برای استارت
                آپ‌ها کدام ...`,
      image: "https://acp.tooko.co/Files/post-6252/poster.jpg?v=6a9f935a-bcc6-4be2-8f56-3bf812f134c9",
      date: "1400-08-24"
    },
  ]
  return (
    <BlogContext.Provider
      value={{
        ...state,
        category,
        dataBlog,
        dispatch,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogState;
