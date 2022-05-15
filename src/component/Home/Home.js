import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './Home.css'


import offer1 from '../../image/offer1.png'
import computer_img from '../../image/Group 1737.png'
import agent from '../../image/Group 1752.png'
import ceoBg from '../../image/Group_1777.png'
import ceoImg from '../../image/Group_1756.png'
import visa from '../../image/visa.png'
import travel from '../../image/travel.png'
import covid from '../../image/covid.png'
import Footer from '../Footer/Footer';
import Carousel from '../Carousel/Carousel';




const ceo_bg = {
    backgroundImage: `url(${ceoBg})`,
    backgroundPosition: 'center',


}


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Carousel></Carousel>

            {/* offering part start */}

            <section className='container pe-0'>
                <div className='text-center offer-content'>
                    <p>Our Service</p>
                    <h1 className='mb-5'>What We Are Offering?</h1>
                </div>

                {/* row-cols-1  row-cols-md-4 g-4 */}

                <div class="row  ">
                    <div class=" col-12 col-md-6 col-lg-3 mb-3">
                        <div class="card border-0">
                            <img src={visa} class="card-img-top img-size" alt="..." />
                            <div class="card-body text-center offering-content">
                                <h5 class="card-title">Visa Processing</h5>
                                <p class="card-text">When your visa is approved, the interviewing officer will skeep your passport and documents for a.</p>
                            </div>
                        </div>
                    </div>
                    <div class=" col-12 col-md-6 col-lg-3 mb-3">
                        <div class="card border-0">
                            <img src={offer1} class="card-img-top img-size" alt="..." />
                            <div class="card-body text-center offering-content">
                                <h5 class="card-title">Travell Assistancy</h5>
                                <p class="card-text">When your visa is approved, the interviewing officer will skeep your passport and documents for a.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mb-3">
                        <div class="card border-0">
                            <img src={travel} class="card-img-top img-size" alt="..." />
                            <div class="card-body text-center offering-content">
                                <h5 class="card-title">Air Ticket</h5>
                                <p class="card-text">When your visa is approved, the interviewing officer will skeep your passport and documents for a.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3 mb-3">
                        <div class="card border-0">
                            <img src={covid} class="card-img-top img-size" alt="..." />
                            <div class="card-body text-center offering-content">
                                <h5 class="card-title">Covid Test</h5>
                                <p class="card-text">When your visa is approved, the interviewing officer will skeep your passport and documents for a.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* offering part end */}





            {/* air ticket buy start */}


            <div class="container mt-5 mb-5">

                <div class="row d-flex  align-items-center">
                    <div class="col-12 col-md-6 mb-5 internation-content">

                        <span>Our Special Service</span>
                        <h1>Buy Air Ticket With <b>Lowest Price.</b> </h1>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

                        <div className='service-btn'>
                            <button class="btn btn-outline-success signin-btn" type="submit">Get My Ticket Now</button>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">


                        <img src={computer_img} className="img-fluid" alt="..." />


                    </div>
                </div>
            </div>

            {/* air ticket buy end */}




            {/*  far international start */}

            <div class="container">

                <div class="row d-flex  align-items-center">

                    <div class="col-12 col-md-6  mb-5">

                        <div className='row'>
                            <div class="col-5  col-lg-5 agent_parent">
                                <div className='agent'>
                                    <h3>120+ Agent</h3>
                                    <span className='cus_P'>Permanent</span>
                                </div>
                            </div>
                            <div class="col-7  col-lg-6">
                                <div className='int_customers'>
                                    <h3> 10,250+</h3>
                                    <span className='cus_P'>Customers</span>
                                </div>
                            </div>
                        </div>
                        <div className='row row-round'>

                            <div class="col-7  col-lg-6">
                                <div className='int_customers direct_contact'>
                                    <h3> 10,250+</h3>
                                    <span className='cus_P'>Customers</span>
                                </div>
                            </div>

                            <div class="col-5 col-lg-5 agent_parent">
                                <div className='agent agent_last'>
                                    <h3>120+ Agent</h3>
                                    <span className='cus_P'>Permanent</span>
                                </div>
                            </div>
                        </div>


                        




                    </div>

                    <div class="col-12 col-md-6 internation-content">
                        <span>Why choice us?</span>
                        <h1>Why Fly Far International?</h1>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</p>

                        <div className='explore-btn'> <button class="btn btn-outline-success signin-btn" type="submit">Explore More</button></div>
                    </div>

                </div>
            </div>

            {/*  far international end */}



            {/* ceo part start */}

            <div style={ceo_bg} className='ceo_parent' >

                <div className='container  '>

                    <div className='ceo'>
                        <div class="row d-flex align-items-center  ">
                            <div class=" col-12 col-md-3">
                                <div className='text-center'><img class="img-fluid" src={ceoImg} /></div>
                            </div>
                            <div class=" col-12 col-md-9 ceo-content">
                                <h1>From The Desk Of CEO!</h1>
                                <p>Dear Respected Partner, <br />
                                    First of all, I'd like to say a massive thank you for the continued support you offer to TBO. With your help, the business continues to grow in all product sectors, and I am sure that you have experienced a fruitful and profitable season too.  <a href='#'>Read more</a> </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* ceo part end */}




            <Footer></Footer>

        </div>
    );
};

export default Home;