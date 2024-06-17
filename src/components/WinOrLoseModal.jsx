import '../style-sheets/WinOrLoseModal.css'

function WinOrLoseModal(props) {
    return(
        <div className='modal-container'>
            <aside className='blue_modal-box small_modal-box'>
                { props.playerHasWon ?
                    <div>
                        <h2 className="win-lose-text"> You Win </h2>
                        <img className='win-shadow' src='../assets/images/win.svg' aria-hidden="true" />
                    </div>
                  :
                    <></>
                }

                { props.playerHasLost ?
                    <div>
                        <h2 className="win-lose-text"> You Lose </h2>
                        <img className="lose-shadow" src='../assets/images/lose.svg' aria-hidden="true" />
                    </div>
                  :
                    <></>
                }
                
                <div className='btn-container'>
                    <button aria-label='play again button' onClick={props.handlePlayAgainBtnClick} className='modal_btn-blue play-again-btn'> play again! </button>
                    <button aria-label='new category button' onClick={props.handleNewCategoryBtnClick} className='modal_btn-blue new-category-btn'> new category </button>
                    <button aria-label='quit game button' onClick={props.handleQuitBtnClick} className='modal_btn-pink quit-btn'> quit game </button>
                </div>
                
            </aside>
        </div>
    )
    
}

export default WinOrLoseModal