import "../style-sheets/KeyboardLetter.css"

function KeyboardLetter(props) {
    return (
        <button onClick={props.handleLetterClick} aria-label={`button for letter ${props.letter} `} className="keyboard_letter">
            {props.letter}
        </button>
    )
}

export default KeyboardLetter