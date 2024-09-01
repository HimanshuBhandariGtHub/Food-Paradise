import React from "react";
import ReactDOM from "react-dom/client";

//PLANNING- what components my app ll have for our Ref
// Header
//     Logo
//     Nav items
// Body    
//     Search
//     RestaurantContainer
//         RestaurantCard
// Footer
//     Copyright
//     Links
//     Address
//     Contact

const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://banner2.cleanpng.com/20180720/spp/956a15ac3b67af3b8619d9a8771d1399.webp"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const AppLayout =()=>{
    return(
        <div className="app">
            <Header />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);