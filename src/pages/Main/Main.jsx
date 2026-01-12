import { getCategories, getNews } from "../../api/apiNews"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import classes from "./style.module.css"
import NewsList from "../../components/NewsList/NewsList"
import Pagination from "../../components/Pagination/Pagination"
import Categories from "../../components/Categories/Categories"
import Search from "../../components/Search/Search"
import { useDebounce } from "../../helpers/hooks/useDebounce"
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants"
import { useFetch } from "../../helpers/hooks/useFetch"
import { useFilters } from "../../helpers/hooks/useFilters"

const Main = () => {
    const { filters, changeFilter } = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: ""
    })

    const deboundedKeywords = useDebounce(filters.keywords, 1500)

    const { data, isLoading } = useFetch(getNews, {
        ...filters,
        keywords: deboundedKeywords
    })

    const { data: dataCetegories } = useFetch(getCategories)

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) changeFilter("page_number", filters.page_number + 1)
    }
    const handlePrevPage = () => {
        if (filters.page_number > 1) changeFilter("page_number", filters.page_number - 1)
    }
    const handlePageClick = (pageNumber) => {
        changeFilter("page_number", pageNumber)
    }

    return (
        <main className={classes.main}>
            {dataCetegories &&
                <Categories categories={dataCetegories.categories}
                    setSelectedCategory={(category) => changeFilter("category", category)}
                    selectedCategory={filters.category} />}

            <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter("keywords", keywords)} />

            <NewsBanner isLoading={isLoading} item={data && data.news && data.news[0]} />

            <Pagination totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} handlePageClick={handlePageClick} currentPage={filters.page_number}
            />

            <NewsList isLoading={isLoading} news={data?.news} />
        </main>
    )
}

export default Main