import { useState, useEffect } from 'react';
import { Download, CheckCircle, Circle, BookOpen, Clock, ExternalLink } from 'lucide-react';
import Button from '../components/Button';
import { FormData } from './Form';
import { generateLearningPath, Step } from '../utils/pathGenerator';

interface ResultsProps {
  formData: FormData;
  onStartOver: () => void;
}

export default function Results({ formData, onStartOver }: ResultsProps) {
  const [learningPath, setLearningPath] = useState<Step[]>([]);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const path = generateLearningPath(formData);
    setLearningPath(path);
  }, [formData]);

  useEffect(() => {
    setProgress((completedSteps.length / learningPath.length) * 100);
  }, [completedSteps, learningPath]);

  const toggleStepCompletion = (stepId: number) => {
    setCompletedSteps(prev =>
      prev.includes(stepId)
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const handleDownload = () => {
    const content = `
PERSONALIZED LEARNING PATH
Generated for: ${formData.name}
Career Goal: ${formData.careerGoal}
Education Level: ${formData.educationLevel}
Learning Style: ${formData.learningStyle}
Current Skills: ${formData.skills.join(', ') || 'None specified'}

YOUR LEARNING ROADMAP
${'-'.repeat(50)}

${learningPath.map((step, index) => `
Step ${index + 1}: ${step.title}
Duration: ${step.duration}

${step.description}

Recommended Resources:
${step.resources.map(r => `  • ${r}`).join('\n')}

${'-'.repeat(50)}
`).join('\n')}

Good luck on your learning journey!
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `learning-path-${formData.name.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 sm:p-12 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Your Personalized Learning Path
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Welcome, {formData.name}! Here's your roadmap to becoming a {formData.careerGoal}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">Education Level</h3>
              <p className="text-lg font-bold text-blue-600 dark:text-blue-400">{formData.educationLevel}</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
              <h3 className="text-sm font-semibold text-green-900 dark:text-green-300 mb-2">Learning Style</h3>
              <p className="text-lg font-bold text-green-600 dark:text-green-400">{formData.learningStyle}</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <h3 className="text-sm font-semibold text-purple-900 dark:text-purple-300 mb-2">Current Skills</h3>
              <p className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {formData.skills.length} skill{formData.skills.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Overall Progress</h3>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {completedSteps.length} of {learningPath.length} steps completed
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button onClick={handleDownload} className="flex-1 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download Path
            </Button>
            <Button onClick={onStartOver} variant="secondary" className="flex-1">
              Start Over
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {learningPath.map((step, index) => {
            const isCompleted = completedSteps.includes(step.id);
            const isFirst = index === 0;
            const isLast = index === learningPath.length - 1;

            return (
              <div
                key={step.id}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {!isLast && (
                  <div className="absolute left-8 top-24 bottom-0 w-1 bg-gray-300 dark:bg-gray-700 -mb-6" />
                )}

                <div
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isCompleted ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <button
                        onClick={() => toggleStepCompletion(step.id)}
                        className="flex-shrink-0 relative z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-16 h-16 text-green-500" />
                        ) : (
                          <Circle className="w-16 h-16 text-gray-300 dark:text-gray-600 hover:text-blue-500 transition-colors" />
                        )}
                      </button>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold">
                                {index + 1}
                              </span>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {step.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <Clock className="w-4 h-4" />
                              <span>{step.duration}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                          {step.description}
                        </p>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              Recommended Resources
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {step.resources.map((resource, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors cursor-pointer"
                              >
                                <ExternalLink className="w-3 h-3" />
                                {resource}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-lg mb-6 opacity-90">
            Follow this roadmap step by step, and you'll be well on your way to achieving your goal!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleDownload} className="bg-white text-blue-600 hover:bg-gray-100">
              <Download className="w-5 h-5 mr-2" />
              Save Your Path
            </Button>
            <Button onClick={onStartOver} variant="secondary" className="bg-blue-700 hover:bg-blue-800 text-white">
              Create Another Path
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
