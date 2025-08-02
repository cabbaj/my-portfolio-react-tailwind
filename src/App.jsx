import Header from "./components/Header";
import About from "./sections/About";
import Hero from "./sections/Hero";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto border-2">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default App;
