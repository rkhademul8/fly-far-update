import React from 'react';

import logo from '../../image/image 22.png'

import './Navbar.css'


const Navbar = () => {
    return (
        <div className='container overflow-hidden nav-margin-bottom '>

            <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"> <img style={{ width: '100px', height: '40px' }} src={logo}></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav nav_cus me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>

                        </ul>
                        <form class="d-flex">

                            <button class="btn btn-outline-success me-2 register-btn " type="submit">Regester Now</button>
                            <button style={{ padding: '0px 30px' }} class="btn btn-outline-success signin-btn" type="submit">Sign in</button>
                        </form>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Navbar;