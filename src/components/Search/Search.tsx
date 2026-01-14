import { useTheme } from "../../context/ThemeContext";
import classes from "./style.module.css"

interface Props {
    keywords: string;
    setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
    const { isDark } = useTheme();

    return (
        <div className={`${classes.search} ${isDark ? classes.dark : classes.light}`}>
            <input className={classes.input} placeholder="JavaScript"
                type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
        </div>
    )
}

export default Search;