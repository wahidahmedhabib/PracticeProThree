// import { useState } from "react"
import "./Button.css"
export const Button = ({ toggle, text, outline, setresult, resetScor }) => {

    const reScor = () => {
        setresult(0)
    }

    return (
        <button onClick={toggle} className={outline ? "btn_outline" : "btn"}>
            {text}
        </button>
    )
}
