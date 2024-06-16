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
  const [categoryChoice, setCategoryChoice] = useState("")

  return (
    <div className='app'>
      
      {mainMenuOpen ? <MainMenu setMainMenuOpen={setMainMenuOpen} setInstructionMenuOpen={setInstructionMenuOpen} setCategoryPickMenuOpen={setCategoryPickMenuOpen} /> : <></>}
      {instructionMenuOpen ? <InstructionMenu setMainMenuOpen={setMainMenuOpen} setInstructionMenuOpen={setInstructionMenuOpen} /> : <></>}
      {categoryPickMenuOpen ? <CategoryPickMenu setMainMenuOpen={setMainMenuOpen} setCategoryPickMenuOpen={setCategoryPickMenuOpen} setCategoryChoice={setCategoryChoice} setGamePageOpen={setGamePageOpen} /> : <></>}
      {gamePageOpen ? <MainGamePage categoryChoice={categoryChoice} setPausedModalOpen={setPausedModalOpen} setWinOrLoseModalOpen={setWinOrLoseModalOpen} /> : <></>}
      {pausedModalOpen ? <PausedModal setCategoryPickMenuOpen={setCategoryPickMenuOpen} setPausedModalOpen={setPausedModalOpen} setGamePageOpen={setGamePageOpen} setMainMenuOpen={setMainMenuOpen} /> : <></>}
      {winOrLoseModalOpen ? <WinOrLoseModal /> : <></>}
    </div>
  )
}

export default App
