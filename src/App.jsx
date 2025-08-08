import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -left-40 md:left-40 -top-100 w-[500px] h-[500px] rounded-full bg-accent blur-[120px] opacity-40 -z-10 -translate-x-1/4"></div>
      <Header />
      <main className="container mx-auto ">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
