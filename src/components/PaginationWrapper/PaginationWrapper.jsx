import { formatDate } from "../../helpers/formatDate"
import Pagination from "../Pagination/Pagination"
import classes from "./style.module.css"

const PaginationWrapper = ({ top, bottom, children, ...paginationProps }) => {
    return (
        <>
            {top && <Pagination {...paginationProps} />}

            {children}

            {bottom && <Pagination {...paginationProps} />}
        </>
    )
}

export default PaginationWrapper