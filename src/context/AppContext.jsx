import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';
import reducer from './reducer';
import {isError, isLoding, isLogin, isDataFetched} from "./ActionCreater"
import { useEffect } from 'react';
import { GetData } from '../components/GetData';

export const AppContext = createContext();

const intialValue = {
    isLoding:true,
    isError:false,
    isAuth:false,
    data:[]
}

export default function AppContextProvider({children}) {
    const [state, dispatch] = useReducer(reducer, intialValue);
    // const searchParams = 
    // const [searchParams, setSearchParam]
    useEffect(()=>{
        GetData().then((res)=>{
            dispatch(isDataFetched(res.data.articles));
        })
        .catch((reject)=>{
            dispatch(isError(true));
            console.log(reject);
        })
        .finally(()=>{
            dispatch(isLoding(false));
        })
    }, []);
    const value = {state, dispatch}
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}
