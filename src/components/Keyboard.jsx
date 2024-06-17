import KeyboardLetter from "./KeyboardLetter"
import { getLetters } from "../util/getLetters"
import "../style-sheets/Keyboard.css"

function Keyboard(props) {

    function handleLetterClick(event) {
        if ((props.gameWordLetterArray.includes(event.target.textContent)) === false) {
            props.lowerHealthByOne()
        }
        props.setCurrentChosenLetters(prevState => [...prevState, event.target.textContent])
    }
   
    function renderLetters() {
        const letterElements = getLetters().map((letter, index) => {

            let disabledBtn = false
            let classes = "keyboard_letter"

            function decideBtnAttributes() {
                if (props.currentChosenLetters.includes(letter)) {
                    disabledBtn = true
                    classes = "keyboard_letter chosen_letter"
                }
            }

            decideBtnAttributes()

            return (
                <KeyboardLetter 
                    handleLetterClick={handleLetterClick} 
                    disabledBtn={disabledBtn} 
                    key={index} 
                    letter={letter} 
                    classes={classes} 
                />
            )
        })
    
        return letterElements
    }

    return (
        <section className="keyboard_letters_container">
            {renderLetters()}
        </section>
    )
}

export default Keyboard