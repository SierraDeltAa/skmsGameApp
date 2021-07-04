import React, {useState} from 'react'
import { Button } from '../Button/Button';
import emailjs from 'emailjs-com';
import '../Button/Button.css'
import thumbPic from "../../assets/img/thumbs.png"

export const ClaimCard = (props) => {

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isGameFinished, setGameFinished] = useState(false)



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
        else if (e.target.name === "firstName"){
            setFirstName(newValue)
            console.log(firstName);
        }
        else if (e.target.name === "lastName"){
            setLastName(newValue)
            console.log(lastName);
        }
    }

    function sendEmail(e){
        e.preventDefault();    
        emailjs.sendForm('service_qpyqq0o', 'template_10113am', e.target, 'user_sSvmXMFiLDJ1nScL2gVpb')
        .then((result) => {
            console.log(result.text);
            setGameFinished(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className=" w-72 md:w-80 flex flex-col bg-blue-50 p-5 relative rounded-md">
            <div className="pt-4 flex flex-col  md:w-4/5 mx-auto text-center justify-center">
                {isGameFinished === true ? (
                    <div className="flex flex-col">
                        <img className="w-32 mx-auto mb-4" src={thumbPic}  />
                        <span className="text-blue-900 font-semibold text-sm md:text-md">Merci pour votre participation !</span>
                        <span className="text-blue-800 text-xs md:text-sm text-center my-4 tracking-tighter">Un mail a été envoyé auprès de la SKMS Academy, qui vous contactera très bientôt, afin de convenir d'un rendez-vous !</span>
                    </div>
                ) : (
                    <div>
                        <div className="flex flex-col">
                            <span className="text-blue-900 font-semibold text-sm md:text-md tracking-wide">{props.winnedPrize.value} pour {props.winnedPrize.title}</span>
                            <span className="text-blue-800 text-xs md:text-sm text-center my-4 font-light tracking-tighter">Pour bénéficier de votre prix merci de renseigner les champs suivants :</span>
                        </div>
                        <form onSubmit={sendEmail}>
                            <div className="my-2">
                                <label className="text-gray-600 text-sm flex flex-col text-left font-light tracking-tight my-1">
                                    Votre prénom
                                    <input name="firstName" pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" className="outline-none border-2 border-blue-300 placeholder:text-blue-600 rounded-sm px-1 py-0.5 my-1 transition duration-300 hover:border-blue-500 focus:border-blue-500" type="text" placeholder="Jean" onChange={handleChange} />
                                </label>
                                <label className="text-gray-600 text-sm flex flex-col text-left font-light tracking-tight my-1">
                                    Votre nom 
                                    <input name="lastName" pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" className="outline-none border-2 border-blue-300 placeholder:text-blue-600 rounded-sm px-1 py-0.5 my-1 transition duration-300 hover:border-blue-500 focus:border-blue-500" type="text" placeholder="Dupont" onChange={handleChange} />
                                </label>
                                <label className="text-gray-600 text-sm flex flex-col text-left font-light tracking-tight my-1">
                                    Votre e-mail
                                    <input name="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" className="outline-none border-2 border-blue-300 placeholder:text-blue-600 rounded-sm px-1 py-0.5 my-1 transition duration-300 hover:border-blue-500 focus:border-blue-500" type="email" placeholder="mon@mail.com" onChange={handleChange} required/>
                                </label>
                                <label className="text-gray-800 text-sm flex flex-col text-left font-light tracking-tight my-1">
                                    Votre numéro de téléphone
                                    <input name="phone" pattern="^\+?\s*(\d+\s?){8,}$" className="outline-none border-2 border-blue-300 rounded-sm px-1 py-0.5 my-1 transition duration-300 hover:border-blue-500 focus:border-blue-500" type="tel" placeholder="06 12 34 56 78" onChange={handleChange} required/>
                                </label>
                                <input name="prizeValue" type="text" className="hidden" value={props.winnedPrize.value} />
                                <input name="prizeTitle" type="text" className="hidden" value={props.winnedPrize.title} />
                            </div>
                            
                            <div className="flex justify-around items-center mt-2">
                                <Button className="text-gray-800 text-sm transition duration-300 hover:text-red-700" onClick={props.closeModal}>Fermer</Button>
                                <Button type="submit" className="text-blue-600 ring-1 ring-blue-600 rounded text-sm transition duration-300 hover:bg-blue-500 hover:text-white">Réclamer</Button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}