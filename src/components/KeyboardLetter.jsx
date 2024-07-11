import "../styles/KeyboardLetter.css"

function KeyboardLetter(props) {

    const {disabledBtn, handleLetterClick, classes, letter} = props

    return (
        <button 
            id="keyboard-key" 
            disabled={disabledBtn} 
            onClick={handleLetterClick} 
            alt={`button for letter ${letter} `} 
            className={classes}
        >
            {letter}
        </button>
    )
}

export default KeyboardLetter