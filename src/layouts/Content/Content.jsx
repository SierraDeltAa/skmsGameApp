import React, { useEffect, useState } from "react";
import Prize from "../../components/Prize/Prize";
import { Button } from "../../components/Button/Button";
import logo from "../../assets/img/logoSKMS.png";
import GameIcon from './Icons/GameIcon';
import GameboyIcon from './Icons/GameboyIcon';
import ReactCountdownClock from "react-countdown-clock"
import "./Content.module.css";

const Content = (props) => {


  const [countdownComplete, setCountdownComplete] = useState(false);


  const getCountdown = ()=>{
    setCountdownComplete(true);
  }


  return (
    <div className="flex items-center justify-center fade-in">
      {props.isGameStarted === false && (
        <div className="flex flex-col items-center w-10/12">
          <img className="w-32 md:w-48" src={logo} alt="logo_club" />
          <div className="text-white flex flex-col my-6 justify-center text-center">
            <span className="text-lg md:text-2xl tracking-tighter font-bold">
              JEU CONCOURS 100% GAGNANT
            </span>
            <span className="text-lg md:text-2xl font-thin tracking-tighter">
              Remportez des bons d'achats ou des remises jusqu'a 75%.
            </span>
            <span className="text-xs md:text-sm text-gray-400 font-light mt-0.5 md:mt-1">
              * En jouant à ce jeu vous acceptez l'utilisation des cookies
              fonctionnels sur ce site
            </span>
          </div>
          <Button
            onClick={props.onGameStarted}
            className={`bg-red-700 text-white w-24 flex items-center justify-around text-lg rounded-md tracking-wide transition duration-300 hover:bg-red-500`}>
            Jouer <GameIcon /> 
          </Button>
        </div>
      )}
      <div className="flex flex-col h-screen justify-center items-center">
        {props.errorMessage === true ? (
          <div className="text-white flex flex-col text-center">
            <GameboyIcon className="w-32 text-white mx-auto" />
            <span className="text-lg font-bold tracking-tight">Oops...</span>
            <span className="text-lg font-light">Vous avez déjà participé(e) aujourd'hui!</span>
            <span className="text-md font-light">Retentez votre chance <span className="text-green-600">dans trois jours</span>.</span>
          </div>
        ) : props.isCountdown === true &&  (
          <div className="flex flex-wrap mx-auto  justify-center md:w-10/12 xl:w-5/12">
            <div className={countdownComplete === true ? "hidden" : "flex"}>
              <ReactCountdownClock seconds={3}
                      color="#B91C1C"
                      alpha={0.9}
                      size={250}
                      onComplete={getCountdown} />
            </div>
            {countdownComplete === true && (
              props.allPrizes.map((prize) => {
                return (
                  <div className="fade-in mx-auto">
                    <Prize
                      handleClaimPrize={props.handleClaimPrize}
                      title={prize.title}
                      value={prize.value}
                      key={prize.id}
                      isClaimed={prize.isClaimed}
                    />
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
