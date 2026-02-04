import React, { useState, useEffect } from 'react';
import './Browse.css';

const Browse = ({ t }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const listings = [
    {
      id: 1,
      title: '2022 Tesla Model 3',
      category: 'vehicles',
      price: '$45,000',
      location: 'New York, NY',
      image: '🚗',
      featured: true
    },
    {
      id: 2,
      title: 'MacBook Pro 16" M2',
      category: 'electronics',
      price: '$2,499',
      location: 'San Francisco, CA',
      image: '💻',
      featured: false
    },
    {
      id: 3,
      title: 'Modern 3BR Apartment',
      category: 'realestate',
      price: '$450,000',
      location: 'Los Angeles, CA',
      image: '🏠',
      featured: true
    },
    {
      id: 4,
      title: 'iPhone 15 Pro Max',
      category: 'electronics',
      price: '$1,199',
      location: 'Chicago, IL',
      image: '📱',
      featured: false
    },
    {
      id: 5,
      title: '2021 BMW X5',
      category: 'vehicles',
      price: '$62,000',
      location: 'Miami, FL',
      image: '🚙',
      featured: false
    },
    {
      id: 6,
      title: 'Luxury Penthouse',
      category: 'realestate',
      price: '$1,200,000',
      location: 'Seattle, WA',
      image: '🏢',
      featured: true
    },
    {
      id: 7,
      title: 'Gaming PC Setup',
      category: 'electronics',
      price: '$3,500',
      location: 'Austin, TX',
      image: '🖥️',
      featured: false
    },
    {
      id: 8,
      title: 'Honda Civic 2023',
      category: 'vehicles',
      price: '$28,000',
      location: 'Boston, MA',
      image: '🚗',
      featured: false
    }
  ];

  const filteredListings = selectedCategory === 'all' 
    ? listings 
    : listings.filter(listing => listing.category === selectedCategory);

  return (
    <div className="browse">
      <div className="browse-header">
        <div className="container">
          <h1 className="page-title reveal-on-scroll">{t('browse_title')}</h1>
          <p className="page-subtitle reveal-on-scroll">{t('browse_subtitle')}</p>
        </div>
      </div>

      <div className="browse-content">
        <div className="container">
          <div className="browse-layout">
            {/* Filters Sidebar */}
            <aside className="filters glass-card reveal-on-scroll">
              <h3>{t('browse_filter')}</h3>
              
              <div className="filter-group">
                <label>{t('browse_category')}</label>
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">{t('browse_all_categories')}</option>
                  <option value="vehicles">{t('home_category_vehicles')}</option>
                  <option value="electronics">{t('home_category_electronics')}</option>
                  <option value="realestate">{t('home_category_realestate')}</option>
                </select>
              </div>

              <div className="filter-group">
                <label>{t('browse_sort')}</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="newest">{t('browse_sort_newest')}</option>
                  <option value="price-low">{t('browse_sort_price_low')}</option>
                  <option value="price-high">{t('browse_sort_price_high')}</option>
                </select>
              </div>

              <div className="filter-group">
                <label>{t('browse_price_range')}</label>
                <input type="range" min="0" max="100000" className="price-range" />
              </div>
            </aside>

            {/* Listings Grid */}
            <div className="listings-grid">
              {filteredListings.map((listing, index) => (
                <div
                  key={listing.id}
                  className={`listing-card glass-card reveal-on-scroll ${isVisible[index + 10] ? 'visible' : ''} ${listing.featured ? 'featured' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {listing.featured && <span className="featured-badge">Premium</span>}
                  <div className="listing-image">{listing.image}</div>
                  <div className="listing-content">
                    <h3 className="listing-title">{listing.title}</h3>
                    <p className="listing-location">📍 {listing.location}</p>
                    <div className="listing-footer">
                      <span className="listing-price">{listing.price}</span>
                      <button className="listing-btn">{t('browse_view_details')}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
