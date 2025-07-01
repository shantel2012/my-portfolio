import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className="hero">
      <motion.div
        className="hero-overlay"
        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          Hi, I'm <span className="highlight">Tinomudaishe Kutama</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-description"
        >
          A passionate software developer crafting immersive web experiences.
        </motion.p>

        <motion.a
          href="/contact"
          className="hero-btn"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
        >
          Hire Me
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
