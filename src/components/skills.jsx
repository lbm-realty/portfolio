// const Skills = () => {
//   return (
//     <div id="skills"
//       style={{ fontFamily: "Times New Roman" }}
//       className="py-6 px-4 sm:px-32"
//     >
//       <div className="">
//         <div className="w-full h-1 bg-black my-12"></div>
//       </div>
//       <div className="px-8 py-16 bg-gray-200 opacity-85 rounded-3xl flex flex-col justify-center items-center">
//         <h2 className="font-bold text-2xl sm:text-5xl text-blue-900">Skills</h2>
//         <div className="flex flex-col sm:flex-row gap-8 pt-8">
//           <div className="border-solid border-gray-500 border-2 flex flex-col justify-center items-center px-6 py-14 rounded-3xl">
//             <h2 className="font-bold sm:text-xl text-lg">
//               Programming Languages
//             </h2>
//             <p className="pt-2 text-md sm:text-lg flex flex-wrap">
//               Java, C, Python, JavaScript,
//               <br /> HTML, CSS
//             </p>
//           </div>
//           <div className="border-solid border-gray-500 border-2 flex flex-col justify-center items-center px-6 py-14 rounded-3xl">
//             <h2 className="font-bold text-lg sm:text-xl">
//               Frameworks/Libraries
//             </h2>
//             <p className="pt-2 text-md sm:text-lg flex flex-wrap">
//               Node, React, Tailwind, Express
//               <br />
//               NumPy, Pandas, MatplotLib
//             </p>
//           </div>
//           <div className="border-solid border-gray-500 border-2 flex flex-col justify-center items-center px-6 py-14 rounded-3xl">
//             <h2 className="font-bold texet-lg sm:text-xl">Tools/Databases</h2>
//             <p className="pt-2 text-md sm:text-lg flex flex-wrap">
//               MySQl, MongoDB, Postman
//               <br />
//               Canva, Git, GitHub, PowerBI{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import { Code, Library, Wrench } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon }) => {
  return (
    <div className="group border border-gray-300 bg-gray-100 hover:border-blue-500 transition-all duration-300 rounded-2xl p-8 flex flex-col items-center gap-4 hover:shadow-lg">
      <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
        <Icon className="w-8 h-8 text-blue-900" />
      </div>
      <h2 className="font-bold text-xl text-gray-800">{title}</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm hover:bg-blue-50 hover:text-blue-900 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = {
    programming: {
      title: "Programming Languages",
      skills: ["Java", "C", "Python", "JavaScript", "HTML", "CSS"],
      icon: Code
    },
    frameworks: {
      title: "Frameworks/Libraries",
      skills: ["Node", "React", "Tailwind", "Express", "NumPy", "Pandas", "MatplotLib"],
      icon: Library
    },
    tools: {
      title: "Tools/Databases",
      skills: ["MySQL", "MongoDB", "Postman", "Canva", "Git", "GitHub", "PowerBI"],
      icon: Wrench
    }
  };

  return (
    <div id="skills" className="py-16 px-4 sm:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent mb-16"></div>
        
        <div className="bg-gray-200 opacity-85 rounded-3xl p-8 sm:p-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 text-center mb-12">
            Skills
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.values(skillsData).map((section, index) => (
              <SkillCard key={index} {...section} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;