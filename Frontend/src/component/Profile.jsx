import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
   <>
   <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900 p-6">

      <div className="w-full max-w-2xl space-y-6">

        {/* Profile Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex items-center gap-6">

          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-white text-2xl font-bold">
            {user?.fullname?.charAt(0).toUpperCase()}
          </div>

          {/* Info */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold">
              {user?.fullname}
            </h2>
            <p className="text-gray-500 text-sm">
              {user?.email}
            </p>

            <button className="mt-3 text-sm bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-md">
              Edit Profile
            </button>
          </div>

        </div>

        {/* Purchased Books */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">
            Purchased Books
          </h3>

          <div className="text-gray-500 text-sm">
            No books purchased yet.
          </div>
        </div>

        {/* Change Password */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">
            Change Password
          </h3>

          <div className="space-y-3">
            <input
              type="password"
              placeholder="Current Password"
              className="input input-bordered w-full text-sm"
            />
            <input
              type="password"
              placeholder="New Password"
              className="input input-bordered w-full text-sm"
            />
            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md text-sm">
              Update Password
            </button>
          </div>
        </div>

      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Profile;
