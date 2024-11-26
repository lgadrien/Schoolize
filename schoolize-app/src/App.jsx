import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
// Components principaux
import Home from './components/Home';
import Calendrier from './components/Calendrier';
import Formations from './components/Formations';
import FAQ from './components/FAQ';
// Footer
import Footer from './components/layout/Footer';
// Components dans le Footer
import Cookies from './components/legal/GestiondesCookies';
import Legal from './components/legal/MentionsLégales';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <main className="container mx-auto px-4 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendrier" element={<Calendrier />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/faq" element={<FAQ />} />
              # Routes Footer
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/legal" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
