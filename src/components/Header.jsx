import LOGO_URL from "../utils/constants.js";



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


export default Header;