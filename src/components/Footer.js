import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
// import { BiLogoGmail } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { GrLinkedin } from "react-icons/gr";
import { SiHackerrank } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

const Footer = ()=>{

    return (
        <div className="min-h-[60vh] bg-slate-800 p-10 w-full box-border flex flex-wrap justify-between">
            <div className="p-5">
            <a className="py-2 mt-8 px-5 rounded-3xl text-white w-fit gap-3 border-1 border border-slate-950 items-center flex hover:bg-slate-900 transition-all ease-in-out hover:border-slate " href="mailto:noureennaaz09@gmail.com">
              Get in Touch <CiMail size={25} />
            </a>
            
            <div className="grid sm:grid-cols-2 gap-y-8 md:gap-x-52 text-slate-300 font-light underline pt-20">
                <a href ='https://leetcode.com/u/noureennaaz/' className="flex gap-2 items-center ">
                <SiLeetcode />
                noureennaaz

                </a>
                <a href="https://github.com/noureennaaz" className="flex gap-2 items-center">
                <SiGithub  />
                noureennaaz
                </a>
                <a href='https://www.linkedin.com/in/noureen-naaz-599392229/'className="flex gap-2 items-center">
                <GrLinkedin size={20}/>
                noureen-naaz-599392229

                </a>
                <a href='https://www.hackerrank.com/profile/noureennaaz09' className="flex gap-2 items-center">
                    <SiHackerrank />
                    noureennaaz09
                </a>
                <a href='https://www.geeksforgeeks.org/user/noureennaaz09/' className="flex gap-2 items-center">
                <SiGeeksforgeeks />
                noureennaaz09
                </a>
                
            
            
            
            
            
            </div>
            </div>
            <div>
                <div className="flex gap-5 p-5 items-center">
                    <p>Back to top</p>
                    <a className="sm:h-12 sm:w-12 h-8 w-8 rounded-full bg-slate-500 flex justify-center items-center animate-pulse hover:animate-none" href='#head' >
                    <FaArrowUp size={20} />
                    </a>
                </div>

            </div>
        </div>

    )

}
export default Footer;