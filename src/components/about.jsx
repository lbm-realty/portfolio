const About = () => {
  return (
    <div id="about"
        className="px-4 sm:px-32">
          {/* <div className="w-full h-1 bg-black mb-20 mt-12"></div> */}
          <div className="mt-4 w-full h-1 bg-gradient-to-r from-transparent via-black to-transparent mb-16"></div>
          <div className="py-6 sm:py-12 px-3 flex-col bg-gray-200 opacity-85 rounded-3xl">
        <div className="flex flex-col justify-center items-center">
        <h2
          className="text-green-700 font-bold text-2xl sm:text-4xl flex"
        >
          About Me
        </h2>
        </div>
        <div className="px-8 sm:0x-16 pt-4 text-md sm:text-lg">
          Hey! I'm Labeeb, a tech enthusiast who's basically turning coffee into
          code at Texas Tech. I get super excited about
          solving problems through technology. Whether it's building websites,
          creating random Chrome extensions, or geeking out over data, I'm all
          in. My brain is basically a mix of curiosity, creativity, and way too
          much caffeine. Right now, I'm juggling being a student, developer, and
          part-time coding wizard. I can build websites, break down complex
          algorithms, and somehow still make time to tutor other students.
          Python, JavaScript, React? They're my playground. When I'm not typing
             on my laptop, I'm probably hanging out with friends,
          dreaming up the next cool project, or trying to convince my friends
          that coding is actually fun ( PS. I even got one of them to switch from pre-med to Comp Sci 🚀). My ultimate goal?
          Create tech that makes people's lives easier and maybe have some fun
          while doing it. Want to see what I'm working on? Let's chat!
        </div>
      </div>
    </div>
  );
};

export default About;
