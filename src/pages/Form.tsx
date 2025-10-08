import { useState } from 'react';
import { User, GraduationCap, Target, Lightbulb, Code } from 'lucide-react';
import Button from '../components/Button';

export interface FormData {
  name: string;
  educationLevel: string;
  skills: string[];
  careerGoal: string;
  learningStyle: string;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
  onBack: () => void;
}

const availableSkills = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular',
  'Node.js', 'Python', 'Java', 'C++', 'SQL', 'MongoDB', 'Git',
  'Docker', 'AWS', 'Machine Learning', 'Data Analysis', 'UI/UX Design'
];

export default function Form({ onSubmit, onBack }: FormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    educationLevel: '',
    skills: [],
    careerGoal: '',
    learningStyle: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.educationLevel) {
      newErrors.educationLevel = 'Education level is required';
    }
    if (!formData.careerGoal) {
      newErrors.careerGoal = 'Career goal is required';
    }
    if (!formData.learningStyle) {
      newErrors.learningStyle = 'Learning style is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Create Your Learning Path</h2>
            <p className="text-gray-600 dark:text-gray-400">Tell us about yourself to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <User className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <GraduationCap className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Current Education Level
              </label>
              <select
                value={formData.educationLevel}
                onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select your level</option>
                <option value="School">School</option>
                <option value="College">College</option>
                <option value="Working Professional">Working Professional</option>
              </select>
              {errors.educationLevel && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.educationLevel}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <Code className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Skills You Already Know
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                {availableSkills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105 ${
                      formData.skills.includes(skill)
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Selected: {formData.skills.length} skill{formData.skills.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <Target className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Career Goal
              </label>
              <select
                value={formData.careerGoal}
                onChange={(e) => setFormData({ ...formData, careerGoal: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select your goal</option>
                <option value="Web Developer">Web Developer</option>
                <option value="Full-Stack Developer">Full-Stack Developer</option>
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="Data Scientist">Data Scientist</option>
                <option value="AI/ML Engineer">AI/ML Engineer</option>
                <option value="Mobile Developer">Mobile Developer</option>
                <option value="DevOps Engineer">DevOps Engineer</option>
              </select>
              {errors.careerGoal && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.careerGoal}</p>}
            </div>

            <div>
              <label className="flex items-center text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                <Lightbulb className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Preferred Learning Style
              </label>
              <select
                value={formData.learningStyle}
                onChange={(e) => setFormData({ ...formData, learningStyle: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select your style</option>
                <option value="Video Tutorials">Video Tutorials</option>
                <option value="Reading Docs">Reading Documentation</option>
                <option value="Projects">Hands-on Projects</option>
                <option value="Mixed">Mixed Approach</option>
              </select>
              {errors.learningStyle && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.learningStyle}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button type="button" onClick={onBack} variant="secondary" className="flex-1">
                Back to Home
              </Button>
              <Button type="submit" className="flex-1">
                Generate My Path
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
