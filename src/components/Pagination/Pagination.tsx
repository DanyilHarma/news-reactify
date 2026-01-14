import { useTheme } from "../../context/ThemeContext"
import type { IPaginationProps } from "../../interfaces"
import classes from "./style.module.css"

const Pagination = ({ totalPages, handleNextPage, handlePrevPage, handlePageClick, currentPage }: IPaginationProps) => {
    const { isDark } = useTheme();

    return (
        <div className={`${classes.pagination} ${isDark ? classes.dark : classes.light}`}>
            <button className={classes.arrow} disabled={currentPage <= 1}
                onClick={handlePrevPage}>{"<"}</button>
            <div className={classes.list}>
                {[...Array(totalPages)].map((_, index) => (
                    <button key={index} className={classes.pageNumber} disabled={index + 1 === currentPage}
                        onClick={() => handlePageClick(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
            <button className={classes.arrow} disabled={currentPage >= totalPages}
                onClick={handleNextPage}>{">"}</button>
        </div>
    )
}

export default Pagination