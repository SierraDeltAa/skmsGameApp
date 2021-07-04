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
                <div className="flip-card-back h-48 w-60 md:h-36 md:w-48">
                    <div className="text-center text-xl my-2">
                        <span>{props.title}</span>
                    </div>
                    <div className="text-center mt-4">
                        <span>{props.value}</span>
                    </div>
                    <div className="mx-auto text-center">
                        {props.isClaimed && <Button onClick={props.handleClaimPrize} className="bg-green-600 text-white rounded tracking-wide transition duration-300 hover:bg-green-500 mt-6 md:mt-4 text-xs shadow-lg ">Réclamez votre prix</Button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prize;
