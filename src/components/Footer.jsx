import React from 'react';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import NFTNexusLogo from '../assets/NFTNexus.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: faTwitter, url: 'https://www.youtube.com/shorts/y5N8eFP6D0U' },
    { icon: faFacebook, url: 'https://giphy.com/gifs/rickroll-rick-astley-never-gonna-give-you-up-Vuw9m5wXviFIQ' },
    { icon: faInstagram, url: 'https://instagram.com/nayan.subedi.10' },
    { icon: faGithub, url: 'https://github.com/NayanSubedi' },
  ];

  return (
    <footer className="gradient-bg-hero text-white">
      <div className="container mx-auto py-8 flex flex-col items-center">
        <div className="flex justify-center items-center mb-4">
          <a href='/'>
            <img src={NFTNexusLogo} alt="NFT Nexus Logo" className="w-32 cursor-pointer" />
          </a>
        </div>

        <div className="flex flex-wrap justify-center ">
          <FooterLink to="/" text="Home" />
          <FooterLink to="/artworks" text="Artworks" />
          <FooterLink to="/creators" text="Creators" />
          <FooterLink to="/transactions" text="Transactions" />
        </div>

        <Copyright />

        <SubscriptionForm scrollToTop={scrollToTop} />

        <SocialMediaLinks socialLinks={socialLinks} />

        <ContactInformation email="contact@nftnexus.co" />

        <LegalLinks />
      </div>
    </footer>
  );
};

const FooterLink = ({ to, text }) => (
  <Link to={to} className="text-white text-base mx-3 hover:text-blue-500 cursor-pointer">
    {text}
  </Link>
);

const Copyright = () => (
  <div className="mt-6 text-base text-center">
    <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved</p>
  </div>
);

const SubscriptionForm = ({ scrollToTop }) => (
  <div className="mt-4">
    <div className="text-center text-gray-400 text-sm">
      <p>Subscribe to our newsletter for updates:</p>
    </div>
    <div className="mt-2 flex items-center justify-center">
      <input
        type="email"
        placeholder="Your email"
        className="py-2 px-4 rounded-l-md border-t border-b border-l text-gray-800 focus:outline-none"
      />
      <button
        className="bg-[#1526bd] hover:bg-[#b45609] border-violet-800 text-white py-2 px-4 rounded-r-md border focus:outline-none"
        onClick={scrollToTop}
      >
        Subscribe
      </button>
    </div>
  </div>
);

const SocialMediaLinks = ({ socialLinks }) => (
  <div className="mt-4">
    <div className="text-center text-gray-400 text-sm">
      <p>Follow us on:</p>
    </div>
    <div className="mt-2 flex items-center justify-center">
      {socialLinks.map((link, index) => (
        <a href={link.url} target="_blank" rel="noopener noreferrer" key={index} className="text-blue-400 hover:text-blue-600 mr-4">
          <FontAwesomeIcon icon={link.icon} size="2x" />
        </a>
      ))}
    </div>
  </div>
);

const ContactInformation = ({ email }) => (
  <div className="mt-4">
    <div className="text-center text-gray-400 text-sm">
      <p>Contact us:</p>
    </div>
    <div className="mt-2 text-center">
      <p>Email: <a href={`mailto:${email}`} className="text-blue-400 hover:text-blue-600">{email}</a></p>
    </div>
  </div>
);

const LegalLinks = () => (
  <div className="mt-4">
    <div className="text-center text-gray-400 text-sm">
      <p>Legal:</p>
    </div>
    <div className="mt-2 flex items-center justify-center">
      <FooterLink to="/privacy-policy" text="Privacy Policy" />
      <FooterLink to="/terms-of-service" text="Terms of Service" />
    </div>
  </div>
);

export default Footer;
