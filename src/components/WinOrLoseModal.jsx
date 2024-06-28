import { Link } from 'react-router-dom'
import '../styles/WinOrLoseModal.css'

function WinOrLoseModal(props) {

    const {playerHasWon, playerHasLost, handlePlayAgainBtnClick, handleNewCategoryBtnClick, handleQuitBtnClick} = props

    return(
        <div className='modal-container'>
            <aside className='blue_modal-box small_modal-box'>
                { playerHasWon ?
                    <div className='win-lose-text-container'>
                        <h2 className="win-lose-text"> You Win </h2>
                        <p aria-hidden="true" className='win-lose-text-shadow-win'> You Win</p>
                    </div>
                  :
                    <></>
                }

                { playerHasLost ?
                    <div className='win-lose-text-container'>
                        <h2 className="win-lose-text"> You Lose </h2>
                        <p aria-hidden="true" className='win-lose-text-shadow-lose'> You Lose</p>
                    </div>
                  :
                    <></>
                }
                
                <div className='btn-container'>
                    <div className="btn_background_container">
                        <button  aria-label='play again button' onClick={handlePlayAgainBtnClick} className='modal_btn-blue play-again-btn'> play again! </button>
                    </div>
                    <Link className='btn_link' to={"/category"}> <button aria-label='new category button' onClick={handleNewCategoryBtnClick} className='modal_btn-blue new-category-btn'> new category </button></Link>
                    <Link className='btn_link' to={"/"}><button aria-label='quit game button' onClick={handleQuitBtnClick} className='modal_btn-pink quit-btn'> quit game </button></Link>
                </div>
                
            </aside>
        </div>
    )
    
}

export default WinOrLoseModal