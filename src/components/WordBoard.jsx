import GameWordLetter from "./GameWordLetter"
import "../styles/WordBoard.css"

function WordBoard(props) {

    const {gameWord, currentChosenLetters} = props

    function renderLetters() {
        let word = gameWord
        const letters = word.split("")
        
        const wordLetters = letters.map((letter, index) => {
            function checkForCorrectLetter() {
                if(currentChosenLetters.includes(letter)) {
                    return true
                }else {
                    return false
                }
            }
            return (
                <div key={index} className="word_board_word-outline">
                    <GameWordLetter correctLetter={checkForCorrectLetter()} letter={letter} />
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