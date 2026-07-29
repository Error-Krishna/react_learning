import { useState } from "react";



const User = (props) => {

    const[count] = useState(0);
    return (
        <div className="user-card">
            <h2>👤 Count: {count}</h2>
            <h2>👤 {props.name}</h2>
            <h3>📍 Bengal</h3>
             <h3>📧 krishna@example.com</h3>
        </div>
    );
};

export default User;