"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const defaultValue = {
  email: "",
  password: "",
};

const Loginmodel = ({ onClose, setRegisterPopModel }) => {
  const router = useRouter();
  const [defaultData, setDefaultData] = useState(defaultValue);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onValueChange = (e) => {
    setDefaultData({ ...defaultData, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {
    e.preventDefault();

    if (!defaultData.email || !defaultData.password) {
      setError("All fields are required.");
      return;
    }

    setError(null);
    setLoading(true);
    try {
      const response = await axios.post("/api/login", defaultData);
      setLoading(false);
      console.log("status code ", response.status);

      if (response.status === 200) {
        console.log("Login successful", response.data);
        router.push("/dashboard");
      }
    } catch (err) {
      console.error("Error during login: ", err);

      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-blue-200/80 flex items-center justify-center z-50">
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-96 blur-none">
          <h2 className="text-xl font-bold mb-4 text-black">Login</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <span
            className="text-5xl absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer rounded-full hover:bg-gray-200 w-[35px] h-[35px] text-center "
            onClick={onClose}
          >
            &times;
          </span>

          <form className="text-black">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-black">Email</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                value={defaultData.email}
                onChange={(e) => onValueChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2 text-black">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="password"
                value={defaultData.password}
                onChange={(e) => onValueChange(e)}
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={(e) => onLogin(e)}
            >
              Login
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin" />
              ) : (   
                ""
              )}
            </button>
          </form>
          <button
            className="cursor-pointer text-gray-500"
            onClick={setRegisterPopModel}
          >
            If you do not have account{" "}
            <span className="text-blue-400 font-bold pt-4">Register</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Loginmodel;
