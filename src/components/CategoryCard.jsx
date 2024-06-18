import "../styles/CategoryCard.css"

function CategoryCard(props) {

    const {handleCategoryBtnClick, name} = props

    return (
        <button onClick={handleCategoryBtnClick} alt={`button that has category name of ${name}`} className="category_card">
            {name}
        </button>
    )
}

export default CategoryCard