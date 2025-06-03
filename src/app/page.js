"use client";
import { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { FaMicrophone } from "react-icons/fa6";
import { FaMicrophoneSlash } from "react-icons/fa";

export default function Home() {
  const [count, setCount] = useState(0);

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [isActive, setIsActive] = useState(true);
  const [userMsg, setuserMsg] = useState(
    "Press the microphone button to start counting your naam jaap."
  );

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

  return (
    <div className=" min-h-screen bg-blue-500">
      <h1 className=" text-center text-2xl font-bold p-2 text-white">
        Naam Jaap App
      </h1>
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
