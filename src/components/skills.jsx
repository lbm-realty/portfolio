import { Code, Library, Wrench } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon }) => {
  return (
    <div className="group border border-gray-300 bg-gray-100 hover:border-blue-500 transition-all duration-300 rounded-2xl p-4 flex flex-col items-center justify-center gap-4 hover:shadow-lg">
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
      skills: ["Spring Boot", "Node", "React", "Tailwind", "Express", "NumPy", "Pandas", "MatplotLib"],
      icon: Library
    },
    tools: {
      title: "Tools/Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Postman", "Canva", "Git", "GitHub", "PowerBI"],
      icon: Wrench
    }
  };

  return (
    <div id="skills" className="">
      <div className="bg-gray-200 opacity-85 rounded-3xl p-8 sm:p-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-blue-900 text-center mb-12">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center items-center">
          {Object.values(skillsData).map((section, index) => (
            <SkillCard key={index} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;