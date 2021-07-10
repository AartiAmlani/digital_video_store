import React from 'react'
import "../assets/css/footer.css";
import SocialMedia from "../assets/images/SocialMedia.jpg";
import appstore from "../assets/images/appstore.png";
import googlePlay from "../assets/images/googlePlay.png";
import microsoft from "../assets/images/microsoft.png";
const Footer = () => {
    return (
        <footer>
        <div className="footercontainer">
            <div className="row">
                <div>
                    <li> <a href="https://www.appstore.com"><img src={appstore} alt="" height="60" width="100" /> </a> </li>
                    <li> <a href="https://www.google.com"><img src={googlePlay} alt="" height="60" width="100" /> </a> </li>
                    <li> <a href="https://www.microsoft.com"><img src={microsoft} alt="" height="60" width="100" /> </a> </li>
                </div>
                <div className="Menufooter" >
                    <h6>Watch</h6>
                    <ul className="footer-links">
                        <li>
                            <a href="/">Spotlights</a>

                        </li>
                        <li>
                            <a href="/"> Movies</a>

                        </li>
                        <li>
                            <a href="/"> TV </a>

                        </li>
                        <li>

                            <a href="/">Free</a>

                        </li>
                    </ul>
                </div>

                <div className="Menufooter" >
                    <h6>My account</h6>
                    <ul className="footer-links">
                        <li>

                            <a href="/">My VUDU</a>

                        </li>
                        <li>

                            <a href="/"> Account</a>

                        </li>
                        <li>

                            <a href="/">Settings</a>

                        </li>
                        <li>

                            <a href="/">Manage Device</a>

                        </li>
                    </ul>
                </div>
                <div className="Menufooter" >
                    <h6>Features</h6>
                    <ul className="footer-links">
                        <li>

                            <a href="/">Lists</a>

                        </li>
                        <li>

                            <a href="/"> Family</a>

                        </li>
                        <li>

                            <a href="/">Disc to Digital</a>

                        </li>
                        <li>

                            <a href="/">Insta Watch</a>

                        </li>
                        <li>

                            <a href="/">Movies anywhere</a>

                        </li>
                    </ul>
                </div>
                <div className="Menufooter" >
                    <h6>Help</h6>
                    <ul className="footer-links">
                        <li>

                            <a href="/">About Us</a>

                        </li>
                        <li>

                            <a href="/"> Devices</a>

                        </li>
                        <li>

                            <a href="/">Support</a>

                        </li>
                        <li>

                            <a href="/">Forums</a>

                        </li>
                        <li>

                            <a href="/">Contact US</a>

                        </li>
                        <li>

                            <a href="/">Jobs</a>

                        </li>
                    </ul>
                    <ul className="social-icons">

                    <li> <a href="https://www.facebook.com"><img src={SocialMedia} alt="" height="60" width="100" /> </a> </li>
                </ul>
                </div>

            </div>
          
        

       </div>
    </footer>
    )
}

export default Footer
