import Navbar from "../components/navbar";
import PictureAndPara from "../components/picture-para";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";

const Home = () => {
    return (
        <>
        <Navbar />
        <PictureAndPara />
        <About />
        <Experience />
        <Projects />
        </>
    )
}

export default Home;