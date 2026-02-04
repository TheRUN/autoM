import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ t }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{t('footer_about')}</h3>
          <p>{t('footer_about_text')}</p>
          <div className="footer-social">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>{t('footer_quick_links')}</h3>
          <Link to="/" className="footer-link">{t('nav_home')}</Link>
          <Link to="/browse" className="footer-link">{t('nav_browse')}</Link>
          <Link to="/post" className="footer-link">{t('nav_post')}</Link>
          <Link to="/pricing" className="footer-link">{t('nav_pricing')}</Link>
        </div>

        <div className="footer-section">
          <h3>{t('footer_support')}</h3>
          <Link to="/faq" className="footer-link">{t('nav_faq')}</Link>
          <Link to="/contact" className="footer-link">{t('nav_contact')}</Link>
          <a href="#" className="footer-link">{t('footer_help')}</a>
          <a href="#" className="footer-link">{t('footer_terms')}</a>
          <a href="#" className="footer-link">{t('footer_privacy')}</a>
        </div>

        <div className="footer-section">
          <h3>{t('contact_info_title')}</h3>
          <p className="footer-contact">
            <strong>{t('contact_email_label')}:</strong><br />
            info@autom.com
          </p>
          <p className="footer-contact">
            <strong>{t('contact_phone_label')}:</strong><br />
            +1 (555) 123-4567
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t('footer_rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
