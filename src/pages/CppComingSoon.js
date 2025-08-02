import React from 'react';
import { useNavigate } from 'react-router-dom';
const ComingSoon = () => {
    const navigate = useNavigate();
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #336b87, #336b87)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#fff',
        textAlign: 'center',
        padding: '20px'
      }}
    >
      <h1 style={{
        fontSize: '4rem',
        margin: '0 0 20px',
        animation: 'pulse 2s infinite'
      }}>
        🚀 Coming Soon
      </h1>
      <p style={{
        fontSize: '1.5rem',
        maxWidth: '600px',
        lineHeight: '1.6',
        opacity: 0.9
      }}>
       <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '30px',
          padding: '10px 25px',
          backgroundColor: '#ad830eff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        ⬅ Back to Home
      </button>
      </p>
    </div>
  );
};

export default ComingSoon;
