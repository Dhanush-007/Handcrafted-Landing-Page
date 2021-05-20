//import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Headpart from "./components/Headpart";
import Services from "./components/Service";
import Pricing from "./components/Pricing";
import Calltoaction from "./components/Calltoaction";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Backtotop from "./components/Backtotop";

import "./components/assets/css/bootstrap.min.css";
import "./components/assets/css/default.css";
import "./components/assets/css/magnific-popup.css";
import "./components/assets/css/style.css";
import "./components/assets/css/style.css.map";
import "./components/assets/css/LineIcons.css";
export default function App() {
  return (
    <div>
      <Navbar />
      <Headpart />
      <Services />
      <Pricing />
      <Calltoaction />
      <Contact />
      <Footer />
      <Backtotop />
    </div>
  );
}
