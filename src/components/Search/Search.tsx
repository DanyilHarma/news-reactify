import classes from "./style.module.css"

interface Props {
    keywords: string;
    setKeywords: (keywords: string) => void;
}

const Search = ({ keywords, setKeywords }: Props) => {
    return (
        <div className={classes.search}>
            <input className={classes.input} placeholder="JavaScript"
                type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
        </div>
    )
}

export default Search;