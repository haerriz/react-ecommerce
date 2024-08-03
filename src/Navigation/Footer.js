import '../Styles/footer.css';

const Footer =()=>{
    return (
        <>
            <p className="footerNew">This is a Footer</p>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-row">
                        <div className="footer-col">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Get Help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="#">Order Status</a></li>
                                <li><a href="#">Payment Options</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Online Shop</h4>
                            <ul>
                                <li><a href="#">T-Shirts</a></li>
                                <li><a href="#">Mugs</a></li>
                                <li><a href="#">Mobile Cases</a></li>
                                <li><a href="#">Hats</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow Us</h4>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
