
import "./App.css";
import Share from "./components/Share"
import Projects from "./components/Projects";
import pc from "./assets/pc.png"
import laptop from "./assets/laptop.webp"
import Spline from '@splinetool/react-spline';
import "./components/text.css"
import waves from "./assets/wave1.svg"

import "aos/dist/aos.css"
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Footer from "./components/Footer";
import Exp from "./components/Experience";


function App() {

  const [role] = useTypewriter({
    words: [" Developer", " Student", "n Engineer", " Learner"],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 20,
  });
  return (
    <div className="min-h-screen relative text-white overflow-hidden scroll-smooth" id='head' >
    {/* <img src={orange} className="absolute top-0 right-0 opacity-70 h-72 z-0 rotate-180" alt=""/> */}
    {/* <img src={shape} className="absolute left-60 opacity-70 top-60 -rotate-180 lg:h-[400px] md:h-[300px] z-0 max-md:hidden max-lg:left-40 " alt=""/> */}
   
 

      
      <div className="lg:pt-20 md:pt-20 pt-12  relative bg-[#B3AFE9] lg:h-[78vh] md:h-[90vh] overflow-hidden ">
      <Spline scene="https://prod.spline.design/96kt3R9OLanMMHDs/scene.splinecode" className="w-screen absolute lg:-left-48 md:-left-40 sm:-left-48 z-0 lg:h-[78vh] h-[90vh] sm:translate-y-0 translate-y-20 overflow-hidden sm:mt-0 -mt-32 pointer-events-none sm:pointer-events-auto" />
        <div className="flex items-center max-md:flex-wrap-reverse mx-auto w-4/6 justify-between gap-10 lg:mb-40  ">
          <div className=" relative mt-5">
            
    
          </div>
          <div className="w-max flex flex-col gap-10 shadow-text">
            
            <div className="lg:overflow-visible z-50 lg:pt-20 ">
            <h1 className="lg:text-[48px] md:text-[30px] leading-[40px]  lg:leading-[66px] text-3xl z-50  playpen-sans-700 h-36 max-md:h-fit max-md:overflow-hidden lg:overflow-visible">
              Hey!
              <br />I am
              <span className="text-emerald-200 font-semibold">
                {" "}
                Noureen Naaz&nbsp;
                 
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
             <Share className='z-50'/>
          
        </div>
          </div>
        </div>
      </div>
      {/* <div className="relative h-80"> */}
        <img src={waves} alt="" className="w-screen min-w-[600px] -translate-y-16 sm:translate-y-0 absolute z-50"/>
      {/* </div> */}
      <Exp/>
      <div className="mt-12 w-full relative cursor-default">
        <Projects/>
        <img src={pc} className="absolute left-[50px] top-[500px] opacity-50 filter h-[500px] -z-20 " alt=""/>
        <img src={laptop} className="absolute right-[50px] top-[100px] opacity-50 filter h-[300px] -z-20 " alt=""/>
       
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
