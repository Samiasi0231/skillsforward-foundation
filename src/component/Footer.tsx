import { motion } from 'framer-motion';
import { Mail, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      title: 'Programs',
      items: ['Digital Literacy', 'Basic Coding', 'Job Readiness'],
    },
    {
      title: 'Organization',
      items: ['About Us', 'Our Impact', 'Partners'],
    },
    {
      title: 'Support',
      items: ['Contact', 'FAQ', 'Terms of Service', 'Privacy Policy'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container py-16">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold">
                SF
              </div>
              <span className="text-xl font-bold text-white">SkillsForward</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empowering young Africans with practical skills for the digital economy.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart size={16} className="text-secondary" />
              <span className="text-gray-400">Founded 2019</span>
            </div>
          </motion.div>

          {/* Links */}
          {links.map((column, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-secondary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-4">
              <a
                href="mailto:info@skillsforward.org"
                className="flex items-center gap-3 text-gray-400 hover:text-secondary transition-colors text-sm"
              >
                <Mail size={18} className="flex-shrink-0" />
                <span>info@skillsforward.org</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
        >
          <p>
            © {currentYear} SkillsForward Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-secondary transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Instagram
            </a>
          </div>
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-xs text-gray-500">
            🔒 Your data is safe with us. We never sell your information.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};