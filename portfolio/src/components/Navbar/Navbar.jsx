import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

export default function Navbar() {
    return (
        <div className="wrapper .background-section">
            <nav className="navbar navbar-expand-lg text-light">
                <div className="container-fluid" >
                    <a className="navbar-brand title text-light" href="#">Itsjustme</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center text-light" id="navbarNavAltMarkup">
                        <div className="navbar-nav nav-items gap-3">
                            <Link to={"/"} className="nav-link active text-light">Home</Link>
                            <Link to={"/about"} className="nav-link text-light">About</Link>
                            <Link to={"/contact"} className="nav-link text-light">Contact</Link>
                            <a className="nav-link disabled text-light" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}