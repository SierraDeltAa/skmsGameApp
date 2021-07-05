import React, { useState } from "react";
import { MainPageLayout } from "../../layouts/MainPageLayout/MainPageLayout";
import { prizes } from "../../data/prizes";

const MainPage = () => {

    const [isGameStarted, setGameState] = useState(false);
    const [allPrizes, setPrizes] = useState([]);
    const [isError, setError] = useState(null);
    const [countdownStarted, setCountdown] = useState(null)

    const createCookie = (name,value,maxAge=259200)=>{
        document.cookie = `${name}=${value}; path=/; max-age=${maxAge};`;
    }

    const isCookieExists = ()=>{
        if (document.cookie.length != 0 ){
            return true;
        }
    return false;
    }


    const handleGameStart = () => {
        setGameState(true);
        if(isCookieExists() == false){
            createCookie("alreadyPlayed","true")
            setError(false);
            handleRandomChoice();
        }else{
            setError(true)
        }
    }

    const handleRandomChoice = () => {
        const max_percent = 100;
        let all_chances = [];
        prizes.forEach(prize => { all_chances.push(prize.chance); });

        const orderNumbers = (a, b)=>{
            return b - a
        }
        all_chances = all_chances.sort(orderNumbers);

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
        const default_wait_time = 3000;
        setCountdown(true);
        setTimeout(() => { setPrizes(prizes); endGameTimer }, default_wait_time);
    }



    return <MainPageLayout isCountdown={countdownStarted} errorMessage={isError} onGameStarted={handleGameStart} isGameStarted={isGameStarted} allPrizes={allPrizes} />
}

export default MainPage;
