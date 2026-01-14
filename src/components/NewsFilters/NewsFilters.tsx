import type { IFilters } from "../../interfaces"
import { useAppDispatch } from "../../store"
import { useGetCategoriesQuery } from "../../store/services/newsApi"
import { setFilters } from "../../store/slices/newsSlice"
import Categories from "../Categories/Categories"
import Search from "../Search/Search"
import Slider from "../Slider/Slider"
import classes from "./style.module.css"

interface Props {
    filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
    const dispatch = useAppDispatch()
    const { data } = useGetCategoriesQuery();

    return (
        <div className={classes.filters}>
            {data &&
                <Slider>
                    <Categories categories={data.categories}
                        setSelectedCategory={(category) => dispatch(setFilters({ key: "category", value: category }))}
                        selectedCategory={filters.category} />
                </Slider>
            }

            <Search keywords={filters.keywords}
                setKeywords={(keywords) => dispatch(setFilters({ key: "keywords", value: keywords }))} />
        </div>
    )
}

export default NewsFilters