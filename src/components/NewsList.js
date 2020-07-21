import React, { useState, useEffect } from "react";
import Axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = (props) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function getNews() {
            if (props.searchTerm === "") {
                const result = await Axios(
                    "https://newsapi.org/v2/top-headlines?country=gb&apiKey=200a68f2d9404849bbf8be5ec3d06d85"
                );
                setNews(result.data.articles);
            } else {
                const result = await Axios(
                    "https://newsapi.org/v2/everything?q=" +
                        props.searchTerm +
                        "&apiKey=200a68f2d9404849bbf8be5ec3d06d85"
                );
                setNews(result.data.articles);
            }
        }
        getNews();
    }, [props.searchTerm]);

    return (
        <div className="newsList">
            <h2>Showing top headlines in UK</h2>
            {news.map((i) => (
                <NewsItem title={i.title} url={i.url} />
            ))}
        </div>
    );
};

export default NewsList;
