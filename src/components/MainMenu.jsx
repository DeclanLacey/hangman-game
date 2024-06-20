import "../styles/MainMenu.css"
import { Link } from "react-router-dom"

function MainMenu() {
    return(
        <section className="main_menu">
            <div className="blue_modal-box">
                <img className="title_svg" src="../assets/images/logo.svg" alt="The Hangman Game" />
                <Link className="start_btn-link" to="category"><button className="start_btn" alt="play button" title="play-btn" ><img className="play_btn_svg" src="../assets/images/icon-play.svg" aria-hidden="true" /></button ></Link>
                <Link className="how_to_play-btn-link" to="how-to-play"> <button className="how_to_play_btn"  > how to play </button> </Link>
            </div>
        </section>
    )
}

export default MainMenu