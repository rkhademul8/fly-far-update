import React from 'react';
import banner from '../../image/banner.png'
import './Banner.css'
import { BsSearch } from "react-icons/bs";

const bgbanner = {
    backgroundImage: `url(${banner})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: "10px",

}



const Banner = () => {

    return (
        <section className='container  '>

            <div style={bgbanner}>


                <div class="container  banner-Content ">
                    <div class="row">
                        <div class="col-lg-5 content-banner">

                            <h1 >One Platform, All <br></br>  Travel Solutions.</h1>

                            <p >Bangladesh’s most comprehensive B2B portal for You. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.</p>

                            <div className='banner-btn'><button class="btn btn-outline-success signin-btn" type="submit">Register Now as a Agent </button></div>

                        </div>
                        <div class="col-lg-7"></div>
                    </div>
                </div>




            </div>


            <div className='contact shadow '>

                {/* <p>One Way  <span>Round trip</span>   Multi-City</p> */}


                <div class="row contact-conatent ">
                    <div class="col p-0">
                        <p>One Way </p>
                    </div>
                    <div class="col cus-col p-0">
                        <span className='round' style={{ color: '#003566;' }}>Round trip</span>
                    </div>
                    <div class="col p-0">
                        <p>Multi-City</p>
                    </div>

                </div>


                <div className='input-field'>

                    <div class="row d-flex justify-content-center input-field-left">
                        <div class="  col-12 col-md-6 col-lg-2 ">
                            <label>From</label> <br />
                            <input disabled type="text" placeholder='Enter city/ airport name' />
                        </div>
                        <div class="col-12 col-md-6 col-lg-2 ">
                            <label>To</label> <br />
                            <input disabled type="text" placeholder='Enter city/ airport name' />
                        </div>
                        <div class="col-12 col-md-6 col-lg-2 ">
                            <label>Departure Date</label><br />
                            <input disabled type="text" placeholder='Departure Date' />
                        </div>
                        <div class="col-12 col-md-6 col-lg-2 ">
                            <label>Returning Date</label> <br />
                            <input disabled type="text" placeholder='Returning Date' />
                        </div>
                        <div class="col-12 col-md-6 col-lg-2 p-0 passenger-input">
                            <label>Passenger & Class</label>
                            <input disabled type="text" placeholder='Economy Class' />
                        </div>
                    </div>



                </div>

            </div>

            <div className='text-center flight-btn'>

                {/* <button disabled class=" btn btn-outline-success signin-btn rounded-pill" type="submit">Search Flight </button> */}
                <a disabled className='search-btn'> <BsSearch /> Search Flight</a>

            </div>


        </section >
    );
};

export default Banner;