import "../style-sheets/PausedModal.css"

function PausedModal(props) {

    return (
        <div className="modal-container">
            <aside className="blue_modal-box small_modal-box">
                <div>
                    <h2 className="paused_text"> Paused </h2>
                    <img className="paused_title-shadow" aria-hidden="true" src="../assets/images/paused.svg" />
                </div>
                <div className="modal_btns">
                    <button aria-label="continue button" onClick={props.handleContinueBtnClick} className="modal_btn-blue continue-btn"> continue </button>
                    <button aria-label="new category button" onClick={props.handleNewCategoryBtnClick} className="modal_btn-blue new-category-btn"> new category </button>
                    <button aria-label="quit game button" onClick={props.handleQuitBtnClick} className="modal_btn-pink quit-btn"> quit game </button>
                </div>
            </aside>
        </div>
    )
    
}

export default PausedModal