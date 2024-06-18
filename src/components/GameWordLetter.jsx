import "../styles/GameWordLetter.css"

function GameWordLetter(props) {
    const {correctLetter, letter} = props
    return (
        <div className={correctLetter ? "game_word_letter" : "game_word_letter hidden"}>
            {letter}
        </div>
    )

}

export default GameWordLetter