/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './index.css'

function App() {
    // State to manage navbar open/close
    const [isMenuOpen, setMenuOpen] = useState(false);

    // Function to toggle the navbar
    const toggleNavbar = () => {
      setMenuOpen(prevState => !prevState);
    };
  
    // Function to close the navbar
    const closeNavbar = () => {
      setMenuOpen(false);
    };
  
    // Effect to handle scroll events
    useEffect(() => {
      const handleScroll = () => {
        if (isMenuOpen) {
          closeNavbar();
        }
      };
  
      // Add event listener for scroll
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isMenuOpen]); // Depend on isMenuOpen to ensure correct state
  
    return (
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png"
                className="food-munch-logo"
                alt="Food Munch Logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNavbar} // Use toggle function
              aria-controls="navbarNavAltMarkup"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
              <div className="navbar-nav ml-auto">
                <a className="nav-link active" id="navItem1" href="#wcuSection" onClick={closeNavbar}>
                  Why Choose Us? <span className="sr-only">(current)</span>
                </a>
                <a className="nav-link" href="#exploreMenuSection" id="navItem2" onClick={closeNavbar}>
                  Explore Menu
                </a>
                <a className="nav-link" href="#deliveryPaymentSection" id="navItem3" onClick={closeNavbar}>
                  Delivery & Payment
                </a>
                <a className="nav-link" href="#followUsSection" id="navItem4" onClick={closeNavbar}>
                  Follow Us
                </a>
              </div>
            </div>
          </div>
        </nav>

      {/* Banner Section */}
      <div className="banner-section-bg-container d-flex justify-content-center flex-column">
        <div className="text-center">
          <h1 className="banner-heading mb-3">Get Delicious Food Anytime</h1>
          <p className="banner-caption mb-4">Eat Smart & Healthy</p>
          <button className="custom-button">View Menu</button>
          <button className="custom-outline-button">Order Now</button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="wcu-section pt-5 pb-5" id="wcuSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="wcu-section-heading">Why Choose Us?</h1>
              <p className="wcu-section-description">
                We use both original recipes and classic versions of famous food items.
              </p>
            </div>

            <div className="col-12 col-md-4">
              <div className="wcu-card p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png"
                  className="wcu-card-image"
                  alt="Food Service"
                />
                <h1 className="wcu-card-title mt-3">Food Service</h1>
                <p className="wcu-card-description">
                  Experience fine dining at the comfort of your home. All our orders are
                  carefully packed and arranged to give you nothing less than perfect.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="wcu-card p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png"
                  className="wcu-card-image"
                  alt="Fresh Food"
                />
                <h1 className="wcu-card-title mt-3">Fresh Food</h1>
                <p className="wcu-card-description">
                  The Fresh Food group provides fresh-cut fruits and vegetables directly
                  picked from our partner farms and farmhouses so that you always get them
                  from tree to plate.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="wcu-card p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png"
                  className="wcu-card-image"
                  alt="Best Offers"
                />
                <h1 className="wcu-card-title mt-3">Best Offers</h1>
                <p className="wcu-card-description">
                  Food Coupons & Offers up to <span className="offers">50% OFF</span> and
                  Exclusive Promo Codes on All Online Food Orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Menu Section */}
      <div className="explore-menu-section pt-5 pb-5" id="exploreMenuSection">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="menu-section-heading">Explore Menu</h1>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="shadow menu-item-card p-3 mb-3">
                <img
                  src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-ginger-fried-img.png"
                  className="menu-item-image w-100"
                  alt="Non-Veg Starters"
                />
                <h1 className="menu-card-title">Non-Veg Starters</h1>
                <a href className="menu-item-link">
                  View All{" "}
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-3">
                    <div class="shadow menu-item-card p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Veg Starters</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Soups</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Fish & Sea food</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="menu-item-card shadow p-3 mb-3">
                        // eslint-disable-next-line jsx-a11y/alt-text
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Main Course</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Noodles</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Salads</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3">
                    <div class="menu-item-card shadow p-3 mb-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png" class="menu-item-image w-100" />
                        <h1 class="menu-card-title">Desserts</h1>
                        <a class="menu-item-link">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            {/* Repeat similar blocks for other menu categories */}
          </div>
        </div>
      </div>

      {/* Healthy Food Section */}
      <div className="healthy-food-section pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5">
                    <div className="text-center">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png" className="healthy-food-section-img" />
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <h1 className="healthy-food-section-heading">
                        Fresh, Healthy, Organic, Delicious Fruits
                    </h1>
                    <p className="healthy-food-section-description">
                        Say no to harmful chemicals and go fully organic with our range of
                        fresh fruits and veggies. Pamper your body and your senses with
                        the true and unadulterated gifts from mother nature. with the true
                        and unadulterated gifts from mother nature.
                    </p>
                    <button className="custom-button">Watch Video</button>
                </div>
            </div>
        </div>
        </div>

        {/* Delivery And Payment Section */}
        <div className="delivery-and-payment-section pt-5 pb-5" id="deliveryPaymentSection">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 order-1 order-md-2">
                    <div className="text-center">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png" className="delivery-and-payment-section-img" />
                    </div>
                </div>
                <div className="col-12 col-md-7 order-2 order-md-1">
                    <h1 className="delivery-and-payment-section-heading">
                        Delivery and Payment
                    </h1>
                    <p className="delivery-and-payment-section-description">
                        Enjoy hassle-free payment with the plenitude of payment options
                        available for you. Get live tracking and locate your food on a
                        live map. It's quite a sight to see your food arrive to your door.
                        Plus, you get a 5% discount on every order every time you pay
                        online.
                    </p>
                    <button className="custom-button">Order Now</button>
                    <div className="mt-3">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png" className="payment-card-img" />
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png" className="payment-card-img" />
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png" className="payment-card-img" />
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png" className="payment-card-img" />
                    </div>
                </div>
            </div>
        </div>
        </div>

        {/* Thanking Customer Section */}
        <div className="thanking-customers-section pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-7 d-flex flex-column justify-content-center">
                    <h1 className="thanking-customers-section-heading">
                        Thank you for being a valuable customer to us.
                    </h1>
                    <p className="thanking-customers-section-description">
                        We have a surprise gift for you
                    </p>
                    <div className="d-md-none">
                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" className="thanking-customers-section-img" />
                    </div>
                    <div>
                        
                        <button type="button" className="custom-button" data-toggle="modal" data-target="#exampleModal">
                            Redeem Gift
                        </button>

                        
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog mt-5">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Gift Vocher</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/gift-voucher-img.png" className="w-100" />
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-5 d-none d-md-block">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/thanking-customers-section-img.png" className="thanking-customers-section-img" />
                </div>
            </div>
        </div>
        </div>

        {/* Follow Us Section */}
        <div className="follow-us-section pt-5 pb-5" id="followUsSection">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="follow-us-section-heading">Follow Us</h1>
                </div>
                <div className="col-12">
                    <div className="d-flex flex-row justify-content-center">
                        <div className="follow-us-icon-container">
                            <i className="fab fa-twitter icon"></i>
                        </div>
                        <div className="follow-us-icon-container">
                            <i className="fab fa-instagram icon"></i>
                        </div>
                        <div className="follow-us-icon-container">
                            <i className="fab fa-facebook icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        {/* Footer Section */}
        <div className="footer-section pt-5 pb-5">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png" className="food-munch-logo" />
                    <h1 className="footer-section-mail-id">orderfood@foodmunch.com</h1>
                    <p className="footer-section-address">
                        123 Ayur Vigyan Nagar, New Delhi, India.
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default App;
