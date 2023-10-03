import { useEffect } from "react";
import { useState } from "react";
import News from "./News";

const DragonNews = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    console.log(news)
    return (
        <div className="w-full">
            <h2>Dragon News Home</h2>
            {
                news.map((news) => <News key={news._id} news={news}></News>)
            }
        </div>
    );
};

export default DragonNews;