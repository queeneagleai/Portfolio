import StarField from "./components/StarField";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ToolStack from "./components/ToolStack";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import LiveDemo from "./components/LiveDemo";
import Process from "./components/Process";
import FeaturedResources from "./components/FeaturedResources";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <ToolStack />
        <Skills />
        <Services />
        <Portfolio />
        <LiveDemo />
        <Process />
        <FeaturedResources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
