import "../style-sheets/GameWordLetter.css"

function GameWordLetter(props) {

    // console.log(props.chosenLetter)
    
    return (
        <div  className={props.chosenLetter ? "game_word_letter" : "game_word_letter hidden"}>
            {props.letter}
        </div>
    )

}

export default GameWordLetter