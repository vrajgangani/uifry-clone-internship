import './App.css';
import { Advantages } from './components/Advantages';
import { Faq } from './components/FAQ';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div className="App md:px-24 lg:px-32 px-4">
      <Navbar />
      <Hero/>
      <Features />
      <Advantages />
      <Testimonials />
      <Faq />
      <Footer/>
    </div>
  );
}

export default App;
