import React from "react";
import imgUrl from "../../assets/img/blue-cam.jpg";

const divStyle = {
    backgroundImage:"url(" + imgUrl + ")"
}

const Header = () => {


    return(
        <>
            <div className="w-screen h-12 bg-center sm:h-12 fixed inset-x-0 top-0" style={divStyle}>

            </div>
        </>
    )
}

export default Header;
