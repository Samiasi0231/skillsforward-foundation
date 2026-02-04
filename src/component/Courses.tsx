import { motion } from 'framer-motion';
import { ArrowRight, Clock, Users } from 'lucide-react';

interface CourseCardProps {
  icon: string;
  title: string;
  description: string;
  outcome: string;
  duration: string;
  learners: string;
  index: number;
}

const CourseCard = ({ icon, title, description, outcome, duration, learners, index }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: '0 20px 40px -10px rgba(30, 90, 168, 0.15)' }}
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-secondary transition-all duration-300"
    >
      <div className="text-4xl mb-4">{icon}</div>
      
      <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Job Outcome - Trust builder */}
      <div className="bg-secondary/10 border-l-4 border-secondary p-4 rounded mb-6">
        <p className="text-sm font-semibold text-secondary mb-1">After This Course:</p>
        <p className="text-gray-700 font-medium">{outcome}</p>
      </div>

      {/* Meta info */}
      <div className="flex flex-col gap-3 mb-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-secondary" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} className="text-secondary" />
          <span>{learners} learning this</span>
        </div>
      </div>

      <motion.a
        href="#signup"
        className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
        whileHover={{ x: 5 }}
      >
        Enroll for Free <ArrowRight size={18} />
      </motion.a>
    </motion.div>
  );
};

export const Courses = () => {
  const courses = [
    {
      icon: '💻',
      title: 'Digital Literacy',
      description: 'Master the fundamentals of computers, internet, and digital tools used in every workplace.',
      outcome: 'Qualify for entry-level administrative and customer service roles ($15-25K/year)',
      duration: '8 weeks • Self-paced',
      learners: '850+',
    },
    {
      icon: '⌨️',
      title: 'Basic Coding',
      description: 'Build real websites with HTML, CSS, and JavaScript. Create your first web project.',
      outcome: 'Ready for Junior Web Developer roles ($25-40K/year) or freelance projects',
      duration: '12 weeks • Self-paced',
      learners: '1,200+',
    },
    {
      icon: '💼',
      title: 'Job Readiness',
      description: 'Professional CV, interview skills, LinkedIn optimization, and workplace communication.',
      outcome: 'Land interviews faster with a professional profile and proven interview techniques',
      duration: '4 weeks • Self-paced',
      learners: '2,400+',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Learning Tracks That Get You Hired</h2>
          <p className="section-subtitle">
            Real skills. Real jobs. Start today, for free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} index={index} />
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-xl p-8 border-l-4 border-secondary"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">Why SkillsForward?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="font-semibold text-gray-900 mb-2">✓ Completely Free</p>
              <p className="text-gray-600">No hidden fees. Ever.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">✓ Job-Focused</p>
              <p className="text-gray-600">Learn what employers actually want.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 mb-2">✓ Works Offline</p>
              <p className="text-gray-600">Download lessons for limited bandwidth.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};