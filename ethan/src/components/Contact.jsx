import React from 'react';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-title"
        >
          Get In Touch
        </motion.h2>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;