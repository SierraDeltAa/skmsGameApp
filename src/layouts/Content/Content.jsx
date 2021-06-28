import React from "react";
import Prize from "../../components/Prize/Prize"
import { Button } from "../../components/Button/Button";

const allPrizes = [
    {
        title: "yoga - pilates",
        content: "- 25 %"
    },
    {
        title: "yoga - pilates",
        content: "- 35 %"
    },
    {
        title: "Préparation mentale",
        content: "Bon d'une valeur de 35 €"
    },
    {
        title: "forfait duo",
        content: "- 40 %"
    },
    {
        title: "Zumba - H.I.I.T",
        content: "- 25 %"
    },
    {
        title: "Zumba - H.I.I.T",
        content: "- 35 %"
    },
    {
        title: "All Inclusive",
        content: "- 100 %"
    },
    {
        title: "KravMaga / MMA",
        content: "- 25 %"
    },
    {
        title: "Coaching personnel",
        content: "- 50 % pour un carnet de 10 séances"
    }
]

const Content = (props) => {


    return (
        <main className="flex flex-col h-screen justify-center items-center">
            {props.isGameStarted === false && 
            <Button
                onClick={props.onGameStarted}
                className={`bg-blue-600 text-white`}>
                Lancer le jeu
            </Button>}
        </main>
    )
}

export default Content;
