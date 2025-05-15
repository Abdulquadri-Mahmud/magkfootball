import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutUserSuccess } from "../store/user/userReducer";

export default function UserLogoutButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOut = () => {
        dispatch(signOutUserSuccess()); // Clear user state
        navigate("/login"); // Redirect to login page
    };
  return (
    <div>
        <button onClick={handleSignOut} className="w-[150px] py-2 bg-red-600 text-white font-semibold uppercase hover:bg-red-700 transition-all duration-200">
            Log Out
        </button>
    </div>
  )
}
