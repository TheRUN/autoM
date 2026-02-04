import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is a demo - no actual message was sent)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <div className="container">
          <h1 className="page-title">{t('contact_title')}</h1>
          <p className="page-subtitle">{t('contact_subtitle')}</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-section glass-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>{t('contact_name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder={t('contact_name')}
                  />
                </div>

                <div className="form-group">
                  <label>{t('contact_email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder={t('contact_email')}
                  />
                </div>

                <div className="form-group">
                  <label>{t('contact_subject')}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder={t('contact_subject')}
                  />
                </div>

                <div className="form-group">
                  <label>{t('contact_message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                    placeholder={t('contact_message')}
                    rows="6"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  {t('contact_send')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <div className="contact-info-card glass-card">
                <h3>{t('contact_info_title')}</h3>
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-text">
                    <strong>{t('contact_address').split(',')[0]}</strong>
                    <p>{t('contact_address')}</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-text">
                    <strong>{t('contact_phone_label')}</strong>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-text">
                    <strong>{t('contact_email_label')}</strong>
                    <p>info@autom.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <div className="info-icon">🕐</div>
                  <div className="info-text">
                    <strong>{t('contact_hours')}</strong>
                    <p>{t('contact_hours_time')}</p>
                  </div>
                </div>
              </div>

              <div className="social-links glass-card">
                <h3>Follow Us</h3>
                <div className="social-grid">
                  <a href="#" className="social-btn">Facebook</a>
                  <a href="#" className="social-btn">Twitter</a>
                  <a href="#" className="social-btn">Instagram</a>
                  <a href="#" className="social-btn">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
