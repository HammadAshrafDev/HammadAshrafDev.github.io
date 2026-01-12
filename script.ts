// Project Interface
interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    demoLink?: string;
    codeLink?: string;
    image: string;
}

// Contact Form Interface
interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

// Portfolio Data
const portfolioData = {
    projects: [
        {
            id: 1,
            title: "Real-time Object Detection System",
            description: "A deep learning model using YOLOv8 for real-time object detection with 95% accuracy on COCO dataset.",
            technologies: ["Python", "PyTorch", "OpenCV", "TensorRT"],
            demoLink: "#",
            codeLink: "#",
            image: "project1.jpg"
        },
        {
            id: 2,
            title: "Sentiment Analysis API",
            description: "BERT-based sentiment analysis service with REST API and real-time processing capabilities.",
            technologies: ["TensorFlow", "FastAPI", "Docker", "AWS"],
            demoLink: "#",
            codeLink: "#",
            image: "project2.jpg"
        },
        {
            id: 3,
            title: "Autonomous Trading Agent",-
            description: "Reinforcement learning agent for cryptocurrency trading with dynamic strategy adaptation.",
            technologies: ["Python", "TensorFlow", "RLlib", "Redis"],
            demoLink: "#",
            codeLink: "#",
            image: "project3.jpg"
        },
        {
            id: 4,
            title: "Medical Image Segmentation",
            description: "U-Net architecture for precise medical image segmentation with 98% dice coefficient.",
            technologies: ["PyTorch", "MONAI", "3D Slicer", "Python"],
            demoLink: "#",
            codeLink: "#",
            image: "project1.jpg"
        },
        {
            id: 5,
            title: "Chatbot with Memory",
            description: "Conversational AI with long-term memory and context retention using transformer architecture.",
            technologies: ["HuggingFace", "LangChain", "Redis", "FastAPI"],
            demoLink: "#",
            codeLink: "#",
            image: "project2.jpg"
        },
        {
            id: 6,
            title: "Anomaly Detection System",
            description: "Real-time anomaly detection for IoT devices using autoencoders and time-series analysis.",
            technologies: ["TensorFlow", "Kafka", "Kubernetes", "Grafana"],
            demoLink: "#",
            codeLink: "#",
            image: "project3.jpg"
        }
    ]
};

// DOM Elements
const projectsContainer = document.getElementById('projectsContainer') as HTMLElement;
const menuToggle = document.getElementById('menuToggle') as HTMLButtonElement;
const navLinks = document.querySelector('.nav-links') as HTMLElement;
const contactForm = document.getElementById('contactForm') as HTMLFormElement;

// Render Projects
function renderProjects(): void {
    projectsContainer.innerHTML = portfolioData.projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demoLink ? `<a href="${project.demoLink}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''}
                    ${project.codeLink ? `<a href="${project.codeLink}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> View Code
                    </a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Smooth Scrolling for Navigation
function setupSmoothScrolling(): void {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (window.innerWidth <= 768) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
}

// Mobile Menu Toggle
function setupMobileMenu(): void {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle icon
        const icon = menuToggle.querySelector('i');
        if (icon) {
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target as Node) && !navLinks.contains(e.target as Node)) {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
}

// Contact Form Handler
function setupContactForm(): void {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData: ContactFormData = {
            name: (document.getElementById('name') as HTMLInputElement).value,
            email: (document.getElementById('email') as HTMLInputElement).value,
            message: (document.getElementById('message') as HTMLTextAreaElement).value
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        // In a real application, you would send this data to a server
        // For this demo, we'll just show a success message
        alert(`Thank you for your message, ${formData.name}! I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Add scrolling effect to navbar
function setupNavbarScroll(): void {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar') as HTMLElement;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        // Add shadow when scrolled
        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Add hover effect to project cards
function setupProjectHover(): void {
    document.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement;
        const projectCard = target.closest('.project-card') as HTMLElement;
        
        if (projectCard) {
            projectCard.style.transform = 'translateY(-10px)';
            projectCard.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        }
    });

    document.addEventListener('mouseout', (e) => {
        const target = e.target as HTMLElement;
        const projectCard = target.closest('.project-card') as HTMLElement;
        
        if (projectCard) {
            projectCard.style.transform = 'translateY(0)';
            projectCard.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Typewriter effect for hero text (optional)
function setupTypewriterEffect(): void {
    const heroTitle = document.querySelector('.hero-title') as HTMLElement;
    if (!heroTitle) return;

    const text = heroTitle.textContent || '';
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// Initialize the application
function initApp(): void {
    renderProjects();
    setupSmoothScrolling();
    setupMobileMenu();
    setupContactForm();
    setupNavbarScroll();
    setupProjectHover();
    setupTypewriterEffect();
    
    // Log initialization
    console.log('AI Engineer Portfolio initialized successfully!');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Add some TypeScript-specific features
class PortfolioAnalytics {
    private projectViews: Map<number, number> = new Map();
    private formSubmissions: number = 0;

    trackProjectView(projectId: number): void {
        const currentViews = this.projectViews.get(projectId) || 0;
        this.projectViews.set(projectId, currentViews + 1);
        console.log(`Project ${projectId} viewed. Total views: ${currentViews + 1}`);
    }

    trackFormSubmission(): void {
        this.formSubmissions++;
        console.log(`Form submitted. Total submissions: ${this.formSubmissions}`);
    }

    getAnalytics(): { projectViews: Record<number, number>, formSubmissions: number } {
        const viewsObj: Record<number, number> = {};
        this.projectViews.forEach((views, projectId) => {
            viewsObj[projectId] = views;
        });
        
        return {
            projectViews: viewsObj,
            formSubmissions: this.formSubmissions
        };
    }
}

// Create analytics instance
const analytics = new PortfolioAnalytics();

// Add project view tracking
document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const projectCard = target.closest('.project-card');
    if (projectCard) {
        const projectId = parseInt(projectCard.dataset.id || '0');
        if (projectId > 0) {
            analytics.trackProjectView(projectId);
        }
    }
});

// Add form submission tracking
contactForm.addEventListener('submit', () => {
    analytics.trackFormSubmission();
});

// Export for potential module usage
export { PortfolioAnalytics, initApp };
