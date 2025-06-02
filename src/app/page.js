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

  useEffect(() => {
    if (transcript) {
      const words = transcript.trim().split(/\s+/);
      setCount(words.length);
    }
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }
  const startListning = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  return (
    <div className=" min-h-screen bg-blue-500">
      <h1 className=" text-center text-2xl font-bold p-2 ">Naam Jaap App Ajay Nice</h1>
      <div className="flex flex-col items-center justify-center  bg-white border rounded-2xl border-pink-800 m-4">
        <p className="text-7xl font-bold text-green-500 m-4 rounded-full w-[200px] h-[200px] bg-yellow-300 text-center items-center flex justify-center">
          {count}
        </p>
        <div className="flex flex-row gap-3 p-4">
          <button
            className="cursor-pointer border rounded-full p-2 bg-blue-900 text-white text-3xl "
            onClick={startListning}
          >
            <FaMicrophone />
          </button>

          <button
            className="cursor-pointer border rounded-full p-2 bg-red-500 text-white text-3xl"
            onClick={SpeechRecognition.stopListening}
          >
            <FaMicrophoneSlash />
          </button>
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
