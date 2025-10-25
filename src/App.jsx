import Contact from "./components/Contact";
import Expirence from "./components/Expirence";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  return (
    <>
      <div className="fixed top-0 z-[-10] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <main className="flex flex-col items-center md:px-8 lg:px-16 text-white">
        <Navbar />
        <Hero />
        <Tech />
        <Expirence />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
