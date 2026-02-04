import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem = ({ item, index }: { item: FAQItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="text-left font-semibold text-gray-900 text-lg">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown size={24} className="text-secondary" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: 'Is this really completely free?',
      answer: 'Yes. 100% free. No hidden fees, no credit card required, no "premium" version. We believe education should be accessible to everyone. We\'re funded by philanthropic grants and partnerships with organizations that believe in our mission.',
    },
    {
      question: 'How long do courses take?',
      answer: 'It depends on the course: Digital Literacy is 8 weeks, Basic Coding is 12 weeks, and Job Readiness is 4 weeks. But you control the pace. Some people finish in 6 weeks, others take longer. There\'s no time limit.',
    },
    {
      question: 'What if I have limited internet?',
      answer: 'All courses can be downloaded for offline use. You can download lessons on WiFi, work offline on your device, and sync your progress when you\'re back online. This is built into our platform from the start.',
    },
    {
      question: 'Will I really get a job after?',
      answer: 'We don\'t guarantee jobs, but our data shows 68% of graduates report being hired or getting better employment within 6 months. Job placement depends on your effort, the local job market, and your willingness to apply. We also provide job readiness training to help you stand out.',
    },
    {
      question: 'Do I need experience to start?',
      answer: 'No. Our courses are designed for complete beginners. The Digital Literacy course starts from the basics. If you\'ve never used a computer much, start there. Basic Coding builds on Digital Literacy concepts.',
    },
    {
      question: 'What if I don\'t finish a course?',
      answer: 'No problem. There are no penalties or fees. You can pause and resume anytime. We also provide support via email and community forums if you get stuck.',
    },
    {
      question: 'How do I know the instructors are good?',
      answer: 'Our instructors are professionals working in the tech industry. They bring real-world experience into every lesson. And our course design is validated by industry partners who hire our graduates.',
    },
    {
      question: 'What countries do you operate in?',
      answer: 'We currently serve Kenya, Uganda, Tanzania, Rwanda, and Nigeria. If you\'re in another country, reach out—we\'re expanding.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Real questions from real people. Real answers.
          </p>

          <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem key={index} item={faq} index={index} />
            ))}
          </div>

          {/* Support CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-xl p-8 text-center border border-secondary/20"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">
              Email us at <a href="mailto:support@skillsforward.org" className="text-secondary font-semibold hover:underline">support@skillsforward.org</a> and we'll get back to you within 24 hours.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};