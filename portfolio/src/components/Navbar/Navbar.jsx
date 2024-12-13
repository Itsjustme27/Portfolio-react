import React from "react";
import { Link } from "react-router";

export default function Navbar() {
    return (
        <div className="wrapper">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to={"/"} className="nav-link active">Home</Link>
                            <Link to={"/about"} className="nav-link active">About</Link>
                            <Link to={"/contact"} className="nav-link active">Contact</Link>
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}