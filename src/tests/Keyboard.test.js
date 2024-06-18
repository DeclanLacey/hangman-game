import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Keyboard from "../components/Keyboard"

test('keyboard renders all 26 letter of alphabet', () => {
    render(
        <Keyboard 
            gameWordLetterArray={[]}
            currentChosenLetters={[]}
            setCurrentChosenLetters={() => {}}
            lowerHealthByOne={() => {}}
        />
    )
    const btnElements = screen.getAllByRole("button")
    expect(btnElements.length).toBe(26)
}) 