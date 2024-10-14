import { FiGithub } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";
import AOS from "aos"
import "./text.css"
import 'aos/dist/aos.css';

import {Link} from "react-router-dom"



const Projects = () => {

  AOS.init();
 
  return (
    <div className="z-50 playpen-sans-700 ">
      <div className="mx-auto w-4/6 z-50 drop-shadow">
        {/* <div className="bg-[#FFD700] h-[1px] w-[200px] mx-auto shadow-sm text-[#FFD700]"></div> */}
        <h2 className="text-[48px] text-indigo-300 py-10" >My Projects</h2>
      </div>
      <div className="md:mb-32 max-h-fit overflow-y-hidden flex-wrap scrollbar-hide mx-auto flex w-full gap-12 p-10 justify-center items-center ">
        <div
          className="z-50 rounded-lg shadow-yellow-600 border-slate-500 border box-border ease-in-out shadow-sm transition-transform hover:scale-105 group" data-aos="fade-up"
        >
          <div className=" relative max-w-[400px] h-[250px] flex flex-shrink-0 flex-grow-0 transition-all">
            <div className="h-full w-full transition-opacity lg:opacity-0 bg-[#00000062] absolute top-0 right-0 backdrop-blur-[4px] backdrop-brightness-90 group-hover:opacity-100 flex items-end">
              <div className="p-10">
                <div>
                  <h4 className="text-xl">Netflix Clone</h4>
                  <p>A clone of homepage of Netflix site </p>
                </div>
                <div className="flex w-full justify-between pt-10 overflow-visible">
                  <Link to="https://github.com/noureennaaz/NetflixClone" className='overflow-visible'>
                    <FiGithub
                      size={25}
                      className="hover:scale-125 transition-transform ease-in-out"
                    />
                  </Link>
                  <Link to="https://noureennaaz.github.io/NetflixClone/" className='overflow-visible'>
                    <IoMdOpen
                      size={25}
                      className="hover:scale-125 transition-transform ease-in-out"
                    />

                  </Link>
                  
                </div>
              </div>
            </div>
            <img src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727094737/Portfolio/projects/netflix_eygaxo.png' className="object-cover h-full w-full " alt=""/>
          </div>
        </div>
        <div data-aos="fade-up"
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
                      className="hover:scale-125  transition-transform ease-in-out"
                    />
                  </Link>
                  <Link to="https://noureennaaz.github.io/PasswordGenerator/" className='overflow-visible' >
                    <IoMdOpen
                      size={25}
                      className="hover:scale-125 transition-transform ease-in-out"
                      
                    />
                  </Link>
                  
                  
                </div>
              </div>
            </div>
            <img
              src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727094738/Portfolio/projects/pass-gen_opnv55.png'
              className=" object-cover h-full w-full opacity-100"
              alt=""
            />
          </div>
        </div>
        <div data-aos="fade-up"
          className="z-50 rounded-lg shadow-yellow-600 border-slate-500 border box-border shadow-sm hover:scale-105 transition-all group"
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
                        className="hover:scale-125 transition-transform ease-in-out"
                      />
                    </Link>
                    <Link to="https://theblogapp.netlify.app/" className='overflow-visible'>
                      <IoMdOpen
                        size={25}
                        className="hover:scale-125  transition-transform ease-in-out"
                        
                      />
                    </Link>
                  
                </div>
              </div>
            </div>
            <img src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727094733/Portfolio/projects/blog-app_dumvgh.png' className=" object-cover h-full w-full" alt=""/>
          </div>
        </div>
        <div data-aos="fade-up" className="z-50 group rounded-lg shadow-yellow-600 border-slate-500 border box-border hover:scale-105 shadow-sm transition-all">
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
            <img src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727094736/Portfolio/projects/tutorBot_xwbxmi.jpg' className=" object-cover h-full w-full" alt="" />
          </div>
        </div>
        
        <div data-aos="fade-up"
          className="group hover:scale-105 z-50 rounded-lg shadow-yellow-600 border-slate-500 border box-border shadow-sm transition-all"
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
            <img src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727094736/Portfolio/projects/weather_fsai0f.png' className=" object-cover h-full w-full" alt=""/>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="group hover:scale-105 z-50 rounded-lg shadow-yellow-600 border-slate-500 border box-border shadow-sm transition-all"
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
              src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727094735/Portfolio/projects/event-manage_ujhawn.png'
              className=" object-cover h-full w-full"
              alt=""
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="group hover:scale-105 z-50 rounded-lg shadow-yellow-600 border-slate-500 border box-border shadow-sm"
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
            <img src='https://res.cloudinary.com/dihp6gdpi/image/upload/v1727094734/Portfolio/projects/exploding-kitten_zlaqz4.png' className=" object-cover h-full w-full" alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
