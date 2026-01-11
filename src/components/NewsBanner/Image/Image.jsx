import classes from "./style.module.css"

const Image = ({ image }) => {
    return (
        <div className={classes.wrapper}>
            {image && <img src={image} alt="news" className={classes.image} />}
        </div>
    )
}

export default Image