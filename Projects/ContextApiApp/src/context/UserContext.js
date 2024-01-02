import React, { createContext, useContext } from "react";


export const userContext=createContext({
	user:'',setuser:()=>{}
});

export const userContextProvider=userContext.Provider;

export default function userCont(){
	return useContext(userContextProvider)
}