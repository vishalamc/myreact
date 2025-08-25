import React from "react";
import { Github, Send, Twitter, Heart, Lock } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <div className="about-container">

        {/* Title */}
        <h1 className="about-title">GyanManthan Gurukul</h1>

        {/* Description */}
        <p className="about-text">
          it is an open-source platform created to make learning programming interactive, engaging, and fun.  
          Initially developed by <span className="highlight">Vishal Sir</span> and enhanced by <span className="highlight">Kinsu</span>.  
          The platform emphasizes hands-on practice, interactive exercises, and an enjoyable learning experience for students.
        </p>

        {/* Made By */}
        <p className="about-madeby">
          👩‍💻 Made by <span className="highlight">Kinsu (@pykinsu)</span><br />
          <span className="small-text"> Learning And Building Projects 🙂</span>
        </p>

        {/* Buttons */}
        <div className="about-buttons">
          <a href="https://github.com/vishalamc" target="_blank" rel="noreferrer" className="btn">
            <Github size={18}/> Follow Vishal Sir
          </a>
          <a href="https://github.com/pykinsu" target="_blank" rel="noreferrer" className="btn">
            <Github size={18}/> Follow Me
          </a>
          <a href="https://kinsu.onrender.com/" target="_blank" rel="noreferrer" className="btn">
            <Send size={18}/> Portfolio
          </a>
          <a href="https://twitter.com/pykinsu" target="_blank" rel="noreferrer" className="btn">
            <Twitter size={18}/> Twitter / X
          </a>
        </div>

        {/* Support Section */}
        <div className="about-support">
          <h2><Heart size={20}/> Support This Project</h2>
          <p>Love GyanManthan Gurukul? Help keep it free and growing! You can support the project by sharing or contributing!</p>
          <a href="https://github.com/pykinsu" target="_blank" rel="noreferrer" className="btn-pink">
            Contribute on GitHub
          </a>
        </div>

        {/* Privacy */}
        <div className="about-privacy">
          <p><Lock size={14}/> This site does not collect, store, or process any user data.</p>
          <p>All content is for educational purposes only.</p>
        </div>
      </div>

      {/* CSS inside same file */}
      <style>{`
        .about-container {
          min-height: 100vh;
          background: linear-gradient(to bottom, #4c1d95, #6d28d9);
          color: white;
          text-align: center;
          padding: 50px 20px;
          font-family: sans-serif;
        }

        .about-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .about-text {
          max-width: 700px;
          margin: 0 auto 30px;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .highlight {
          color: #fbbf24;
          font-weight: bold;
        }

        .about-madeby {
          margin-bottom: 40px;
          font-size: 1.2rem;
        }

        .small-text {
          font-size: 0.85rem;
          color: #ddd;
        }

        .about-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
          margin-bottom: 50px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: black;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: bold;
          text-decoration: none;
          transition: background 0.3s;
        }
        .btn:hover {
          background: #333;
        }

        .btn-pink {
          display: inline-block;
          background: #ec4899;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: bold;
          text-decoration: none;
          transition: background 0.3s;
        }
        .btn-pink:hover {
          background: #db2777;
        }

        .about-support {
          margin-bottom: 50px;
        }
        .about-support h2 {
          font-size: 1.8rem;
          margin-bottom: 10px;
          color: #f472b6;
        }

        .about-privacy {
          background: rgba(0,0,0,0.4);
          padding: 15px;
          border-radius: 10px;
          max-width: 700px;
          margin: 0 auto;
          font-size: 0.9rem;
          color: #ddd;
        }

        /* Desktop Styling */
        @media (min-width: 1024px) {
          .about-title {
            font-size: 3.5rem;
          }
          .about-text {
            font-size: 1.25rem;
          }
          .about-buttons {
            gap: 20px;
          }
          .btn, .btn-pink {
            padding: 14px 28px;
            font-size: 1.05rem;
          }
          .about-support h2 {
            font-size: 2.2rem;
          }
          .about-privacy {
            font-size: 1rem;
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
}
