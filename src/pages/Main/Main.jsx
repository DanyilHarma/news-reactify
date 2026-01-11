import { useEffect, useState } from "react"
import { getCategories, getNews } from "../../api/apiNews"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import classes from "./style.module.css"
import NewsList from "../../components/NewsList/NewsList"
import Skeleton from "../../components/Skeleton/Skeleton"
import Pagination from "../../components/Pagination/Pagination"
import Categories from "../../components/Categories/Categories"

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const totalPages = 10;
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            const response = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectedCategory === "All" ? null : selectedCategory
            });
            console.log(response)
            setIsLoading(false)
            setNews(response.news)
        } catch (error) {
            console.log(error)
        }
    }
    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            console.log(response)
            setCategories(["All", ...response.categories])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage, selectedCategory])
    useEffect(() => {
        fetchCategories()
    }, [])

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1)
    }
    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <main className={classes.main}>
            <Categories categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
            {news.length && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton type={"banner"} count={1} />}
            <Pagination totalPages={totalPages}
                handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} handlePageClick={handlePageClick} currentPage={currentPage}
            />
            {!isLoading ? <NewsList news={news} /> : <Skeleton type={"item"} count={10} />}
        </main>
    )
}

export default Main