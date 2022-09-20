import { Link, useForm } from "@inertiajs/inertia-react";
import React from "react";
import Guest from "../../Layout/Guest";

const Login = ({ errors }) => {
    const { data, setData, post } = useForm({
        email: "ogrimes@example.org",
        password: "password",
        remember: "",
    });

    const changeHandler = (e) =>
        setData({ ...data, [e.target.id]: e.target.value });

    const submitHandler = (e) => {
        e.preventDefault();
        post("/login", data);
    };

    return (
        <div>
            <div className="card">
                <div className="card-header text-center">
                    <h5>Login Account</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={submitHandler} noValidate>
                        <div className="mb-2">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={changeHandler}
                            />
                            {errors && (
                                <small className="text-danger mt-1">
                                    {errors.email}
                                </small>
                            )}
                        </div>
                        <div className="mb-2">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={changeHandler}
                            />
                            {errors && (
                                <small className="text-danger mt-1">
                                    {errors.password}
                                </small>
                            )}
                        </div>
                        <div className="mb-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="remember"
                                name="remember"
                                value={data.remember}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        remember: e.target.checked,
                                    })
                                }
                            />
                            <label
                                className="form-check-label"
                                htmlFor="remember"
                            >
                                &nbsp; Remember me
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>
                </div>
                <div className="card-footer text-muted">
                    Don't have account ?{" "}
                    <Link
                        href={route("register")}
                        className="text-decoration-none"
                    >
                        Register here !
                    </Link>
                </div>
            </div>
        </div>
    );
};

Login.layout = (page) => <Guest children={page} title="Login" />;

export default Login;
