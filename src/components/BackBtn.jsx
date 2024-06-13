import "../style-sheets/BackBtn.css"

function BackBtn(props) {
    return (
        <button onClick={props.onClickFunction} className="back_btn" alt="back button"><img className="back_btn_icon" src="../assets/images/icon-back.svg" aria-hidden="true" /></button>
    )
}

export default BackBtn