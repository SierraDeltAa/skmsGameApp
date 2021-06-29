import React from 'react'
import { ClaimCard } from '../ClaimCard/ClaimCard'


export const Modal = (props) => {

    return (
        <div className="fixed h-screen w-screen bg-gray-900 bg-opacity-50 z-50">
            <div className="flex justify-center items-center h-full">
                <ClaimCard winnedPrize={props.winnedPrize}  />
            </div>
        </div>
    )
}