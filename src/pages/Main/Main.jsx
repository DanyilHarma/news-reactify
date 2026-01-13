import classes from "./style.module.css"
import LatestNews from "../../components/LatestNews/LatestNews"
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters"

const Main = () => {
    return (
        <main className={classes.main}>
            <LatestNews />

            <NewsByFilters />
        </main>
    )
}

export default Main