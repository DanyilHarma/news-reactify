import { getCategories } from "../../api/apiNews"
import { useFetch } from "../../helpers/hooks/useFetch"
import type { CategoriesApiResponse, IFilters } from "../../interfaces"
import Categories from "../Categories/Categories"
import Search from "../Search/Search"
import Slider from "../Slider/Slider"
import classes from "./style.module.css"

interface Props {
    filters: IFilters;
    changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
    const { data: dataCetegories } = useFetch<CategoriesApiResponse, void>(getCategories)

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