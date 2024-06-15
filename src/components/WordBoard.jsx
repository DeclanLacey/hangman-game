import GameWordLetter from "./GameWordLetter"
import "../style-sheets/WordBoard.css"

function WordBoard(props) {

    function renderLetters() {
        let gameWord = props.gameWord
        const letters = gameWord.split("")
        
        const wordLetters = letters.map((letter, index) => {
            return (
                <div key={index} className="word_board_word-outline">
                    <GameWordLetter letter={letter} />
                </div>
            )
        })
        return wordLetters
    }

    // renderLetters()
    

    return (
        <section className="word_board">
            {/* <div className="word_board_word-outline">
                <GameWordLetter letter={"a"}/>
            </div> */}
            {renderLetters()}
            
            
        </section>
    )
}

export default WordBoard