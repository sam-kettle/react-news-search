import React, { useState, useEffect } from "react";
import Axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function getNews() {
            const result = await Axios(
                "https://newsapi.org/v2/top-headlines?country=gb&apiKey=200a68f2d9404849bbf8be5ec3d06d85"
            );
            setNews(result.data.articles);
            console.log(result.data.articles);
        }
        getNews();
    }, []);

    return (
        <>
            {news.map((i) => (
                <NewsItem title={i.title} url={i.url} />
            ))}
        </>
    );
};

export default NewsList;
