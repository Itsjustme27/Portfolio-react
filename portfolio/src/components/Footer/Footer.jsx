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
                                <a href="#">
                                    <i className="fa fa-linkedin">
                                        
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