import { useState } from 'react'
import MainMenu from './MainMenu'
import InstructionMenu from './InstructionMenu'
import CategoryPickMenu from './CategoryPickMenu'
import MainGamePage from './MainGamePage'
import WinOrLoseModal from './WinOrLoseModal'
import PausedModal from './PausedModal'
import "../styles/App.css"
import { Routes, Route } from 'react-router-dom'

function App() {

  const [pausedModalOpen, setPausedModalOpen] = useState(false)
  const [winOrLoseModalOpen, setWinOrLoseModalOpen] = useState(false)
  const [playerHasWon, setPlayerHasWon] = useState(false)
  const [playerHasLost, setPlayerHasLost] = useState(false)
  const [newGame, setNewGame] = useState(false)
  const [categoryChoice, setCategoryChoice] = useState("")
  
  function closePausedModal() {
    setPausedModalOpen(false)
  }

  function closeWinOrLoseModal() {
    setWinOrLoseModalOpen(false)
  }

  function resetWinAndLoseState() {
    setPlayerHasLost(false)
    setPlayerHasWon(false)
  }

  function handleContinueBtnClick() {
    closePausedModal()
  }

  function handlePlayAgainBtnClick() {
    closeWinOrLoseModal()
    setPlayerHasLost(false)
    setPlayerHasWon(false)
  }

  function handleNewCategoryBtnClick() {
    closePausedModal()
    closeWinOrLoseModal()
    resetWinAndLoseState()
  }

  function handleQuitBtnClick() {
    closePausedModal()
    closeWinOrLoseModal()
    resetWinAndLoseState()
  }

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/how-to-play' element={<InstructionMenu />} />
        <Route path='/category' element={
            <CategoryPickMenu 
              setCategoryChoice={setCategoryChoice} 
            />
          } 
        />
        <Route path='/game' element={
            <MainGamePage 
              setCategoryChoice={setCategoryChoice}
              categoryChoice={categoryChoice} 
              setPausedModalOpen={setPausedModalOpen} 
              setWinOrLoseModalOpen={setWinOrLoseModalOpen} 
              setPlayerHasLost={setPlayerHasLost}
              setPlayerHasWon={setPlayerHasWon}
              setNewGame={setNewGame}
              newGame={newGame}
            />
          } 
        />
      </Routes>
    
      {pausedModalOpen 
        ? 
          <PausedModal 
            handleContinueBtnClick={handleContinueBtnClick} 
            handleNewCategoryBtnClick={handleNewCategoryBtnClick} 
            handleQuitBtnClick={handleQuitBtnClick} 
          /> 
        : 
          <></>
      }
      {winOrLoseModalOpen 
        ? 
          <WinOrLoseModal 
            playerHasLost={playerHasLost} 
            playerHasWon={playerHasWon} 
            handlePlayAgainBtnClick={handlePlayAgainBtnClick} 
            handleNewCategoryBtnClick={handleNewCategoryBtnClick} 
            handleQuitBtnClick={handleQuitBtnClick} 
          /> 
        : 
          <></>
      }
    </div>
  )
}

export default App
