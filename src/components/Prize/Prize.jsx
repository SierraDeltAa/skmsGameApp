import React from "react";
import logo from "../../assets/img/logo.jpeg"
import { Button } from "../Button/Button";
import "./Prize.css"

const Prize = (props) => {

    const logoStyle = {
        backgroundImage: "url(" + logo + ")"
    }


    return (
        <div className={props.isClaimed ? "mx-auto bg-blue-50 my-1 flip-card flip-card-claimed shadow-lg" : "mx-auto hidden md:flex bg-blue-50 my-1 flip-card shadow-lg"}>
            <div className={props.isClaimed ? "flip-card-inner flip-card-inner-claimed" : "flip-card-inner"}>
                <div style={logoStyle} className="h-48 w-60 md:h-36 md:w-48 bg-center bg-cover bg-no-repeat flip-card-front">
                </div>
                <div className="flip-card-back h-48 w-60 md:h-36 md:w-48 rounded-sm p-4 flex flex-col justify-center text-center ring-1 ring-green-600">
                    <span className="md:text-sm font-thin tracking-tighter">Vous avez gagné</span>
                    <hr className="border border-gray-600 border-opacity-50 md:my-2" />
                    <span className="md:text-sm font-semibold tracking-tight text-green-600">{props.title}</span>
                    <span className="md:text-sm font-extrabold tracking-tight text-green-600">{props.value}</span>
                    <div className="mx-auto text-center">
                        {props.isClaimed && <Button onClick={props.handleClaimPrize} className="rounded tracking-wide mt-6 md:mt-3 text-xs ring-1 ring-green-600 text-green-600 transition duration-300 hover:bg-green-600 hover:text-white">Réclamer votre prix</Button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prize;
