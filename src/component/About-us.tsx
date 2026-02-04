import { motion } from 'framer-motion';
import { Heart, Users, Globe, Award } from 'lucide-react';

export const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Free for Everyone',
      description: 'Quality education should not depend on your wealth. That\'s why we\'re 100% free.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We partner with local communities to ensure training meets real local job needs.',
    },
    {
      icon: Globe,
      title: 'Works Offline',
      description: 'Limited internet? Download lessons and progress offline. No problem.',
    },
    {
      icon: Award,
      title: 'Job-Focused',
      description: 'Every course is designed around real job requirements. You learn what employers want.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title mb-4">Why We Exist</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Millions of young people in East Africa have talent and ambition, but not access to quality tech education.
            We changed that in 2019. Since then, we've helped 2,400+ graduates land real jobs.
          </p>
          <p className="text-xl font-semibold text-primary">
            Our mission: <span className="text-secondary">Empower young Africans with practical skills for the digital economy.</span>
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-xl bg-gray-50 hover:bg-secondary/5 transition-colors duration-300"
            >
              <div className="inline-block p-4 bg-secondary/20 rounded-full mb-4">
                <value.icon size={32} className="text-secondary" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-blue-900 text-white rounded-xl p-12 mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">2,400+</p>
              <p className="text-blue-100">Graduates Trained</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">68%</p>
              <p className="text-blue-100">Job Placement Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">$22K</p>
              <p className="text-blue-100">Average Starting Salary</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">5</p>
              <p className="text-blue-100">Countries Reached</p>
            </div>
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-8">Trusted By Leading Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {['TechHub Kenya', 'Youth Network', 'Digital Africa', 'StartUp Foundation'].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-lg border border-gray-200"
              >
                <p className="font-semibold text-gray-700">{partner}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};