import { SignOutButton, useUser } from "@clerk/clerk-react";
import React from "react";

const Navbar = () => {
  const { user } = useUser();
  console.log("user", user);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">GoTrips</a>
      </div>
      <div className="flex-none">
        <SignOutButton className="btn btn-neutral" />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-8 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                //src={user.profileImageUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
