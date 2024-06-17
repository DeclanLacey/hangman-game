import { useEffect } from "react"
import "../style-sheets/KeyboardLetter.css"

function KeyboardLetter(props) {

    return (
        <button 
            id="keyboard-key" 
            disabled={props.disabledBtn} 
            onClick={props.handleLetterClick} 
            aria-label={`button for letter ${props.letter} `} 
            className={props.classes}
        >
            {props.letter}
        </button>
    )
}

export default KeyboardLetter