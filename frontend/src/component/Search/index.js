import { useState } from "react";
import "./index.css";
import { searchProducts } from "../../store/products";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchModal from "./searchmodal";


const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // const [showModal, setShowModal]= useState(false);
    const [query, setQuery] = useState("");


        const handleSubmit = (e) => {
            e.preventDefault();
            dispatch(searchProducts(query));
            history.push("/search");
        }

    return (
        <>
            <div className="search-form">
                <input
                    id="search-input"
                    placeholder="Search products"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    autoFocus="autofocus"/>
                <button type="submit" className="fa-solid fa-magnifying-glass" id="search-icon" onClick={handleSubmit}></button>
            </div>
        </>
    )
}

export default SearchBar;

