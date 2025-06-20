"use client";

import Topnavbar from "@/app/components/topnavbar/page";
import Bodypart from "@/app/components/bodypart/page.js";


export default function Home() {
  

  return (
    <>
      <div className="min-h-screen w-full bg-white">
        <Topnavbar/>

        <Bodypart />        
      </div>
    </>
  );
}




// import Topnavbar from "@/app/components/topnavbar/page";
// import Bodypart from "@/app/components/bodypart/page.js"
// import LoginPopModel from "@/app/components/loginmodel/page.js";
// import RegisterPopModel from "@/app/components/registermodel/page";
// export default function Home() {
//   return (
//     <>
//       <div className="min-h-screen w-full bg-white">
//         <Topnavbar />

//         <Bodypart setLoginPopModelActive={() => setLoginPopModelActive(true)} />
//       </div>
//     </>
//   );
// }
