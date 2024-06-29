import { useState, useEffect } from "react"
import WordBoard from "./WordBoard"
import Keyboard from "./Keyboard"
import "../styles/MainGamePage.css"


const TOTALHEALTH = 8
let health = TOTALHEALTH

function MainGamePage(props) {

    const [gameWord, setGameWord] = useState("")
    const [gameWordUniqueLetters, setGameWordUniqueLetters] = useState([])
    const [gameWordLetterArray, setGameWordLetterArray] = useState([])
    const [currentChosenLetters, setCurrentChosenLetters] = useState([])
    const {categoryChoice, setPausedModalOpen, setWinOrLoseModalOpen, setPlayerHasLost, setPlayerHasWon, setNewGame, newGame} = props
    
    const healthBar = document.getElementById("health")
    useEffect(() => {
        const unloadCallBack = (event) => {
            event.preventDefault()
            event.returnValue = ""
            return ""
        }

        window.addEventListener("beforeunload", unloadCallBack)
        return () => window.removeEventListener("beforeunload", unloadCallBack)
    } , [])
    
    useEffect(() => {
        const abortController = new AbortController();

        async function getGameWord() {
            
            try {
                
                const apiURL = `https://www.wordgamedb.com/api/v1/words/?category=${categoryChoice ? categoryChoice : getLocalStorage()}`
                let response = await fetch(apiURL)
                let data = await response.json()
                const randomIndex = getRandomNumberForWord(data.length)
                setGameWord(data[randomIndex].word)
                setGameWordLetterArray((data[randomIndex].word).split(""))
                setGameWordUniqueLetters([...new Set((data[randomIndex].word).split(""))])
                
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
    }, [newGame])
  
    function getRandomNumberForWord(max) {
        return Math.floor(Math.random() * max - 2)
    }

    function openPausedModal() {
        setPausedModalOpen(true)
    }

    function handleBurgerMenuClick() {
        openPausedModal()
    }

    function lowerHealthByOne() {
        healthBar.value -= 10
        health--    
    }

   function resetGamePage() {
        setGameWord("")
        setGameWordLetterArray([])
        setCurrentChosenLetters([])
        healthBar.value += 80
        health = TOTALHEALTH
        setNewGame(prevState => !prevState)
   }

    function playerHasLost() {
        setWinOrLoseModalOpen(true)
        setPlayerHasLost(true)
        resetGamePage()
    }

    function playerHasWon() {
        setWinOrLoseModalOpen(true)
        setPlayerHasWon(true)
        resetGamePage()
    }

    function checkForPlayerLoseConditions() {
        if (health === 0) {
            playerHasLost()
        }
    }

    function checkForPlayerWinConditions() {
        if (currentChosenLetters.length >= gameWordUniqueLetters.length && currentChosenLetters.length > 0) {
            let letterCount = gameWordUniqueLetters.length
            let correctLetterCount = 0
            for(let i = 0; i < letterCount; i++) {
                if (currentChosenLetters.includes(gameWordUniqueLetters[i])) {
                    correctLetterCount++
                }
            }

            if (correctLetterCount === letterCount) {
                playerHasWon()
            }
        }
    }

    function setLocalStorage() {
        if (categoryChoice) {
            localStorage.setItem("category", categoryChoice)
        }
    }

    function getLocalStorage() {
        let category
        if (localStorage.getItem("category")) {
            category = localStorage.getItem("category")
        }
        return category
    }

    useEffect(() => {
        checkForPlayerLoseConditions()
        checkForPlayerWinConditions()
    }, [currentChosenLetters])

    useEffect(() => {
        setLocalStorage()
    }, [categoryChoice])

    return (
        <section className="game_page-container">
            <header className="game_page_header">
                <div className="game_page_header_left_side">
                    <div className="burger_menu-container">
                        <button onClick={handleBurgerMenuClick} alt="menu button" className="burger_menu"> 
                            <img className="burger_menu_icon" src="../assets/images/icon-menu.svg" />
                        </button>
                    </div>
                    <h1 className="category_name">{categoryChoice ? categoryChoice : getLocalStorage()}</h1>
                </div>

                <div className="game_page_header_right_side">
                    <div className="health_bar">
                        <progress id="health" value="80" max="80" className="health_bar_level"></progress>
                    </div>
                    <img alt="heart icon" className="heart_icon" src="../assets/images/icon-heart.svg" />
                </div>
            </header>

            <WordBoard 
                gameWord={gameWord} 
                currentChosenLetters={currentChosenLetters} 
            />

            <div className="keyboard_container">
                <Keyboard 
                    lowerHealthByOne={lowerHealthByOne} 
                    gameWordLetterArray={gameWordLetterArray} 
                    setCurrentChosenLetters={setCurrentChosenLetters} 
                    currentChosenLetters={currentChosenLetters}
                />
            </div>
        </section>
    )
}

export default MainGamePage