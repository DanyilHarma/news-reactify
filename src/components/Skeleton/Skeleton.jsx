import classes from "./style.module.css"

const Skeleton = ({ count = 1, type = "banner" }) => {
    return (
        <>
            {count > 1 ? (
                <ul className={classes.list}>
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