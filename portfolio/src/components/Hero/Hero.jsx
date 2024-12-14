import './hero.css';
// import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import linkedinpic from '../../assets/linkedin.png'

export default function Hero() {
    // const texts = ["Prayush Hada", "Student", "Developer", "Security Researcher", "CTF Player"];
    // const [currentTextIndex, setCurrentTextIndex] = useState(0);
    // const [displayedText, setDisplayedText] = useState("");
    // const [isDeleting, setIsDeleting] = useState(false);

    // useEffect(() => {
    //     const currentText = texts[currentTextIndex];
    //     let typingSpeed = 500;

    //       if (isDeleting) {
    //         typingSpeed = 50; // Faster speed when deleting
    //       }

    //     const timeout = setTimeout(() => {
    //         if (!isDeleting) {
    //             // Typing
    //             setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
    //             if (displayedText === currentText) {
    //                 setIsDeleting(true);
    //                 typingSpeed = 3000; // Pause before deleting
    //             }
    //         } else {
    //             // Backspacing
    //             setDisplayedText((prev) => currentText.slice(0, prev.length - 1));
    //             if (displayedText === "") {
    //                 setIsDeleting(false);
    //                 setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    //             }
    //         }
    //     }, typingSpeed);

    //     return () => clearTimeout(timeout); // Cleanup timeout
    // }, [displayedText, isDeleting, currentTextIndex, texts]);



    return (
        <>
            <section aria-label="section" className="jarallax no-top no-bottom .background-section" style={{ zIndex: 0 }}>
                <div className="v-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-log-10">
                                <h5 className="welcome wow fadeInUp animated">
                                    Welcome
                                </h5>
                                <div className="spacer-10"></div>
                                <div className="text-changer h1_big fadeInup animated">
                                    <span>I'm {''}</span><br />
                                    <div className="dynamic-text">
                                        <TypeAnimation
                                            sequence={[
                                                "Prayush Hada", 2000,
                                                "Student", 2000,
                                                "Developer", 2000,
                                                "Security Researcher", 2000,
                                                "CTF Player", 2000,
                                            ]}
                                            wrapper='span'
                                            cursor={true}
                                            repeat={Infinity}
                                        />
                                    </div>
                                </div>
                                <p className="lead wow fadeInUp animated">
                                    An IT enthusiast studying in Nepal
                                </p>
                            </div>
                            <div className="info col-lg-2">
                                <h6>Let's Work Together</h6>
                                I'am available at
                                <br />
                                <a href="reachprayush@gmail.com" className="text text-decoration-none fw-bold">reachprayush@gmail.com</a>
                                <br />
                                +977-9841281920
                                <div className="spacer-single"></div>
                                <div className="social-icons-hero">
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
                </div>
            </section>
        </>
    )
}