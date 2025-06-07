import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Parks from './components/Parks';
import Events from './components/Events';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Parks />
      <Events />
      <Projects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;