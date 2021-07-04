import React from 'react'
import { ClaimCard } from '../ClaimCard/ClaimCard'
import "./Modal.css"


export const Modal = (props) => {

    return (
        <div className="fixed h-screen w-screen bg-gray-900 transition duration-500 ease-in-out bg-opacity-50 z-50 fade-in">
            <div className="flex justify-center items-center h-full">
                <ClaimCard winnedPrize={props.winnedPrize} closeModal={props.closeModal} />
            </div>
        </div>
    )
}