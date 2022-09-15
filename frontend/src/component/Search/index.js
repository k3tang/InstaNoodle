import { useState } from "react";

const AutoComplete = ({data}) => {
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const searchWord = e.target.value.toLowerCase();
        setValue(searchWord);

        if (searchWord.length > 1) {
            const matchingWords =  data.filter(
                (suggestion => suggestion.toLowerCase().indexOf(searchWord) > -1))
            setSuggestions(matchingWords);
            setSuggestionsActive(true);
        } else {
            setSuggestionsActive(false)
        }

    }

    const handleClick = (e) => {
        setSuggestions([]);
        setValue(e.target.innerText);
        setSuggestionsActive(false);
    }

    const handleKeyDown = (e) => {
        //up arrow
        if (e.keyCode === 38) {
            if (suggestionIndex === 0) {
                return;
            }
            setSuggestionIndex(suggestionIndex - 1)
        }
        //down arrow
        else if (e.keyCode === 40) {
            if (suggestionIndex - 1 === suggestions.length) {
                return;
            } else {
                setSuggestionIndex(suggestionIndex + 1)
            }
        }
        //enter button 
        else if (e.keyCode === 13) { 
            setValue(suggestions[suggestionIndex]);
            setSuggestionIndex(0);
            setSuggestionsActive(false);
        }
    }

    const Suggestions = () => {
        return (
            <ul className="suggestions">
                {suggestions.map((suggestion, idx) => {
                    return (
                        <li
                            className={idx === suggestionIndex ? "active" : ""}
                            key={idx}
                            onClick={handleClick}
                        >
                            {suggestion}
                        </li>
                    )
                })}
            </ul>
        )
    }


    return (
        <>
            <div className="autocomplete">
                <input type="text" 
                onChange={handleChange}
                onClick={handleClick}
                onKeyDown={handleKeyDown} />
                {suggestionsActive && <Suggestions/>}
            </div>
        </>
    )
}

export default AutoComplete;