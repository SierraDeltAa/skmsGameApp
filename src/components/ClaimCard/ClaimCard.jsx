import React from 'react'
import { Button } from '../Button/Button';
import './ClaimCard.css'

export const ClaimCard = (props) => {

    return (
        <div className="w-48 h-48 flex flex-col bg-white p-4 relative">
            <Button className="absolute top-0 right-0 bg-red-700 text-white">+</Button>
            <span className="text-gray-900 font-bold">Vous avez gagné {props.winnedPrize.title}</span>
            <input type="text" placeholder="email@email.com" />

        </div>
    )
}