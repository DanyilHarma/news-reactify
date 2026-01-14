import type { DirectionType, SkeletonType } from "../../interfaces"
import classes from "./style.module.css"

interface Props {
    type?: SkeletonType;
    count?: number;
    direction?: DirectionType;
}


const Skeleton = ({ count = 1, type = "banner", direction = "column" }: Props) => {
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