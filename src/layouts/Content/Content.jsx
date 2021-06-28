import React, { useEffect, useState } from "react";
import Prize from "../../components/Prize/Prize";
import { Button } from "../../components/Button/Button";

const Content = (props) => {
    

    return (
        <main className="flex flex-col h-screen justify-center items-center">
            {props.isGameStarted === false &&
            <Button
                onClick={props.onGameStarted}
                className={`bg-blue-600 text-white`}>
                    Lancer le jeu
            </Button>}

            <div className="grid grid-cols-3 gap-2">
                {props.allPrizes.map((prize) => {
                    return (<Prize title={prize.title} value={prize.value} key={prize.id} isClaimed={prize.isClaimed} />)
                })}
            </div>
        </main>
    )
}

export default Content;
