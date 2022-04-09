import React, { useContext,useState} from "react";
import "../../styles/home.css";
import {Context} from "../store/appContext.js"
export const Home = () => {
	const { store , action}=useContext(Context)
	const{item,setItem}=useState("")
	
	return(
		
	)
}
