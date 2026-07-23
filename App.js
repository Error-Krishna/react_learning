import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./resData.json";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://png.pngtree.com/png-vector/20221218/ourmid/pngtree-simple-and-modern-food-logo-vector-design-png-image_6527848.png"
                    alt="Food Logo"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Restaurants</li>
                    <li>Contact</li>
                    <li>🛒 Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Rescard = ({resdata}) => {
    const { image, resName, cuisine, rating, time, price, deliveryFee, offer } = resdata;

    return (
        <div className="res-card">
            <img className="res-logo" src={image} alt={resName} />

            <h3>{resName}</h3>
            <h4>🍽️ {cuisine}</h4>

            <div className="card-info">
                <span>⭐ {rating}</span>
                <span>🕒 {time}</span>
            </div>

            <div className="card-info">
                <span>₹{price} FOR TWO</span>
                <span>{deliveryFee}</span>
            </div>

            <p className="offer">🎉 {offer}</p>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <input
                    type="text"
                    placeholder="🔍 Search for restaurants, cuisines..."
                />
            </div>

            <div className="res-container">
                {resList.map((restaurant) => (
                    <Rescard key = {restaurant.resName}
                             resdata = {restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

const AppLayout = () => (
    <div className="app">
        <Header />
        <Body />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);