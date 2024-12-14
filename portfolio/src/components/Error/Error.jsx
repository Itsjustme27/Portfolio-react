import Navbar from '../Navbar/Navbar';
import './error.css';
import error_pic from '../../assets/errorpic.png';
import Footer from '../Footer/Footer';

export default function Error() {
    return (
        <>
            <Navbar />
            <div className="error-body">
                <div className="error-section">
                    <div className="error-container">
                        <img src={error_pic} className='img-fluid'/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}