import React from "react";
import camBgUrl from "../../assets/img/blue-cam.jpg";
import titleCamUrl from "../../assets/img/darkblue-cam.jpg";
import titleUrl from "../../assets/img/title.png"

const headerBg = {
    backgroundImage:"url(" + camBgUrl + ")"
}

const titleBg = {
    backgroundImage:"url(" + titleCamUrl + ")"

}


const Header = () => {


    return(
        <>
            <div className="w-screen h-12 bg-center sm:h-12 fixed inset-x-0 top-0 z-40" style={headerBg}>
                    <img className="mt-2.5 ml-1 w-64" src={titleUrl} alt="" />
            </div>
        </>
    )
}

export default Header;
