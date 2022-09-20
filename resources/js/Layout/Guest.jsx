import { Head } from "@inertiajs/inertia-react";
import React from "react";
import Navbar from "../Components/Navbar";

export default function Guest({ children, title }) {
    return (
        <div>
            <Head title={title} />
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="d-flex justify-content-center align-items-center mt-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
