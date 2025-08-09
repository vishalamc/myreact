import React, { useEffect } from 'react';
import '../pages/Landing.css';
import ReactGA from 'react-ga4';
import { useNavigate,Link } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    ReactGA.initialize("G-JZXN8NG92Q"); // Your GA Measurement ID
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  const courses = [
    {
      title: 'C Programming',
      desc: 'Find step-by-step lessons and hands-on examples to guide your learning journey.',
      path: '/home'
    },
    {
      title: 'C++ Programming',
      desc: 'Dive into the core concepts and build strong programming fundamentals.',
      path: '/CppComingSoon',
      external: true
    },
    {
      title: 'Java Programming',
      desc: 'Strong foundations make powerful programmers. Think logically. Code in Java.',
      path: '/CppComingSoon',
      external: true
    },
    {
      title: 'Python Programming',
      desc: 'Start simple. Grow scalable. Learn Python. Where fundamentals meet real-world coding.',
      path: '/CppComingSoon',
      external: true
    }
  ];

  const videoLectures = [
    {
      title: 'Mathematics',
      img: '/math.jpg',
      path: '/CppComingSoon'
    },
    {
      title: 'Gamification',
      img: '/gamification.png',
      path: '/gamedashboard'
    },
    {
      title: 'Computer Studies',
      img: '/computer.jpg',
      path: '/videolectures'
    },
    {
      title: 'Languages',
      img: '/lang.jpg',
      path: '/CppComingSoon'
    }
  ];

  const handleKickStart = () => {
    alert('Start with any course');
  };

  return (
    <div>
      <header>
        <div className="logo">GyanManthan Gurukul</div>
        <nav>
          <ul>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#video">Video Lectures</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" role="banner">
        <div className="hero-content">
          <h1>Welcome to GyanManthan Gurukul</h1>
          <p>
            Explore, Understand, Evolve — Where tradition meets modern learning.
          </p>
          <button className="btn-primary" onClick={handleKickStart}>
            Kick Start
          </button>
        </div>
      </section>

      <section id="courses">
        <h2 className="section-title">Our Courses</h2>
        <div className="courses">
          {courses.map((course, i) => (
            <div
              className="card"
              tabIndex={0}
              key={i}
              onClick={() => {
  course.external
    ? window.location.href = course.path
    : navigate(course.path);
}}
            >
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="video">
        <h2 className="section-title">Video Lectures</h2>
        <div className="faculty">
          {videoLectures.map((lecture, i) => (
            <div
              className="card"
              tabIndex={0}
              key={i}
              onClick={() => navigate(lecture.path)}
              style={{ cursor: 'pointer' }}
            >
              <h3>{lecture.title}</h3>
              <img src={lecture.img} alt={lecture.title} />
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
        <p align='left'>
              <Link 
                to="/myportfolio" 
                style={{ 
                  color: "#1976d2", 
                  textDecoration: "none", 
                  fontWeight: "bold" 
                }}
              >
                View My Portfolio →
              </Link>
            </p>
        </div>
      </section>

      <footer>
        <p>© 2025 GyanManthan Gurukul. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
