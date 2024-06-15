import "../style-sheets/GameWordLetter.css"

function GameWordLetter(props) {
    return (
        <div className="game_word_letter hidden">
            {props.letter}
        </div>
    )

}

export default GameWordLetter