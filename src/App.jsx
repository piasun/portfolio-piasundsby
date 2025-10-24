import React from 'react';
import Navbar from './components/Navbar';
import Portfolio from './Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <Portfolio />
        <Contact />
      </main>
       <Footer />
    </div>
  );
}
