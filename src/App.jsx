import './App.css'
import { Main } from './Compunent/MainPage/Main'
import { GamePlay } from './Compunent/GamePlay/GamePlay'
import { useState } from 'react'

function App() {
  const [gameplay, setgameplay] = useState(true)

  const toggle = () => {
    console.log(gameplay)
    setgameplay(false)
  }
  return (

    <>

      {
        gameplay ?
          <Main toggle={toggle} />
          :
          <GamePlay />
      }
    </>
  )
}


export default App
