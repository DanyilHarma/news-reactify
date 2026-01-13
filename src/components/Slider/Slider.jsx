import { useRef } from "react"
import classes from "./style.module.css"

const Slider = ({ children, step = 150 }) => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= step;
    }
    const scrollRight = () => {
        sliderRef.current.scrollRight += step;
    }

    return (
        <div className={classes.slider}>
            <button className={classes.arrow} onClick={scrollLeft}>{`<`}</button>
            {React.cloneElement(children, { ref: sliderRef })}
            <button className={classes.arrow} onClick={scrollRight}>{`>`}</button>
        </div>
    )
}

export default Slider