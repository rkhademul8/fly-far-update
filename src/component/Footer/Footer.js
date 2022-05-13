import React from 'react';
import logo from '../../image/image 22.png'
import './Footer.css'
import fb from '../../image/facebook.png'
import youtube from '../../image/youtube.png'
import gmail from '../../image/gmail.png'
import iata from '../../image/IATA_logo1.png'
import payment from '../../image/payment.png'



const Footer = () => {
    return (
        <div className='footer-parent'>
           <section className='footer-body'>
           <div class="container">
                <div class="row ">
                    <div class="col-12 col-md-6 col-lg-3 footer-logo">

                        <img src={logo} />

                        <p className='py-3'>
                            Cheap International Flights. Book Tickets from 600+ Airlines on CheapOair®. Airlines, Dates and Prices in One Go. Search, Compare & Book Now on CheapOair®. Price Match Promise.
                        </p>
                        <div className='social_img'>
                            <img src={fb} />
                            <img src={youtube} />
                            <img src={gmail} />
                        </div>

                    </div>

                    <div class="col-12 col-md-6 col-lg-3 company-content">
                        <h5>Company</h5>
                        <p>Payment Mathod</p>
                        <p>Terms and condition</p>
                        <p>Privacy policy</p>

                    </div>

                    <div class="col-12 col-md-6 col-lg-3 company-content">
                        <h5>Authorised by</h5>
                        <img src={iata} />
                    </div>

                    <div class="col-12 col-md-6 col-lg-3 company-content">
                        <h5>Send us massage via Email</h5>

                        <input></input>
                        <button class="btn btn-outline-success signin-btn mt-3" type="submit">SUBSCRIBE</button>
                    </div>
                </div>
            </div>



            {/* payment bannner */}
            <div className='container mt-5 mb-5'>

                <img src={payment} className="img-fluid" alt="..." />

            </div>

            {/* payment bannner end */}

            <div className=' footer-reserve'>
                <p>@All Right Reserved By Fly Far International & Developed By FLy Far Tech</p>
            </div>
           </section>
        </div >
    );
};

export default Footer;