import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerLinks = {
    platform: [
      { label: 'Virtual Lab', href: '#experiments' },
      { label: 'YOG Tutor', href: '#yog-tutor' },
      { label: 'Dashboard', href: '#dashboard' },
      { label: 'Subjects', href: '#subjects' }
    ],
    resources: [
      { label: 'PUC Syllabus', href: '#' },
      { label: 'Study Materials', href: '#' },
      { label: 'Practice Papers', href: '#' },
      { label: 'Video Tutorials', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Mission', href: '#about' },
      { label: 'Contact', href: '#' },
      { label: 'Blog', href: '#' }
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Technical Support', href: '#' },
      { label: 'School Partnerships', href: '#' },
      { label: 'Privacy Policy', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', href: '#' },
    { name: 'LinkedIn', icon: 'in', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'YouTube', icon: '▶', href: '#' }
  ];

  return (
    <footer className="bg-navy border-t border-glass-border">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <span className="font-display text-2xl font-bold text-white">
                  E-Prayog
                </span>
                <div className="w-2 h-2 bg-green rounded-full" />
              </div>
              
              {/* Description */}
              <p className="font-body text-muted leading-relaxed max-w-md">
                Premium virtual science learning platform for Karnataka PUC students. 
                Experience science through interactive 3D experiments and AI-powered tutoring.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 glass-effect border border-glass-border rounded-full flex items-center justify-center text-white hover:border-green hover:text-green transition-all focus-ring"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <span className="text-sm font-bold">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h4 className="font-display text-lg font-bold text-white mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      className="font-body text-muted hover:text-green transition-colors"
                      whileHover={{ x: 4 }}
                      whileTap={{ x: 0 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-glass-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              className="font-body text-sm text-muted"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              © 2024 E-Prayog. All rights reserved. Made with ❤️ for Karnataka students.
            </motion.p>

            {/* Bottom Links */}
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="#" className="font-body text-sm text-muted hover:text-green transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-body text-sm text-muted hover:text-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-muted hover:text-green transition-colors">
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-green text-navy rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow focus-ring z-40"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
