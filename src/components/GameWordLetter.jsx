import "../style-sheets/GameWordLetter.css"

function GameWordLetter(props) {
    return (
        <div className="game_word_letter">
            {props.letter}
        </div>
    )

}

export default GameWordLetter