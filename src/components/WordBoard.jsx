import GameWordLetter from "./GameWordLetter"
import "../style-sheets/WordBoard.css"

function WordBoard(props) {

    
    
    
    function renderLetters() {
        let gameWord = props.gameWord
        const letters = gameWord.split("")
        
        const wordLetters = letters.map((letter, index) => {
            function checkForChosenLetter() {
                if(props.currentChosenLetters.includes(letter)) {
                    return true
                }else {
                    return false
                }
            }
            return (
                <div key={index} className="word_board_word-outline">
                    <GameWordLetter chosenLetter={checkForChosenLetter()} letter={letter} />
                </div>
            )
        })
        return wordLetters
    }

    return (
        <section className="word_board">
            {renderLetters()}
        </section>
    )
}

export default WordBoard