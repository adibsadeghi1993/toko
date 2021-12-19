import React, { useReducer } from "react";
import NewsLetterReducer from "./Reducer";

export const NewsLetterContext = React.createContext();

const NewsLetterState = ({ children }) => {
  const initialState = {
    news: [
      {
        created_At: "19/08/1400 10:18:00 ق.ظ",
        active: true,
        email: "mahdimajidi7526@gmail.com",
      },
      {
        created_At: "19/08/1400 10:18:00 ق.ظ",
        active: true,
        email: "mahdimajidi7526@gmail.com",
      },
      {
        created_At: "19/08/1400 10:18:00 ق.ظ",
        active: true,
        email: "mahdimajidi7526@gmail.com",
      },
      {
        created_At: "19/08/1400 10:18:00 ق.ظ",
        active: true,
        email: "mahdimajidi7526@gmail.com",
      },
      {
        created_At: "19/08/1400 10:18:00 ق.ظ",
        active: true,
        email: "mahdimajidi7526@gmail.com",
      },
    ],
  };
  const [state, dispatch] = useReducer(NewsLetterReducer, initialState);

  return (
    <NewsLetterContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </NewsLetterContext.Provider>
  );
};

export default NewsLetterState;
