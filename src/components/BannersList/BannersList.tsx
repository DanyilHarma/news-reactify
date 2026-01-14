import withSkeleton from "../../helpers/hocs/withSkeleton"
import type { INews } from "../../interfaces"
import NewsBanner from "../NewsBanner/NewsBanner"
import classes from "./style.module.css"

interface Props {
    banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
    return (
        <ul className={classes.banners}>
            {banners?.map(banner => (
                <NewsBanner key={banner.id} item={banner} />
            ))}
        </ul>
    )
}

const BannersListWithSkeleton = withSkeleton<Props>(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton