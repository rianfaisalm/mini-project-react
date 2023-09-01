import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around"}}>
            <Link to={"/register"}>
                <h2>Register</h2>
            </Link>
            <Link to={"/"}>
                <h2>Home</h2>
            </Link>
            <Link to={"/login"}>
                <h2>Login</h2>
            </Link>
        </div>
    );
};

export default Navbar;