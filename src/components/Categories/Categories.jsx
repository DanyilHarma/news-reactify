import { formatDate } from "../../helpers/formatDate"
import classes from "./style.module.css"

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
    return (
        <div className={classes.categories}>
            {categories.map(category => (
                <button onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? classes.active : classes.item}
                    key={category}>
                    {category}
                </button>
            ))}
        </div>
    )
}

export default Categories