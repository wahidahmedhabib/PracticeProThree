import './main.css'
import { Button } from '../Button/Button'
import { useState } from 'react'
export const Main = ({ toggle }) => {
    return (
        <div className="main_sec">
            <div className="img">
                <img src="/images/dices.png" />
            </div>
            <div className="text">
                <h1>DICE GAME</h1>
                <div >
                    <Button toggle={toggle} text="Start Game" outline={false} />
                </div>
            </div>
        </div>
    )
}
