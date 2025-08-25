import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCard = () => {
  const navigate = useNavigate();

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>

      <div className="contact-card">
        <div className="contact-item">
          <span className="label">Name:</span>
          <span className="value">Kumar Vishal</span>
        </div>
        <div className="contact-item">
          <span className="label">Address:</span>
          <span className="value">Kasba, Purnia, Bihar</span>
        </div>
        <div className="contact-item">
          <span className="label">Phone:</span>
          <span className="value">7808625336</span>
        </div>

        {/* Social Icons */}
        <div className="socials">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <img src="/Icons/github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/yourlinkedin/" target="_blank" rel="noreferrer">
            <img src="/Icons/linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="mailto:yourmail@example.com">
            <img src="/Icons/mail.svg" alt="Email" />
          </a>
        </div>
      </div>

      {/* Buttons outside card */}
      <div className="contact-buttons">
        <button onClick={() => navigate("/myportfolio")}>⬅ Back to Portfolio</button>
        <button onClick={() => navigate("/")}>⬅ Back to Home</button>
      </div>

      <style>{`
        .contact-section {
          text-align: center;
          padding: 60px 20px;
          background: #0f0f0f;
        }
        .contact-section h2 {
          font-size: 2.2rem;
          margin-bottom: 40px;
          color: #FFD700; 
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .contact-card {
          max-width: 400px;
          margin: 0 auto;
          background: #111;
          border-radius: 20px;
          padding: 30px 25px;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3);
          border: 2px solid #FFD700;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 215, 0, 0.7), 0 10px 20px rgba(255, 215, 0, 0.5);
        }
        .contact-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }
        .label {
          font-weight: 600;
          color: #FFD700;
        }
        .value {
          font-weight: 500;
          color: #FFD700;
        }
        .socials {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .socials a img {
          width: 32px;
          height: 32px;
          filter: brightness(0) invert(1);
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .socials a:hover img {
          transform: scale(1.2);
          filter: drop-shadow(0 0 8px #FFD700);
        }
        .contact-buttons {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .contact-buttons button {
          padding: 10px 25px;
          font-size: 16px;
          font-weight: 600;
          color: #FFD700;
          background: transparent;
          border: 2px solid #FFD700;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .contact-buttons button:hover {
          background: #FFD700;
          color: #111;
          transform: translateY(-3px);
          box-shadow: 0 8px 15px rgba(255, 215, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default ContactCard;
