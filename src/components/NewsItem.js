import React from "react";

const NewsItem = (props) => {
    return (
        <div className="newsItem">
            <h3>{props.title}</h3>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                Read Full Article
            </a>
        </div>
    );
};

export default NewsItem;
