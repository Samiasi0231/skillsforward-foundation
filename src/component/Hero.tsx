import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-20 pb-32 bg-gradient-to-br from-primary via-blue-700 to-blue-900 overflow-hidden"
    >
      {/* Animated background circles */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center"
        >
          {/* Free Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-6 bg-white/10 px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm"
          >
            <Zap size={18} className="text-secondary" />
            <span className="text-white font-semibold">100% FREE Training</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Launch Your Digital Career,{' '}
            <span className="text-secondary">No Cost. Real Jobs.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Join 2,400+ graduates from East Africa who landed jobs in tech. 
            Learn digital skills, get hired. Completely free.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4 mb-10 text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-2xl font-bold text-secondary">2,400+</p>
              <p className="text-sm text-blue-100">Graduates</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-2xl font-bold text-secondary">68%</p>
              <p className="text-sm text-blue-100">Employed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-2xl font-bold text-secondary">5</p>
              <p className="text-sm text-blue-100">Countries</p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#signup"
              className="btn-primary flex items-center gap-2 text-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Free Now <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#success"
              className="btn-secondary flex items-center gap-2 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Success Stories
            </motion.a>
          </motion.div>

          {/* No Credit Card Message */}
          <motion.p
            variants={itemVariants}
            className="text-sm text-blue-100 mt-6"
          >
            ✓ No credit card required • ✓ Takes 2 minutes to sign up • ✓ Start immediately
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};