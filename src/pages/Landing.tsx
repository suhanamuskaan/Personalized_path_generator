import { ArrowRight, Target, TrendingUp, Award } from 'lucide-react';
import Button from '../components/Button';

interface LandingProps {
  onGetStarted: () => void;
}

export default function Landing({ onGetStarted }: LandingProps) {
  return (
    <div className="min-h-screen">
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Personalized Learning Path
              <span className="block text-blue-600 dark:text-blue-400">Generator</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Get a customized learning journey tailored to your skills, goals, and learning style. Transform your career with a roadmap designed just for you.
            </p>
            <Button onClick={onGetStarted} className="text-lg">
              Get Started <ArrowRight className="inline ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Goal-Oriented</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Define your career goals and get a clear path to achieve them with actionable steps.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Adaptive</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Learning paths that adapt to your current skill level and preferred learning style.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive</h3>
              <p className="text-gray-600 dark:text-gray-400">
                From basics to advanced concepts, get a complete roadmap to master your field.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Our intelligent system analyzes your background and goals to create a personalized learning roadmap
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Share Your Details</h3>
              <p className="text-gray-600 dark:text-gray-400">Tell us about your current skills and career goals</p>
            </div>

            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Get Your Path</h3>
              <p className="text-gray-600 dark:text-gray-400">Receive a customized learning roadmap instantly</p>
            </div>

            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Start Learning</h3>
              <p className="text-gray-600 dark:text-gray-400">Follow your path and track your progress</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Ready to Begin?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Start your personalized learning journey today
          </p>
          <Button onClick={onGetStarted} className="text-lg">
            Generate Your Path <ArrowRight className="inline ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
