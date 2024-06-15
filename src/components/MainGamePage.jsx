import { useState, useEffect } from "react"
import WordBoard from "./WordBoard"
import Keyboard from "./Keyboard"
import "../style-sheets/MainGamePage.css"

function MainGamePage(props) {

    const [gameWord, setGameWord] = useState("")
    const [availableCategories, setAvailableCategories] = useState(["animal", "country", "food", "plant", "sport"])
    const [currentChosenLetters, setCurrentChosenLetters] = useState([])

    useEffect(() => {
        const abortController = new AbortController();

        async function getGameWord() {
            try {
                let categoryChoice = ""
                availableCategories.includes(props.categoryChoice) ? categoryChoice = props.categoryChoice : () => {throw new Error("invalid category choice")}
                const apiURL = `https://www.wordgamedb.com/api/v1/words/?category=${categoryChoice}`
                let response = await fetch(apiURL)
                let data = await response.json()
                setGameWord(data[getRandomNumberForWord(data.length)].word)
            }catch(error) {
                if (error.name !== "AbortError") {
                    throw new Error("The data request was unsuccessful")
                }else {
                    throw new Error("Error: " + error)
                }
            }
            
        }
        getGameWord()

        return () => abortController.abort()
    }, [])

    function getRandomNumberForWord(max) {
        return Math.floor(Math.random() * max - 2)
    }

    // function checkForCorrectLetters() {
    //     const currentGameWord = gameWord
    //     const gameWordLetterArray = currentGameWord.split("")
    //     if(gameWordLetterArray.includes(currentChosenLetters[currentChosenLetters.length - 1])) {
            
    //     }else {
    //         setCurrentChosenLetters(prevState => prevState.pop())
    //     }
    // }

    // checkForCorrectLetters()


    return (
        <section>
            <header className="game_page_header">
                <div className="game_page_header_left_side">
                    <button alt="menu button" className="burger_menu"> <img className="burger_menu_icon" src="../assets/images/icon-menu.svg" /></button>
                    <h1 className="category_name">{props.categoryChoice}</h1>
                </div>

                <div className="game_page_header_right_side">
                    <div className="health_bar">
                        <div id="health" className="health_bar_level"></div>
                    </div>
                    <img alt="heart icon" className="heart_icon" src="../assets/images/icon-heart.svg" />
                </div>
            </header>

            <WordBoard gameWord={gameWord} currentChosenLetters={currentChosenLetters} />

            <div className="keyboard_container">
                <Keyboard setCurrentChosenLetters={setCurrentChosenLetters}/>
            </div>
            
        </section>
    )
}

export default MainGamePage