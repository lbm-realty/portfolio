import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, height: "18px",  background: "black", borderRadius: "20px" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", height: "18px",  background: "black", borderRadius: "20px" }}
            onClick={onClick}
          />
        );
      }

        const settings = {
          className: "slider variable-width",
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth: true,
          adaptiveHeight: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }

    const projects = [
        {
            title: "🔹YouTube Note-Taking Chrome Extension🔹",
            backStory: "While taking a summer English course, I got tired of pausing YouTube videos to take notes manually. So, I built a Chrome extension to make note-taking easier—anytime, anywhere",
            points: [
                
                    "⤷ Created a Chrome extension that lets users jot down notes during videos", 
                    "⤷ Enabled CRUD functionality using Chrome Storage API for easy access", 
                    "⤷ Published on the Chrome Web Store,  20 installs & positive user feedback"
                ],
            tools: "Javascript, Chrome API, HTML/CSS",
            link: "🚀 View on Chrome Web Store",
            actualLink: "https://chromewebstore.google.com/detail/my-yt-notes/oniiihfbmhjghddmcmoblfalcmlkmhhj?hl=en-US&utm_source=ext_sidebar&pli=1"
        },
        {
            title: "🔹Mini Compiler🔹",
            backStory: "For a CS class project, I built a lexical analyzer and syntax parser, testing it with countless examples. Working in a Unix environment was a challenge at first, but it gave me a deep dive into how programming languages work under the hood",
            points: [
                "⤷ Developed a lexical analyzer to process code structure",
                "⤷ Implemented error detection for improved debugging",
                "⤷ Gained advanced C programming & compiler design experience."
            ],
            tools: "C Language, Unix",
            link: "🚀 View on Github",
            actualLink: "https://github.com/lbm-realty/Compiler-C"
        },
        {
            title: "🔹Retail Revenue & Inventory Dashboard🔹",
            backStory: "Over the summer, my dad challenged me to learn SQL and Power BI using his company’s data. As I built a dashboard, I uncovered a surprising insight—inventory costs were 150x the revenue",
            points: [
                "⤷ Used SQL to analyze retail revenue & inventory data from Panda Retail Company",
                "⤷ Built an interactive dashboard in PowerBI, uncovering 150% higher inventory costs vs revenue",
                "⤷ Demonstrated the power of data visualization for business decisions"
            ],
            tools: "PowerBI, SQL",
            link: "",
            actualLink: ""
        },
        {
            title: "🔹Scatch Shopping Website🔹",
            backStory: "I wanted to learn backend development and databases, so I built this shopping website as a personal project. With the help of tutorials, I picked up skills like authentication, cart management, and product handling—learning by doing every step of the way",
            points: [
                "⤷ Developed an e-commerce website using Node.js, MongoDB & EJS",
                "⤷ Implemented JWT-based authentication for secure user login & registration",
                "⤷ Built a seamless shopping cart & product management system for better UX"
            ],
            tools: "Node, Express, MongoDB, JWT, EJS",
            link:"🚀 View code on GitHub",
            actualLink: "https://github.com/lbm-realty/Shopping-Website"
        }
    ]

  return (
    <div className="pt-4">
      <div style={{ fontFamily: "Times New Roman"}} className="bg-offWhite p-8">
      <div className="flex flex-col items-center pb-12">
        <h2 className="text-purple-900 justify-center text-bold text-5xl font-bold">
          Projects
        </h2>
        <div className="h-[1.5px] bg-purple-700 w-36"></div>
        </div>

        <div className="">
         <Slider {...settings}>
            {projects.map((project, index) => (
                <div style={{ width: 450 }} className="flex flex-col justify-center items-center p-4 bg-gray-300 rounded-xl shadow-lg h-[475px]">
                <h1 className="font-bold text-xl">{project.title}</h1>
                <div className="pt-2 flex flex-col gap-2">
                    <div>
                    <h1 className="font-bold text-lg">• A little Backstory</h1>
                    <p className="pl-3 pt-1 text-md">
                        {project.backStory}
                    </p>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg">• What did I do? </h1>
                        {project.points.map((point) => (
                            <p className="pl-3">{point}</p>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <h1 className="font-bold pr-1">• Tools: </h1>
                        <p className="italic">{project.tools}</p>
                    </div>
                    <a className="text-blue-800" href={project.actualLink}>{project.link}</a>                
                </div>
            </div>
            ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
