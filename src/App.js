import React, { useState } from "react";
import NewsList from "./components/NewsList";
import Header from "./components/Header";
import Search from "./components/Search";
import "./assets/app.css";

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleKeyPress = (value) => {
        setSearchTerm(value);
    };

    return (
        <>
            <Header />
            <Search searchTerm={searchTerm} onKeyPress={handleKeyPress} />
            <NewsList searchTerm={searchTerm} />
        </>
    );
};

export default App;
