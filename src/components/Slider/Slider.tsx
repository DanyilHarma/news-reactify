import React, { useRef } from "react"
import classes from "./style.module.css"

interface Props {
    children: React.ReactElement<{ ref: React.Ref<HTMLDivElement> }>;
    step?: number;
}

const Slider = ({ children, step = 150 }: Props) => {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    const scrollLeft = () => {
        if (!sliderRef.current) return
        sliderRef.current.scrollLeft -= step;
    }
    const scrollRight = () => {
        if (!sliderRef.current) return
        sliderRef.current.scrollLeft += step;
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