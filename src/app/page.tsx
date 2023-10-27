import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";


export default function Home() {
  return (
   <div className=" w-full overflow-x-hidden bg-white">
    {/* nav bar */}
    <Navbar/>
    {/* header */}
    <Header/>
    {/* about */}
    <About/>
    {/* skills */}
    <Skills/>
    {/* projects */}
    {/* blogs */}
    {/* contact */}
    {/* footer */}
   </div>
  )
}
