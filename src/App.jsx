import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import "./App.css"; // Import normal CSS

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'socials', 'projects'];
      const scrollPosition = window.scrollY + 100; // Offset for fixed navbar

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const projects = [
    {
      id: 1,
      title: "Task Management Web Application",
      description: "Developed a full-stack task management app with user registration, login, and CRUD operations. Implemented secure session management and data protection using Passport.js, bcrypt, and Express middleware, enabling role-based access control.",
      technologies: ["Node.js", "Express.js", "sqlite", "EJS", "Passport.js", "bcrypt"],
      year: "2024",
      demoLink: "#",
      codeLink: "https://github.com/19Raunak/Journal",
      image: "./pr_img_0.png"

    },
    {
      id: 2,
      title: "Linear Regression from Scratch",
        description: "Implemented a Linear Regression model from scratch using Python and NumPy with gradient descent optimization. Evaluated model performance with ~85 MSE on test data and visualized predictions using Matplotlib and Pandas for accuracy and convergence analysis.",
        technologies: ["Python", "NumPy", "Pandas", "Matplotlib"],
        year: "2024",
        demoLink: "#",
        codeLink: "https://github.com/19Raunak/ML/blob/main/Linear%20Regression%20from%20Scratch/LR_From_Scratch.ipynb",
        image: "./pr_img_1.png"

    },
    {
      id: 3,
      title: "Cognitive Decline Predictor",
      description: "Developed an end-to-end machine learning model to detect early signs of Mild Cognitive Impairment (MCI) from speech and text data. Implemented NLP feature extraction using TF-IDF and LIWC linguistic markers, and performed feature selection on 468+ acoustic variables. Trained and evaluated models using Random Forest and Naive Bayes algorithms, achieving 80.9% accuracy on linguistic features and 91.7% accuracy on selected acoustic features. The system provides an interpretable, early-detection mechanism for cognitive decline, demonstrating strong predictive performance and practical applicability.",
      technologies: ["Python", "Scikit-learn", "TF-IDF", "LIWC", "NLP", "Machine Learning"],
      year: "2024",
      demoLink: "https://dementia-detect.streamlit.app/",
      codeLink: "https://github.com/19Raunak/ML",
      image: "/images/weather-dashboard.jpg"

    }
  ];

  const Navbar = ({ activeSection, setActiveSection }) => {
    const handleNavClick = (e, sectionId) => {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
      setActiveSection(sectionId);
    };

    return (
      <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-links">
          <a
            href="#home"
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => handleNavClick(e, 'home')}
          >
            Home
          </a>
          <a
            href="#socials"
            className={activeSection === "socials" ? "active" : ""}
            onClick={(e) => handleNavClick(e, 'socials')}
          >
            Socials
          </a>
          <a
            href="#projects"
            className={activeSection === "projects" ? "active" : ""}
            onClick={(e) => handleNavClick(e, 'projects')}
          >
            Projects
          </a>
        </div>
      </nav>
    );
  };



  const HeroSection = () => (
    <section id="home" className="hero">
      <div className="page-wrapper">
        <div className="bg-gradient-patch"></div>
      </div>
      <div className="hero-inner">
        {/* Left: Text */}
        <div className="hero-content">
          <h1>
            <b>Raunak Tiwari </b><br/>
            <span>Full Stack & ML Developer</span>
          </h1>
          <p>
            I craft digital experiences with clean code and thoughtful design.
            Focused on creating solutions that make a difference.
          </p>
          <div className="hero-buttons">
            <button className="btn" onClick={() => {
              const projectSection = document.getElementById("projects");
              if (projectSection) {
                projectSection.scrollIntoView({ behavior: "smooth" });
              }
            }}>View Work</button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero-image">
          <img
            src="./pfp.jpg"
            alt="Raunak Tiwari"
          />
        </div>
      </div>
    </section>
  );

  const ProjectsSection = () => (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h2>Projects</h2>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Left: Image */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* Right: Info */}
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {/* Only show demo link if it's not "#" */}
                {project.demoLink !== "#" && (
                  <a href={project.demoLink}>View Live →</a>
                )}
                <a href={project.codeLink}>Source Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );



  const SocialsSection = () => {
    const socials = [
      { name: 'GitHub', link: 'https://github.com/19Raunak', icon: <Github size={36} /> },
      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/raunak-tiwari-247b181a1/', icon: <Linkedin size={36} /> },
      { name: 'Twitter', link: 'https://x.com/RaunakT19', icon: <Twitter size={36} /> },
      { name: 'Email', link: 'mailto:raunak192209@gmail.com', icon: <Mail size={36} /> }
    ];

    return (
      <section id="socials" className="socials">
        {socials.map((social) => (
          <a key={social.name} href={social.link}>
            {social.icon}
          </a>
        ))}
      </section>
    );
  };

  const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <span className="logo">Raunak Tiwari</span>
        <div className="footer-links">
          <a href="#privacy"></a>
          <a href="#terms">+91 89109 92390</a>
        </div>
      </div>
      <p className="footer-copy">© 2025 All rights reserved</p>
    </footer>
  );

  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <SocialsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
