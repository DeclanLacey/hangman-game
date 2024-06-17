import { useState } from 'react'
import MainMenu from './MainMenu'
import InstructionMenu from './InstructionMenu'
import CategoryPickMenu from './CategoryPickMenu'
import MainGamePage from './MainGamePage'
import WinOrLoseModal from './WinOrLoseModal'
import PausedModal from './PausedModal'
import '../style-sheets/App.css'

function App() {

  const [mainMenuOpen, setMainMenuOpen] = useState(true)
  const [instructionMenuOpen, setInstructionMenuOpen] = useState(false)
  const [categoryPickMenuOpen, setCategoryPickMenuOpen] = useState(false)
  const [gamePageOpen, setGamePageOpen] = useState(false)
  const [pausedModalOpen, setPausedModalOpen] = useState(false)
  const [winOrLoseModalOpen, setWinOrLoseModalOpen] = useState(false)
  const [playerHasWon, setPlayerHasWon] = useState(false)
  const [playerHasLost, setPlayerHasLost] = useState(false)
  const [newGame, setNewGame] = useState(false)
  const [categoryChoice, setCategoryChoice] = useState("")
  
  function closePausedModal() {
    setPausedModalOpen(false)
  }

  function openMainMenu() {
    setMainMenuOpen(true)
  }

  function closeGamePage() {
    setGamePageOpen(false)
  }

  function openCategoryPickMenu() {
    setCategoryPickMenuOpen(true)
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
    closeGamePage()
    closePausedModal()
    openCategoryPickMenu()
    closeWinOrLoseModal()
    resetWinAndLoseState()
  }

  function handleQuitBtnClick() {
    closeGamePage()
    closePausedModal()
    closeWinOrLoseModal()
    openMainMenu()
    resetWinAndLoseState()
  }

  return (
    <div className='app'>
      
      {mainMenuOpen 
        ? 
          <MainMenu 
            setMainMenuOpen={setMainMenuOpen} 
            setInstructionMenuOpen={setInstructionMenuOpen} 
            setCategoryPickMenuOpen={setCategoryPickMenuOpen} 
          /> 
        : 
          <></>
      }
      {instructionMenuOpen 
        ? 
          <InstructionMenu 
            setMainMenuOpen={setMainMenuOpen} 
            setInstructionMenuOpen={setInstructionMenuOpen} 
          /> 
        : 
          <></>
      }
      {categoryPickMenuOpen 
        ? 
          <CategoryPickMenu 
            setMainMenuOpen={setMainMenuOpen} 
            setCategoryPickMenuOpen={setCategoryPickMenuOpen} 
            setCategoryChoice={setCategoryChoice} 
            setGamePageOpen={setGamePageOpen} 
          /> 
        : 
          <></>
      }
      {gamePageOpen 
        ? 
          <MainGamePage 
            categoryChoice={categoryChoice} 
            setPausedModalOpen={setPausedModalOpen} 
            setWinOrLoseModalOpen={setWinOrLoseModalOpen} 
            setPlayerHasLost={setPlayerHasLost}
            setPlayerHasWon={setPlayerHasWon}
            setNewGame={setNewGame}
            newGame={newGame}
          /> 
        : 
          <></>
      }
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
