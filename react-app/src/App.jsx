import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";

const App = () => {
  return(
    <div className="bg-slate-900">
      <Nav/>
      <Banner/>
      <AboutMe/>
      <Services/>
    </div>
  );
};
export default App;