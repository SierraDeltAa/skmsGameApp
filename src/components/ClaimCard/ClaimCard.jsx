import React, {useState} from 'react'
import Mailto from "react-mailto.js"
import { Button } from '../Button/Button';
import './ClaimCard.css'
import '../Button/Button.css'


export const ClaimCard = (props) => {

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleChange = (e) =>{
        if(e.target.type === "email"){
            const value = e.target.value
            setEmail(value)
            console.log(email);

        }
        else{
            const value = e.target.value
            setPhone(value)
            console.log(phone);

        }
    }

    return (
        <div className="w-80 flex flex-col bg-blue-100 p-5 relative rounded-tr">
            <Button className="absolute top-0 right-0 transition duration-300 hover:bg-red-600 bg-red-700 text-white rounded-tr" onClick={props.closeModal}>x</Button>
            <span className="text-gray-900 font-bold mt-2">Vous avez gagné {props.winnedPrize.value} dans la discipline : {props.winnedPrize.title} !</span>
            <span className="text-sm text-center my-4">Renseignez votre mail et numéro de téléphone pour vous faire contacter !</span>
            <input className="outline-none border-2 border-gray-300 transition duration-300 hover:border-gray-500 focus:border-gray-500 rounded px-1 py-0.5 my-1" type="email" placeholder="Votre mail" onChange={handleChange} />
            <input className="outline-none border-2 border-gray-300 transition duration-300 hover:border-gray-500 focus:border-gray-500 rounded px-1 py-0.5 my-1" type="text" placeholder="Votre numéro de téléphone" onChange={handleChange} />
            <div className="mx-auto my-4">
                <Mailto secure={true} to="denil.merad@gmail.com" subject="J'ai gagné un prix !" body={"J'ai gagné " + props.winnedPrize.value + " ! Recontactez moi au " + phone + email + " pour me distribuer mon prix !"}><Button className="bg-green-600 text-white rounded transition duration-300 hover:bg-green-500 shadow-lg">Valider</Button></Mailto>
            </div>
            
        </div>
    )
}