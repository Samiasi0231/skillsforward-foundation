import { motion } from 'framer-motion';
import { Quote, Award } from 'lucide-react';

interface SuccessStory {
  name: string;
  role: string;
  company: string;
  course: string;
  quote: string;
  salary: string;
  image: string;
  month: string;
  year: number;
}

const StoryCard = ({ story, index }: { story: SuccessStory; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-secondary transition-all duration-300"
    >
      {/* Quote Icon */}
      <div className="flex items-center justify-between mb-4">
        <Quote size={24} className="text-secondary/30" />
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
        </div>
      </div>

      {/* Quote */}
      <p className="text-gray-700 italic mb-6 leading-relaxed">{story.quote}</p>

      {/* Person Info */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <h4 className="font-bold text-lg text-gray-900">{story.name}</h4>
        <p className="text-secondary font-semibold text-sm">{story.role} at {story.company}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-600">Completed Course</p>
          <p className="font-bold text-primary">{story.course}</p>
        </div>
        <div>
          <p className="text-gray-600">Salary After</p>
          <p className="font-bold text-secondary">{story.salary}</p>
        </div>
      </div>

      {/* Timeline */}
      <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-200">
        {story.month} {story.year}
      </p>
    </motion.div>
  );
};

export const SuccessStories = () => {
  const stories: SuccessStory[] = [
    {
      name: 'Amara Kimani',
      role: 'Junior Web Developer',
      company: 'TechHub Kenya',
      course: 'Basic Coding',
      quote: 'I had no tech experience. SkillsForward made it so clear and practical. Now I\'m building real websites and getting paid. My family is so proud.',
      salary: '$28,000/year',
      image: '👩‍💻',
      month: 'December',
      year: 2024,
    },
    {
      name: 'Kwame Mensah',
      role: 'Digital Marketing Associate',
      company: 'East Africa Ventures',
      course: 'Digital Literacy',
      quote: 'The job readiness course taught me how to interview. I was nervous, but their tips worked. I got the job I wanted.',
      salary: '$18,500/year',
      image: '👨‍💼',
      month: 'November',
      year: 2024,
    },
    {
      name: 'Zainab Hassan',
      role: 'Freelance Web Designer',
      company: 'Self-Employed',
      course: 'Basic Coding + Job Readiness',
      quote: 'I took both courses and started freelancing within 3 months. Now I make $3,000+ per month on projects. It\'s life-changing.',
      salary: '$36,000+/year',
      image: '👩‍🎨',
      month: 'January',
      year: 2025,
    },
    {
      name: 'David Kipchoge',
      role: 'Tech Support Specialist',
      company: 'Safaricom Digital',
      course: 'Digital Literacy',
      quote: 'Free training that actually matters. I got a job within 2 months of completing. Best decision I made this year.',
      salary: '$16,800/year',
      image: '👨‍💻',
      month: 'October',
      year: 2024,
    },
    {
      name: 'Nancy Ouma',
      role: 'Customer Success Manager',
      company: 'SaaS Startup',
      course: 'Job Readiness',
      quote: 'The resume and interview training was incredible. I went from being afraid of interviews to confident. Got hired at my dream company.',
      salary: '$21,000/year',
      image: '👩‍💼',
      month: 'September',
      year: 2024,
    },
    {
      name: 'Victor Ngugi',
      role: 'Full Stack Developer',
      company: 'StartUp Foundation',
      course: 'Basic Coding (Advanced Path)',
      quote: 'Started with zero coding knowledge. Now I\'m building full applications. The practical projects made all the difference.',
      salary: '$32,000/year',
      image: '👨‍💻',
      month: 'August',
      year: 2024,
    },
  ];

  return (
    <section id="success" className="py-20 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award size={24} className="text-secondary" />
            <span className="text-secondary font-semibold">Real People. Real Results.</span>
          </div>
          <h2 className="section-title">Success Stories from Our Graduates</h2>
          <p className="section-subtitle">
            From zero experience to hired. These are real graduates earning real salaries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <StoryCard key={index} story={story} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-blue-900 text-white rounded-xl p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">68%</p>
              <p className="text-lg opacity-90">Got hired within 6 months</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">$22K</p>
              <p className="text-lg opacity-90">Average starting salary</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">2,400+</p>
              <p className="text-lg opacity-90">Graduates to date</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};