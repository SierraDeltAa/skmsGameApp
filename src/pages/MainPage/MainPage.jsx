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
        handleRandomChoice();
    }

    const handleRandomChoice = () => {
        const max_percent = 100;
        let all_chances = [];
        prizes.forEach(prize => { all_chances.push(prize.chance); });

        let randomNumber = Math.floor(Math.random() * max_percent);

        for (let index = 0; index < all_chances.length; index++) {
            const chance = all_chances[index];

            if (randomNumber <= chance) {
                prizes[index].isClaimed = true;
                return startGameTimer();
            }
            else {
                randomNumber -= chance;
            }
        }
    }

    const startGameTimer = () => {
        const default_wait_time = 1000;
        setTimeout(() => { setPrizes(prizes); }, default_wait_time);
    }

    return <MainPageLayout onGameStarted={handleGameStart} isGameStarted={isGameStarted} allPrizes={allPrizes} />
}

export default MainPage;
