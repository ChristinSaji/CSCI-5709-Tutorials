import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const { firstName, lastName, email } = location.state.formData;

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 p-6">
      <div className="w-full max-w-md p-6 border border-gray-700 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl text-center text-gray-700 font-bold mb-6">
          Profile
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            First Name
          </label>
          <p className="px-3 py-2 border border-gray-700 rounded">
            {firstName}
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Last Name
          </label>
          <p className="px-3 py-2 border border-gray-700 rounded">{lastName}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <p className="px-3 py-2 border border-gray-700 rounded">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
