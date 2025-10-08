import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Form from './pages/Form';
import Results from './pages/Results';
import { FormData } from './pages/Form';

type Page = 'landing' | 'form' | 'results';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [formData, setFormData] = useState<FormData | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleGetStarted = () => {
    setCurrentPage('form');
  };

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
    setCurrentPage('results');
  };

  const handleBack = () => {
    setCurrentPage('landing');
  };

  const handleStartOver = () => {
    setFormData(null);
    setCurrentPage('landing');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        {currentPage === 'landing' && <Landing onGetStarted={handleGetStarted} />}
        {currentPage === 'form' && <Form onSubmit={handleFormSubmit} onBack={handleBack} />}
        {currentPage === 'results' && formData && (
          <Results formData={formData} onStartOver={handleStartOver} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
