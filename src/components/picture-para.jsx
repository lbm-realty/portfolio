import MyPic from "../images/my-pic.png";

const PictureAndPara = () => {
  return (
    <div id="home" className="flex flex-col-reverse items-center gap-12 pt-32 pb-8 px-4 sm:justify-around sm:flex-row text-black align-center">
      <div className="flex-col bg-gray-200 opacity-85 rounded-3xl p-6">
        <div className="text-4xl font-bold flex pb-4">
          <h2 className="pr-2 pt-1">Hey,</h2>
          <h2 className="text-red-700 text-5xl">I’m Labeeb!</h2>
        </div>
        <p className="w-80 font-times text-xl">
          A Computer Science student at Texas Tech University, passionate about
          building things that make a difference. With about 2 years of
          experience in application development, I feel become comfortable in
          quite a few languages. Let’s connect and build something awesome!
        </p>
        <div className="flex pt-4 gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/labeeb-muntasir-53826b255/"
            // target="_blank"
            aria-label="LinkedIn"
            className="transform hover:scale-110 transition duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="30"
              fill="#0F16BA"
            >
              <path d="M20.452 20.452H16.81v-5.356c0-1.279-.025-2.926-1.78-2.926-1.782 0-2.056 1.391-2.056 2.825v5.457H9.333V9h3.465v1.561h.05c.482-.911 1.658-1.874 3.413-1.874 3.65 0 4.323 2.401 4.323 5.523v6.242zM5.337 7.433a2.015 2.015 0 1 1 0-4.03 2.015 2.015 0 0 1 0 4.03zM6.793 20.452H3.882V9h2.91v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.714v20.572C0 23.23.793 24 1.772 24h20.452C23.208 24 24 23.23 24 22.286V1.714C24 .77 23.208 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="https://github.com/lbm-realty"
            // target="_blank"
            aria-label="GitHub"
            className="transform hover:scale-110 transition duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="32"
              height="32"
              fill="000"
            >
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.087 3.292 9.397 7.865 10.93.575.105.78-.25.78-.555v-2.1c-3.2.692-3.865-1.425-3.865-1.425-.524-1.332-1.28-1.687-1.28-1.687-1.045-.714.08-.7.08-.7 1.157.08 1.767 1.187 1.767 1.187 1.025 1.765 2.692 1.253 3.347.957.105-.754.41-1.253.75-1.54-2.557-.293-5.24-1.292-5.24-5.746 0-1.267.445-2.307 1.187-3.12-.12-.293-.52-1.472.113-3.067 0 0 .98-.31 3.22 1.187a11.04 11.04 0 0 1 5.86 0c2.24-1.497 3.22-1.187 3.22-1.187.635 1.595.235 2.774.115 3.067.745.813 1.185 1.853 1.185 3.12 0 4.463-2.688 5.452-5.253 5.735.422.364.802 1.077.802 2.183v3.234c0 .307.202.662.792.553A11.503 11.503 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z" />
            </svg>
          </a>
          <a
            href="mailto:labeebmuntasir@gmail.com"
            // target="_blank"
            aria-label="Gmail"
            className="transform hover:scale-110 transition duration-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="42"
              height="46"
            >
              <path
                fill="#fff"
                d="M8 16v-3q0-1.25.875-2.125T11 10h26q1.25 0 2.125.875T40 13v3l-16 10.95q-.6.4-1.2.4t-1.2-.4L8 16z"
              />
              <path
                fill="#3116F8"
                d="M8 16l16 10.95q.6.4 1.2.4t1.2-.4L40 16V13q0-1.25-.875-2.125T37 10H11q-1.25 0-2.125.875T8 13v3z"
              />
              <path
                fill="#0F8FF2"
                d="M8 16v19q0 1.25.875 2.125T11 38h26q1.25 0 2.125-.875T40 35V16l-16 10.95q-.6.4-1.2.4t-1.2-.4z"
              />
            </svg>
          </a>
          <a href="https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-hero-goto">
            <div style={{ fontFamily: "Times New Roman" }} className="text-white rounded-full transform hover:scale-110 transition duration-500 hover:bg-white hover:text-black pt-1 pb-1 pr-2 pl-2 bg-blue-900">
                Resume
            </div>
          </a>
        </div>
      </div>
      <div className="flex">
      <img
        src={MyPic}
        className="border border-solid border-white rounded-full h-80 w-80"
        alt="my_pic"
      />
      </div>
    </div>
  );
};

export default PictureAndPara;
