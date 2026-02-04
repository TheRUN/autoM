import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Browse from './pages/Browse';
import PostAd from './pages/PostAd';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import { useTranslation } from './utils/translations';
import './App.css';

function App() {
  const [language, setLanguage] = useState('en');
  const t = useTranslation(language);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <Router>
      <div className="app">
        <Header language={language} onLanguageChange={handleLanguageChange} t={t} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home t={t} />} />
            <Route path="/browse" element={<Browse t={t} />} />
            <Route path="/post" element={<PostAd t={t} />} />
            <Route path="/pricing" element={<Pricing t={t} />} />
            <Route path="/faq" element={<FAQ t={t} />} />
            <Route path="/contact" element={<Contact t={t} />} />
          </Routes>
        </main>
        <Footer t={t} />
      </div>
    </Router>
  );
}

export default App;
