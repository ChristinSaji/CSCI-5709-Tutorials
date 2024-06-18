import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileListing = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://express-t4.onrender.com/api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-500 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          Profile Listing
        </h1>
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-3 mb-6 border border-gray-700 rounded-lg"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <div
              key={user._id}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() => navigate(`/profile-detail/${user._id}`)}
            >
              <img
                src={user.picture}
                alt={user.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-xl text-gray-700 font-bold mt-4">
                {user.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileListing;
