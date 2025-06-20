"use client";
import { useState } from "react";
 


// import LoginPopModel from "@/app/components/loginmodel/page.js";
// import RegisterPopModel from "@/app/components/registermodel/page";
export default function BodyPart() {
  return (
    <>
      <div className="bg-[url('/image/bg_image.avif')] bg-cover w-full h-screen ">
        <div className="flex flex-col items-center justify-center h-full  bg-opacity-50">
          <h1 className="text-6xl font-bold  mb-4 text-gray-900">
            Welcome to Jaap Naam
          </h1>
          <p className="text-xl  mb-8 text-black">
            Count your naam jaap effortlessly
          </p>
          <button className="px-6 py-3 font-semibold bg-purple-500 text-white rounded-full hover:bg-purple-600 transition duration-300">
            Start Now
          </button>
        </div>
      </div>
    </>
  );
}

// other componets
//  "use client";

// import LoginPopModel from "@/app/components/loginmodel/page.js";
//  import RegisterPopModel from "@/app/components/registermodel/page";

// function Topnavbar() {
//   const [LoginPopModelActive, setLoginPopModelActive] = useState(false);
//   const [RegisterPopModelActive, setRegisterPopModelActive] = useState(false);
//   return (
//     <>
//       <nav className="bg-white text-black p-4 px-5 flex justify-between items-center shadow shadow-slate-500 z-10 fixed w-full top-0 left-0">
//         <div className="text-4xl font-bold ">
//           <h1>JaapNaam</h1>
//         </div>
//         <div className="flex gap-4">
//           <button
//             className="px-4 py-3 font-semibold bg-purple-500 text-white rounded-full text-xl cursor-pointer hover:bg-purple-600 transition duration-300"
//             onClick={() => setLoginPopModelActive(true)}
//           >
//             Sign In
//           </button>
//           <button
//             className="px-4 py-3 font-semibold bg-white-500 text-black rounded-full text-xl cursor-pointer hover:bg-purple-100 transition duration-300"
//             onClick={() => setRegisterPopModelActive(true)}
//           >
//             Sign Up
//           </button>
//         </div>
//       </nav>
//       {LoginPopModelActive && (
//         <LoginPopModel
//           onClose={() => setLoginPopModelActive(false)}
//           setRegisterPopModel={() => {
//             setRegisterPopModelActive(true);
//             setLoginPopModelActive(false); // Hide login popup
//           }}
//         />
//       )}
//     </>
//   );
// }

// export { Topnavbar };

// *****************************************************
// "use client";

// import axios from "axios";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// const defaultValue = {
//   email: "",
//   password: "",
// };

// const LoginPopModel = ({ onClose, setRegisterPopModel }) => {
//   const router = useRouter();
//   const [defaultData, setDefaultData] = useState(defaultValue);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const onValueChange = (e) => {
//     setDefaultData({ ...defaultData, [e.target.name]: e.target.value });
//   };

//   const onLogin = async (e) => {
//     e.preventDefault();

//     if (!defaultData.email || !defaultData.password) {
//       setError("All fields are required.");
//       return;
//     }

//     setError(null);
//     setLoading(true);
//     try {
//       const response = await axios.post("/api/login", defaultData);
//       setLoading(false);
//       console.log("status code ", response.status);

//       if (response.status === 200) {
//         console.log("Login successful", response.data);
//         router.push("/dashboard");
//       }
//     } catch (err) {
//       console.error("Error during login: ", err);

//       if (err.response && err.response.data && err.response.data.message) {
//         setError(err.response.data.message);
//       } else {
//         setError("Login failed. Please try again.");
//       }
//     }
//   };

//   return (
//     <>
//       <div className="fixed inset-0 bg-blue-200/80 flex items-center justify-center z-50">
//         <div className="relative bg-white p-6 rounded-lg shadow-lg w-96 blur-none">
//           <h2 className="text-xl font-bold mb-4 text-black">Login</h2>
//           {error && <div className="text-red-500 mb-4">{error}</div>}
//           <span
//             className="text-5xl absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer rounded-full hover:bg-gray-200 w-[35px] h-[35px] text-center "
//             onClick={onClose}
//           >
//             &times;
//           </span>

//           <form className="text-black">
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2 text-black">
//                 Email
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 name="email"
//                 value={defaultData.email}
//                 onChange={(e) => onValueChange(e)}
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-sm font-medium mb-2 text-black">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 name="password"
//                 value={defaultData.password}
//                 onChange={(e) => onValueChange(e)}
//               />
//             </div>
//             <button
//               type="submit"
//               className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
//               onClick={(e) => onLogin(e)}
//             >
//               Login
//               {loading ? (
//                 <AiOutlineLoading3Quarters className="animate-spin" />
//               ) : (
//                 ""
//               )}
//             </button>
//           </form>
//           <button
//             className="cursor-pointer text-gray-500"
//             onClick={setRegisterPopModel}
//           >
//             If you do not have account{" "}
//             <span className="text-blue-400 font-bold pt-4">Register</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
// export { LoginPopModel };
