import React, { useState } from "react";
import { MainPageLayout } from "../../layouts/MainPageLayout/MainPageLayout";
import { prizes } from "../../data/prizes";

const MainPage = () => {

    const [isGameStarted, setGameState] = useState(false);
    // const [isChoiceMade, setChoiceState] = useState(false);
    const [allPrizes, setPrizes] = useState([]);
    const [isError, setError] = useState(null)


    const createCookie = (name,value,maxAge=84600)=>{
        document.cookie = `${name}=${value}; path=/; max-age=${maxAge};`;
    }
    const removeCookie = (name)=>{  
    document.cookie = `${name}=; max-age=-1`;
    }

    const getCookie = ()=> {
        let cookie = document.cookie.get({name:"alreadyPlayed"});
        console.log("the cookie is " + cookie);
    }

    const isCookieExists = ()=>{
        if (document.cookie.length != 0 ){
            getCookie()
        return true;
    }
    return false;
    }


    const handleGameStart = () => {
        setGameState(true);
        if(isCookieExists() == false){
            createCookie("alreadyPlayed","true","86400")
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
            return a - b
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
        setTimeout(() => { setPrizes(prizes); }, default_wait_time);
    }


    return <MainPageLayout errorMessage={isError} onGameStarted={handleGameStart} isGameStarted={isGameStarted} allPrizes={allPrizes} />
}

export default MainPage;
