import { useForm } from "@inertiajs/inertia-react";
import React from "react";

export default function CreateUser() {
    const curretState = {
        name: "",
        username: "",
        email: "",
        location: "",
        password: "",
    };

    const { data, setData, post } = useForm();
    const onChange = (e) => setData({ ...data, [e.target.id]: e.target.value });
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("users.store"), data);
    };
    return (
        <div className="card shadow">
            <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={data.name}
                            onChange={onChange}
                            id="name"
                            name="name"
                        />
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <label
                                    htmlFor="username"
                                    className="form-label"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.username}
                                    onChange={onChange}
                                    id="username"
                                    name="username"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={data.email}
                                    onChange={onChange}
                                    id="email"
                                    name="email"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-md-6">
                                <label
                                    htmlFor="location"
                                    className="form-label"
                                >
                                    Location
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.location}
                                    onChange={onChange}
                                    id="location"
                                    name="location"
                                />
                            </div>
                            <div className="col-md-6">
                                <label
                                    htmlFor="password"
                                    className="form-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={data.password}
                                    onChange={onChange}
                                    id="password"
                                    name="password"
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
