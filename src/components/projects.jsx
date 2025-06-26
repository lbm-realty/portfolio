import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const projects = [
  {
    title: "🔹YouTube Note-Taking Chrome Extension🔹",
    backStory:
      "While taking a summer English course, I got tired of pausing YouTube videos to take notes manually. So, I built a Chrome extension to make note-taking easier—anytime, anywhere",
    points: [
      "⤷ Created a Chrome extension that lets users jot down notes during videos",
      "⤷ Enabled CRUD functionality using Chrome Storage API for easy access",
      "⤷ Published on the Chrome Web Store, 20 installs & positive user feedback",
    ],
    tools: "Javascript, Chrome API, HTML/CSS",
    link: "🚀 View on Chrome Web Store",
    actualLink:
      "https://chromewebstore.google.com/detail/my-yt-notes/oniiihfbmhjghddmcmoblfalcmlkmhhj?hl=en-US&utm_source=ext_sidebar&pli=1",
  },
  {
    title: "🔹Mini Compiler🔹",
    backStory:
      "For a CS class project, I built a lexical analyzer and syntax parser, testing it with countless examples. Working in a Unix environment was a challenge at first, but it gave me a deep dive into how programming languages work under the hood",
    points: [
      "⤷ Developed a lexical analyzer to process code structure",
      "⤷ Implemented error detection for improved debugging",
      "⤷ Gained advanced C programming & compiler design experience.",
    ],
    tools: "C Language, Unix",
    link: "🚀 View on Github",
    actualLink: "https://github.com/lbm-realty/Compiler-C",
  },
  {
    title: "🔹Retail Revenue & Inventory Dashboard🔹",
    backStory:
      "Over the summer, my dad challenged me to learn SQL and Power BI using his company's data. As I built a dashboard, I uncovered a surprising insight—inventory costs were 150x the revenue",
    points: [
      "⤷ Used SQL to analyze retail revenue & inventory data from Panda Retail Company",
      "⤷ Built an interactive dashboard in PowerBI, uncovering 150% higher inventory costs vs revenue",
      "⤷ Demonstrated the power of data visualization for business decisions",
    ],
    tools: "PowerBI, SQL",
    link: "",
    actualLink: "",
  },
  {
    title: "🔹Scatch Shopping Website🔹",
    backStory:
      "I wanted to learn backend development and databases, so I built this shopping website as a personal project. With the help of tutorials, I picked up skills like authentication, cart management, and product handling—learning by doing every step of the way",
    points: [
      "⤷ Developed an e-commerce website using Node.js, MongoDB & EJS",
      "⤷ Implemented JWT-based authentication for secure user login & registration",
      "⤷ Built a seamless shopping cart & product management system for better UX",
    ],
    tools: "Node, Express, MongoDB, JWT, EJS",
    link: "🚀 View code on GitHub",
    actualLink: "https://github.com/lbm-realty/Shopping-Website",
  },
]

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const goToProject = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-6 w-full bg-gray-200 opacity-85 rounded-3xl min-h-screen sm:min-h-fit flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl sm:text-5xl sm:p-4 font-bold text-center mb-6 text-purple-800">Projects</h2>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            variant="outline"
            size="icon"
            className="absolute left-4 sm:-translate-x-6 w-fit sm:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-purple-200 hover:border-purple-300 shadow-lg"
          >
            <ChevronLeft className="h-8 w-8 sm:h-16 sm:w-12 text-purple-600 border border-gray-200" />
          </button>

          <button
            onClick={nextProject}
            variant="outline"
            size="icon"
            className="absolute right-4 sm:translate-x-6 w-fit top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border-purple-200 hover:border-purple-300 shadow-lg"
          >
            <ChevronRight className="h-8 w-8 sm:h-16 sm:w-12 text-purple-600 border border-gray-200" />
          </button>

          {/* Project Card */}
          <div className="px-6">
            <div className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
              <div className="p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-800 leading-tight">{projects[currentIndex].title}</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">A little Backstory</h4>
                      <p className="text-gray-800 leading-relaxed">{projects[currentIndex].backStory}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">What did I do?</h4>
                      <ul className="space-y-2">
                        {projects[currentIndex].points.map((point, index) => (
                          <li key={index} className="text-gray-800 leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-800 mb-2">Tools:</h4>
                      <p className="text-gray-700 font-medium">{projects[currentIndex].tools}</p>
                    </div>

                    {projects[currentIndex].actualLink && (
                      <div className="">
                        <button asChild className="bg-purple-950 hover:bg-purple-800 text-white">
                          <a
                            href={projects[currentIndex].actualLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 p-1"
                          >
                            {projects[currentIndex].link}
                            <ExternalLink className="h-0 w-0 sm:h-4 sm:w-4" />
                          </a>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-700 scale-125" : "bg-gray-400 hover:bg-purple-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


export default ProjectsSection;