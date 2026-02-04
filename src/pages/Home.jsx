import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = ({ t }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Scroll reveal animation
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight - 100;
        if (isInView && !isVisible[index]) {
          setIsVisible(prev => ({ ...prev, [index]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const features = [
    {
      title: t('home_feature1_title'),
      description: t('home_feature1_desc'),
      icon: '🛡️'
    },
    {
      title: t('home_feature2_title'),
      description: t('home_feature2_desc'),
      icon: '📦'
    },
    {
      title: t('home_feature3_title'),
      description: t('home_feature3_desc'),
      icon: '⚡'
    },
    {
      title: t('home_feature4_title'),
      description: t('home_feature4_desc'),
      icon: '💬'
    }
  ];

  const categories = [
    { name: t('home_category_vehicles'), icon: '🚗' },
    { name: t('home_category_electronics'), icon: '💻' },
    { name: t('home_category_realestate'), icon: '🏠' },
    { name: t('home_category_jobs'), icon: '💼' }
  ];

  return (
    <div className="home">
      {/* Hero Section with Parallax */}
      <section className="hero" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <div className="hero-gradient"></div>
        <div className="hero-content">
          <h1 className="hero-title reveal-on-scroll" data-delay="0">
            {t('home_hero_title')}
          </h1>
          <p className="hero-subtitle reveal-on-scroll" data-delay="100">
            {t('home_hero_subtitle')}
          </p>
          <p className="hero-description reveal-on-scroll" data-delay="200">
            {t('home_hero_description')}
          </p>
          <div className="hero-cta reveal-on-scroll" data-delay="300">
            <Link to="/browse" className="btn btn-primary">
              {t('home_hero_cta')}
            </Link>
            <Link to="/post" className="btn btn-secondary">
              {t('home_hero_cta2')}
            </Link>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title reveal-on-scroll">{t('home_features_title')}</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card glass-card reveal-on-scroll ${isVisible[index + 10] ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title reveal-on-scroll">{t('home_categories_title')}</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link
                key={index}
                to="/browse"
                className={`category-card glass-card reveal-on-scroll ${isVisible[index + 20] ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
