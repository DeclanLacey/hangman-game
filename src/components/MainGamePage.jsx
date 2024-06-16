import { useState, useEffect } from "react"
import WordBoard from "./WordBoard"
import Keyboard from "./Keyboard"
import "../style-sheets/MainGamePage.css"

const TOTALHEALTH = 8
let health = TOTALHEALTH

function MainGamePage(props) {

    const [gameWord, setGameWord] = useState("")
    const [gameWordLetterArray, setGameWordLetterArray] = useState([])
    const [currentChosenLetters, setCurrentChosenLetters] = useState([])
    
    useEffect(() => {
        const abortController = new AbortController();
        const availableCategories = ["animal", "country", "food", "plant", "sport"]

        async function getGameWord() {
            try {
                if (availableCategories.includes(props.categoryChoice)) {
                    const apiURL = `https://www.wordgamedb.com/api/v1/words/?category=${props.categoryChoice}`
                    let response = await fetch(apiURL)
                    let data = await response.json()
                    const randomIndex = getRandomNumberForWord(data.length)
                    setGameWord(data[randomIndex].word)
                    setGameWordLetterArray((data[randomIndex].word).split(""))

                }else {
                    throw new Error("invalid category choice")
                }
                
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

    function openPausedModal() {
        props.setPausedModalOpen(true)
    }

    function handleBurgerMenuClick() {
        openPausedModal()
    }

    function lowerHealthByOne() {
        health--
    }

    function checkForPlayerLoseConditions() {
        if (props.health === 0) {
            
        }
    }

    checkForPlayerLoseConditions()

    return (
        <section>
            <header className="game_page_header">
                <div className="game_page_header_left_side">
                    <button onClick={handleBurgerMenuClick} alt="menu button" className="burger_menu"> <img className="burger_menu_icon" src="../assets/images/icon-menu.svg" /></button>
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
                <Keyboard lowerHealthByOne={lowerHealthByOne} gameWordLetterArray={gameWordLetterArray} setCurrentChosenLetters={setCurrentChosenLetters}/>
            </div>
        </section>
    )
}

export default MainGamePage