import { useState,useEffect } from "react";


import React from 'react'


function useCurrency(Currency) {
	const [data,setData] = useState([]);
	useEffect(() => {
		fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${Currency}.json`).
		then((res) => {return res.json()}).then((res) => {
			setData(res[Currency]);
		});
	},[Currency])
  return data
}

export default useCurrency