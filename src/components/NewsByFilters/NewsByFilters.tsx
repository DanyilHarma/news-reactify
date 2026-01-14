import { TOTAL_PAGES } from "../../constants/constants"
import { useDebounce } from "../../helpers/hooks/useDebounce"
import { useAppDispatch, useAppSelector } from "../../store"
import { useGetNewsQuery } from "../../store/services/newsApi"
import { setFilters } from "../../store/slices/newsSlice"
import NewsFilters from "../NewsFilters/NewsFilters"
import NewsList from "../NewsList/NewsList"
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper"
import classes from "./style.module.css"

const NewsByFilters = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(state => state.news.filters);

    const deboundedKeywords = useDebounce(filters.keywords, 1500);

    const { data, isLoading } = useGetNewsQuery({
        ...filters,
        keywords: deboundedKeywords
    });

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            dispatch(setFilters({ key: "page_number", value: filters.page_number + 1 }))
        }
    };
    const handlePrevPage = () => {
        if (filters.page_number > 1) {
            dispatch(setFilters({ key: "page_number", value: filters.page_number - 1 }))
        }
    };
    const handlePageClick = (pageNumber: number) => {
        dispatch(setFilters({ key: "page_number", value: pageNumber }))
    };

    return (
        <section className={classes.section}>
            <NewsFilters filters={filters} />

            <PaginationWrapper top bottom
                totalPages={TOTAL_PAGES}
                handleNextPage={handleNextPage}
                handlePrevPage={handlePrevPage}
                handlePageClick={handlePageClick}
                currentPage={filters.page_number}
            >
                <NewsList isLoading={isLoading} news={data?.news} />
            </PaginationWrapper>
        </section>
    )
};

export default NewsByFilters;