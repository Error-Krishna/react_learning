import { useEffect, useState } from "react";

const User = (props) => {
  const [count] = useState(0);

  useEffect(() => {
    // API calls
  });

  return (
    <div className="max-w-sm mx-auto my-10 p-6 bg-white border border-orange-100 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">👤 Count: {count}</h2>
      <h2 className="text-2xl font-bold text-gray-800">👤 {props.name}</h2>
      <h3 className="text-lg text-gray-600 font-medium">📍 Bengal</h3>
      <h3 className="text-lg text-gray-600 font-medium">📧 krishna@example.com</h3>
    </div>
  );
};

export default User;