import { FormData } from '../pages/Form';

export interface Step {
  id: number;
  title: string;
  description: string;
  duration: string;
  resources: string[];
}

export function generateLearningPath(formData: FormData): Step[] {
  const { careerGoal, skills, learningStyle } = formData;

  const paths: Record<string, Step[]> = {
    'Web Developer': [
      {
        id: 1,
        title: 'HTML & CSS Fundamentals',
        description: 'Master the building blocks of web development. Learn semantic HTML, CSS layouts, flexbox, and grid systems.',
        duration: '2-3 weeks',
        resources: ['MDN Web Docs', 'freeCodeCamp', 'CSS-Tricks']
      },
      {
        id: 2,
        title: 'JavaScript & DOM Manipulation',
        description: 'Learn JavaScript fundamentals, ES6+ features, and how to interact with the Document Object Model.',
        duration: '4-6 weeks',
        resources: ['JavaScript.info', 'Eloquent JavaScript', 'You Don\'t Know JS']
      },
      {
        id: 3,
        title: 'Modern Frontend Framework',
        description: 'Master React or Vue.js to build dynamic, interactive web applications with component-based architecture.',
        duration: '6-8 weeks',
        resources: ['React Official Docs', 'Scrimba React Course', 'Frontend Masters']
      },
      {
        id: 4,
        title: 'Build Real Projects',
        description: 'Create portfolio projects: Todo app, Weather dashboard, E-commerce site. Apply everything you\'ve learned.',
        duration: '4-6 weeks',
        resources: ['Frontend Mentor', 'DevChallenges', 'Personal Projects']
      },
      {
        id: 5,
        title: 'Deployment & Portfolio',
        description: 'Learn Git, GitHub, and deploy your projects. Build a stunning portfolio website to showcase your work.',
        duration: '2-3 weeks',
        resources: ['Netlify', 'Vercel', 'GitHub Pages']
      }
    ],
    'Full-Stack Developer': [
      {
        id: 1,
        title: 'Frontend Foundations',
        description: 'Master HTML, CSS, JavaScript, and a modern framework like React to build responsive user interfaces.',
        duration: '8-10 weeks',
        resources: ['The Odin Project', 'Frontend Masters', 'MDN Web Docs']
      },
      {
        id: 2,
        title: 'Backend Development with Node.js',
        description: 'Learn server-side JavaScript, Express.js, RESTful APIs, and authentication strategies.',
        duration: '6-8 weeks',
        resources: ['Node.js Docs', 'Express Documentation', 'Academind']
      },
      {
        id: 3,
        title: 'Database Management',
        description: 'Master both SQL (PostgreSQL) and NoSQL (MongoDB) databases. Learn data modeling and queries.',
        duration: '4-5 weeks',
        resources: ['PostgreSQL Tutorial', 'MongoDB University', 'SQL Zoo']
      },
      {
        id: 4,
        title: 'Full-Stack Projects',
        description: 'Build complete applications: Social media clone, Task management system, E-commerce platform.',
        duration: '8-10 weeks',
        resources: ['Build your own projects', 'Code with Mosh', 'Traversy Media']
      },
      {
        id: 5,
        title: 'DevOps & Deployment',
        description: 'Learn Docker, CI/CD, cloud platforms (AWS/Azure), and deploy production-ready applications.',
        duration: '4-6 weeks',
        resources: ['Docker Docs', 'AWS Free Tier', 'DigitalOcean Tutorials']
      }
    ],
    'Frontend Developer': [
      {
        id: 1,
        title: 'HTML & CSS Mastery',
        description: 'Deep dive into semantic HTML, advanced CSS (animations, transitions, custom properties).',
        duration: '3-4 weeks',
        resources: ['CSS-Tricks', 'Josh Comeau Blog', 'Kevin Powell YouTube']
      },
      {
        id: 2,
        title: 'JavaScript Deep Dive',
        description: 'Master JavaScript: closures, prototypes, async/await, functional programming patterns.',
        duration: '6-8 weeks',
        resources: ['JavaScript.info', 'Frontend Masters', 'Kyle Simpson courses']
      },
      {
        id: 3,
        title: 'React Ecosystem',
        description: 'Learn React, hooks, state management (Redux/Context), routing, and testing.',
        duration: '6-8 weeks',
        resources: ['React Docs', 'Epic React', 'Testing Library']
      },
      {
        id: 4,
        title: 'UI/UX & Responsive Design',
        description: 'Master responsive design, accessibility, performance optimization, and design principles.',
        duration: '4-5 weeks',
        resources: ['Figma', 'A11y Project', 'Web.dev']
      },
      {
        id: 5,
        title: 'Portfolio & Real Projects',
        description: 'Build stunning, performant web applications and create an impressive portfolio.',
        duration: '6-8 weeks',
        resources: ['Awwwards', 'CodePen', 'Personal Projects']
      }
    ],
    'Backend Developer': [
      {
        id: 1,
        title: 'Programming Fundamentals',
        description: 'Master a backend language: Python, Java, or Node.js. Learn OOP and design patterns.',
        duration: '6-8 weeks',
        resources: ['Python.org', 'Java Tutorial', 'Node.js Docs']
      },
      {
        id: 2,
        title: 'APIs & Web Services',
        description: 'Build RESTful APIs, understand HTTP, authentication, and API design best practices.',
        duration: '5-6 weeks',
        resources: ['REST API Tutorial', 'Postman Learning', 'API Design Guide']
      },
      {
        id: 3,
        title: 'Databases & Data Modeling',
        description: 'Master SQL, database design, indexing, transactions, and query optimization.',
        duration: '6-7 weeks',
        resources: ['PostgreSQL', 'MySQL Tutorial', 'Database Design']
      },
      {
        id: 4,
        title: 'Security & Authentication',
        description: 'Learn JWT, OAuth, encryption, secure coding practices, and common vulnerabilities.',
        duration: '4-5 weeks',
        resources: ['OWASP', 'Auth0 Docs', 'Security Best Practices']
      },
      {
        id: 5,
        title: 'Scalability & Architecture',
        description: 'Study microservices, caching, load balancing, and building scalable systems.',
        duration: '6-8 weeks',
        resources: ['System Design Primer', 'AWS Architecture', 'Redis']
      }
    ],
    'Data Scientist': [
      {
        id: 1,
        title: 'Python & Data Structures',
        description: 'Master Python programming, NumPy, Pandas, and data manipulation techniques.',
        duration: '4-6 weeks',
        resources: ['Python.org', 'Kaggle Learn', 'DataCamp']
      },
      {
        id: 2,
        title: 'Statistics & Mathematics',
        description: 'Learn probability, statistics, linear algebra, and calculus for data science.',
        duration: '6-8 weeks',
        resources: ['Khan Academy', 'StatQuest', '3Blue1Brown']
      },
      {
        id: 3,
        title: 'Data Analysis & Visualization',
        description: 'Master Matplotlib, Seaborn, Plotly for data visualization and exploratory analysis.',
        duration: '4-5 weeks',
        resources: ['Python Graph Gallery', 'Towards Data Science', 'Kaggle']
      },
      {
        id: 4,
        title: 'Machine Learning Fundamentals',
        description: 'Learn supervised/unsupervised learning, scikit-learn, model evaluation, and feature engineering.',
        duration: '8-10 weeks',
        resources: ['Coursera ML', 'Fast.ai', 'Scikit-learn Docs']
      },
      {
        id: 5,
        title: 'Real-World Projects',
        description: 'Work on Kaggle competitions, build predictive models, and create a data science portfolio.',
        duration: '8-12 weeks',
        resources: ['Kaggle', 'UCI ML Repository', 'Real datasets']
      }
    ],
    'AI/ML Engineer': [
      {
        id: 1,
        title: 'Python & Math Foundations',
        description: 'Master Python, linear algebra, calculus, and probability theory for machine learning.',
        duration: '6-8 weeks',
        resources: ['MIT OpenCourseWare', 'Khan Academy', 'Python.org']
      },
      {
        id: 2,
        title: 'Machine Learning Algorithms',
        description: 'Learn regression, classification, clustering, and ensemble methods using scikit-learn.',
        duration: '8-10 weeks',
        resources: ['Andrew Ng Course', 'Hands-On ML Book', 'Fast.ai']
      },
      {
        id: 3,
        title: 'Deep Learning & Neural Networks',
        description: 'Master TensorFlow/PyTorch, CNNs, RNNs, transformers, and modern architectures.',
        duration: '10-12 weeks',
        resources: ['Deep Learning Specialization', 'PyTorch Tutorials', 'Papers with Code']
      },
      {
        id: 4,
        title: 'MLOps & Deployment',
        description: 'Learn model deployment, Docker, Kubernetes, ML pipelines, and production best practices.',
        duration: '6-8 weeks',
        resources: ['MLflow', 'Kubernetes Docs', 'AWS SageMaker']
      },
      {
        id: 5,
        title: 'Specialized AI Projects',
        description: 'Work on NLP, computer vision, or reinforcement learning projects. Build your AI portfolio.',
        duration: '10-14 weeks',
        resources: ['Hugging Face', 'OpenCV', 'Research Papers']
      }
    ],
    'Mobile Developer': [
      {
        id: 1,
        title: 'Mobile Development Basics',
        description: 'Choose React Native or Flutter. Learn mobile UI patterns, components, and navigation.',
        duration: '5-6 weeks',
        resources: ['React Native Docs', 'Flutter.dev', 'Mobile Design Patterns']
      },
      {
        id: 2,
        title: 'State Management & APIs',
        description: 'Master state management, API integration, async operations, and data persistence.',
        duration: '4-6 weeks',
        resources: ['Redux', 'Context API', 'AsyncStorage']
      },
      {
        id: 3,
        title: 'Native Features',
        description: 'Learn camera, geolocation, push notifications, biometric auth, and native modules.',
        duration: '5-7 weeks',
        resources: ['Expo Docs', 'Native Modules', 'Firebase']
      },
      {
        id: 4,
        title: 'Mobile App Projects',
        description: 'Build complete apps: Social media, fitness tracker, food delivery. Focus on UX.',
        duration: '8-10 weeks',
        resources: ['Dribbble', 'Mobile Patterns', 'App Store']
      },
      {
        id: 5,
        title: 'Testing & Deployment',
        description: 'Learn testing strategies, CI/CD for mobile, and publish to App Store and Play Store.',
        duration: '4-5 weeks',
        resources: ['Jest', 'Detox', 'App Store Connect']
      }
    ],
    'DevOps Engineer': [
      {
        id: 1,
        title: 'Linux & Scripting',
        description: 'Master Linux command line, bash scripting, and system administration fundamentals.',
        duration: '4-5 weeks',
        resources: ['Linux Journey', 'Bash Scripting Guide', 'Ubuntu Tutorials']
      },
      {
        id: 2,
        title: 'Version Control & CI/CD',
        description: 'Master Git, GitHub Actions, Jenkins, and automated testing/deployment pipelines.',
        duration: '5-6 weeks',
        resources: ['Git Documentation', 'GitHub Actions', 'Jenkins']
      },
      {
        id: 3,
        title: 'Containerization & Orchestration',
        description: 'Learn Docker, container images, Docker Compose, and Kubernetes for orchestration.',
        duration: '6-8 weeks',
        resources: ['Docker Docs', 'Kubernetes Tutorial', 'Play with Docker']
      },
      {
        id: 4,
        title: 'Cloud Platforms & IaC',
        description: 'Master AWS/Azure/GCP, Terraform for infrastructure as code, and cloud architecture.',
        duration: '8-10 weeks',
        resources: ['AWS Free Tier', 'Terraform Docs', 'Cloud Guru']
      },
      {
        id: 5,
        title: 'Monitoring & Security',
        description: 'Learn monitoring tools (Prometheus, Grafana), logging, security best practices, and incident response.',
        duration: '6-7 weeks',
        resources: ['Prometheus Docs', 'ELK Stack', 'DevSecOps']
      }
    ]
  };

  let basePath = paths[careerGoal] || paths['Web Developer'];

  if (learningStyle === 'Projects') {
    basePath = basePath.map(step => ({
      ...step,
      description: step.description + ' Focus on hands-on implementation and building projects.'
    }));
  } else if (learningStyle === 'Video Tutorials') {
    basePath = basePath.map(step => ({
      ...step,
      resources: [...step.resources, 'YouTube Tutorials', 'Udemy', 'Pluralsight']
    }));
  } else if (learningStyle === 'Reading Docs') {
    basePath = basePath.map(step => ({
      ...step,
      resources: [...step.resources, 'Official Documentation', 'Technical Books']
    }));
  }

  if (skills.length > 5) {
    basePath = basePath.map((step, index) => {
      if (index === 0) {
        return {
          ...step,
          duration: '1-2 weeks',
          description: step.description + ' (Accelerated based on your existing skills)'
        };
      }
      return step;
    });
  }

  return basePath;
}
