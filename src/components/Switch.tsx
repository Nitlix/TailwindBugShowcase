"use client";

import { ThemeContext } from "@/themes/BodyThemeProvider";
import { useContext } from "react"

export default function(){
    const {
        setTheme,
        theme
    } = useContext(ThemeContext);

    return <button onClick={()=>{
        setTheme(theme == "light" ? "dark" : "light")
    }}> 
        Toggle theme (now: {theme})
    </button>
}