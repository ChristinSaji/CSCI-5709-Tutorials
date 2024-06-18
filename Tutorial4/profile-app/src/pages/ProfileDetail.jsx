import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProfileDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://express-t4.onrender.com/api/users/${id}`
      );
      const data = await response.json();
      setUser(data);
    };

    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md flex">
        <img
          src={user.picture}
          alt={`${user.name}`}
          className="h-64 w-64 object-cover rounded-lg mr-6"
        />
        <div>
          <h1 className="text-4xl font-bold text-gray-700">{user.name}</h1>
          <div className="grid grid-cols-6 gap-4 mt-4">
            <div className="col-span-2 text-lg font-bold text-gray-700">
              Age:
            </div>
            <div className="col-span-4 text-lg text-gray-600">{user.age}</div>
            <div className="col-span-2 text-lg font-bold text-gray-700">
              Gender:
            </div>
            <div className="col-span-4 text-lg text-gray-600">
              {capitalizeFirstLetter(user.gender)}
            </div>
            <div className="col-span-2 text-lg font-bold text-gray-700">
              Eye Color:
            </div>
            <div className="col-span-4 text-lg text-gray-600">
              {capitalizeFirstLetter(user.eyeColor)}
            </div>
            <div className="col-span-2 text-lg font-bold text-gray-700">
              Friends:
            </div>
            <div className="col-span-4 text-lg text-gray-600">
              {user.friends.map((friend) => friend.name).join(", ")}
            </div>
            <div className="col-span-2 text-lg font-bold text-gray-700">
              Favorite Fruit:
            </div>
            <div className="col-span-4 text-lg text-gray-600">
              {capitalizeFirstLetter(user.favoriteFruit)}
            </div>
            <div className="col-span-2 text-lg font-bold text-gray-700">
              Email:
            </div>
            <div className="col-span-4 text-lg text-gray-600">{user.email}</div>
            <div className="col-span-2 text-lg font-bold text-gray-700">
              Phone:
            </div>
            <div className="col-span-4 text-lg text-gray-600">{user.phone}</div>
            <div className="col-span-2 text-lg font-bold text-gray-700">
              Address:
            </div>
            <div className="col-span-4 text-lg text-gray-600">
              {user.address}
            </div>
            <div className="col-span-2 text-lg font-bold text-gray-700">
              Company:
            </div>
            <div className="col-span-4 text-lg text-gray-600">
              {user.company}
            </div>
            <div className="col-span-2 text-lg font-bold text-gray-700">
              Balance:
            </div>
            <div className="col-span-4 text-lg text-gray-600">
              {user.balance}
            </div>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-700">About</h2>
            <p className="text-md mt-2 text-gray-600">{user.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
