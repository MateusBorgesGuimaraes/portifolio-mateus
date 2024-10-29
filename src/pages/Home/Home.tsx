import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Technologies from './Technologies/Technologies';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </section>
  );
};

export default Home;
