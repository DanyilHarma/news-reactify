import { getCategories } from "../../api/apiNews"
import { useFetch } from "../../helpers/hooks/useFetch"
import Categories from "../Categories/Categories"
import Search from "../Search/Search"
import Slider from "../Slider/Slider"
import classes from "./style.module.css"

const NewsFilters = ({ filters, changeFilter }) => {
    const { data: dataCetegories } = useFetch(getCategories)

    return (
        <div className={classes.filters}>
            {dataCetegories &&
                <Slider>
                    <Categories categories={dataCetegories.categories}
                        setSelectedCategory={(category) => changeFilter("category", category)}
                        selectedCategory={filters.category} />
                </Slider>
            }

            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter("keywords", keywords)} />
        </div>
    )
}

export default NewsFilters