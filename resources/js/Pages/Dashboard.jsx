import React from "react";
import App from "../Layout/App";

const Dashboard = () => {
    return (
        <div>
            <h3>Dashboard</h3>
        </div>
    );
};

Dashboard.layout = (page) => <App children={page} title="Dashboard" />;

export default Dashboard;
