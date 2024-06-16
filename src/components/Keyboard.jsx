import KeyboardLetter from "./KeyboardLetter"
import "../style-sheets/Keyboard.css"

function Keyboard(props) {

    function getLetters() {
        const letters = (() => {
            const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
            return caps
          })();
        return letters
    }
    
    function handleLetterClick(event) {
        
        if ((props.gameWordLetterArray.includes(event.target.textContent)) === false) {
            props.lowerHealthByOne()
        }
        props.setCurrentChosenLetters(prevState => [...prevState, event.target.textContent])
        event.target.disabled = true
        event.target.classList.add("chosen_letter")
        
    }

    

   

    function renderLetters() {
        const letterElements = getLetters().map((letter, index) => {
            
            return (
                <KeyboardLetter handleLetterClick={handleLetterClick} key={index} letter={letter} />
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