import { Head, usePage } from "@inertiajs/inertia-react";
import React, { Children, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../Components/Navbar";

export default function App({ children, title }) {
    const { flash } = usePage().props;

    useEffect(() => {
        flash.type && toast[flash.type](flash.message), [];
    });

    return (
        <div>
            <Head title={title} />
            <Navbar />
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-12">
                        <Toaster position="top-center" />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
