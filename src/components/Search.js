import React from "react";

const Search = (props) => {
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            props.onKeyPress(e.target.value);
        }
    };

    return (
        <input
            type="text"
            placeholder="Search for a news topic"
            value={props.value}
            onKeyPress={handleKeyPress}
        />
    );
};

export default Search;
