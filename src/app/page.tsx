import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Divider from "../components/Divider";


export default function Home() {
  return (
   <div className=" w-full overflow-x-hidden bg-white">
    {/* nav bar */}
    <Navbar/>
    {/* header */}
    <Header/>
    <Divider/>
    {/* about */}
    <About/>
    <Divider/>
    
    {/* skills */}
    <Skills/>
    <Divider/>

    {/* projects */}
    <Projects/>
    <Divider/>

    {/* blogs */}
    <Blogs/>
    <Divider/>

    {/* contact */}
    <Contact/>
    {/* footer */}
    <Footer/>
   </div>
  )
}
