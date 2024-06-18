import "../styles/MainMenu.css"

function MainMenu(props) {

    const {setMainMenuOpen, setInstructionMenuOpen, setCategoryPickMenuOpen} = props

    function closeMainMenu() {
        setMainMenuOpen(false)
    }

    function openInstructionMenu() {
        setInstructionMenuOpen(true)
    }

    function openCategoryPickMenu() {
        setCategoryPickMenuOpen(true)
    }

    function handlePlayBtnClick() {
        closeMainMenu()
        openCategoryPickMenu()
    }

    function handleHowToPlayBtnClick() {
        openInstructionMenu()
        closeMainMenu()
    }

    return(
        <section className="main_menu">
            <div className="blue_modal-box">
                <img className="title_svg" src="../assets/images/logo.svg" alt="The Hangman Game" />
                <button className="start_btn" alt="play button" title="play-btn" onClick={handlePlayBtnClick} ><img className="play_btn_svg" src="../assets/images/icon-play.svg" aria-hidden="true" /></button >
                <button className="how_to_play_btn" onClick={handleHowToPlayBtnClick} > how to play </button>
            </div>
        </section>
    )
}

export default MainMenu