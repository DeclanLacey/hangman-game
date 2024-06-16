import "../style-sheets/PausedModal.css"

function PausedModal(props) {

    function closePausedModal() {
        props.setPausedModalOpen(false)
    }

    function openMainMenu() {
        props.setMainMenuOpen(true)
    }

    function closeGamePage() {
        props.setGamePageOpen(false)
    }

    function openCategoryPickMenu() {
        props.setCategoryPickMenuOpen(true)
    }

    function handleContinueBtnClick() {
        closePausedModal()
    }

    function handleNewCategoryBtnClick() {
        closeGamePage()
        closePausedModal()
        openCategoryPickMenu()
    }

    function handleQuitBtnClick() {
        closeGamePage()
        closePausedModal()
        openMainMenu()
    }



    return (
        <div className="paused_modal-container">
            <aside className="blue_modal-box small_modal-box">
                <div>
                    <h2 className="paused_text"> Paused </h2>
                </div>
                <div className="modal_btns">
                    <button onClick={handleContinueBtnClick} className="modal_btn-blue continue-btn"> continue </button>
                    <button onClick={handleNewCategoryBtnClick} className="modal_btn-blue new-category-btn"> new category </button>
                    <button onClick={handleQuitBtnClick} className="modal_btn-pink quit-btn"> quit game </button>
                </div>
            </aside>
        </div>
        
    )
    
}

export default PausedModal