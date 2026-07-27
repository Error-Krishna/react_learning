import { useState, useEffect } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants.js";



const Header = () => {
    const[btnNameReact, setBtnNameReact] = useState("Login");
    useEffect(() => {
        console.log("useEffect called")
    }, [btnNameReact]);

    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                    alt="Food Logo"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    <li><Link className="nav-link" to="/about">About</Link></li>
                    <li><Link className="nav-link" to="/restaurants">Restaurants</Link></li>
                    <li><Link className="nav-link" to="/contact">Contact</Link></li>
                    <li><Link className="nav-link" to="/cart">🛒 Cart</Link></li>
                    <button 
                        className="login"
                        onClick={() => {
                            btnNameReact==="Login"
                            ? setBtnNameReact("Logout")
                            : setBtnNameReact("Login");
                        }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    );
};


export default Header;
