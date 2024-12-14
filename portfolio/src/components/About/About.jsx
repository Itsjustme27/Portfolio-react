import './about.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import pic from '../../assets/1.jpg'

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-body">
                <div className="about-section">
                    <div className="container" >
                        <div className="row">
                            <div className="col-lg-10 wow fadeInup animated">
                                <h5 className="about-title wow fadeInUp animated">
                                    About Me
                                </h5>
                                <h2 className="greetings wow fadeInUp animated">
                                    Greetings!
                                </h2>
                            </div>
                        </div>
                        <div className="spacer-single"></div>
                        <div className="img-container row gx-5 align-items-center">
                            <div className="col-lg-6 mb-sm-10">
                                <figure className="cap-front overflow-hidden skrollable skrollable-between">
                                    <img src={pic} alt="pic" className='img-fluid fadeInUp animated' />
                                </figure>
                            </div>
                            <div className="col-lg-6 wow fadeInUp animated">
                                <p>
                                    A passionate developer, IT enthusiast, and aspiring cybersecurity enthusiast. I thrive on solving problems, building creative solutions, and exploring the intersection of technology and security.

                                    With hands-on experience in tools like ReactJS, TypeScript, Linux, and Python, I specialize in building secure, efficient applications. </p>

                                <p>My journey in tech began during my studies in IT, and I've been continuously learning ever since—participating in events like TryHackMe's Advent of Cyber and solving CTF challenges to hone my skills.

                                    I aim to bridge the gap between development and cybersecurity by creating systems that are both functional and secure. When I'm not coding or studying, I enjoy music, puzzles, and sharing knowledge with my peers.

                                    If you're looking for someone who loves challenges, innovation, and security, let's connect! Reach out to me via email or LinkedIn.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}