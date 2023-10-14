// import React from 'react'
import './score.css'
export const Score = ({ result }) => {
  // console.log(result)
  return (
    <div>
      <div className="score">
        <h1>{result }</h1>
        <div className="total_score">Total Score</div>
      </div>
    </div>
  )
}
