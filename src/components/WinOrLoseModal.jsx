import { Link } from 'react-router-dom'
import '../styles/WinOrLoseModal.css'

function WinOrLoseModal(props) {

    const {playerHasWon, playerHasLost, handlePlayAgainBtnClick, handleNewCategoryBtnClick, handleQuitBtnClick} = props

    return(
        <div className='modal-container'>
            <aside className='blue_modal-box small_modal-box'>
                { playerHasWon ?
                    <div>
                        <h2 className="win-lose-text"> You Win </h2>
                        <img className='win-shadow' src='../assets/images/win.svg' aria-hidden="true" />
                    </div>
                  :
                    <></>
                }

                { playerHasLost ?
                    <div>
                        <h2 className="win-lose-text"> You Lose </h2>
                        <img className="lose-shadow" src='../assets/images/lose.svg' aria-hidden="true" />
                    </div>
                  :
                    <></>
                }
                
                <div className='btn-container'>
                    <button aria-label='play again button' onClick={handlePlayAgainBtnClick} className='modal_btn-blue play-again-btn'> play again! </button>
                    <Link to={"/category"}> <button aria-label='new category button' onClick={handleNewCategoryBtnClick} className='modal_btn-blue new-category-btn'> new category </button></Link>
                    <Link to={"/"}><button aria-label='quit game button' onClick={handleQuitBtnClick} className='modal_btn-pink quit-btn'> quit game </button></Link>
                </div>
                
            </aside>
        </div>
    )
    
}

export default WinOrLoseModal