import React from "react";
import './footer.css';

export default function Footer() {
    return (
        <>
            <footer className="footer-container ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <a href="index.html">
                                <span className="copy">© Copyright 2024 - Prayush Hada</span>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/prayush-hada-6b0357277/">
                                    <i className="fa-brands fa-linkedin" style={{ fontSize: "30px", color: "#0077B5", marginRight: "10px" }}>
                                    </i>
                                </a>
                                <a href="https://github.com/Itsjustme27">
                                    <i className="fa-brands fa-github" style={{ fontSize: "30px", color: "#0077B5" }}>
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}