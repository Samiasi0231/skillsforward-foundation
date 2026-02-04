import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, AlertCircle } from 'lucide-react';

export const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    reason: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const courses = [
    'Digital Literacy (8 weeks)',
    'Basic Coding (12 weeks)',
    'Job Readiness (4 weeks)',
    'Unsure - Help me choose',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      if (!formData.name || !formData.email || !formData.course) {
        setError('Please fill in all required fields');
        setLoading(false);
        return;
      }

      console.log('Form submitted:', formData);
      
      setSubmitted(true);
      setLoading(false);
      
      setTimeout(() => {
        setFormData({ name: '', email: '', course: '', reason: '' });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center min-h-96"
      >
        <div className="bg-white rounded-xl shadow-xl p-12 text-center max-w-md mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-block mb-4"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Check size={32} className="text-green-600" />
            </div>
          </motion.div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">You're In! 🎉</h3>
          <p className="text-gray-600 mb-4">
            Check your email for your next steps. Your first lesson is ready to go.
          </p>
          <p className="text-sm text-secondary font-semibold">
            Can't find it? Check your spam folder.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="signup" className="py-20 bg-primary text-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">Ready to Get Started?</h2>
          <p className="text-center text-blue-100 mb-12 text-lg">
            Join 2,400+ graduates. Takes 2 minutes. No credit card needed.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white text-gray-900 rounded-xl p-8 md:p-12 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3"
              >
                <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
                <p className="text-red-700 text-sm">{error}</p>
              </motion.div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Sarah Okonkwo"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                disabled={loading}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors text-gray-900 placeholder-gray-500"
                disabled={loading}
              />
              <p className="text-xs text-gray-600 mt-1">We'll send your login details here</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Which course interests you? <span className="text-red-500">*</span>
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors text-gray-900"
                disabled={loading}
              >
                <option value="">Select a course...</option>
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                What's your main goal? (Optional)
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="e.g., Get a new job, Learn coding, Improve skills..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none transition-colors text-gray-900 placeholder-gray-500 resize-none"
                rows={3}
                disabled={loading}
              />
            </div>

            {/* Trust signals */}
            <div className="bg-blue-50 border-l-4 border-secondary p-4 rounded mb-8">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">✓ No credit card required</span> • <span className="font-semibold">✓ No spam</span> • <span className="font-semibold">✓ Start immediately</span>
              </p>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-4 text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={!loading ? { scale: 1.02 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
            >
              {loading ? 'Signing up...' : 'Enroll for Free'}
            </motion.button>

            <p className="text-center text-xs text-gray-600 mt-6">
              By enrolling, you agree to our <a href="#" className="text-secondary font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-secondary font-semibold hover:underline">Privacy Policy</a>
            </p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};