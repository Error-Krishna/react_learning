import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx"
import Home from "./components/Home.jsx"
import Restaurant from "./components/Restaurant.jsx"
import About from  "./components/About.jsx"
import Contact from  "./components/Contact.jsx"
import Error  from "./components/Error.jsx";
import Cart from "./components/Cart.jsx"
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";



const AppLayout = () => (
    <div className="app">
        <Header />
        <Outlet />
    </div>
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element:<AppLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/restaurants",
                element: <Restaurant />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement:<Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
