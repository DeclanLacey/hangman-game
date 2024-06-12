import { useState } from 'react'
import '../style-sheets/MainMenu.css'
import MainMenu from './MainMenu'

function App() {

  const [mainMenuOpen, setMainMenuOpen] = useState(true)
  const [instructionMenuOpen, setInstructionMenuOpen] = useState(false)

  return (
    <div className='app'>
      {mainMenuOpen ? <MainMenu setMainMenuOpen={setMainMenuOpen} setInstructionMenuOpen={setInstructionMenuOpen} /> : null}
      
    </div>
  )
}

export default App
