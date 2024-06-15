import { useEffect, useState } from "react"
import BackBtn from "./BackBtn"
import CategoryCard from "./CategoryCard"
import "../style-sheets/CategoryPickMenu.css"

function CategoryPickMenu(props) {

    const [categoryNames, setCategoryNames] = useState()

    useEffect(() => {
        async function getCategoryNames() {
            const apiURL = "https://www.wordgamedb.com/api/v1/categories"
            let response = await fetch(apiURL)
            let data = await response.json()
            setCategoryNames(data)
            
        }
        getCategoryNames()
    }, [])

    function renderCategories() {
        const categoryElements = categoryNames.map((category, index) => {
            return <CategoryCard handleCategoryBtnClick={handleCategoryBtnClick}  key={index} name={category}/>
        })
        return categoryElements
    }

    function handleCategoryBtnClick(event) {
        props.setCategoryChoice(event.target.textContent)
    }

    function openMainMenu() {
        props.setMainMenuOpen(true)
    }

    function closeCategoryPickMenu() {
        props.setCategoryPickMenuOpen(false)
    }

    function handleBackBtnClick() {
        openMainMenu()
        closeCategoryPickMenu()
    }

    return (
        <section className="category_pick_menu">
            <header className="category_pick_header_container">
                <BackBtn onClickFunction={handleBackBtnClick}/>
                <div className="category_page_title_container">
                <h1 className="category_pick_title">Pick a Category</h1>
                    <img aria-hidden="true" className="category_page_title_shadow" src="../assets/images/pick-category.svg" />
                </div>
                
            </header>
            <div className="category_card_container">
                {categoryNames ? renderCategories() : <></>}
            </div>
        </section>
    )
}

export default CategoryPickMenu