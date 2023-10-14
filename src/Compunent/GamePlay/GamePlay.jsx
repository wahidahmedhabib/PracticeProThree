import { useEffect, useState } from 'react'


import { Score } from "../Score/Score"
import SelectNum from "../Select/SelectNum"
import SelectedDice from "../SelectedDice/SelectedDice"
import { Button } from "../Button/Button"
import Rules from '../Rules/Rules'

import "./GamePlay.css"
export const GamePlay = () => {

    const [imgNo, setimgNo] = useState(1)
    const [selectNum, setSelectNum] = useState()
    const [result, setresult] = useState(0)
    const [error, setterror] = useState('')
    const [showRules, setShowRules] = useState(false)

    const diceRoll = () => {
        if (!selectNum) {
            console.log(selectNum)
            setterror(' please select your Dersire NumBer ')
            return
        }
        const randomNum = Math.ceil(Math.random() * 6)
        setimgNo((pre) => randomNum)
        if (randomNum == selectNum) {
            setresult(result + selectNum)
        } else {
            if (result > 0) {
                setresult(result - 1)
            } else {
                setresult(result)
            }
        }
        setSelectNum()  //,,,,,,,,,,,,,,,,,,,,,
        // }
        console.log("selectnum--->>>>>>", selectNum)
    }
    const toggle = () => {
        console.log('toggle')
        setresult(0)
    }
    const showrules = () => {
        showRules ? setShowRules(false) : setShowRules(true)
    }

    return (
        <>
            <div className="header">
                <Score
                    result={result} />
                <SelectNum
                    error={error}
                    setterror={setterror}
                    selectNum={selectNum}
                    setSelectNum={setSelectNum} />
            </div>
            <div className="dic_Area">

                <SelectedDice
                    imgNo={imgNo}
                    diceRoll={diceRoll}
                />
                <Button
                    outline={true}
                    text="Reset Score"
                    toggle={toggle}
                />
                <Button
                    toggle={() => showrules()}
                    outline={false}
                    text={showRules ? "Hide Rules" : 'Show Rules'} />
                {showRules ? <Rules /> : ""}
            </div>
        </>

    )
}
