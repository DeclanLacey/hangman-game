import { useState } from 'react'
import MainMenu from './MainMenu'
import InstructionMenu from './InstructionMenu'
import CategoryPickMenu from './CategoryPickMenu'
import '../style-sheets/App.css'

function App() {

  const [mainMenuOpen, setMainMenuOpen] = useState(false)
  const [instructionMenuOpen, setInstructionMenuOpen] = useState(true)
  const [categoryPickMenuOpen, setCategoryPickMenuOpen] = useState(true)

  return (
    <div className='app'>
      {mainMenuOpen ? <MainMenu setMainMenuOpen={setMainMenuOpen} setInstructionMenuOpen={setInstructionMenuOpen} /> : <></>}
      {instructionMenuOpen ? <InstructionMenu setMainMenuOpen={setMainMenuOpen} setInstructionMenuOpen={setInstructionMenuOpen} /> : <></>}
      {categoryPickMenuOpen ? <CategoryPickMenu /> : <></>}
    </div>
  )
}

export default App
