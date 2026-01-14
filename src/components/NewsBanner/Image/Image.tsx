import classes from "./style.module.css"

interface Props {
    image: string
}

const Image = ({ image }: Props) => {
    return (
        <div className={classes.wrapper}>
            {image && <img src={image} alt="news" className={classes.image} />}
        </div>
    )
}

export default Image