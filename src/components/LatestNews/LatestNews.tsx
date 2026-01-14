import { useGetLatestNewsQuery } from "../../store/services/newsApi"
import BannersList from "../BannersList/BannersList"
import classes from "./style.module.css"

const LatestNews = () => {
    const { data, isLoading } = useGetLatestNewsQuery()

    return (
        <section className={classes.section}>
            <BannersList banners={data && data.news} isLoading={isLoading} />
        </section>
    )
}

export default LatestNews