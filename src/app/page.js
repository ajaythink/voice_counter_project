"use client";
import { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const startListning = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (transcript) {
      const words = transcript.trim().split(/\s+/);
      setCount(words.length);
    }
  }, [transcript]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className=" text-center text-2xl font-bold m-4">Voice Counter App</h1>
      <p className="text-6xl font-bold text-green-500 m-4 border-2 rounded-full p-2 bg-blue-50">{count}</p>
      <div className="flex flex-row gap-3 p-4">
        <button
          className="cursor-pointer border rounded-2xl p-2 bg-blue-500 text-white"
          onClick={startListning}
        >
          Start Recognition
        </button>

        <button
          className="cursor-pointer border rounded-2xl p-2 bg-red-500 text-white"
          onClick={SpeechRecognition.stopListening}
        >
          Stop Recognition
        </button>
      </div>
      {/* <textarea className="border w-full p-2 text-black">
        {transcript}
      </textarea> */}
      <textarea
        value={transcript}
        readOnly
        className="border w-full p-2 text-black bg-gray-200"
      />
    </div>
  );
}

// const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new speechRecognition();

// let recognition;

// if (typeof window !== "undefined") {
//   const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//   recognition = new speechRecognition();
// }

// const [recoStop, setRecoStop] = useState(true);

// const [text, setText] = useState("Please press the above button to start voice recognition.");

// const [count, setCount] =useState(0);

// recognition.start=() =>{
//   setText("Listening...");
// }

// const handleClick = () =>{
//   if(recoStop) {
//     recognition.start();
//     setRecoStop(false);
//     setText("Listening...");
//     // recognition.onresult = (event) => {
//     //   const result = event.results[0][0].transcript;
//     //   setText(result);
//     //   setCount(result.split(" ").length);
//     // };
//     // recognition.onerror = (event) => {
//     //   console.error("Error occurred in recognition: " + event.error);
//     //   setText("Error occurred, please try again.");
//     // };
//   }
//   else{
//     recognition.stop();
//     setRecoStop(true);
//     setText("Recognition stopped. Press the button to start again.");
//   }
// }
