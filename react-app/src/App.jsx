import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return(
    <div className="bg-slate-900">
      <Nav/>
      <Banner/>
      <AboutMe/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  );
};
export default App;