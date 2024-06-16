import "../style-sheets/GameWordLetter.css"

function GameWordLetter(props) {
    
    return (
        <div  className={props.correctLetter ? "game_word_letter" : "game_word_letter hidden"}>
            {props.letter}
        </div>
    )

}

export default GameWordLetter