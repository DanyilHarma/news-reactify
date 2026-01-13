import classes from "./style.module.css"

const Skeleton = ({ count = 1, type = "banner", direction = "column" }) => {
    return (
        <>
            {count > 1 ? (
                <ul className={direction === "column" ? classes.colimnList : classes.rowList}>
                    {[...Array(count)].map((_, index) => (
                        <li key={index} className={type === "banner" ? classes.banner : classes.item}>

                        </li>
                    ))}
                </ul>
            ) : <li className={type === "banner" ? classes.banner : classes.item}>

            </li>}
        </>
    )
}

export default Skeleton