import { themeIcons } from "../../assets";
import { formatDate } from "../../helpers/formatDate"
import classes from "./style.module.css"
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <header className={`${classes.header} ${isDark ? classes.dark : classes.light}`}>
            <div className={classes.info}>
                <h1 className={classes.title}>NEWS REACTIFY</h1>
                <p className={classes.date}>{formatDate(new Date())}</p>
            </div>

            <img src={isDark ? themeIcons.light : themeIcons.dark}
                alt="theme" width={30}
                onClick={toggleTheme} />
        </header>
    )
}

export default Header