import React from "react";
import NewsList from "./components/NewsList";
import Header from "./components/Header";
import "./assets/app.css";

const App = () => {
    return (
        <>
            <Header />
            <NewsList />
        </>
    );
};

export default App;
