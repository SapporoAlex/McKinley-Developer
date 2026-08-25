import './assets/Reset.scss';
import './assets/NavBar.scss';
import './assets/Lottie.scss';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import KV from './components/KV';
import WorkHistory from './components/WorkHistory';
import GridTools from './components/GridTools';
import GridWorks from './components/GridWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App: React.FC = () => {

  return (
    <div className="App">
      <Navbar/>
      <main>

          <KV />
          <WorkHistory />
          <GridTools />
          <GridWorks />
          <Contact />

      </main>
      <Footer />
    </div>
  );
};

export default App
