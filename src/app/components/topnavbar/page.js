"use client";

import { useState } from "react";
import LoginPopModel from "@/app/components/loginmodel/page.js";
import RegisterPopModel from "@/app/components/registermodel/page.js";

export default function Topnavbar({
  isDashboard = false,
  username = "",
  onLogout = () => {},
}) {
  const [LoginPopModelActive, setLoginPopModelActive] = useState(false);
  const [RegisterPopModelActive, setRegisterPopModelActive] = useState(false);

  return (
    <>
      <nav className="bg-white text-black p-4 px-5 flex justify-between items-center shadow shadow-slate-500 z-10 fixed w-full top-0 left-0">
        <div className="text-4xl font-bold ">
          <h1>JaapNaam</h1>
        </div>
        <div className="flex gap-4">
          {isDashboard ? (
            <>
              <p className="text-black text-xl">
                Welcome, {username || "User"}
              </p>{" "}
              <button
                className="px-4 py-3 font-semibold bg-red-500 text-white rounded-full text-xl cursor-pointer hover:bg-red-600 transition duration-300"
                onClick={onLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="px-4 py-3 font-semibold bg-purple-500 text-white rounded-full text-xl cursor-pointer hover:bg-purple-600 transition duration-300"
                onClick={() => setLoginPopModelActive(true)}
              >
                Sign In
              </button>
              <button
                className="px-4 py-3 font-semibold bg-white-500 text-black rounded-full text-xl cursor-pointer hover:bg-purple-100 transition duration-300"
                onClick={() => setRegisterPopModelActive(true)}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      {!isDashboard && LoginPopModelActive && (
        <LoginPopModel
          onClose={() => setLoginPopModelActive(false)}
          setRegisterPopModel={() => {
            setRegisterPopModelActive(true);
            setLoginPopModelActive(false);
          }}
        />
      )}
      {RegisterPopModelActive && (
        <RegisterPopModel
          onClose={() => setRegisterPopModelActive(false)}
          setLoginPopModelActive={() => {
            setLoginPopModelActive(true);
            setRegisterPopModelActive(false);
          }}
        />
      )}
    </>
  );
}
