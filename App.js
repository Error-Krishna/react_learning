// const heading = React.createElement(
//     "h1", 
//     { id: "heading", xyz: "abc" }, // property
//     "Hello from React!"); // children

// console.log(heading); // an object not a tag




const parent = React.createElement(
    "div", 
    {id:"parent"}, 
        React.createElement(
            "div", {id:"child"},
            [
                React.createElement("h1", {}, "I am an <h1></h1> Tag"), 
                React.createElement("h2", {}, "I am an <h2></h2> Tag")
            ]
        )
    );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);