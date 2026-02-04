import React from 'react';
import './LanguageToggle.css';

const LanguageToggle = ({ currentLanguage, onLanguageChange }) => {
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'et', label: 'ET' }
  ];

  return (
    <div className="language-toggle">
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn ${currentLanguage === lang.code ? 'active' : ''}`}
          onClick={() => onLanguageChange(lang.code)}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
