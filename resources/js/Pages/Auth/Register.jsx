import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Guest from "../../Layout/Guest";

const Register = () => {
    return (
        <div className="card">
            <div className="card-header text-center">
                <h5>Register New Account</h5>
            </div>
            <div className="card-body">
                <form>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >
                            Username
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
            <div className="card-footer text-muted">
                Have account ?{" "}
                <Link href={route("login")} className="text-decoration-none">
                    Login here !
                </Link>
            </div>
        </div>
    );
};

Register.layout = (page) => <Guest children={page} title="Register" />;

export default Register;
