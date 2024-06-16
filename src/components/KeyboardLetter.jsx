import { useEffect } from "react"
import "../style-sheets/KeyboardLetter.css"

function KeyboardLetter(props) {

    return (
        <button id="keyboard-key" disabled={false} onClick={props.handleLetterClick} aria-label={`button for letter ${props.letter} `} className="keyboard_letter">
            {props.letter}
        </button>
    )
}

export default KeyboardLetter