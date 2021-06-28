import React from 'react'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'


export const MainPageLayout = (props) => {
    return (
        <>
            <Header />
            <Content 
            onGameStarted={props.onGameStarted} 
            isGameStarted={props.isGameStarted} 
            allPrizes={props.allPrizes}/>
            <Footer />
        </>
    )
}