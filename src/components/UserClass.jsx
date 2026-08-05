import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        login: "login",
        avatar_url: "http://dummy.com",
      },
    };
    console.log("Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Error-Krishna", {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (!data.ok) {
      throw new Error(`GitHub API Error: ${data.status}`);
    }

    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, location, email, login, avatar_url } = this.state.userInfo;
    return (
      <div className="max-w-sm mx-auto my-10 p-6 bg-white border border-orange-100 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <img
          className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-orange-500 shadow-lg hover:scale-105 transition-transform duration-300"
          src={avatar_url}
          alt={login}
        />
        <h2 className="text-2xl font-bold text-gray-800">👤 {name}</h2>
        <h3 className="text-lg text-gray-600 font-medium">📍 {location}</h3>
        <h3 className="text-lg text-gray-600 font-medium">{email}</h3>
        <h3 className="text-lg text-gray-600 font-medium">{login}</h3>
      </div>
    );
  }
}

export default UserClass;