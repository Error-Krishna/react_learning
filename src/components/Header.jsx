import { LOGO_URL } from "../utils/constants.js";



const Header = () => {
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


export default Header;