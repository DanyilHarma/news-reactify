import { useEffect, useState } from "react"
import { getNews } from "../../api/apiNews"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import classes from "./style.module.css"
import NewsList from "../../components/NewsList/NewsList"
import Skeleton from "../../components/Skeleton/Skeleton"

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                console.log(response)
                setIsLoading(false)
                setNews(response.news)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews()
    }, [])

    return (
        <main className={classes.main}>
            {news.length && !isLoading ? <NewsBanner item={news[0]} /> : <Skeleton type={"banner"} count={1} />}
            {!isLoading ? <NewsList news={news} /> : <Skeleton type={"item"} count={10} />}
        </main>
    )
}

export default Main