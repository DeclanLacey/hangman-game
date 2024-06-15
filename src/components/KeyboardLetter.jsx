import "../style-sheets/KeyboardLetter.css"

function KeyboardLetter(props) {
    return (
        <button aria-label={`button for letter ${props.letter} `} className="keyboard_letter">
            {props.letter}
        </button>
    )
}

export default KeyboardLetter