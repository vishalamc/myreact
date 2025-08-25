import React from 'react';
import { useNavigate } from 'react-router-dom';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function GameDashboard() {
  const navigate = useNavigate();

  const games = [
    {
      title: 'Tower of Hanoi',
      description: 'Solve the classic Tower of Hanoi puzzle with visualized moves.',
      path: '/towerofhanoi',
    },
    {
      title: 'Binary Converter',
      description: 'Convert between numeric systems with step-by-step guidance.',
      path: '/computerbuilder',
    },
    {
      title: 'Code Jumble', 
      description: 'Reconstruct broken code segments through logical arrangement.',
      path: '/codejumble',
    },
  ];

  return (
    <div className="game-dashboard">
      {/* Header */}
      <div className="header-section">
        <SportsEsportsIcon className="header-icon" />
        <h1>Game Challenges</h1>
        <p>Pick a challenge and test your skills</p>
      </div>

      {/* Cards */}
      <div className="game-grid">
        {games.map((game, i) => (
          <div className="game-card" key={i}>
            <div className="card-body">
              <h2>{game.title}</h2>
              <p>{game.description}</p>
              <button className="start-btn" onClick={() => navigate(game.path)}>
                <PlayArrowIcon className="btn-icon" />
                Start Challenge
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .game-dashboard {
          padding: 3rem 1rem;
          background: inherit;
          font-family: 'Inter', sans-serif;
          color: #fff;
        }

        .header-section {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .header-icon {
          font-size: 3rem;
          color: #60a5fa;
          margin-bottom: 0.5rem;
        }

        .header-section h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.3rem;
          background: linear-gradient(to right, #60a5fa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .header-section p {
          color: #d1d5db;
          font-size: 1.1rem;
        }

        .game-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .game-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .game-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
        }

        .card-body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .card-body h2 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .card-body p {
          color: #cbd5e1;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .start-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          background: linear-gradient(90deg, #60a5fa, #3b82f6);
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .start-btn:hover {
          background: linear-gradient(90deg, #3b82f6, #2563eb);
          transform: translateY(-2px);
        }

        .btn-icon {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}