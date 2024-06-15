import KeyboardLetter from "./KeyboardLetter"
import "../style-sheets/Keyboard.css"

function Keyboard() {

    function getLetters() {
        const letters = (() => {
            const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
            return caps
          })();
        return letters
    }
    
    function renderLetters() {
        const letterElements = getLetters().map((letter, index) => {
            
            return (
                <KeyboardLetter key={index} letter={letter} />
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