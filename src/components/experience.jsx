import msa_logo from "../images/msa-logo.png";
import ttu_logo from "../images/ttu-logo.png";

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

  return (
    <div id="experience" className="pt-4 px-4 sm:px-12 pb-14">
        <div className="mt-6 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent mb-16"></div>
        <div className="p-6 sm:p-12 bg-gray-200 opacity-85 rounded-3xl">
        <div className="flex flex-col items-center">
          <h2 className="p-2 rounded-2xl text-red-900 justify-center text-bold text-2xl sm:text-5xl font-bold">
            Experience
          </h2>
        </div>
        <div className="pt-6 sm:pt-12">
          <div className="relative p-6 bg-gray-100 sm:p-12 border-blue-200 border-2 rounded-3xl cursor-pointer hover:scale-105 duration-500">
            <div className="flex flex-col gap-4 justify-between sm:flex-row">
              <div>
                <h2 className="font-bold text-lg sm:text-2xl">
                  🚀 Full Stack Developer – Texas Tech MSA (June 2024 - Present)
                </h2>
                <div className="text-md sm:text-lg pt-4 sm:pl-10">
                  • Designed and built a fully responsive website for Texas Tech
                  MSA, making it easier for students to access events and
                  resources
                  <br />
                  • Developed a secure admin dashboard to manage events
                  dynamically
                  <br />
                  • Integrated Stripe payments to enable donations and support
                  student led initiatives
                  <br />
                  • Ensured seamless deployment using Netlify with smooth CI/CD
                  workflows
                  <br />• Worked closely with the marketing team to improve
                  UX/UI for better engagement
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
            <div className="inset-0 flex items-center justify-center bottom-1 absolute bg-gray-200 rounded-3xl text-3xl text-blue-950 opacity-0 hover:opacity-90">
              <a href="https://ttumsa.org/" className="">
                Visit Website🔗
              </a>
            </div>
          </div>
          <div className="pt-12">
            <div className="bg-gray-100 border-blue-200 border-2 p-6 sm:p-12 rounded-3xl flex cursor-pointer hover:scale-105 duration-500 relative">
              <div className="flex flex-col gap-4 sm:flex-row justify-between">
                <div>
                  <h2 className="font-bold text-lg sm:text-2xl">
                    🎓 Student Tutor – Texas Tech Learning Center (Jan 2024
                    - Present)
                  </h2>
                  <div className="text-md sm:text-lg pt-4 sm:pl-10">
                    • Tutored more than 90 students in Calculus 1, Calculus 2,
                    Programming Principles in C, utilizing strong communication
                    and verbal skills to clarify complex concepts
                    <br />
                    • Helped students achieve 90%+ scores through structured
                    tutoring
                    <br />
                    • Demonstrated strong teaching and subject matter expertise
                    by receiving a return offer for 3 consecutive semesters
                    <br />• Adapted lessons to individual learning styles,
                    making complex topics approachable
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
              <div className="flex flex-col bottom-1 absolute justify-center items-center opacity-0 inset-0 rounded-3xl hover:opacity-95 hover:bg-gray-200">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
