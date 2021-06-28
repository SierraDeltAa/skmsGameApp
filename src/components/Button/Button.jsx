import React from "react";
import './Button.css'

export const Button = (props)=>{
    return <button className={`btn ${props.className}`} onClick={props.onClick} >{props.children}</button>
}
