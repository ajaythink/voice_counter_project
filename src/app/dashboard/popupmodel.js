"use client";
import { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone } from "react-icons/fa6";
import { FaMicrophoneSlash } from "react-icons/fa";
import LoginPopModel from "@/app/components/loginmodel/page.js";
import RegisterModel from "@/app/components/registermodel/page";


export default function Dashboard() {
  const [count, setCount] = useState(0);

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [isActive, setIsActive] = useState(true);
  const [userMsg, setuserMsg] = useState(
    "Press the microphone button to start counting your naam jaap."
  );
  const [loginPopModelActive, setLoginPopModelActive] = useState(false);
  const [RegisterPopModel, setRegisterPopModel] = useState(false);

  useEffect(() => {
    if (transcript) {
      const words = transcript.trim().split(/\s+/);
      setCount(words.length);
    }
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }
  const startListning = () => {
    setIsActive(false);
    setuserMsg("Listening... Press the microphone button to stop.");
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };

  const stopListning = () => {
    setIsActive(true);
    setuserMsg("Press the microphone button to start counting your naam jaap.");
    SpeechRecognition.stopListening();
  };

  // const loginPopModel = () => {
  //   setLoginPopModelActive(!loginPopModelActive);
  // };

  return (
    <div className=" min-h-screen w-full bg-blue-500">
      <header className="flex p-4 ">
        <h1 className="size-14 grow text-center text-2xl font-bold pt-2 text-white">
          Naam Jaap App
        </h1>
        <button
          className="size-14 flex-none cursor-pointer border border-white rounded-2xl bg-gradient-to-b from-yellow-500 to-pink-500 font-bold "
          onClick={() => setLoginPopModelActive(true)}
        >
          Login
        </button>
        <button
          className="py-1 px-2 flex-none cursor-pointer border border-white rounded-2xl bg-gradient-to-b from-green-500 to-yellow-500 font-bold"
          onClick={() => setRegisterPopModel(true)}
        >
          Register
        </button>
        {loginPopModelActive && (
          <LoginPopModel
            onClose={() => setLoginPopModelActive(false)}
            setRegisterPopModel={() => (
              setRegisterPopModel(true), setLoginPopModelActive(false)
            )}
          />
        )}
        {RegisterPopModel && (
          <RegisterModel
            onClose={() => setRegisterPopModel(false)}
            setLoginPopModelActive={() => (
              setRegisterPopModel(false), setLoginPopModelActive(true)
            )}
          />
        )}
      </header>

      <div className="flex flex-col items-center justify-center  bg-white  rounded-2xl  m-4">
        <p>{userMsg}</p>
        <p className="text-7xl font-bold text-green-500 m-4 rounded-full w-[200px] h-[200px] bg-yellow-300 text-center items-center flex justify-center">
          {count}
        </p>
        <div className="flex flex-row gap-3 p-4">
          {isActive ? (
            <div
              className="border-gray-400 hover:bg-gray-200 border rounded-full cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              onClick={startListning}
            >
              <button className=" text-gray-700 text-3xl ">
                <FaMicrophone />
              </button>
            </div>
          ) : (
            <div
              className="border-gray-400 hover:bg-gray-200 border rounded-full cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
              onClick={stopListning}
            >
              <button className="  text-red-800 text-4xl ">
                <FaMicrophoneSlash />
              </button>
            </div>
          )}
        </div>
        <div className=" w-full p-2">
          <textarea
            value={transcript}
            readOnly
            className="w-full p-2 text-black bg-gray-200 focus:outline-none rounded-lg h-32"
          />
        </div>
      </div>
    </div>
  );
}
