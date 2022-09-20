import React from "react";
import App from "../Layout/App";

const Home = () => {
    return <h3>Home Page</h3>;
};

Home.layout = (page) => <App children={page} title="Home" />;

export default Home;
