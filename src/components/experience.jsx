import msa_logo from "../images/msa-logo.png";
import ttu_logo from "../images/ttu-logo.png"; 

const Experience = () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const times = ["Day Off", "10:00 - 02:00", "Day Off", "10:00 - 02:00", "Day Off", "02:00 - 06:00", "02:00 - 06:00"];

  return (
    <div style={{ fontFamily: "Times New Roman" }} className="pt-4">
      <div className="bg-offWhite p-14">
        <div className="flex flex-col items-center">
        <h2 className="text-red-900 justify-center text-bold text-5xl font-bold">
          Experience
        </h2>
        <div className="h-[1.5px] bg-red-700 w-48"></div>
        </div>
        {/* <div> */}
          <div className="pt-12">
            <div className="relative bg-gray-200 p-6 rounded-3xl cursor-pointer hover:scale-105 duration-500">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-2xl">
                    🚀 Full Stack Developer – Texas Tech MSA (June 2024 -
                    Present)
                  </h2>
                  <div className="text-lg pt-4 pl-10">
                    • Designed and built a fully responsive website for Texas
                    Tech MSA, making it easier for students to access events and
                    resources
                    <br />
                    • Developed a secure admin dashboard to manage events
                    dynamically
                    <br />
                    • Integrated Stripe payments to enable donations and support
                    student led initiatives
                    <br />
                    • Ensured seamless deployment using Netlify with smooth
                    CI/CD workflows
                    <br />• Worked closely with the marketing team to improve
                    UX/UI for better engagement
                  </div>
                </div>
                <div>
                <img
                  className="w-64 bg-red-700 h-56 rounded-full"
                  src={msa_logo}
                  alt="msa-logo"
                />
                </div>
              </div>
              <div className="flex items-center justify-center h-[260px] bottom-1 w-[870px] absolute bg-gray-200 text-3xl text-blue-950 opacity-0 hover:opacity-90">
                <a href="www.ttumsa.org" className="">
                  Visit Website🔗
                </a>
              </div>
            </div>
          {/* </div> */}
          <div className="pt-12">
            <div className="bg-gray-200 p-6 rounded-3xl flex cursor-pointer hover:scale-105 duration-500 relative">
              <div className="flex justify-between">
                <div>
                  <h2 className="font-bold text-2xl">
                  🎓 Student Tutor – Texas Tech Learning Center (January 2024 - Present)
                  </h2>
                  <div className="text-lg pt-4 pl-10">
                  • Tutored more than 90 students in Calculus 1, Calculus 2, Programming Principles in C, utilizing strong 
                  communication and verbal skills to clarify complex concepts 
                  <br />
                  • Helped students achieve 90%+ scores through structured tutoring
                  <br />
                  • Demonstrated strong teaching and subject matter expertise by receiving a return offer for 3 consecutive semesters
                  <br />
                  • Adapted lessons to individual learning styles, making complex topics approachable
                  </div>
                </div>
                <img
                  className="bg-red-700 h-56"
                  src={ttu_logo}
                  alt="ttu-logo"
                />
              </div>
              <div className="flex h-[265px] flex-col bottom-1 absolute justify-center items-center opacity-0 w-[910px] hover:opacity-95 hover:bg-gray-200">
              <div className="flex">
                <h2 className="text-3xl font-bold pr-8">📅:</h2>
                <div className="flex flex-wrap items-center justify-center">
                {days.map((day, index) => (
                <div className="text-md flex flex-col items-center justify-center pr-[34px]">
                    <h4>{day}</h4>
                    <h4>{times[index]}</h4>
                </div>
                ))}
                </div>
              </div>
              <div className="flex items-center">
                <h2 className="text-3xl pt-2 pr-8 font-bold">📍:</h2>
                <p className="pt-3 text-md">Drane Hall, 2515 15th St, Lubbock, TX 79409</p>
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
