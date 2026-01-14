import { formatTimeAgo } from "../../helpers/formatTimeAgo"
import type { INews } from "../../interfaces";
import Image from "./Image/Image"
import classes from "./style.module.css"

interface Props {
    item: INews;
}

const NewsBanner = ({ item }: Props) => {
    return (
        <div className={classes.banner}>
            <Image image={item?.image} />
            <h3 className={classes.title}>{item.title}</h3>
            <p className={classes.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    )
}


export default NewsBanner;