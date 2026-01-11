import classes from "./style.module.css"

const Search = ({ keywords, setKeywords }) => {
    return (
        <div className={classes.search}>
            <input className={classes.input} placeholder="JavaScript"
                type="text" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
        </div>
    )
}

export default Search;