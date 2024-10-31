import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Technologies from './Technologies/Technologies';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <section>
      <Hero />
      <div id="sobre">
        <About />
      </div>
      <div id="projetos">
        <Projects />
      </div>
      <div id="tecnologias">
        <Technologies />
      </div>
      <div id="contato">
        <Contact />
      </div>
    </section>
  );
};

export default Home;
