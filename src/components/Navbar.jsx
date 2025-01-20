import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
// import { MdFlight } from "react-icons/md";
import { MdFlightTakeoff } from "react-icons/md";


import { IoHome } from "react-icons/io5";

import Footer from "./Footer";
const FlightNavbar = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand-lg bg-warning sticky-top ">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item fs-3">
                        <Link className="nav-link" to="/"><IoHome className="fs-2" /></Link>
                    </li>
                    <li className="nav-item fs-5 ps-3">
                        <Link className="nav-link" to="flights"><MdFlightTakeoff className="fs-2" />Search</Link>
                    </li>
                </ul>

                <div className="container d-flex justify-content-center">
                    <img src="/assets/logo.jpg" alt="logo" width="50"
                        height="50"
                        className="rounded-circle d-inline-block align-text-top " />
                        <strong className="ms-2 fs-3" style={{fontFamily:'cursive'}}>Flight App</strong> 
                </div>

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">

                        <Link className="nav-link" to="contacts"><MdOutlineContactPhone className="fs-2"/>Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login"><FaUser className="fs-4"/>Login
                        </Link>
                    </li>


                </ul>

            </nav>
            <main className="flex-grow-1">
                <Outlet />
            </main>

            <Footer />
        </div>
    )



}

export default FlightNavbar;