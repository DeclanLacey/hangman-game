import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import BackBtn from "./BackBtn"
import CategoryCard from "./CategoryCard"
import "../styles/CategoryPickMenu.css"

function CategoryPickMenu(props) {

    const {setCategoryChoice} = props
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
            return <Link className="category_link" key={index} to="/game"><CategoryCard handleCategoryBtnClick={handleCategoryBtnClick} name={category}/></Link>
        })
        return categoryElements
    }

    function handleCategoryBtnClick(event) {
        setCategoryChoice(event.target.textContent)
        
    }

    return (
        <section className="category_pick_menu">
            <header className="category_pick_header_container">
                <BackBtn route={"/"}/>
                <div className="category_page_title_container">               
                    <h1 className="category_pick_title">Pick a Category</h1>
                    <p className="category_pick_title-shadow" aria-hidden="true">Pick a Category</p>      
                </div>
            </header>
            <div className="category_card_container">
                {categoryNames ? renderCategories() : <></>}
            </div>
        </section>
    )
}

export default CategoryPickMenu