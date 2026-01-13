import { getNews } from "../../api/apiNews"
import classes from "./style.module.css"
import { useDebounce } from "../../helpers/hooks/useDebounce"
import { PAGE_SIZE } from "../../constants/constants"
import { useFetch } from "../../helpers/hooks/useFetch"
import { useFilters } from "../../helpers/hooks/useFilters"
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