import msa_logo from "../images/msa-logo.png";
import ttu_logo from "../images/ttu-logo.png";
import { useState } from "react";

const Experience = () => {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const times = [
    "Day Off",
    "10:00 - 02:00",
    "Day Off",
    "10:00 - 02:00",
    "Day Off",
    "02:00 - 06:00",
    "02:00 - 06:00",
  ];

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div id="experience" className="">
        <div className="p-6 sm:p-12 bg-gray-200 opacity-85 rounded-3xl">
        <div className="flex flex-col items-center">
          <h2 className="text-red-900 justify-center text-bold text-3xl sm:text-5xl font-bold">
            Experience
          </h2>
        </div>
        
        <div onMouseEnter={() => { setIsHovered1(true) }}
               onMouseLeave={() => { setIsHovered1(false) }} 
               className="pt-6 sm:pt-12">
        {isHovered1 === false ? (
          <div
          className="p-6 bg-gray-100 sm:p-12 border-blue-200 border-2 rounded-3xl cursor-pointer">
            <div className="flex flex-col gap-4 justify-between sm:flex-row">
              <div>
                <h2 className="font-bold text-lg sm:text-2xl">
                  🚀 Full Stack Developer – Texas Tech MSA (June 2024 - Present)
                </h2>
                <div className="text-md sm:text-lg pt-4 sm:pl-10">
                  • Developed and launched a responsive website for Texas Tech MSA, enhancing online presence and accessibility 
                  <br />
                  • Engineered a custom REST API with secure admin authentication for streamlined event management 
                  <br />
                  • Integrated Stripe payment processing, generating over $11,000 in donations for organizational initiatives 
                  <br />
                  • Partnered with marketing team in Agile-driven collaboration to optimize UI and enhance user experience
                  <br />
                </div>
              </div>
              <div className="px-4 sm:px-0 sm:w-80">
                <img
                  className="w-64 bg-red-700 h-56 rounded-full"
                  src={msa_logo}
                  alt="msa-logo"
                />
              </div>
            </div>
            </div>
            ) : (
            <div className="border-blue-200 border-2 rounded-3xl py-48 cursor-pointer w-full flex items-center justify-center rounded-3xl text-3xl text-blue-950 opacity-0 hover:opacity-90">
              <a href="https://ttumsa.org/" className="">
                Visit Website🔗
              </a>
            </div>
            )}
          <div onMouseEnter={() => { setIsHovered2(true) }}
                 onMouseLeave={() => { setIsHovered2(false) }}
                className="pt-12">
            { isHovered2 === false ? (
            <div className="bg-gray-100 border-blue-200 border-2 p-6 sm:p-12 rounded-3xl flex cursor-pointer">
              <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <div>
                  <h2 className="font-bold text-lg sm:text-2xl">
                    🎓 Student Tutor – Texas Tech Learning Center (Jan 2024
                    - Present)
                  </h2>
                  <div className="text-md sm:text-lg pt-4 sm:pl-10">
                    • Tutored 100+ students in Calculus 1 and 2, and Programming Principles in C using tailored teaching methods
                    <br />
                    • Assisted students in achieving 90% or higher scores on exams, enhancing their understanding and grades 
                    <br />
                    • Received a return offer to teach computer science courses, demonstrating strong teaching and subject matter expertise
                    <br />
                  </div>
                </div>
                <div className="flex justify-center px-6 sm:px-0 sm:w-80">
                <img
                  className="bg-red-700 h-56 w-64"
                  src={ttu_logo}
                  alt="ttu-logo"
                />
                </div>
              </div>
              </div>
              ) : (
              <div className="border-blue-200 border-2 rounded-3xl py-24 cursor-pointer flex flex-col bottom-1 justify-center items-center opacity-0 inset-0 rounded-3xl hover:opacity-95 hover:bg-gray-200">
                <div className="flex flex-col items-center gap-4 sm:flex-row">
                  <h2 className="text-2xl sm:text-3xl font-bold sm:pr-8">📅:</h2>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    {days.map((day, index) => (
                      <div className="text-md flex flex-col items-center justify-center pr-[34px]">
                        <h4>{day}</h4>
                        <h4>{times[index]}</h4>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row pt-8 sm:pt-0 items-center">
                  <h2 className="text-2xl pt-2 pr-8 font-bold">📍:</h2>
                  <p className="pt-3 text-sm sm:text-md">
                    Drane Hall, 2515 15th St, Lubbock, TX 79409
                  </p>
                </div>
              </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
