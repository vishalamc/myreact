import React, { useState } from 'react';

const learnCourses = [
  { icon: "https://img.icons8.com/color/96/000000/c-programming.png", title: "C Programming", desc: "Master the foundations of programming in C.", link: "/learnc", color: "bg-blue-100", accent: "text-blue-600" },
  { icon: "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png", title: "C++ Programming", desc: "Learn object-oriented programming with C++.", link: "/ComingSoon", color: "bg-purple-100", accent: "text-purple-600" },
  { icon: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png", title: "Java Programming", desc: "Build robust and scalable applications in Java.", link: "/ComingSoon", color: "bg-orange-100", accent: "text-orange-600" },
  { icon: "https://img.icons8.com/color/96/000000/python.png", title: "Python Programming", desc: "Learn Python for AI, data science, and more.", link: "/ComingSoon", color: "bg-green-100", accent: "text-green-600" }
];

const practiceCourses = [
  { title: "Mathematics", img: "/maths.jpg", link: "/ComingSoon", icon: "📐", color: "bg-red-500" },
  { title: "Gamification", img: "/gamification.jpg", link: "/gamedashboard", icon: "🎮", color: "bg-pink-500" },
  { title: "Computer Studies", img: "/learncomputer.jpg", link: "/videolectures", icon: "💻", color: "bg-indigo-500" },
  { title: "Languages", img: "/lang.jpg", link: "/ComingSoon", icon: "🌍", color: "bg-teal-500" }
];

const styles = `
  /* ============= ANIMATIONS ============= */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @keyframes pulse-slow {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.4; }
  }

  @keyframes slide-in {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes blob-animation {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
  }

  /* ============= GLOBAL STYLES ============= */
  .home-container {
    min-height: 100vh;
    background: linear-gradient(to bottom right, #f8fafc, #ffffff, #f8fafc);
    font-family: 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    color: #111827;
    overflow-x: hidden;
  }

  /* ============= HERO SECTION ============= */
  .hero-section {
    position: relative;
    padding: 6rem 1.5rem;
    overflow: hidden;
  }

  .blob {
    position: absolute;
    border-radius: 50%;
    mix-blend-mode: multiply;
    filter: blur(3rem);
    opacity: 0.2;
    animation: blob-animation 7s infinite;
  }

  .blob-1 {
    top: 0;
    right: 0;
    width: 24rem;
    height: 24rem;
    background-color: #86efac;
  }

  .blob-2 {
    bottom: 0;
    left: 0;
    width: 24rem;
    height: 24rem;
    background-color: #93c5fd;
    animation-delay: 2s;
  }

  .hero-content {
    max-width: 56rem;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 10;
  }

  .hero-badge {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #dcfce7;
    color: #166534;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .hero-title {
    font-size: clamp(2.25rem, 8vw, 3.5rem);
    font-weight: 900;
    background: linear-gradient(to right, #16a34a, #3b82f6, #16a34a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 1.5rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
    color: #4b5563;
    margin-bottom: 3rem;
    line-height: 1.75;
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 640px) {
    .hero-buttons {
      flex-direction: row;
    }
    
    .hero-section {
      padding: 8rem 1.5rem;
    }
  }

  /* ============= BUTTONS ============= */
  .btn {
    display: inline-block;
    padding: 1rem 2.5rem;
    border-radius: 0.75rem;
    font-weight: 700;
    font-size: 1.125rem;
    text-decoration: none;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .btn-primary {
    background: linear-gradient(135deg, #22c55e, #16a34a);
    color: white;
    box-shadow: 0 10px 25px rgba(34, 197, 116, 0.3);
  }

  .btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 35px rgba(34, 197, 116, 0.4);
  }

  .btn-secondary {
    border: 2px solid #22c55e;
    color: #22c55e;
    background-color: transparent;
  }

  .btn-secondary:hover {
    background-color: #f0fdf4;
  }

  .btn-large {
    padding: 1.25rem 3rem;
    font-size: 1.125rem;
  }

  /* ============= SHOWCASE SECTION ============= */
  .showcase-section {
  padding: 3rem 1.5rem;
}

.showcase-container {
  max-width: 80rem;
  margin: 0 auto;
}

/* Remove wrapper effects */
.showcase-wrapper {
  position: relative;
  border-radius: 0;
  overflow: visible;   /* image not cut */
  box-shadow: none;    /* remove box */
  transition: none;
}

.showcase-wrapper::before {
  display: none;       /* remove gradient border glow */
}

/* Full image, no crop */
.showcase-img {
  width: 100%;
  height: auto;         /* let image show full natural size */
  object-fit: contain;
  display: block;
  transition: transform 0.5s ease;
}

/* Optional zoom hover, you can remove if not needed */
.showcase-wrapper:hover .showcase-img {
  transform: scale(1.05);
}


  /* ============= LEARN SECTION ============= */
  .learn-section {
    padding: 5rem 1.5rem;
  }

  .section-content {
    max-width: 80rem;
    margin: 0 auto;
  }

  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }

  .section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 900;
    color: #111827;
    margin-bottom: 1rem;
  }

  .section-subtitle {
    font-size: 1.125rem;
    color: #6b7280;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .learn-card {
    text-decoration: none;
    color: inherit;
  }

  .card-inner {
    padding: 2rem;
    border-radius: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    cursor: pointer;
  }

  .learn-card:hover .card-inner {
    transform: scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
    border-color: #d1d5db;
  }

  .card-icon-wrapper {
    margin-bottom: 1.5rem;
    transform: scale(1);
    transition: transform 0.3s ease;
  }

  .learn-card:hover .card-icon-wrapper {
    transform: scale(1.1);
  }

  .card-icon {
    width: 5rem;
    height: 5rem;
    margin: 0 auto;
    display: block;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 900;
    margin-bottom: 0.75rem;
    text-align: center;
  }

  .card-description {
    color: #4b5563;
    font-size: 0.875rem;
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .card-footer {
    display: flex;
    justify-content: center;
  }

  .card-button {
    background: none;
    border: none;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.875rem;
  }

  .card-button:hover {
    transform: scale(1.1);
  }

  /* ============= STATS SECTION ============= */
  .stats-section {
    background: linear-gradient(135deg, #16a34a, #3b82f6);
    padding: 3rem 1.5rem;
    color: white;
  }

  .stats-container {
    max-width: 80rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    text-align: center;
  }

  .stat-number {
    font-size: 2.25rem;
    font-weight: 900;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    font-size: 1.125rem;
    opacity: 0.9;
  }

  /* ============= PRACTICE SECTION ============= */
  .practice-section {
    padding: 5rem 1.5rem;
  }

  .practice-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .practice-card {
    position: relative;
    height: 16rem;
    border-radius: 1.5rem;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid #e5e7eb;
  }

  .practice-card:hover {
    transform: scale(1.05);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    border-color: #22c55e;
  }

  .practice-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .practice-card:hover .practice-img {
    transform: scale(1.1);
  }

  .practice-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8));
    transition: all 0.3s ease;
  }

  .practice-card:hover .practice-overlay {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.95));
  }

  .practice-content {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 1.5rem;
    text-align: center;
    color: white;
  }

  .practice-icon {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }

  .practice-card:hover .practice-icon {
    transform: scale(1.25);
  }

  .practice-title {
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  .practice-button-wrapper {
    opacity: 0;
    transform: translateY(1rem);
    transition: all 0.3s ease;
  }

  .practice-card:hover .practice-button-wrapper {
    opacity: 1;
    transform: translateY(0);
  }

  .practice-button {
    padding: 0.5rem 1.5rem;
    background-color: white;
    color: #111827;
    font-weight: 700;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.875rem;
  }

  .practice-button:hover {
    background-color: #f3f4f6;
    transform: scale(1.05);
  }

  /* ============= CTA SECTION ============= */
  .cta-section {
    background: linear-gradient(to right, #f0fdf4, #eff6ff);
    padding: 5rem 1.5rem;
  }

  .cta-container {
    max-width: 56rem;
    margin: 0 auto;
    text-align: center;
  }

  .cta-title {
    font-size: clamp(1.875rem, 5vw, 2.25rem);
    font-weight: 900;
    color: #111827;
    margin-bottom: 1.5rem;
  }

  .cta-subtitle {
    font-size: 1.125rem;
    color: #4b5563;
    margin-bottom: 2.5rem;
    line-height: 1.75;
  }

  /* ============= SCROLLBAR ============= */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  ::-webkit-scrollbar-thumb {
    background: #22c55e;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #16a34a;
  }

  /* ============= RESPONSIVE ============= */
  @media (max-width: 768px) {
    .cards-grid {
      grid-template-columns: 1fr;
    }
    
    .practice-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .hero-title {
      font-size: 2.25rem;
    }
  }

  @media (max-width: 480px) {
    .practice-grid {
      grid-template-columns: 1fr;
    }
    
    .hero-buttons {
      flex-direction: column;
    }
    
    .btn {
      padding: 0.875rem 2rem;
      font-size: 1rem;
    }
  }
`;

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <style>{styles}</style>
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          
          <div className="hero-content">
            <div className="hero-badge">
              ✨ Welcome to Learning Excellence
            </div>
            <h1 className="hero-title">
              Gyanmanthan Gurukul
            </h1>
            <p className="hero-subtitle">
              Explore, Understand, Evolve — Where tradition meets modern learning. Start your coding journey today!
            </p>
            <div className="hero-buttons">
              <a href="#learn" className="btn btn-primary">
                Start Learning 🚀
              </a>
              <a href="#practice" className="btn btn-secondary">
                Practice Now
              </a>
            </div>
          </div>
        </section>

        {/* Showcase */}
        <section className="showcase-section">
          <div className="showcase-container">
            <div className="showcase-wrapper">
              <img src="/showcase.png" alt="Showcase" className="showcase-img" />
            </div>
          </div>
        </section>

        {/* Learn Section */}
        <section id="learn" className="learn-section">
          <div className="section-content">
            <div className="section-header">
              <h2 className="section-title">Choose Your Programming Path</h2>
              <p className="section-subtitle">Select a language and begin your learning adventure</p>
            </div>

            <div className="cards-grid">
              {learnCourses.map((course, i) => (
                <a
                  key={i}
                  href={course.link}
                  onMouseEnter={() => setHoveredCard(`learn-${i}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="learn-card"
                >
                  <div style={{ backgroundColor: course.color === 'bg-blue-100' ? '#dbeafe' : course.color === 'bg-purple-100' ? '#e9d5ff' : course.color === 'bg-orange-100' ? '#fed7aa' : '#dcfce7' }} className="card-inner">
                    <div className="card-icon-wrapper">
                      <img src={course.icon} alt={course.title} className="card-icon" />
                    </div>
                    <h3 style={{ color: course.accent === 'text-blue-600' ? '#2563eb' : course.accent === 'text-purple-600' ? '#9333ea' : course.accent === 'text-orange-600' ? '#ea580c' : '#16a34a' }} className="card-title">{course.title}</h3>
                    <p className="card-description">{course.desc}</p>
                    <div className="card-footer">
                      <button style={{ color: course.accent === 'text-blue-600' ? '#2563eb' : course.accent === 'text-purple-600' ? '#9333ea' : course.accent === 'text-orange-600' ? '#ea580c' : '#16a34a' }} className="card-button">
                        Learn More →
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <p className="stat-label">Programming Languages</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <p className="stat-label">Learning Paths</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <p className="stat-label">Interactive Content</p>
            </div>
          </div>
        </section>

        {/* Practice Section */}
        <section id="practice" className="practice-section">
          <div className="section-content">
            <div className="section-header">
              <h2 className="section-title">Practice & Master Your Skills</h2>
              <p className="section-subtitle">Strengthen your learning with hands-on practice</p>
            </div>

            <div className="practice-grid">
              {practiceCourses.map((course, i) => (
                <a
                  key={i}
                  href={course.link}
                  onMouseEnter={() => setHoveredCard(`practice-${i}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="practice-card"
                >
                  <img 
                    src={course.img} 
                    alt={course.title}
                    className="practice-img"
                  />
                  <div className="practice-overlay"></div>
                  
                  <div className="practice-content">
                    <div style={{ backgroundColor: course.color === 'bg-red-500' ? '#ef4444' : course.color === 'bg-pink-500' ? '#ec4899' : course.color === 'bg-indigo-500' ? '#6366f1' : '#14b8a6' }} className="practice-icon">
                      {course.icon}
                    </div>
                    <h3 className="practice-title">{course.title}</h3>
                    <div className="practice-button-wrapper">
                      <button className="practice-button">
                        Start Practice →
                      </button>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h3 className="cta-title">Ready to Transform Your Skills?</h3>
            <p className="cta-subtitle">Join thousands of students learning and mastering programming today.</p>
            <a href="#learn" className="btn btn-primary btn-large">
              Begin Your Journey Now ✨
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
