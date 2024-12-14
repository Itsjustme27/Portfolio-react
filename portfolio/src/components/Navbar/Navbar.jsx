import React from "react";
import { Link } from "react-router";
import './navbar.css'

export default function Navbar() {
    return (
        <div className="wrapper .background-section">
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand title" href="#">Itsjustme</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav nav-items gap-3">
                            <Link to={"/"} className="nav-link active ">Home</Link>
                            <Link to={"/about"} className="nav-link">About</Link>
                            <Link to={"/contact"} className="nav-link">Contact</Link>
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}