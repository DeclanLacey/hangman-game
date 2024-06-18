import BackBtn from "./BackBtn"
import "../styles/InstructionMenu.css"

function InstructionMenu(props) {

    const {setMainMenuOpen, setInstructionMenuOpen} = props

    function openMainMenu() {
        setMainMenuOpen(true)
    }

    function closeInstructionMenu() {
        setInstructionMenuOpen(false)
    }

    function handleBackBtnClick() {
        openMainMenu()
        closeInstructionMenu()
    }

    return(
        <section>
            <header className="instruction_menu_header">
                <BackBtn onClickFunction={handleBackBtnClick}/>
                <div className="instruction_page_title_container">
                    <h1 className="instruction_page_title">How to Play</h1>
                    <img aria-hidden="true" className="instruction_page_title_shadow" src="../assets/images/how-to-play.svg" />
                </div>
            </header>

            <main className="instruction_section_container">
                <div className="instruction_container">
                    <div className="instruction_title_container">
                        <p className="instruction_number">01</p>
                        <h2 className="instruction_title">choose a category</h2>
                    </div>
                    <p className="instruction_content">First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.</p>
                </div>

                <div className="instruction_container">
                    <div className="instruction_title_container">
                        <p className="instruction_number">02</p>
                        <h2 className="instruction_title">guess letters</h2>
                    </div>
                    <p className="instruction_content">Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.</p>
                </div>

                <div className="instruction_container">
                    <div className="instruction_title_container">
                        <p className="instruction_number">03</p>
                        <h2 className="instruction_title">win or lose</h2>
                    </div>
                    <p className="instruction_content">You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.</p>
                </div>
            </main>
        </section>
    )
}

export default InstructionMenu