import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FaCuttlefish, FaCode, FaJava, FaPython } from "react-icons/fa";

const learnCourses = [
  { icon: <FaCuttlefish className="course-icon" />, title: "C Programming", desc: "Master the foundations of programming in C.", link: "/learnc" },
  { icon: <FaCode className="course-icon" />, title: "C++ Programming", desc: "Learn object-oriented programming with C++.", link: "/ComingSoon" },
  { icon: <FaJava className="course-icon" />, title: "Java Programming", desc: "Build robust and scalable applications in Java.", link: "/ComingSoon" },
  { icon: <FaPython className="course-icon" />, title: "Python Programming", desc: "Learn Python for AI, data science, and more.", link: "/ComingSoon" }
];

const practiceCourses = [
  { title: "Mathematics", img: "/maths.jpg", link: "/ComingSoon" },
  { title: "Gamification", img: "/gamification.jpg", link: "/gamedashboard" },
  { title: "Computer Studies", img: "/learncomputer.jpg", link: "/videolectures" },
  { title: "Languages", img: "/lang.jpg", link: "/ComingSoon" }
];

export default function Home() {
  return (
    <div className="homepage">
      <h1 className="home-title">Welcome to Gyanmanthan Gurukul</h1>
      <p className="tagline">Explore, Understand, Evolve — Where tradition meets modern learning.</p>

     {/* Showcase Image */}
      <div className="showcase-container">
        <img src="/showcase.png" alt="Showcase" className="showcase-img" />
      </div>
  
      {/* Top Buttons */}
      <div className="top-buttons">
        <a href="#learn-section" className="top-btn learn-top">Learn</a>
        <a href="#practice-section" className="top-btn practice-top">Practice</a>
      </div>

      {/* Learn Section */}
      <h2 id="learn-section" className="section-title">Learn</h2>
      <div className="cards-container">
        {learnCourses.map((course, i) => (
          <div className="card" key={i}>
            <div className="icon">{course.icon}</div>
            <h2>{course.title}</h2>
            <p>{course.desc}</p>
            <Link to={course.link} className="learn-btn">Learn</Link>
          </div>
        ))}
      </div>

      {/* Practice Section */}
      <h2 id="practice-section" className="section-title">Practice</h2>
      <div className="cards-container">
        {practiceCourses.map((course, i) => (
          <div className="card" key={i}>
            <img src={course.img} alt={course.title} className="card-img" />
            <h2>{course.title}</h2>
            <Link to={course.link} className="learn-btn">Practice</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
