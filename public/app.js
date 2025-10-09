const app = {
    currentPage: 'landing',
    darkMode: false,
    formData: null,
    learningPath: [],
    completedSteps: [],

    init() {
        this.loadDarkMode();
        this.setupEventListeners();
        this.render();
    },

    loadDarkMode() {
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        this.darkMode = savedDarkMode;
        if (savedDarkMode) {
            document.body.classList.add('dark');
            document.querySelector('.moon-icon').classList.add('hidden');
            document.querySelector('.sun-icon').classList.remove('hidden');
        }
    },

    setupEventListeners() {
        document.getElementById('darkModeToggle').addEventListener('click', () => {
            this.toggleDarkMode();
        });
    },

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('darkMode', this.darkMode);

        if (this.darkMode) {
            document.body.classList.add('dark');
            document.querySelector('.moon-icon').classList.add('hidden');
            document.querySelector('.sun-icon').classList.remove('hidden');
        } else {
            document.body.classList.remove('dark');
            document.querySelector('.moon-icon').classList.remove('hidden');
            document.querySelector('.sun-icon').classList.add('hidden');
        }
    },

    navigateTo(page) {
        this.currentPage = page;
        this.render();
    },

    render() {
        const mainContent = document.getElementById('mainContent');

        switch (this.currentPage) {
            case 'landing':
                mainContent.innerHTML = this.renderLanding();
                this.attachLandingListeners();
                break;
            case 'form':
                mainContent.innerHTML = this.renderForm();
                this.attachFormListeners();
                break;
            case 'results':
                mainContent.innerHTML = this.renderResults();
                this.attachResultsListeners();
                break;
        }
    },

    renderLanding() {
        return `
            <section class="hero-section" id="home">
                <div class="hero-content">
                    <h1 class="hero-title">
                        Personalized Learning Path
                        <span class="hero-title-accent">Generator</span>
                    </h1>
                    <p class="hero-subtitle">
                        Get a customized learning journey tailored to your skills, goals, and learning style.
                        Transform your career with a roadmap designed just for you.
                    </p>
                    <button class="btn btn-primary" id="getStartedBtn">
                        Get Started
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>

                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon blue">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                </svg>
                            </div>
                            <h3 class="feature-title">Goal-Oriented</h3>
                            <p class="feature-description">
                                Define your career goals and get a clear path to achieve them with actionable steps.
                            </p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon green">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                    <polyline points="17 6 23 6 23 12"></polyline>
                                </svg>
                            </div>
                            <h3 class="feature-title">Adaptive</h3>
                            <p class="feature-description">
                                Learning paths that adapt to your current skill level and preferred learning style.
                            </p>
                        </div>

                        <div class="feature-card">
                            <div class="feature-icon purple">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="8" r="7"></circle>
                                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                </svg>
                            </div>
                            <h3 class="feature-title">Comprehensive</h3>
                            <p class="feature-description">
                                From basics to advanced concepts, get a complete roadmap to master your field.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-white" id="about">
                <div class="section-content">
                    <h2 class="section-title">How It Works</h2>
                    <p class="section-subtitle">
                        Our intelligent system analyzes your background and goals to create a personalized learning roadmap
                    </p>

                    <div class="steps-grid">
                        <div>
                            <div class="step-number">1</div>
                            <h3 class="step-title">Share Your Details</h3>
                            <p class="step-description">Tell us about your current skills and career goals</p>
                        </div>
                        <div>
                            <div class="step-number">2</div>
                            <h3 class="step-title">Get Your Path</h3>
                            <p class="step-description">Receive a customized learning roadmap instantly</p>
                        </div>
                        <div>
                            <div class="step-number">3</div>
                            <h3 class="step-title">Start Learning</h3>
                            <p class="step-description">Follow your path and track your progress</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section section-gray" id="contact">
                <div class="section-content">
                    <h2 class="section-title">Ready to Begin?</h2>
                    <p class="section-subtitle">Start your personalized learning journey today</p>
                    <button class="btn btn-primary" id="getStartedBtn2">
                        Generate Your Path
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>
            </section>
        `;
    },

    attachLandingListeners() {
        document.getElementById('getStartedBtn').addEventListener('click', () => {
            this.navigateTo('form');
        });
        const btn2 = document.getElementById('getStartedBtn2');
        if (btn2) {
            btn2.addEventListener('click', () => {
                this.navigateTo('form');
            });
        }
    },

    renderForm() {
        const availableSkills = [
            'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular',
            'Node.js', 'Python', 'Java', 'C++', 'SQL', 'MongoDB', 'Git',
            'Docker', 'AWS', 'Machine Learning', 'Data Analysis', 'UI/UX Design'
        ];

        return `
            <div class="form-container">
                <div class="form-wrapper">
                    <div class="form-header">
                        <h2 class="form-title">Create Your Learning Path</h2>
                        <p class="form-description">Tell us about yourself to get started</p>
                    </div>

                    <form id="learningPathForm">
                        <div class="form-group">
                            <label class="form-label">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                class="form-input"
                                placeholder="Enter your name"
                                required
                            />
                            <div id="nameError" class="form-error"></div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                                Current Education Level
                            </label>
                            <select id="educationLevel" class="form-select" required>
                                <option value="">Select your level</option>
                                <option value="School">School</option>
                                <option value="College">College</option>
                                <option value="Working Professional">Working Professional</option>
                            </select>
                            <div id="educationError" class="form-error"></div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                                Skills You Already Know
                            </label>
                            <div class="skills-container" id="skillsContainer">
                                ${availableSkills.map(skill => `
                                    <button type="button" class="skill-btn" data-skill="${skill}">
                                        ${skill}
                                    </button>
                                `).join('')}
                            </div>
                            <p class="skills-count">Selected: <span id="skillsCount">0</span> skills</p>
                        </div>

                        <div class="form-group">
                            <label class="form-label">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <circle cx="12" cy="12" r="6"></circle>
                                    <circle cx="12" cy="12" r="2"></circle>
                                </svg>
                                Career Goal
                            </label>
                            <select id="careerGoal" class="form-select" required>
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
                            <div id="careerError" class="form-error"></div>
                        </div>

                        <div class="form-group">
                            <label class="form-label">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="2" x2="12" y2="6"></line>
                                    <line x1="12" y1="18" x2="12" y2="22"></line>
                                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                                    <line x1="2" y1="12" x2="6" y2="12"></line>
                                    <line x1="18" y1="12" x2="22" y2="12"></line>
                                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                                </svg>
                                Preferred Learning Style
                            </label>
                            <select id="learningStyle" class="form-select" required>
                                <option value="">Select your style</option>
                                <option value="Video Tutorials">Video Tutorials</option>
                                <option value="Reading Docs">Reading Documentation</option>
                                <option value="Projects">Hands-on Projects</option>
                                <option value="Mixed">Mixed Approach</option>
                            </select>
                            <div id="learningError" class="form-error"></div>
                        </div>

                        <div class="form-actions">
                            <button type="button" class="btn btn-secondary" id="backBtn">Back to Home</button>
                            <button type="submit" class="btn btn-primary">Generate My Path</button>
                        </div>
                    </form>
                </div>
            </div>
        `;
    },

    attachFormListeners() {
        const selectedSkills = new Set();

        document.querySelectorAll('.skill-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const skill = e.target.dataset.skill;
                if (selectedSkills.has(skill)) {
                    selectedSkills.delete(skill);
                    e.target.classList.remove('selected');
                } else {
                    selectedSkills.add(skill);
                    e.target.classList.add('selected');
                }
                document.getElementById('skillsCount').textContent = selectedSkills.size;
            });
        });

        document.getElementById('backBtn').addEventListener('click', () => {
            this.navigateTo('landing');
        });

        document.getElementById('learningPathForm').addEventListener('submit', (e) => {
            e.preventDefault();

            document.querySelectorAll('.form-error').forEach(el => el.textContent = '');

            const name = document.getElementById('name').value.trim();
            const educationLevel = document.getElementById('educationLevel').value;
            const careerGoal = document.getElementById('careerGoal').value;
            const learningStyle = document.getElementById('learningStyle').value;

            let hasError = false;

            if (!name) {
                document.getElementById('nameError').textContent = 'Name is required';
                hasError = true;
            }
            if (!educationLevel) {
                document.getElementById('educationError').textContent = 'Education level is required';
                hasError = true;
            }
            if (!careerGoal) {
                document.getElementById('careerError').textContent = 'Career goal is required';
                hasError = true;
            }
            if (!learningStyle) {
                document.getElementById('learningError').textContent = 'Learning style is required';
                hasError = true;
            }

            if (!hasError) {
                this.formData = {
                    name,
                    educationLevel,
                    skills: Array.from(selectedSkills),
                    careerGoal,
                    learningStyle
                };
                this.learningPath = this.generateLearningPath(this.formData);
                this.completedSteps = [];
                this.navigateTo('results');
            }
        });
    },

    generateLearningPath(formData) {
        const paths = {
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

        let basePath = paths[formData.careerGoal] || paths['Web Developer'];

        if (formData.learningStyle === 'Projects') {
            basePath = basePath.map(step => ({
                ...step,
                description: step.description + ' Focus on hands-on implementation and building projects.'
            }));
        } else if (formData.learningStyle === 'Video Tutorials') {
            basePath = basePath.map(step => ({
                ...step,
                resources: [...step.resources, 'YouTube Tutorials', 'Udemy', 'Pluralsight']
            }));
        } else if (formData.learningStyle === 'Reading Docs') {
            basePath = basePath.map(step => ({
                ...step,
                resources: [...step.resources, 'Official Documentation', 'Technical Books']
            }));
        }

        if (formData.skills.length > 5) {
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
    },

    renderResults() {
        const progress = (this.completedSteps.length / this.learningPath.length) * 100;

        return `
            <div class="results-container">
                <div class="results-wrapper">
                    <div class="results-header">
                        <h2 class="results-title">Your Personalized Learning Path</h2>
                        <p class="results-subtitle">
                            Welcome, ${this.formData.name}! Here's your roadmap to becoming a ${this.formData.careerGoal}
                        </p>

                        <div class="info-cards">
                            <div class="info-card blue">
                                <h3 class="info-card-label">Education Level</h3>
                                <p class="info-card-value">${this.formData.educationLevel}</p>
                            </div>
                            <div class="info-card green">
                                <h3 class="info-card-label">Learning Style</h3>
                                <p class="info-card-value">${this.formData.learningStyle}</p>
                            </div>
                            <div class="info-card purple">
                                <h3 class="info-card-label">Current Skills</h3>
                                <p class="info-card-value">${this.formData.skills.length} skill${this.formData.skills.length !== 1 ? 's' : ''}</p>
                            </div>
                        </div>

                        <div class="progress-section">
                            <div class="progress-header">
                                <h3 class="progress-title">Overall Progress</h3>
                                <span class="progress-text">
                                    ${this.completedSteps.length} of ${this.learningPath.length} steps completed
                                </span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progress}%"></div>
                            </div>
                        </div>

                        <div class="results-actions">
                            <button class="btn btn-green" id="downloadBtn">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Download Path
                            </button>
                            <button class="btn btn-secondary" id="startOverBtn">Start Over</button>
                        </div>
                    </div>

                    <div class="roadmap">
                        ${this.learningPath.map((step, index) => {
                            const isCompleted = this.completedSteps.includes(step.id);
                            return `
                                <div class="step-card ${isCompleted ? 'completed' : ''}" style="animation-delay: ${index * 100}ms">
                                    <div class="step-card-content">
                                        <div class="step-checkbox ${isCompleted ? 'completed' : ''}" data-step-id="${step.id}">
                                            ${isCompleted ? `
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                                </svg>
                                            ` : `
                                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                </svg>
                                            `}
                                        </div>

                                        <div class="step-details">
                                            <div class="step-header">
                                                <div>
                                                    <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                                                        <span class="step-badge">${index + 1}</span>
                                                        <h3 class="step-title-text">${step.title}</h3>
                                                    </div>
                                                    <div class="step-duration">
                                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                            <circle cx="12" cy="12" r="10"></circle>
                                                            <polyline points="12 6 12 12 16 14"></polyline>
                                                        </svg>
                                                        <span>${step.duration}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p class="step-description">${step.description}</p>

                                            <div>
                                                <div class="step-resources-header">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                                    </svg>
                                                    <h4 class="step-resources-title">Recommended Resources</h4>
                                                </div>
                                                <div class="step-resources">
                                                    ${step.resources.map(resource => `
                                                        <span class="resource-tag">
                                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                                            </svg>
                                                            ${resource}
                                                        </span>
                                                    `).join('')}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>

                    <div class="cta-section">
                        <h3 class="cta-title">Ready to Start Your Journey?</h3>
                        <p class="cta-description">
                            Follow this roadmap step by step, and you'll be well on your way to achieving your goal!
                        </p>
                        <div class="cta-actions">
                            <button class="btn btn-white" id="downloadBtn2">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                Save Your Path
                            </button>
                            <button class="btn btn-blue-dark" id="startOverBtn2">Create Another Path</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    attachResultsListeners() {
        document.querySelectorAll('.step-checkbox').forEach(checkbox => {
            checkbox.addEventListener('click', (e) => {
                const stepId = parseInt(e.currentTarget.dataset.stepId);
                const index = this.completedSteps.indexOf(stepId);

                if (index > -1) {
                    this.completedSteps.splice(index, 1);
                } else {
                    this.completedSteps.push(stepId);
                }

                this.render();
            });
        });

        const handleDownload = () => {
            const content = `
PERSONALIZED LEARNING PATH
Generated for: ${this.formData.name}
Career Goal: ${this.formData.careerGoal}
Education Level: ${this.formData.educationLevel}
Learning Style: ${this.formData.learningStyle}
Current Skills: ${this.formData.skills.join(', ') || 'None specified'}

YOUR LEARNING ROADMAP
${'-'.repeat(50)}

${this.learningPath.map((step, index) => `
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
            a.download = `learning-path-${this.formData.name.replace(/\s+/g, '-').toLowerCase()}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        };

        document.getElementById('downloadBtn').addEventListener('click', handleDownload);
        const downloadBtn2 = document.getElementById('downloadBtn2');
        if (downloadBtn2) {
            downloadBtn2.addEventListener('click', handleDownload);
        }

        const handleStartOver = () => {
            this.formData = null;
            this.learningPath = [];
            this.completedSteps = [];
            this.navigateTo('landing');
        };

        document.getElementById('startOverBtn').addEventListener('click', handleStartOver);
        const startOverBtn2 = document.getElementById('startOverBtn2');
        if (startOverBtn2) {
            startOverBtn2.addEventListener('click', handleStartOver);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
