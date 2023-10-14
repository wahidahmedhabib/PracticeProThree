import React, { useState } from 'react'
import "./SelectedDice.css"
function SelectedDice({ imgNo, diceRoll  }) {


    return (
        <div className='dice_pic'>

            <img src={`/images/dice_${imgNo}.png`}
                onClick={() => { diceRoll() }} alt="" />
            <div className="txt">

                Click On Dice to Roll
            </div>
        </div>
    )
}

export default SelectedDice