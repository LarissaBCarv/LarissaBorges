import Hero from "./sections/Hero";
import Header from "./components/Header";
import About from "./sections/About";
import Resume from "./sections/Resume";
import Projects from "./sections/Projects";
import FloatingMenu from "./components/FloatingMenu";
import Stack from "./sections/Stack";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Stack />
      <Contact />

      <FloatingMenu />
    </>
  );
}

export default App;
