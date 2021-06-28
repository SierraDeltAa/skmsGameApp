import React, { useState } from "react";
import Header from "../../layouts/Header/Header";
import Content from "../../layouts/Content/Content";
import Footer from "../../layouts/Footer/Footer";
import { MainPageLayout } from "../../layouts/MainPageLayout/MainPageLayout";
import { prizes } from "../../data/prizes";

const MainPage = () => {

    const [isGameStarted, setGameState] = useState(false);
    const [isChoiceMade, setChoiceState] = useState(false);
    const [allPrizes, setPrizes] = useState([]);

    const handleGameStart = () => {
        setGameState(true);
        startGameTimer();
        handleRandom();
        console.log(`Global game state switching to ${isGameStarted}`)
    }

    const handleRandom = () => {
        let weight_arr = [];
        prizes.forEach(prize => { weight_arr.push(prize.chance); });
        let randomNumber = Math.floor(Math.random() * 100);

        for (let index = 0; index < weight_arr.length; index++) {
            const weight_prize = weight_arr[index];

            if (randomNumber <= weight_prize) {
                prizes[index].isClaimed = true;
                console.log(prizes[index]);
                return startGameTimer();
            } else {
                randomNumber -= weight_prize;
            }
        }
    }

    const startGameTimer = () => {
        const default_wait_time = 1000;
        setTimeout(() => { setPrizes(prizes); alert("Timeout") }, default_wait_time);
    }

    return <MainPageLayout onGameStarted={handleGameStart} isGameStarted={isGameStarted} allPrizes={allPrizes} />
}

export default MainPage;
