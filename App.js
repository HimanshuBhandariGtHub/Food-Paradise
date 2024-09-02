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


const RestaurantCard =({resName, cuisine})=>{
   
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alt="res-logo" src="https:/banner2.cleanpng.com/20180720/spp/956a15ac3b67af3b8619d9a8771d1399.webp" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 mins</h4>
        </div>
    );
};

const Body =()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>

                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>

                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>

                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>

                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>

            </div>
        </div>
    );
};

const AppLayout =()=>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);