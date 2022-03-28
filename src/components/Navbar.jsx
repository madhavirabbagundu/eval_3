import React from "react";
import { Link } from "react-router-dom"
export const Navbar = () =>{
    return <div>
        <Link to = "/Home">Home</Link>
        <Link to = "/Register">Register</Link>
        <Link to = "/Login">Login</Link>
        <Link to = "/Products">Products</Link>
        {/* <Link to = "/about">about</Link> */}
    </div>
}