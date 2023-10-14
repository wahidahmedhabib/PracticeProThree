// import React from 'react'
// impo
import { useState } from 'react'
import './SelectNum.css'
function SelectNum({ selectNum, setSelectNum, error, setterror }) {

    const num = [1, 2, 3, 4, 5, 6]
    const selecter = (val) => {
        setSelectNum(val)
        setterror()
    }
    return (
        <div className='boxes'>
            <div  className='error'>
                {error}
            </div>
            {
                num.map((val, ind) => {
                    return (

                        <div
                            key={ind}
                            onClick={() => selecter(val, ind)}
                            className={selectNum == val ? "box" : " outline "}
                        >
                            {val}
                        </div>
                    )
                })
            }
            <div className="textNum"  >Select Nummber</div>
        </div>

    )
}

export default SelectNum