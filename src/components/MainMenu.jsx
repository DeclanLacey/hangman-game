import "../style-sheets/MainMenu.css"

function MainMenu(props) {

    function closeMainMenu() {
        props.setMainMenuOpen(false)
    }

    function openInstructionMenu() {
        props.setInstructionMenuOpen(true)
    }

    function handlePlayBtnClick() {
        closeMainMenu()
    }

    function handleHowToPlayBtnClick() {
        openInstructionMenu()
        closeMainMenu()
    }

    return(
        <section className="main_menu">
            
            <div className="menu_modal">
                <img className="title_svg" src="../assets/images/logo.svg" alt="The Hangman Game" />
                <button className="start_btn" alt="play button" onClick={handlePlayBtnClick} ><img className="play_btn_svg" src="../assets/images/icon-play.svg" aria-hidden="true" /></button >
                <button className="how_to_play_btn" onClick={handleHowToPlayBtnClick} > how to play </button>
            </div>
        </section>
    )
}

export default MainMenu