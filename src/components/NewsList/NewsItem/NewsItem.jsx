import { formatTimeAgo } from "../../../helpers/formatTimeAgo"
import classes from "./style.module.css"

const NewsItem = ({ item }) => {
    return (
        <div className={classes.item}>
            <div className={classes.wrapper}
                style={{ backgroundImage: `url(${item.image})` }}>
            </div>
            <div className={classes.info}>
                <h3 className={classes.title}>{item.title}</h3>
                <p className={classes.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
            </div>
        </div>
    )
}

export default NewsItem