import { useState } from 'react'
import '../style-sheets/MainMenu.css'
import MainMenu from './MainMenu'
import InstructionMenu from './InstructionMenu'

function App() {

  const [mainMenuOpen, setMainMenuOpen] = useState(false)
  const [instructionMenuOpen, setInstructionMenuOpen] = useState(true)

  return (
    <div className='app'>
      {mainMenuOpen ? <MainMenu setMainMenuOpen={setMainMenuOpen} setInstructionMenuOpen={setInstructionMenuOpen} /> : <></>}
      {instructionMenuOpen ? <InstructionMenu setMainMenuOpen={setMainMenuOpen} setInstructionMenuOpen={setInstructionMenuOpen} /> : <></>}
    </div>
  )
}

export default App
