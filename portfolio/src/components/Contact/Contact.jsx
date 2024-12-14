import './contact.css';
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer"

export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="contact-body">
                <div className="contact-section">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-6">
                                <h5 className="contact-title wow fadeInUp animated">
                                    Contact Me
                                </h5>
                                <h2 className="contact-header wow fadeInUp animated">
                                    Let's make this digital world secure
                                </h2>
                            </div>
                            <div className="spacer-single"></div>
                            <div className="form-section col-md-8 mb-sm-30 wow fadeInUp animated">
                                <div className="contact_form_wrapper">
                                    <form action="#" name="contactForm" id='contact_form' className='form-default'>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="fieldset">
                                                    <input type="text" name="Name" id="name" className='form-control' placeholder='Your Name' required />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="fieldset">
                                                    <input type="email" name="Email" id="email" className='form-control' placeholder='Your Email' required/>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="fieldset">
                                                    <input type="number" name="Phone" id="phone" className='form-control' placeholder='Your Phone' required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field-set">
                                            <textarea name="message" id="message" className="form-control mt-2" rows="10" placeholder='Your Message' required></textarea>
                                        </div>
                                        <div className="submit mt-5">
                                            <input type="submit" value="Submit" className='btn btn-success' />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}