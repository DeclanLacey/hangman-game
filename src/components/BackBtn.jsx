import { Link } from "react-router-dom"
import "../styles/BackBtn.css"

function BackBtn(props) {
    
    const {route} = props

    return (
        <Link to={route}>
            <button  className="back_btn" alt="back button">
                <img className="back_btn_icon" src="../assets/images/icon-back.svg" aria-hidden="true" />
            </button>
        </Link>
        
    )
}

export default BackBtn