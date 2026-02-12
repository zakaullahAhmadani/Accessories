import React from "react";

const ChangePassword = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Change Password</h2>
      <form className="space-y-4">
        <input type="password" placeholder="Current Password" className="input" />
        <input type="password" placeholder="New Password" className="input" />
        <button className="btn bg-yellow-500 hover:bg-yellow-600 text-white">Update</button>
      </form>
    </div>
  );
};

export default ChangePassword;
