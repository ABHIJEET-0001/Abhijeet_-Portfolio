import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formState, setFormState] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');

    // Replace these with your actual IDs from EmailJS dashboard
    const SERVICE_ID = 'service_id'; // e.g., 'service_abc123'
    const TEMPLATE_ID = 'template_id'; // e.g., 'template_xyz456'
    const PUBLIC_KEY = 'public_key'; // e.g., 'your_public_key'

    if (SERVICE_ID === 'service_id' || TEMPLATE_ID === 'template_id' || PUBLIC_KEY === 'public_key') {
      // Still using placeholders, let's simulate for now but log instruction
      console.log('Please set up your EmailJS IDs in Contact.jsx');
      setTimeout(() => {
        setFormState('success');
        form.current.reset();
        setTimeout(() => setFormState('idle'), 5000);
      }, 1500);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setFormState('success');
        form.current.reset();
        setTimeout(() => setFormState('idle'), 5000);
      }, (error) => {
        console.error(error.text);
        setFormState('error');
        setErrorMessage('Failed to send message. Please try again or use direct email.');
        setTimeout(() => setFormState('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">06 — Contact</span>
          <h2 className="section-title outfit">Get In <span>Touch</span></h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="outfit">Let's build something beautiful!</h3>
            <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out via form or social media.</p>

            <div className="contact-cards">
              <div className="contact-item glass-solid">
                <div className="icon-box"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>abhijeetkasera80@gmail.com</p>
                </div>
              </div>
              <div className="contact-item glass-solid">
                <div className="icon-box"><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 7426873863</p>
                </div>
              </div>
              <div className="contact-item glass-solid">
                <div className="icon-box"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>Ajmer, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h3 className="outfit">Connect</h3>
              <div className="social-icons">
                <a href="https://github.com/ABHIJEET-0001" target="_blank" rel="noreferrer" className="social-icon">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/abhijeet-kasera-bb4416230/" target="_blank" rel="noreferrer" className="social-icon">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {formState === 'success' ? (
              <div className="form-success">
                <CheckCircle size={64} className="text-accent" />
                <h3 className="outfit">Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button className="btn btn-secondary" onClick={() => setFormState('idle')}>Send another</button>
              </div>
            ) : formState === 'error' ? (
              <div className="form-success">
                <AlertCircle size={64} style={{ color: '#ef4444' }} />
                <h3 className="outfit">Oops!</h3>
                <p>{errorMessage}</p>
                <button className="btn btn-secondary" onClick={() => setFormState('idle')}>Try again</button>
              </div>
            ) : (
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="mono">01. Full Name</label>
                  <input type="text" name="user_name" placeholder="Abhijeet Kasera" required />
                </div>
                <div className="form-group">
                  <label className="mono">02. Email Address</label>
                  <input type="email" name="user_email" placeholder="abhijeet@example.com" required />
                </div>
                <div className="form-group">
                  <label className="mono">03. Subject</label>
                  <input type="text" name="subject" placeholder="Project Inquiry" required />
                </div>
                <div className="form-group">
                  <label className="mono">04. Message</label>
                  <textarea name="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                </div>
                <button 
                  type="submit" 
                  className={`btn btn-primary submit-btn ${formState === 'sending' ? 'loading' : ''}`}
                  disabled={formState === 'sending'}
                >
                  {formState === 'sending' ? (
                    'Transmitting...'
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
