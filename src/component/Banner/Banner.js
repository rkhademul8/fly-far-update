import React from 'react';
import banner from '../../image/banner.png'
import './Banner.css'


const bgbanner = {
    backgroundImage: `url(${banner})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",

}



const Banner = () => {

    return (
        <section className='container'>

            <div style={bgbanner}>


                <div class="container  banner-Content">
                    <div class="row">
                        <div class="col-lg-5 content-banner">

                            <h1 >One Platform, All <br></br>  Travel Solutions.</h1>

                            <p >Bangladesh’s most comprehensive B2B portal for You. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on.</p>

                            <button class="btn btn-outline-success signin-btn" type="submit">Register Now as a Agent </button>

                        </div>
                        <div class="col-lg-7"></div>
                    </div>
                </div>




            </div>


            <div className='contact shadow '>

                {/* <p>One Way  <span>Round trip</span>   Multi-City</p> */}


                <div class="row contact-conatent ">
                    <div class="col">
                        <p>One Way </p>
                    </div>
                    <div class="col cus-col">
                        <span className='round' style={{ color: '#003566;' }}>Round trip</span>
                    </div>
                    <div class="col">
                        <p>One Way </p>
                    </div>

                </div>


                <div className='input-field'>

                    <input type="text" />
                    <input type="text" />
                    
                    <input type="date" />
                    <input type="date" />
                    <input type="text" />


                </div>

            </div>

            <div className='text-center flight-btn'>
                <button class="btn btn-outline-success signin-btn rounded-pill" type="submit">Search Flight </button>
                </div>


        </section >
    );
};

export default Banner;