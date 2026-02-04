import React, { useState, useEffect } from 'react';
import './Pricing.css';

const Pricing = ({ t }) => {
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

  const plans = [
    {
      id: 'free',
      name: t('pricing_free'),
      price: t('pricing_free_price'),
      period: t('pricing_per_ad'),
      features: [
        t('pricing_feature_1free'),
        t('pricing_feature_2free'),
        t('pricing_feature_3free')
      ],
      popular: false
    },
    {
      id: 'basic',
      name: t('pricing_basic'),
      price: t('pricing_basic_price'),
      period: t('pricing_per_month'),
      features: [
        t('pricing_feature_1basic'),
        t('pricing_feature_2basic'),
        t('pricing_feature_3basic'),
        t('pricing_feature_4basic')
      ],
      popular: true
    },
    {
      id: 'premium',
      name: t('pricing_premium'),
      price: t('pricing_premium_price'),
      period: t('pricing_per_month'),
      features: [
        t('pricing_feature_1premium'),
        t('pricing_feature_2premium'),
        t('pricing_feature_3premium'),
        t('pricing_feature_4premium'),
        t('pricing_feature_5premium')
      ],
      popular: false
    }
  ];

  return (
    <div className="pricing">
      <div className="pricing-header">
        <div className="container">
          <h1 className="page-title reveal-on-scroll">{t('pricing_title')}</h1>
          <p className="page-subtitle reveal-on-scroll">{t('pricing_subtitle')}</p>
        </div>
      </div>

      <div className="pricing-content">
        <div className="container">
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div
                key={plan.id}
                className={`pricing-card glass-card reveal-on-scroll ${isVisible[index] ? 'visible' : ''} ${plan.popular ? 'popular' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="plan-btn">{t('pricing_choose_plan')}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
