import React from 'react';
import { motion } from 'framer-motion'; // Importing motion from Framer Motion
import './styles.css'; // Import the CSS file
import logo from './jcc.png';

const App: React.FC = () => {
  return (
    <div className="full-page">
      {/* Background Image with Zoom Animation */}
      <motion.img
        className="background-image"
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/49/6d/7f/bethesda-international.jpg?w=600&h=200&s=1"
        alt="Background"
        initial={{ scale: 1.1 }} // Initial scale for zoom effect
        animate={{ scale: 1 }} // Final scale
        transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }} // Zoom in and out
      />

      {/* Overlay for darkening the image */}
      <div className="overlay"></div>

      {/* Logo with Animation */}
      <motion.img
        className="logo"
        src={logo}
        alt="logo"
        initial={{ y: -50, opacity: 0 }} // Start above and hidden
        animate={{ y: 0, opacity: 1 }} // Move to original position and fade in
        transition={{ duration: 1 }} // Animation duration
      />

      {/* Centered Text with Animation */}
      <motion.div
        className="centered-text"
        initial={{ opacity: 0 }} // Start hidden
        animate={{ opacity: 1 }} // Fade in
        transition={{ duration: 1.5, delay: 0.5 }} // Animation duration and delay
      >
        We Exist To Honor God<br />
        And Make Disciples
      </motion.div>

      {/* Navigation bar with Animation */}
      <motion.div
        className="navbar"
        initial={{ y: -100, opacity: 0 }} // Start above and hidden
        animate={{ y: 0, opacity: 1 }} // Move to original position and fade in
        transition={{ duration: 0.8, delay: 1 }} // Animation duration and delay
      >
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Today Promise</a>
          <a href="#">Contact</a>
          <a href="#">Blessing Plans</a>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
