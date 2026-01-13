import BannersList from "../BannersList/BannersList"
import classes from "./style.module.css"

const LatestNews = ({ banners, isLoading }) => {
    return (
        <section className={classes.section}>
            <BannersList banners={banners} isLoading={isLoading} />
        </section>
    )
}

export default LatestNews