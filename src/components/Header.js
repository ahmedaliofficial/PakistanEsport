import React from "react";

const Header = ()=>{
    
    return(
        <header id="header-section">
        <div class="overlay">
            <div class="container">
                <div class="row d-flex header-area">
                    <div class="logo-section flex-grow-1 d-flex align-items-center">
                        <a class="site-logo site-title" href="index.html"><img src="assets/images/logo.png"
                                alt="site-logo" /></a>
                    </div>
                    <button class="navbar-toggler ml-auto collapsed" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i>
                    </button>
                    <nav class="navbar navbar-expand-lg p-0">
                        <div class="navbar-collapse collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav main-menu ml-auto">
                                <li><a href="index.html" class="active">Home</a></li>
                                <li class="menu_has_children"><a href="#0">Tournaments</a>
                                    <ul class="sub-menu">
                                        <li><a href="tournaments.html">Tournaments</a></li>
                                        <li><a href="tournaments-single.html">Tournaments Single</a></li>
                                    </ul>
                                </li>
                                <li class="menu_has_children"><a href="#0">Pages</a>
                                    <ul class="sub-menu">
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="shop.html">Shop</a></li>
                                        <li><a href="shop-details.html">Shop Details</a></li>
                                        <li><a href="profile.html">Profile</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="check-out.html">Check Out</a></li>
                                        <li><a href="features.html">Features</a></li>
                                        <li><a href="error.html">Error</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div class="right-area header-action d-flex align-items-center">
                        <div class="search-icon">
                            <a href="#"><img src="assets/images/search_btn.png" alt="icon" /></a>
                        </div>
                        <div class="lang d-flex align-items-center">
                            <select>
                                <option value="1">EN</option>
                                <option value="2">BN</option>
                                <option value="3">ES</option>
                                <option value="4">NL</option>
                            </select>
                        </div>
                        <a href="login.html" class="login-btn">Login</a>
                        <a href="registration.html" class="cmn-btn">Join Now!</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Header