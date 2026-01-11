import { useEffect, useState } from "react"
import { getNews } from "../../api/apiNews"
import NewsBanner from "../../components/NewsBanner/NewsBanner"
import classes from "./style.module.css"
import NewsList from "../../components/NewsList/NewsList"

const Main = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews();
                console.log(response)
                setNews(response.news)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNews()
    }, [])
    return (
        <main className={classes.main}>
            {news.length && <NewsBanner item={news[0]} />}
            <NewsList news={news} />
        </main>
    )
}

export default Main