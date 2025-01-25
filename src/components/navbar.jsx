const Navbar = () => {
    return (
        <div style={{fontFamily: "Times New Roman", background: "#fff"}} className="fixed z-10 shadow-md shadow-gray-500 text-2xl p-8 text-black flex justify-between w-full">
            <div className="font-bold">Portfolio</div>
            <div className="flex gap-10">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Projects</a>
            <a href="">Connect</a>
            </div>
        </div>
    );
}

export default Navbar;