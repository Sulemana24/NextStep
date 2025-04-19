import './App.css';
import Navbar from './components/navbar.js';
import Hero from './components/hero.js';
import Works from './components/works.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import Jobs from './components/jobs.js';
import Featured from './components/featured.js';
import Articles from './components/articles.js';
import Latest from './components/latest.js';
import Newsletter from './components/newsletter.js';
import Faqs from './components/faqs.js';
import Contact from './components/contact.js';
import Forum from './components/forum.js';
import Events from './components/events.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Works />
      <About />
      <Projects /> 
      <Jobs />
      <Featured />
      <Articles />
      <Latest />
      <Newsletter />
      <Faqs />
      <Contact />
      <Forum />
      <Events />
      <Footer />
      
    </div>
  );
};

export default App;


