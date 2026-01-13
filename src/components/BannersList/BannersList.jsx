import withSkeleton from "../../helpers/hocs/withSkeleton"
import NewsBanner from "../NewsBanner/NewsBanner"
import classes from "./style.module.css"

const BannersList = ({ banners }) => {
    return (
        <ul className={classes.banners}>
            {banners?.map(banner => (
                <NewsBanner key={banner.id} item={banner} />
            ))}
        </ul>
    )
}

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton