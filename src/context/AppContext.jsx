import React, { useState } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";
import { isError, isLoding, isLogin, isDataFetched } from "./ActionCreater";
import { useEffect } from "react";
import { GetData } from "../components/GetData";
import { useSearchParams } from "react-router-dom";

export const AppContext = createContext();

const intialValue = {
  isLoding: true,
  isError: false,
  isAuth: false,
  isDarkMode: true,
  data: [],
};

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, intialValue);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    GetData()
      .then((res) => {
        dispatch(isDataFetched(res.data.articles));
      })
      .catch((reject) => {
        dispatch(isError(true));
        console.log(reject);
      })
      .finally(() => {
        dispatch(isLoding(false));
      });
  }, []);
  useEffect(()=>{
    setSearchParams()
},[])
  const darkMode = state.isDarkMode
    ? { bg: "#18191a", color: "white", transition: "1s" }
    : { bg: "white", color: "black", transition: "1s" };
  const value = { state, dispatch, darkMode };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
