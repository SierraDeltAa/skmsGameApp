import React, { useState } from 'react'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Modal } from '../../components/Modal/Modal'

export const MainPageLayout = (props) => {

    const [isModalVisible, setModalState] = useState(false);
    const [winnedPrize, setWinnedPrize] = useState({});

    const handleClaimPrize = () => {
        setWinnedPrize(getWinnedPrize());
        setModalState(true);
    }

    const getWinnedPrize = () => {
        for (let index = 0; index < props.allPrizes.length; index++) {
            const prize = props.allPrizes[index];
            if (prize.isClaimed != false) {
                return prize;
            }
        }
    }
    return (
        <>
            <Header />
            {isModalVisible && <Modal winnedPrize={winnedPrize} />}
            <Content
                onGameStarted={props.onGameStarted}
                isGameStarted={props.isGameStarted}
                allPrizes={props.allPrizes}
                handleClaimPrize={handleClaimPrize} />
            <Footer />
        </>
    )
}