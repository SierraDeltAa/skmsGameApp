import React from "react";
import './Button.css'

export const Button = (props)=>{
    return <button type={props.type} className={`btn ${props.className}`} onClick={props.onClick} >{props.children}</button>
}
