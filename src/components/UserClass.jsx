import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super (props);
        console.log(props);
        this.state = {
            count: 0,
            count2: 2
        };
        console.log("Constructor")
    }
    render() {
        const { name, location } = this.props;
        const {count} = this.state;
        console.log("Render")
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button className="count-increse" onClick={()=>{
                    // never update state variable directly
                    this.setState({
                        count: this.state.count+1
                    })


                }}>count-increse</button>
                <h2>👤 {name}</h2>
                <h3>📍 {location}</h3>
                <h3>📧 krishna@example.com</h3>
            </div>
        );
    }
}

export default UserClass;