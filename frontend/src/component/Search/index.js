import { useState } from "react";
import "./index.css";
import { searchProducts } from "../../store/products";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);


        const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(searchProducts(query));
            history.push("/search");
            setShowSearch(false);
            setQuery("");
        }

        const handleSearchBar = (e) => {
            if (showSearch) {
                setShowSearch(false)
            } else {
                setShowSearch(true)
            }
        }

    return (
        <>
            {showSearch ? 
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    id="search-input"
                    placeholder="Search products"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    autoFocus="autofocus"/>
            </form> : ""
            }

            <button type="submit" className="fa-solid fa-magnifying-glass" id="search-icon" onClick={handleSearchBar}></button>
        </>
    )
}

export default SearchBar;

