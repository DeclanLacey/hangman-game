import "../style-sheets/MainGamePage.css"

function MainGamePage(props) {
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

            
        </section>
    )
}

export default MainGamePage