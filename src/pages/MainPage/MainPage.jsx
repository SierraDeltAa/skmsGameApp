import React, { useState } from "react";
import Header from "../../layouts/Header/Header"
import Content from "../../layouts/Content/Content"
import Footer from "../../layouts/Footer/Footer"
import { MainPageLayout } from "../../layouts/MainPageLayout/MainPageLayout";


const MainPage = () => {

    const [isGameStarted, setGameState] = useState(false);

    const handleGameStart = () => {
        setGameState(true);
        console.log(`Global state switching to ${isGameStarted}`)
        startGameTimer();
    }

    const startGameTimer = ()=>{
        setTimeout(()=>{alert("Timeout")},3000);
    }

    return <MainPageLayout onGameStarted={handleGameStart} isGameStarted={isGameStarted} />
}

export default MainPage;
