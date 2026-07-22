import React from "react";
import ReactDOM from "react-dom/client";






//  react components // component composition
const number = 10000;
const Elem = () => (
    <h1 className="head">Element</h1>
);
const Title = () => (
    <>
        <Elem />
        <h1 className="head">Title</h1>
    </>
);
const HeadingComponent = () =>(
    <div id="container">
        {Elem()};
        <Title />
        <h2>{number + 20}</h2>
        <h1 className="heading"> Namaste react from JSX</h1>
    </div>
    

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);