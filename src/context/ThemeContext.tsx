import {
  useEffect,
  useState,
} from "react";

import type {
  ReactNode,
} from "react";

import api from "../services/api";

import {
  ThemeContext,
} from "./ThemeContextValue";



type Props = {
  children: ReactNode;
};



export function ThemeProvider({
  children,
}: Props) {


  const [theme,setTheme] =
    useState("dark");



  useEffect(()=>{

    async function loadTheme(){

      try{

        const response =
          await api.get("/theme");


        setTheme(
          response.data.theme
        );


      }catch(error){

        console.log(error);

      }

    }


    loadTheme();


  },[]);

  useEffect(() => {

  document.documentElement.className = theme;

}, [theme]);




  async function changeTheme(
    newTheme:string
  ){

    setTheme(newTheme);


    try{

      await api.put(
        "/theme",
        {
          theme:newTheme
        }
      );


    }catch(error){

      console.log(error);

    }

  }



  return (

    <ThemeContext.Provider

      value={{
        theme,
        setTheme: changeTheme,
      }}

    >

      {children}

    </ThemeContext.Provider>

  );

}