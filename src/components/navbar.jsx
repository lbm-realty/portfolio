import Signature from "../images/signature.png";

const Navbar = () => {
    return (
        <div style={{fontFamily: "Times New Roman", background: "#fff"}} className="fixed z-10 shadow-md shadow-gray-500 text-sm sm:text-2xl p-4 sm:p-0 text-black flex items-center justify-between w-full">
            {/* <div className="font-bold"> */}
                <img src={Signature} alt="my_sign" className="h-4 sm:h-12 sm:pl-4" />
            {/* </div> */}
            <div className="flex gap-2 text-xs sm:text-xl sm:gap-10 sm:p-8">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#connect">Connect</a>
            </div>
        </div>
    );
}

export default Navbar;