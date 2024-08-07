import "../styles/PausedModal.css"
import { Link } from "react-router-dom"

function PausedModal(props) {

    const {handleContinueBtnClick, handleNewCategoryBtnClick, handleQuitBtnClick} = props

    return (
        <div className="modal-container">
            <aside className="blue_modal-box small_modal-box">
                <div>
                    <h2 className="paused_text"> Paused </h2>
                    <p className="paused_title-shadow" aria-hidden="true">Paused</p>
                </div>
                <div className="modal_btns">
                    <div className="btn_background_container">
                        <button alt="continue button" onClick={handleContinueBtnClick} className="modal_btn-blue continue-btn"> continue </button>
                    </div>
                    <Link className="btn_link" to={"/category"}><button alt="new category button" onClick={handleNewCategoryBtnClick} className="modal_btn-blue new-category-btn"> new category </button></Link>
                    <Link className="btn_link" to={"/"}><button alt="quit game button" onClick={handleQuitBtnClick} className="modal_btn-pink quit-btn"> quit game </button></Link>
                </div>
            </aside>
        </div>
    )
    
}

export default PausedModal