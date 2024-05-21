
import "./App.css";
import Share from "./components/Share"
import Projects from "./components/Projects";
import bg from "./assets/orangeCircle.png"
import orange from "./assets/orange2.png"
import shape from "./assets/shape.png"
import pict from "./assets/assetImage-removebg-preview.png";
import pc from "./assets/pc.png"
import laptop from "./assets/laptop.webp"

import "aos/dist/aos.css"
import { useTypewriter, Cursor } from "react-simple-typewriter";


function App() {


  const [role] = useTypewriter({
    words: [" Developer", " Student", "n Engineer", " Learner"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 20,
  });
  return (
    <div className="min-h-screen relative text-white bg-black">
    <img src={orange} className="absolute top-0 right-0 opacity-70 h-72 z-0 rotate-180"/>
    <img src={shape} className="absolute left-60 opacity-70 top-60 -rotate-180 lg:h-[400px] md:h-[300px] z-0 max-md:hidden max-lg:left-40 "/>
    
      
      <div className="pt-20 mt-20">
        <div className="flex items-center max-md:flex-wrap-reverse mx-auto w-4/6 justify-between gap-10 lg:mb-40 ">
          <div className=" relative overflow-visible mt-5">
            
            <img
              src={pict}
              className="max-md:hidden relative w-full h-full object-cover border-rb-2 transition-shadow  z-50 rounded-[150px]"
            />
          </div>
          <div className="w-max flex flex-col gap-20 ">
            
            <div className="lg:overflow-visible">
            <h1 className="text-[48px] h-36 max-md:h-fit max-md:overflow-hidden lg:overflow-visible">
              Hey!
              <br />I am
              <span className="text-emerald-200 font-semibold">
                {" "}
                Noureen Naaz &nbsp;
              </span>
              <br />
            </h1>
            <p className="text-[32px] ">
              A
              <span>
                {role}
                <Cursor cursorStyle="|" cursorBlinking="{true}" />
              </span>
            </p>
            </div>
            <div className="flex gap-20 justify-evenly w-full p-30">
             <Share/>
          
        </div>
          </div>
        </div>
      </div>

      <div className=" bg-black w-full relative cursor-default">
        <Projects/>
        <img src={pc} className="absolute left-[50px] top-[500px] opacity-50 filter h-[500px] -z-20 "/>
        <img src={laptop} className="absolute right-[50px] top-[100px] opacity-50 filter h-[300px] -z-20 "/>
       
      </div>
      
      
    </div>
  );
}

export default App;
