"use client";
import { useState } from "react";
import axios from "axios";

const defaultData = {
  name: "",
  email: "",
  password: "",
};

const Registermodel = ({ onClose, setLoginPopModelActive }) => {
  const [formData, setFormData] = useState(defaultData);
  const [error, setError] = useState(null);
  const [sucess, setSucess] =  useState(null)

  const onValueChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onRegister = async (e) => {
    e.preventDefault();

    console.log("formData: ", formData);
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }
    setError(null);
    try {
      const response = await axios.post("/api/register", formData);
      setFormData(defaultData);
      const data = response.status;
      console.log("response: ", data);
      if (response.status === 200) {
        console.log("User registered successfully", response.data);
        setSucess("User registered successfully");
        // setLoginPopModelActive(false);
        // onClose();
      }
      else if(response.status === 409){
        setError("User already exists. Please login."); 
      } else {
        setError(data.message || "Registration failed. Please try again.");
      }
    } catch (err) {
      if(err.response){
        setError(err.response.data.message || "Registration failed. Please try again.");
      }
      console.error("Error during registration: ", err);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-blue-200/80 flex items-center justify-center z-50 ">
        <div className="relative bg-white p-6 rounded-lg shadow-lg w-96 ">
          <h2 className="text-xl font-bold mb-4">Login</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          {sucess && <div className="text-green-500 mb-4">{sucess}</div>}
          <span
            className="text-5xl absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursore-pointer rounded-full hover:bg-gray-200 w-[35px] h-[35px] text-center "
            onClick={onClose}
          >
            &times;
          </span>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="name"
                value={formData.name}
                onChange={(e) => onValueChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                value={formData.email}
                onChange={(e) => onValueChange(e)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="password"
                value={formData.password}
                onChange={(e) => onValueChange(e)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
              onClick={(e) => onRegister(e)}
            >
              Register
            </button>
          </form>
          <button className="cursor-pointer" onClick={setLoginPopModelActive}>
            If you have account{" "}
            <span className="text-blue-400 font-bold pt-4">Login</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Registermodel;
