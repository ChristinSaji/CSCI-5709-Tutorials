import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://express-t4.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password,
      }),
    });

    if (response.ok) {
      navigate("/profile-listing");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 p-6">
      <form
        className="w-full max-w-md p-6 border border-gray-700 bg-white rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl text-center text-gray-700 font-bold mb-6">
          Login
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-700 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-700 rounded mt-1"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-2/3 bg-blue-500 text-white py-2 border border-gray-700 rounded-lg mt-2"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
