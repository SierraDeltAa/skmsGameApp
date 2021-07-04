import React, {useState} from 'react'
import Mailto from "react-mailto.js"
import { Button } from '../Button/Button';
import '../Button/Button.css'


export const ClaimCard = (props) => {

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleChange = (e) =>{
        const newValue = e.target.value;

        if(e.target.name === "email"){
            setEmail(newValue)
            console.log(email);
        }
        else if (e.target.name === "phone"){
            setPhone(newValue)
            console.log(phone);

        }
    }

    return (
        <div className="w-80 flex flex-col bg-blue-50 p-5 relative rounded-md">
            <div className="pt-4 flex flex-col w-4/5 mx-auto text-center justify-center">
                <span className="text-blue-900 font-semibold text-sm md:text-md tracking-wide">{props.winnedPrize.value} pour {props.winnedPrize.title}</span>
                <span className="text-blue-800 text-xs md:text-sm text-center my-4 font-light tracking-tighter">Pour bénéficier de votre prix merci de renseigner les champs suivants :</span>
                <div className="my-2">
                    <label className="text-gray-600 text-sm flex flex-col text-left font-light tracking-tight mb-2">
                        Votre e-mail
                        <input name="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className="outline-none ring-2 placeholder:text-blue-600 rounded-sm px-1 py-0.5 my-1" type="email" placeholder="mon@mail.com" onChange={handleChange} />
                    </label>
                    <label className="text-gray-800 text-sm flex flex-col text-left font-light tracking-tight">
                        Votre numéro de téléphone
                        <input name="phone" pattern="^\+?\s*(\d+\s?){8,}$" className="outline-none ring-2 rounded-sm px-1 py-0.5 my-1" type="tel" placeholder="06 12 34 56 78" onChange={handleChange} />
                    </label>
                </div>
                
                <div className="flex justify-around items-center mt-2">
                <Button className="text-gray-800 text-sm" onClick={props.closeModal}>Fermer</Button>

                <Mailto secure={true} to="denil.merad@gmail.com" subject="J'ai gagné un prix !" body={"J'ai gagné " + props.winnedPrize.value + " ! Recontactez moi au " + phone + email + " pour me distribuer mon prix !"}>
                    <Button className="text-blue-600 ring-1 ring-blue-600 rounded text-sm">Réclamer</Button>
                </Mailto>
                </div>

            </div>

            
        </div>
    )
}