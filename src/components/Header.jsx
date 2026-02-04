import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import './Header.css';

const Header = ({ language, onLanguageChange, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav_home') },
    { path: '/browse', label: t('nav_browse') },
    { path: '/post', label: t('nav_post') },
    { path: '/pricing', label: t('nav_pricing') },
    { path: '/faq', label: t('nav_faq') },
    { path: '/contact', label: t('nav_contact') }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">◆</span>
          <span className="logo-text">AutoM</span>
        </Link>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageToggle currentLanguage={language} onLanguageChange={onLanguageChange} />
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
