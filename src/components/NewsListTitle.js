import React from "react";

const NewsListTitle = (props) => {
    if (props.searchTerm === "") {
        return <h2>Showing top headlines in the UK</h2>;
    } else {
        return <h2>Showing results for "{props.searchTerm}"</h2>;
    }
};

export default NewsListTitle;
