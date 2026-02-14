
import "./App.css";

import Layout from './componets/layouts/Layout';
import About from './pages/About/About';
import TechStark from './pages/TechStrack/TechStark';
import Project from './pages/Projects/Project';
import Education from './pages/Educations/Education';
import WorkExp from './pages/WorkExp/WorkExp';
import Contact from './pages/Contacts/Contact';

import ScrollToTop from "react-scroll-to-top";
import Tada from "react-reveal/Tada";
import { useTheme } from "./componets/context/ThemeContext";
import MobileNav from "./componets/MobileNev/MobileNav";

 import { ToastContainer } from 'react-toastify';
 import "react-toastify/dist/ReactToastify.css";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div id={theme}></div>
        <div className="container">
          <About />
          <Education />
          <TechStark />
          <Project />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
            <Tada>
          <h4 className="text-center">Made With 💝💗💝 &copy; 2026</h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="white"
        style={{ backgroundColor: "black", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
