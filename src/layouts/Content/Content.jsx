import React, { Fragment } from "react";
import Prize from "../../components/Prize/Prize"
import StarterModalBtn from "../../components/StarterModalBtn/StarterModalBtn"


const allPrizes = [
    {
        title:"yoga - pilates",
        content: "- 25 %"
    },
    {
        title:"yoga - pilates",
        content: "- 35 %"
    },
    {
        title:"Préparation mentale",
        content: "Bon d'une valeur de 35 €"
    },
    {
        title:"forfait duo",
        content: "- 40 %"
    },
    {
        title:"Zumba - H.I.I.T",
        content: "- 25 %"
    },
    {
        title:"Zumba - H.I.I.T",
        content: "- 35 %"
    },
    {
        title:"All Inclusive",
        content: "- 100 %"
    },
    {
        title:"KravMaga / MMA",
        content: "- 25 %"
    },
    {
        title:"Coaching personnel",
        content: "- 50 % pour un carnet de 10 séances"
    }
]

const Content = () => {

    const handleClick = ()=>{
        const RandomNumber = ()=>{
            console.log(Math.floor(Math.random() * 9));
        }
        setTimeout(RandomNumber, 1000);
        
    }

    return(
        <div className="my-16 sm:my-20 w-72 mx-auto sm:w-8/12  flex flex-row flex-wrap">
            <StarterModalBtn onClick={handleClick} />
            {allPrizes.map((onePrize, idx)=>{
                return <Prize key={idx} id={idx} title={onePrize.title} content={onePrize.content}  />
            })}
        </div>
    )
}

export default Content;
