import React, {useEffect} from "react";
import Prize from "../../components/Prize/Prize";
import { Button } from "../../components/Button/Button";
import logo from "../../assets/img/logoSKMS.png"
import "./Content.css";

const Content = (props) => {

    useEffect(()=>{console.log(props.errorMessage)},[props.errorMessage])

    return (
        <div className="flex items-center justify-center fade-in">
            {props.isGameStarted === false &&
            <div className="flex flex-col items-center w-10/12">
                <img className="w-56" src={logo} alt="" />
                <div className="text-white flex flex-col my-6">
                    <span className="text-4xl ">Bienvenue</span>
                    <span className="ml-0.5">Dans le jeu concours de la SKMS Academy !</span>
                    <span className="ml-0.5">Cliquez sur le bouton pour jouer et repartez avec un cadeau !</span>
                </div>
                    
                    <Button
                        onClick={props.onGameStarted}
                        className={`bg-red-500 text-white w-28`}>
                            Lancer le jeu
                    </Button>
            </div>
            }

            <div className="flex flex-col h-screen justify-center items-center">
                {props.errorMessage === true ? <span className="mt-12">Rejouez demain</span> : <div className="flex flex-wrap mx-auto md:w-10/12 xl:w-5/12">
                                {props.allPrizes.map((prize) => {
                                    return  <div className="fade-in mx-auto">
                                                <Prize handleClaimPrize={props.handleClaimPrize} title={prize.title} value={prize.value} key={prize.id} isClaimed={prize.isClaimed} />
                                            </div>
                                })}
                                </div>
            }
            </div>
        </div>
    )
}

export default Content;
