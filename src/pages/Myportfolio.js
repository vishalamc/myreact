import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const skillIconsMap = {
  C: 'https://img.icons8.com/color/96/000000/c-programming.png',
  'C++': 'https://img.icons8.com/color/96/000000/c-plus-plus-logo.png',
  Java: 'https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png',
  Python: 'https://img.icons8.com/color/96/000000/python.png',
  'C#': 'https://img.icons8.com/color/96/000000/c-sharp-logo.png',
  'VB.Net': 'https://img.icons8.com/color/96/000000/visual-basic.png',
  Android: 'https://img.icons8.com/color/96/000000/android-os.png',
  Ionic: 'https://img.icons8.com/color/96/000000/ionic.png',
  'Xamarin.Forms': 'https://img.icons8.com/ios-filled/96/000000/xamarin.png',
  TypeScript: 'https://img.icons8.com/color/96/000000/typescript.png',
  PHP: 'https://img.icons8.com/officel/96/000000/php-logo.png',
  'ASP.Net': 'https://img.icons8.com/color/96/000000/asp-net.png',
  JavaScript: 'https://img.icons8.com/color/96/000000/javascript.png',
  Angular: 'https://img.icons8.com/color/96/000000/angularjs.png',
  Bootstrap: 'https://img.icons8.com/color/96/000000/bootstrap.png',
  jQuery: 'https://img.icons8.com/ios-filled/96/000000/jquery.png',
  HTML5: 'https://img.icons8.com/color/96/000000/html-5.png',
};

const projects = [
  { title: 'PROFICIENCY ENGINE', description: 'Language proficiency transformer for assessing users\' LSRW skills.' },
  { title: 'EVA Simulation', description: 'HP Enterprise Virtual Arrays simulation software for hands-on EVA experience.' },
  { title: 'LSA (Last Stop Auction)', description: 'Patent-pending reverse auction web platform for buyers and sellers.' },
  { title: 'Delmar Hosting (Moment Of Luxury)', description: 'Luxury TV series & multimedia content showcasing global style.' },
  { title: 'DuncanW', description: 'Regional investment banking platform with analytics, bond accounting, and portfolio tools.' },
  { title: 'BondStation', description: 'Comprehensive platform for bonds and fixed-income investors with market tools.' },
];

const research = [
  { title: 'Mobile Application Development Research Based on Xamarin Platform', img: '/research1.png', path: 'https://ieeexplore.ieee.org/document/8611045' },
  { title: 'User Authentication Approaches in Different Applications', img: '/research2.png', path: 'https://www.jetir.org/view?paper=JETIRDS06043' },
  { title: 'Hybrid Cryptographic Algorithm For Ensuring Cross Platform Mobile Security', img: '/research3.png', path: 'https://thinkindiaquarterly.org/index.php/think-india/article/view/16963' },
  { title: 'A Comparative Analysis of Mobile Applications Development Approaches', img: '/research4.png', path: '#' },
];

const PortfolioPage = () => {
  const projectsRef = useRef(null);
  const researchRef = useRef(null);

  const scrollTo = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

  const skillList = Object.keys(skillIconsMap);

  return (
    <main className="portfolio-container">
      {/* Hero */}
      <section className="hero">
        <img src="/vishal.jpeg" alt="Kumar Vishal" className="hero-image" />
        <h1 className="hero-title">Kumar Vishal</h1>
        <p className="hero-subtitle">
          Assistant Professor & Software Developer <br />
          15+ years in education | 5+ years in software industry
        </p>

        <div className="hero-buttons">
          <button onClick={() => scrollTo(projectsRef)}>Projects</button>
          <button onClick={() => scrollTo(researchRef)}>Research</button>
          <button onClick={() => window.location.href = "/contactcard"}>Reach Me</button>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-marquee">
          <motion.div
            className="skills-row"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {skillList.concat(skillList).map((skill, idx) => (
              <div className="skill-card" key={idx} title={skill}>
                <img src={skillIconsMap[skill]} alt={skill} />
                <span>{skill}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section ref={projectsRef} className="projects-section">
        <h2>Projects</h2>
        <div className="cards-grid projects-grid">
          {projects.map((proj, idx) => (
            <article className="card project-card" key={idx}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Research */}
      <section ref={researchRef} className="research-section">
        <h2>Research Papers</h2>
        <div className="cards-grid research-grid">
          {research.map((item, idx) => (
            <article className="card research-card" key={idx}>
              <h3>{item.title}</h3>
              <img src={item.img} alt={item.title} />
              <button className="view-btn" onClick={() => window.open(item.path, "_blank")}>
                View <FiExternalLink size={16} />
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Embedded CSS */}
      <style>{`
        body, html {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(120deg, #0f172a, #1e293b, #334155);
          color: #f8fafc;
          min-height: 100vh;
        }

        .hero {
          text-align: center;
          padding: 80px 20px 40px;
        }
        .hero-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #38bdf8;
          box-shadow: 0 0 25px rgba(56,189,248,0.6);
          margin-bottom: 20px;
        }
        .hero-title {
          font-size: 2.8rem;
          background: linear-gradient(90deg,#38bdf8,#fcd34d,#f472b6);
          -webkit-background-clip: text;
          color: transparent;
          margin: 10px 0;
        }
        .hero-subtitle {
          font-size: 1.1rem;
          opacity: 0.85;
          margin-bottom: 30px;
        }
        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .hero-buttons button {
          padding: 12px 25px;
          font-size: 1rem;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          background: linear-gradient(90deg,#38bdf8,#fcd34d,#f472b6);
          color: #0f172a;
          font-weight: 600;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-buttons button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(255,255,255,0.2);
        }

        .skills-section {
          padding: 40px 0;
          text-align: center;
        }
        .skills-section h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          background: linear-gradient(90deg,#38bdf8,#fcd34d,#f472b6);
          -webkit-background-clip: text;
          color: transparent;
        }
        .skills-marquee {
          overflow: hidden;
          margin-top: 20px;
        }
        .skills-row { display: flex; gap: 20px; }
        .skill-card {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .skill-card img { width: 48px; height: 48px; margin-bottom: 5px; }
        .skill-card span { font-size: 0.85rem; }

        .cards-grid { display: grid; gap: 20px; padding: 20px; }
        .project-card, .research-card {
          background: #1e293b;
          border-radius: 16px;
          padding: 28px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .project-card:hover, .research-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 12px 28px rgba(56,189,248,0.4);
        }
        .project-card p {
          color: #facc15;
          font-weight: 500;
        }
        .research-card img {
          width: 100%;
          border-radius: 12px;
          margin: 15px 0;
        }
        .view-btn {
          padding: 10px 20px;
          font-size: 1rem;
          font-weight: 600;
          background: #38bdf8;
          color: #0f172a;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          margin-top: auto;
          align-self: center;
          width: 90%;
          transition: background 0.3s ease;
        }
        .view-btn:hover {
          background: #0ea5e9;
        }

        .projects-section h2,
        .research-section h2 {
          font-size: 2rem;
          text-align: center;
          margin-top: 40px;
          margin-bottom: 20px;
          background: linear-gradient(90deg,#38bdf8,#fcd34d,#f472b6);
          -webkit-background-clip: text;
          color: transparent;
        }

        @media(min-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr); }
          .research-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width: 768px) {
          .cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  );
};

export default PortfolioPage;
