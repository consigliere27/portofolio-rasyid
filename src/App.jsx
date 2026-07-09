import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen">
      {/* Preloader Animation */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Custom Cursor - Hidden on mobile/touch devices */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Navigation */}
      {!isLoading && <Navbar />}

      {/* Main Content */}
      <main>
        {!isLoading && <Hero />}
        <About />
        <Projects />
        <Work />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
