import { useState, useEffect } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  const isOnline = useOnlineStatus();

  return (
    <div className="sticky top-0 z-50 flex justify-between items-center px-4 md:px-16 py-4 bg-orange-500 shadow-md">
      <div className="flex items-center">
        <Link to="/">
          <img className="w-16 h-auto hover:scale-105 transition-transform duration-300" src={LOGO_URL} alt="Food Logo" />
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex items-center gap-4 md:gap-6 list-none text-white font-semibold">
          <li className="hover:text-orange-100 transition-colors relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="hover:text-orange-100 transition-colors relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="hover:text-orange-100 transition-colors relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            <Link className="nav-link" to="/restaurants">Restaurants</Link>
          </li>
          <li className="hover:text-orange-100 transition-colors relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="hover:text-orange-100 transition-colors relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            <Link className="nav-link" to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-orange-100 transition-colors relative after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
            <Link className="nav-link" to="/cart">🛒 Cart</Link>
          </li>
          <button
            className="bg-white text-orange-500 px-5 py-2 rounded-full font-bold shadow-md hover:bg-orange-50 transition transform hover:-translate-y-0.5"
            onClick={() => {
              btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="flex items-center">
            <span
              className={`w-2.5 h-2.5 rounded-full ${isOnline ? "bg-green-500 shadow-green-500/50" : "bg-red-500 shadow-red-500/50"} shadow-lg`}
              title={isOnline ? "Online" : "Offline"}
            ></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;