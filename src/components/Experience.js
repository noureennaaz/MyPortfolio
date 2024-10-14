
const Exp = () => {
  return (
    <div className="md:pt-52 pt-20 flex flex-wrap justify-center relative w-screen  mx-auto p-10">
      <div className="sm:pt-40 text-cyan-900 font-thin text-4xl lg:px-32 px-20">
        Experience
      </div>
      <div className="flex">
        <div className="w-[50px] hidden xl:block">
          <div className="h-[500px] w-1 bg-gradient-to-b from-slate-300"></div>
          <div className="">
          <div className="h-2 w-2 rounded-full top-[370px] z-[999] bg-teal-400 absolute translate-y-2 -translate-x-0 hidden xl:block"></div>
          <div className="h-6 w-6 rounded-full top-[370px] z-[999] bg-cyan-600 absolute animate-pulse -translate-x-2 hidden xl:block"></div>
          </div>
         
        </div>
        <div className=" rounded-3xl sm:w-[700px] max-h-[50vh] border-4 border-b-slate-400 min-w-[300px] z-[80]  box-border overflow-visible border-r-slate-300 border-l-slate-200 border-t-slate-200 flex items-center justify-center gap-5 flex-wrap lg:gap-20 w-[80%] mt-32 min-h-fit h-[300px] p-7">
          <div className="h-[100px] w-[100px]">
            <img  alt= "" src="https://pbs.twimg.com/profile_images/1711275061414699008/7RFqZYlp_400x400.png" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-3 sm:w-[400px]">
          <div className="text-xl  text-slate-700 sm:w-[200px] playpen-sans-700 overflow-visible">
            BlueStock Fintech
          </div>
          <div className="text-slate-500 text-lg">
          Bluestock is mobile app for stock market content, analytics, and community.

          </div>
          <div className="text-slate-400 text-sm">10/2024 - Present</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Exp;
