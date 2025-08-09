import React from 'react';
import '../pages/Landing.css';
import { useNavigate, Link } from 'react-router-dom';

const PortfolioPage = () => {
  const navigate = useNavigate();

  const research = [
    {
      title: 'Mobile Application Development Research Based on Xamarin Platform',
      img: '/research1.png',
      path: 'https://ieeexplore.ieee.org/document/8611045'
    },
    {
      title: 'User Authentication Approaches in Different Applications',
      img: '/research2.png',
      path: 'https://www.jetir.org/view?paper=JETIRDS06043'
    },
    {
      title: 'Hybrid Cryptographic Algorithm For Ensuring Cross Platform Mobile Security',
      img: '/research3.png',
      path: 'https://thinkindiaquarterly.org/index.php/think-india/article/view/16963'
    },
    {
      title: 'A Comparative Analysis of Mobile Applications Development Approaches',
      img: '/research4.png',
      path: '#'
    }
  ];
  const projects = [
  {
    title: 'PROFICIENCY ENGINE',
    description: `Computer software project focused on developing a language proficiency transformer 
      for assessing users' listening, speaking, reading, and writing (LSRW) skills.`
  },
  {
    title: 'EVA Simulation',
    description: `The Command View EVA software simulates a series of typical tasks on HP Enterprise 
      Virtual Arrays. It allows users to gain familiarity and hands-on experience with HP Storage Works 
      Command View EVA — a comprehensive suite to simplify, enhance, and maximize the performance of 
      HP Storage Works EVA family of storage array products.`
  },
  {
    title:'LSA (Last Stop Auction)',
    description:'Last Stop Auction (LSA) is a patent-pending web platform enabling true reverse auctions, where sellers compete to offer the lowest price. It benefits buyers with reduced costs and sellers with efficient, higher sales. Suitable for any commodity product, LSA helps buyers finalize purchases at the best possible price.'
  },
    {
    title:'Delmar Hosting (Moment Of Luxury)',
    description:'MOMENT OF LUXURY is a weekly TV series showcasing global style and comfort, offering tips to make luxury accessible at any budget. Hosted by Bill, it explores beautiful locations and expert insights. The brand also creates music, literature, DVDs, merchandise, and podcasts reflecting its unique vision of luxury.'
  },
    {
    title:'DuncanW',
    description:'Duncan-Williams, Inc., headquartered in Memphis with branches in multiple states, is a regional investment-banking firm specializing in fixed income securities. It offers services like Banc Metrics for bond accounting and Bond Edge analytics for portfolio management. The website enables directory searches, account access, and detailed information on products and services.'
  },
    {
    title:'BondStation',
    description:'BondStation is a comprehensive platform for bonds and fixed-income investors, offering new issues, secondary offerings, market news, tools, and economic calendars. Designed for both individual and institutional clients, it combines analytics, risk management, and education, delivering customized investment services in one centralized, investor-focused location.'
  },
];


  return (
    <div>
      <header>
        <div className="logo">Portfolio:Kumar Vishal</div>
        <nav>
          <ul>
             <li><a href="/">Home</a></li>
            <li><a href="#research">Research Papers</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      </header>

     <section className="hero" role="banner">
  <div className="hero-content">
    <img 
      src="/vishal.jpeg" 
      alt="Kumar Vishal" 
      className="hero-image"
    />
    <h1>Welcome to My Portfolio</h1>
    <p>
      Teaching (Assistant Professor) & App Developer with over 15 years in education 
      and 5 years in software industry.
    </p>
  </div>

</section>
<section id="skills" className="mycard">
  <h3>Technical Skills</h3>
  <div className="chip-group">
    <span className="chip">C</span>
    <span className="chip">C++</span>
    <span className="chip">Java</span>
    <span className="chip">Python</span>
    <span className="chip">C#</span>
    <span className="chip">VB.Net</span>
    <span className="chip">Android</span>
    <span className="chip">Ionic</span>
    <span className="chip">Xamarin.Forms</span>
    <span className="chip">TypeScript</span>
    <span className="chip">PHP</span>
    <span className="chip">ASP.Net</span>
    <span className="chip">JavaScript</span>
    <span className="chip">Angular</span>
    <span className="chip">Bootstrap</span>
    <span className="chip">jQuery</span>
    <span className="chip">HTML5</span>
  </div>
</section>

      <section id="research">
        <h2 className="section-title">My Research work</h2>
        <div className="faculty">
          {research.map((lecture, i) => (
            <div
              className="card"
              tabIndex={0}
              key={i}
              onClick={() => window.open(lecture.path, "_blank")}
              style={{ cursor: 'pointer' }}
            >
              <h3>{lecture.title}</h3>
              <img src={lecture.img} alt={lecture.title} />
            </div>
          ))}
        </div>
      </section>
      <section id="projects">
  <h2 className="section-title">My Projects</h2>
  <div className="faculty">
    {projects.map((proj, i) => (
      <div className="card" key={i}>
        <h3>{proj.title}</h3>
        <p style={{ textAlign: "justify" }}>{proj.description}</p>
      </div>
    ))}
  </div>
</section>
     <section id="contact" className="contact">
  <h2 className="section-title">Get in Touch</h2>
  <div className="contact-details">
    <p align='left'><strong>Name:</strong> Kumar Vishal</p>
    <p align='left'><strong>Address:</strong> Kasba, Purnia, Bihar</p>
    <p align='left'><strong>Phone:</strong> 7808625336</p>
   
   
  </div>
</section>
      <footer>
        <p>© 2025 GyanManthan Gurukul. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioPage;

