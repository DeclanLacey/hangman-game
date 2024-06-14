import "../style-sheets/CategoryCard.css"

function CategoryCard(props) {

    return (
        <button alt={`button that has category name of ${props.name}`} className="category_card">
            {props.name}
        </button>
    )
}

export default CategoryCard