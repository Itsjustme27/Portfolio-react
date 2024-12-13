import './hero.css';
import React, { useState, useEffect } from 'react';
export default function Hero() {
    const texts = ["Prayush Hada", "Student", "Developer", "Security Researcher", "CTF Player"];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[currentTextIndex];
        let typingSpeed = 100;

        //   if (isDeleting) {
        //     typingSpeed = 50; // Faster speed when deleting
        //   }

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
                if (displayedText === currentText) {
                    setIsDeleting(true);
                    typingSpeed = 100; // Pause before deleting
                }
            } else {
                // Backspacing
                setDisplayedText((prev) => currentText.slice(0, prev.length - 1));
                if (displayedText === "") {
                    setIsDeleting(false);
                    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout); // Cleanup timeout
    }, [displayedText, isDeleting, currentTextIndex, texts]);

    return (
        <>
            <section aria-label="section" className="jarallax no-top no-bottom" style={{ zIndex: 0 }}>
                <div className="v-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-log-10">
                                <h5 className="wow fadeInUp animated">
                                    Welcome
                                </h5>
                                <div className="spacer-10"></div>
                                <div className="text-changer h1_big">
                                    <span>I'm</span><br />
                                    <div className="dynamic-text">{displayedText}</div>
                                    <span className="blinking-cursor">|</span>
                                </div>
                            </div>
                            <div className="col-lg-2">
                                <h6>Let's Work Together</h6>
                                I'am available at
                                <br />
                                <a href="reachprayush@gmail.com" className="text-light">reachprayush@gmail.com</a>
                                <br />
                                "+977-9841281920"
                                <div className="spacer-single"></div>
                                <div className="social-icons">
                                    <a href="www.linkedin.com">
                                        <i className="fa fa-linkedin" style={{ fontSize: "24px", color: "#0077B5" }}></i>
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