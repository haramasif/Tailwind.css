import About from "@/components/About";
import Contect from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import  AOS from "aos"
import"aos/dist/aos.css";


export default function Home() {
  


  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <Contect />
      <About />
    </main>
  );
}