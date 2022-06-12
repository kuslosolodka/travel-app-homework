import React from 'react';
import FooterIcon from '../../assets/images/heart.svg';
import '../../assets/css/style.css';

const Footer = () => (
  <footer className="footer">
      <span className="footer__text">
        from <a className="footer__link" href="https://binary-studio.com">binary studio</a> with
        <img className="footer__icon" src={FooterIcon} alt="heart icon" />
      </span>
    </footer>
);



export default Footer;