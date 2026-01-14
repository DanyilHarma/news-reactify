import { getLatestNews } from "../../api/apiNews"
import { useFetch } from "../../helpers/hooks/useFetch"
import type { NewsApiResponse } from "../../interfaces"
import BannersList from "../BannersList/BannersList"
import classes from "./style.module.css"

const LatestNews = () => {
    const { data, isLoading } = useFetch<NewsApiResponse, void>(getLatestNews)

    return (
        <section className={classes.section}>
            <BannersList banners={data && data.news} isLoading={isLoading} />
        </section>
    )
}

export default LatestNews