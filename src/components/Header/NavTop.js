import React from 'react';
import './NavTop.css';
//import logo from '../logo-new.jpg';

function Header() {
    return (
        <div className="header">
            <div className="top-nav">
               
  <a href="/"   className="border-h" aria-label="Amazon Clone">
 <span className="nav-logo">    </span>
  </a>

             
              
        {/** <img className="logo" src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"  width="97" height="30" alt="amazon logo blue background"/>**/}
     

           <div id="del-country" className="border-h">
               <div className="wrapper" >
         <span id='pin-icon'></span>
          </div>
          <div className="wrapper">
               <span className="">Deliver to </span>
               <span className="">South Africa</span>
          </div>
             
           </div>

           <div className="wrapper-search">

          
           <div id="wrapper-search">
              
               <select aria-describedby="searchDropdownDescription" class="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown" data-nav-digest="" data-nav-selected="0" id="searchDropdownBox" name="url" tabindex="0" title="Search in">
        <option selected="selected" value="search-alias=aps">All</option>
        <option value="search-alias=arts-crafts-intl-ship">Arts &amp; Crafts</option>
        <option value="search-alias=automotive-intl-ship">Automotive</option>
        <option value="search-alias=baby-products-intl-ship">Baby</option>
        <option value="search-alias=beauty-intl-ship">Beauty &amp; Personal Care</option>
        <option value="search-alias=stripbooks-intl-ship">Books</option>
        <option value="search-alias=computers-intl-ship">Computers</option>
        <option value="search-alias=digital-music">Digital Music</option>
        <option value="search-alias=electronics-intl-ship">Electronics</option>
        <option value="search-alias=digital-text">Kindle Store</option>
        <option value="search-alias=instant-video">Prime Video</option>
        <option value="search-alias=fashion-womens-intl-ship">Women's Fashion</option>
        <option value="search-alias=fashion-mens-intl-ship">Men's Fashion</option>
        <option value="search-alias=fashion-girls-intl-ship">Girls' Fashion</option>
        <option value="search-alias=fashion-boys-intl-ship">Boys' Fashion</option>
        <option value="search-alias=deals-intl-ship">Deals</option>
        <option value="search-alias=hpc-intl-ship">Health &amp; Household</option>
        <option value="search-alias=kitchen-intl-ship">Home &amp; Kitchen</option>
        <option value="search-alias=industrial-intl-ship">Industrial &amp; Scientific</option>
        <option value="search-alias=luggage-intl-ship">Luggage</option>
        <option value="search-alias=movies-tv-intl-ship">Movies &amp; TV</option>
        <option value="search-alias=music-intl-ship">Music, CDs &amp; Vinyl</option>
        <option value="search-alias=pets-intl-ship">Pet Supplies</option>
        <option value="search-alias=software-intl-ship">Software</option>
        <option value="search-alias=sporting-intl-ship">Sports &amp; Outdoors</option>
        <option value="search-alias=tools-intl-ship">Tools &amp; Home Improvement</option>
        <option value="search-alias=toys-and-games-intl-ship">Toys &amp; Games</option>
        <option value="search-alias=videogames-intl-ship">Video Games</option>
    </select>
    
           </div>
           <div className="wrapper-search">
              <input/>
          </div>
           <div className="wrapper-search">
               <div className="outer-search">
                   <span className="search-icon"></span>
               </div>
           </div>
               <div id="del-country" className="border-h">
            
          <div className="wrapper">
               <span className="">Hello, Sign in </span>
               <span className="">Account & Lists <span className="arrow-down">&#9660;</span></span>
          </div>
         
             
           </div>
               <div id="del-country" className="border-h">
          <div className="wrapper">
               <span className="">Returns </span>
               <span className="">& Orders</span>
          </div> 
           </div>
                 <div id="del-country" className="border-h">
               <div className="wrapper" >
         <span id='cart-icon'></span>
          </div>
          <div className="wrapper">
               <span id="cart-no">0</span>
               <span className="">Cart</span>
          </div>
             
           </div>
            </div>
            </div>

        </div>
    )
}

export default Header
