import React from "react";

const Profile = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Profile</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="input" />
        <input type="email" placeholder="Email" className="input" />
        <button className="btn bg-yellow-500 hover:bg-yellow-600 text-white">
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
