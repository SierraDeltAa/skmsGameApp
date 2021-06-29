import React from "react";
import imgUrl from "../../assets/img/darkblue-cam.jpg";
import logo from "../../assets/img/logo.jpeg"
import { Button } from "../Button/Button";
const Prize = (props) => {

    const divStyle = {
        backgroundImage: "url(" + imgUrl + ")"
    }
    const logoStyle = {
        backgroundImage: "url(" + logo + ")"
    }
    return (
        <div className="mx-auto bg-blue-50 my-1 shadow-lg">
            <div style={logoStyle} className="h-48 w-64  bg-center bg-cover bg-no-repeat">
            </div>
            <div className="mx-auto">
                <div className="text-center">
                    <span>{props.title}</span>
                </div>
                {/* <hr className="border border-gray-400 w-36 sm:w-48 mx-auto my-1" /> */}
                <div>
                    <span>{props.value}</span>
                    {props.isClaimed && <Button onClick={props.handleClaimPrize} className="bg-green-600 text-white rounded tracking-wide">Réclamer</Button>}
                </div>
            </div>
        </div>
    )
}

export default Prize;
