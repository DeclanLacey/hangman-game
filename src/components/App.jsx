import { useState } from 'react'
import MainMenu from './MainMenu'
import InstructionMenu from './InstructionMenu'
import CategoryPickMenu from './CategoryPickMenu'
import '../style-sheets/App.css'

function App() {

  const [mainMenuOpen, setMainMenuOpen] = useState(true)
  const [instructionMenuOpen, setInstructionMenuOpen] = useState(false)
  const [categoryPickMenuOpen, setCategoryPickMenuOpen] = useState(false)
  const [categoryChoice, setCategoryChoice] = useState("")

  return (
    <div className='app'>
      {mainMenuOpen ? <MainMenu setMainMenuOpen={setMainMenuOpen} setInstructionMenuOpen={setInstructionMenuOpen} setCategoryPickMenuOpen={setCategoryPickMenuOpen} /> : <></>}
      {instructionMenuOpen ? <InstructionMenu setMainMenuOpen={setMainMenuOpen} setInstructionMenuOpen={setInstructionMenuOpen} /> : <></>}
      {categoryPickMenuOpen ? <CategoryPickMenu setMainMenuOpen={setMainMenuOpen} setCategoryPickMenuOpen={setCategoryPickMenuOpen} setCategoryChoice={setCategoryChoice} /> : <></>}
    </div>
  )
}

export default App
