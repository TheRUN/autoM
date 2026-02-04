import React, { useState } from 'react';
import './PostAd.css';

const PostAd = ({ t }) => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    location: '',
    email: '',
    phone: ''
  });

  const plans = [
    {
      id: 'free',
      name: t('post_free_plan'),
      price: '$0',
      features: [
        t('pricing_feature_1free'),
        t('pricing_feature_2free'),
        t('pricing_feature_3free')
      ]
    },
    {
      id: 'basic',
      name: t('post_basic_plan'),
      price: '$9.99',
      features: [
        t('pricing_feature_1basic'),
        t('pricing_feature_2basic'),
        t('pricing_feature_3basic'),
        t('pricing_feature_4basic')
      ]
    },
    {
      id: 'premium',
      name: t('post_premium_plan'),
      price: '$29.99',
      features: [
        t('pricing_feature_1premium'),
        t('pricing_feature_2premium'),
        t('pricing_feature_3premium'),
        t('pricing_feature_4premium'),
        t('pricing_feature_5premium')
      ]
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    setStep(4); // Success step
  };

  return (
    <div className="post-ad">
      <div className="post-header">
        <div className="container">
          <h1 className="page-title">{t('post_title')}</h1>
          <p className="page-subtitle">{t('post_subtitle')}</p>
        </div>
      </div>

      <div className="post-content">
        <div className="container">
          {/* Progress Steps */}
          <div className="steps-indicator">
            <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-label">{t('post_step1')}</div>
            </div>
            <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-label">{t('post_step2')}</div>
            </div>
            <div className={`step ${step >= 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-label">{t('post_step3')}</div>
            </div>
          </div>

          {/* Step 1: Ad Details */}
          {step === 1 && (
            <div className="step-content glass-card">
              <h2>{t('post_step1')}</h2>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>{t('post_ad_title')}</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder={t('post_ad_title')}
                    className="form-input"
                  />
                </div>
                <div className="form-group full-width">
                  <label>{t('post_description')}</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder={t('post_description')}
                    className="form-textarea"
                    rows="5"
                  />
                </div>
                <div className="form-group">
                  <label>{t('post_category')}</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">{t('post_category')}</option>
                    <option value="vehicles">{t('home_category_vehicles')}</option>
                    <option value="electronics">{t('home_category_electronics')}</option>
                    <option value="realestate">{t('home_category_realestate')}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{t('post_price')}</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="$0.00"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>{t('post_location')}</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder={t('post_location')}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>{t('post_email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('post_email')}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>{t('post_phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('post_phone')}
                    className="form-input"
                  />
                </div>
                <div className="form-group full-width">
                  <label>{t('post_upload_photos')}</label>
                  <div className="file-upload">
                    <input type="file" multiple className="file-input" />
                    <div className="file-upload-label">📸 {t('post_upload_photos')}</div>
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button className="btn btn-primary" onClick={handleNext}>
                  {t('post_next')}
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Choose Plan */}
          {step === 2 && (
            <div className="step-content">
              <h2 className="step-title">{t('post_select_plan')}</h2>
              <div className="plans-grid">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`plan-card glass-card ${selectedPlan === plan.id ? 'selected' : ''}`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    <h3>{plan.name}</h3>
                    <div className="plan-price">{plan.price}</div>
                    <ul className="plan-features">
                      {plan.features.map((feature, index) => (
                        <li key={index}>✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="form-actions">
                <button className="btn btn-secondary" onClick={handleBack}>
                  {t('post_back')}
                </button>
                <button className="btn btn-primary" onClick={handleNext}>
                  {t('post_next')}
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="step-content glass-card payment-form">
              <h2>{t('post_complete_payment')}</h2>
              <div className="payment-info">
                ℹ️ {t('post_payment_info')}
              </div>
              <div className="form-grid">
                <div className="form-group full-width">
                  <label>{t('post_card_number')}</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>{t('post_expiry')}</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label>{t('post_cvv')}</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="form-input"
                  />
                </div>
              </div>
              <div className="payment-summary">
                <div className="summary-row">
                  <span>Plan:</span>
                  <span>{plans.find(p => p.id === selectedPlan)?.name}</span>
                </div>
                <div className="summary-row total">
                  <span>Total:</span>
                  <span>{plans.find(p => p.id === selectedPlan)?.price}</span>
                </div>
              </div>
              <div className="form-actions">
                <button className="btn btn-secondary" onClick={handleBack}>
                  {t('post_back')}
                </button>
                <button className="btn btn-primary" onClick={handleSubmit}>
                  {t('post_pay_now')}
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="step-content glass-card success-message">
              <div className="success-icon">✓</div>
              <h2>{t('post_success')}</h2>
              <p>{t('post_success_message')}</p>
              <button className="btn btn-primary" onClick={() => window.location.href = '/browse'}>
                {t('post_view_ad')}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostAd;
