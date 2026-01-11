import NewsItem from "./NewsItem/NewsItem"
import classes from "./style.module.css"

const NewsList = ({ news }) => {
    return (
        <ul className={classes.list}>
            {news.map(item => (
                <NewsItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default NewsList