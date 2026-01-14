import { getNews } from "../../api/apiNews"
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants"
import { useDebounce } from "../../helpers/hooks/useDebounce"
import { useFetch } from "../../helpers/hooks/useFetch"
import { useFilters } from "../../helpers/hooks/useFilters"
import type { NewsApiResponse, ParamsType } from "../../interfaces"
import NewsFilters from "../NewsFilters/NewsFilters"
import NewsList from "../NewsList/NewsList"
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper"
import classes from "./style.module.css"

const NewsByFilters = () => {
    const { filters, changeFilter } = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: ""
    })

    const deboundedKeywords = useDebounce(filters.keywords, 1500)

    const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
        ...filters,
        keywords: deboundedKeywords
    })

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) changeFilter("page_number", filters.page_number + 1)
    }
    const handlePrevPage = () => {
        if (filters.page_number > 1) changeFilter("page_number", filters.page_number - 1)
    }
    const handlePageClick = (pageNumber: number) => {
        changeFilter("page_number", pageNumber)
    }

    return (
        <section className={classes.section}>
            <NewsFilters filters={filters} changeFilter={changeFilter} />

            <PaginationWrapper top bottom
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}>
                <NewsList isLoading={isLoading} news={data?.news} />
            </PaginationWrapper>
        </section>
    )
}

export default NewsByFilters