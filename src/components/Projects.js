import netflixClone from "../assets/projects/netflix.png";
import passwGen from "../assets/projects/pass-gen.png";
import blogApp from "../assets/projects/blog-app.png";
import chat from "../assets/projects/tutorBot.jpg";
import weather from "../assets/projects/weather.png";
import exploading from "../assets/projects/exploding-kitten.png";
import eventManagement from "../assets/projects/event-manage.png";
import { FiGithub } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";

import {Link} from "react-router-dom"


const Projects = () => {
 
  return (
    <div>
      <div className="mx-auto w-4/6">
        <div className="bg-[#FFD700] h-[1px] w-[200px] mx-auto shadow-sm text-[#FFD700]"></div>
        <h2 className="text-[48px] py-10">My Projects</h2>
      </div>
      <div className="flex-wrap scrollbar-hide mx-auto flex overflow-x-scroll w-full gap-12 p-10 justify-center items-center ">
        <div
          className="z-50 rounded-lg shadow-yellow-600 border-slate-500 border box-border shadow-sm transition-all hover:scale-105 group"
        >
          <div className=" relative max-w-[400px] h-[250px] flex flex-shrink-0 flex-grow-0 transition-all">
            <div className="h-full w-full lg:opacity-0 bg-[#00000062] absolute top-0 right-0 backdrop-blur-[4px] backdrop-brightness-90 group-hover:opacity-100 flex items-end transition-all">
              <div className="p-10">
                <div>
                  <h4 className="text-xl">Netflix Clone</h4>
                  <p>A clone of homepage of Netflix site </p>
                </div>
                <div className="flex w-full justify-between pt-10 overflow-visible">
                  <Link to="https://github.com/noureennaaz/NetflixClone" className='overflow-visible'>
                    <FiGithub
                      size={25}
                      className="hover:scale-125 transition-all"
                    />
                  </Link>
                  <Link to="https://noureennaaz.github.io/NetflixClone/" className='overflow-visible'>
                    <IoMdOpen
                      size={25}
                      className="hover:scale-125 transition-all"
                    />

                  </Link>
                  
                </div>
              </div>
            </div>
            <img src={netflixClone} className="object-cover h-full w-full " />
          </div>
        </div>
        <div
          className="z-50 rounded-lg shadow-yellow-600 border-slate-500 border box-border shadow-sm transition-all hover:scale-105 group"
        >
          <div className="relative max-w-[400px] h-[250px] flex flex-shrink-0 flex-grow-0 transition-all">
            <div className="h-full w-full lg:opacity-0 bg-[#00000062] absolute top-0 right-0 backdrop-blur-[4px] backdrop-brightness-100 group-hover:opacity-100 flex items-end transition-all">
              <div className="p-10">
                <div>
                  <h4 className="text-xl">Password Generator</h4>
                  <p>A basic Javascript app that generates random passwords</p>
                </div>
                <div className="flex w-full justify-between pt-10 overflow-visible">
                
                  <Link to="https://github.com/noureennaaz/PasswordGenerator" className='overflow-visible'>
                    <FiGithub
                      size={25}
                      className="hover:scale-125 transition-all"
                    />
                  </Link>
                  <Link to="https://noureennaaz.github.io/PasswordGenerator/" className='overflow-visible' >
                    <IoMdOpen
                      size={25}
                      className="hover:scale-125 transition-all"
                      
                    />
                  </Link>
                  
                  
                </div>
              </div>
            </div>
            <img
              src={passwGen}
              className=" object-cover h-full w-full opacity-100"
            />
          </div>
        </div>
        <div
          href="https://theblogapp.netlify.app/"
          className="z-50 rounded-lg shadow-yellow-600 border-slate-500 border box-border shadow-sm  transition-all group"
        >
          <div className="relative max-w-[400px] h-[250px] flex flex-shrink-0 flex-grow-0 transition-all">
            <div className="h-full w-full lg:opacity-0 bg-[#00000062] absolute top-0 right-0 backdrop-blur-[4px] backdrop-brightness-90 group-hover:opacity-100 flex items-end transition-all">
              <div className="p-10">
                <div>
                  <h4 className="text-xl">Blog App</h4>
                  <p>An site displaying various blogs based on filter, search and related topics</p>
                </div>
                <div className="flex w-full justify-between pt-10 overflow-visible">
                  <Link to="https://github.com/noureennaaz/BlogApp" className='overflow-visible' >
                      <FiGithub
                        size={25}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                    <Link to="https://theblogapp.netlify.app/" className='overflow-visible'>
                      <IoMdOpen
                        size={25}
                        className="hover:scale-125 transition-all"
                        
                      />
                    </Link>
                  
                </div>
              </div>
            </div>
            <img src={blogApp} className=" object-cover h-full w-full" />
          </div>
        </div>
        <div className="z-50 group rounded-lg shadow-yellow-600 border-slate-500 border box-border shadow-sm transition-all">
          <div className="relative max-w-[400px] h-[250px] flex flex-shrink-0 flex-grow-0 transition-all">
            <div className="h-full w-full lg:opacity-0 bg-[#00000062] absolute top-0 right-0 backdrop-blur-[4px] backdrop-brightness-90 group-hover:opacity-100 flex items-end transition-all">
              <div className="p-10">
                <div>
                  <h4 className="text-xl">Tutor Bot</h4>
                  <p>Using Streamlit and Bard</p>
                </div>
                <div className="flex w-full justify-between pt-10 overflow-visible">
                <Link to="https://github.com/noureennaaz/MyChatBot" className='overflow-visible'>
                    <FiGithub
                      size={25}
                      className="hover:scale-125 transition-all"
                    />
                  </Link>
                  {/* <Link to="https://" className='overflow-visible' >
                    <IoMdOpen
                      size={25}
                      className="hover:scale-125 transition-all"
                      
                    />
                  </Link> */}
                </div>
              </div>
            </div>
            <img src={chat} className=" object-cover h-full w-full" />
          </div>
        </div>
        
        <div
          className="group z-50 rounded-lg shadow-yellow-600 border-slate-500 border box-border shadow-sm transition-all"
        >
          <div className="relative max-w-[400px] h-[250px] flex flex-shrink-0 flex-grow-0 transition-all">
            <div className="h-full w-full lg:opacity-0 bg-[#00000062] absolute top-0 right-0 backdrop-blur-[4px] backdrop-brightness-90 group-hover:opacity-100 flex items-end transition-all">
              <div className="p-10">
                <div>
                  <h4 className="text-xl">WeatherApp</h4>
                  <p>A basic javascript app using Open Weather API</p>
                </div>
                <div className="flex w-full justify-between pt-10 overflow-visible">
                <Link to="https://github.com/noureennaaz/WeatherApp" className='overflow-visible'>
                    <FiGithub
                      size={25}
                      className="hover:scale-125 transition-all"
                    />
                  </Link>
                  <Link to="https://noureennaaz.github.io/WeatherApp/" className='overflow-visible' >
                    <IoMdOpen
                      size={25}
                      className="hover:scale-125 transition-all"
                      
                    />
                  </Link>
                </div>
              </div>
            </div>
            <img src={weather} className=" object-cover h-full w-full" />
          </div>
        </div>
        <div
          href="24carrotsClone"
          className="group z-50 rounded-lg shadow-yellow-600 border-slate-500 border box-border shadow-sm transition-all"
        >
          <div className="relative max-w-[400px] h-[250px] flex flex-shrink-0 flex-grow-0 transition-all">
            <div className="h-full w-full lg:opacity-0 bg-[#00000062] absolute top-0 right-0 backdrop-blur-[4px] backdrop-brightness-90 group-hover:opacity-100 flex items-end transition-all">
              <div className="p-10">
                <div>
                  <h4 className="text-xl">Event Planners</h4>
                  <p>A clone of beautiful event management site </p>
                </div>
                <div className="flex w-full justify-between pt-10 overflow-visible">
                <Link to="https://github.com/noureennaaz/24carrots-clone" className='overflow-visible'>
                    <FiGithub
                      size={25}
                      className="hover:scale-125 transition-all"
                    />
                  </Link>
                  {/* <Link to="Not deployed" className='overflow-visible'>
                    <IoMdOpen
                      size={25}
                      className="hover:scale-125 transition-all"
                      
                    />
                  </Link> */}
                </div>
              </div>
            </div>
            <img
              src={eventManagement}
              className=" object-cover h-full w-full"
            />
          </div>
        </div>
        <div
          href="exploding-cats"
          className="group z-50 rounded-lg shadow-yellow-600 border-slate-500 border box-border shadow-sm"
        >
          <div className="relative max-w-[400px] h-[250px] flex flex-shrink-0 flex-grow-0 transition-all">
            <div className="h-full w-full lg:opacity-0 bg-[#00000062] absolute top-0 right-0 backdrop-blur-[4px] backdrop-brightness-90 group-hover:opacity-100 flex items-end transition-all">
              <div className="p-10">
                <div>
                  <h4 className="text-xl">Exploding Kittens</h4>
                  <p>A web based game created using React,golang and redis</p>
                </div>
                <div className="flex w-full justify-between pt-10 overflow-visible">
                <Link to="https://github.com/noureennaaz/exploding-cats" className='overflow-visible'>
                    <FiGithub
                      size={25}
                      className="hover:scale-125 transition-all"
                    />
                  </Link>
                  {/* <Link to="to be deployed" className='overflow-visible' >
                    <IoMdOpen
                      size={25}
                      className="hover:scale-125 transition-all"
                      
                    />
                  </Link> */}
                </div>
              </div>
            </div>
            <img src={exploading} className=" object-cover h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
