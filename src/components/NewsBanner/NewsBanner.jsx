import { formatTimeAgo } from "../../helpers/formatTimeAgo"
import Image from "./Image/Image"
import classes from "./style.module.css"

const NewsBanner = ({ item }) => {
    return (
        <div className={classes.banner}>
            <Image image={item?.image} />
            <h3 className={classes.title}>{item.title}</h3>
            <p className={classes.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
        </div>
    )
}

export default NewsBanner