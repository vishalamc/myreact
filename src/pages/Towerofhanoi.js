import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialDisks = (n) => Array.from({ length: n }, (_, i) => n - i);

const TowerofHanoi = ({ numDisks = 3 }) => {
  const [towers, setTowers] = useState([initialDisks(numDisks), [], []]);
  const [selectedTower, setSelectedTower] = useState(null);
  const [message, setMessage] = useState('');
  const [moveCount, setMoveCount] = useState(0);

  const navigate = useNavigate();

  const handleTowerClick = (index) => {
    setMessage('');
    if (selectedTower === null) {
      if (towers[index].length === 0) {
        setMessage('Select a tower with at least one disk');
        return;
      }
      setSelectedTower(index);
    } else {
      if (index === selectedTower) {
        setSelectedTower(null);
        return;
      }
      moveDisk(selectedTower, index);
      setSelectedTower(null);
    }
  };

  const moveDisk = (from, to) => {
    const source = [...towers[from]];
    const target = [...towers[to]];
    const disk = source[source.length - 1];

    if (target.length > 0 && disk > target[target.length - 1]) {
      setMessage('❌ Invalid move: Cannot place larger disk on smaller one.');
      return;
    }

    source.pop();
    target.push(disk);
    const newTowers = [...towers];
    newTowers[from] = source;
    newTowers[to] = target;

    setTowers(newTowers);
    setMoveCount(moveCount + 1);

    if (newTowers[2].length === numDisks) {
      setMessage(`🎉 Congratulations! You solved it in ${moveCount + 1} moves!`);
    }
  };

  const handleReset = () => {
    setTowers([initialDisks(numDisks), [], []]);
    setSelectedTower(null);
    setMessage('');
    setMoveCount(0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top Navbar */}
      <div
        style={{
          backgroundColor: '#1976d2',
          color: 'white',
          padding: '10px 20px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <button
          onClick={() => navigate('/gamedashboard')}
          style={{
            background: 'white',
            color: '#1976d2',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginRight: '20px',
          }}
        >
          Game dashboard
        </button>
        <h2 style={{ margin: 0 }}>Tower of Hanoi</h2>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, textAlign: 'center', padding: '40px' }}>
        <p>Click one tower to pick a disk, then click another to place it.</p>
        <p><strong>Moves:</strong> {moveCount}</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '30px' }}>
          {towers.map((tower, idx) => (
            <div
              key={idx}
              onClick={() => handleTowerClick(idx)}
              style={{
                border: selectedTower === idx ? '3px solid orange' : '2px solid gray',
                width: '120px',
                height: '240px',
                display: 'flex',
                flexDirection: 'column-reverse',
                alignItems: 'center',
                padding: '10px',
                cursor: 'pointer',
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
              }}
            >
              {tower.map((disk, i) => (
                <div
                  key={i}
                  style={{
                    width: `${disk * 20}px`,
                    height: '20px',
                    backgroundColor: '#2a9d8f',
                    margin: '3px',
                    borderRadius: '4px',
                    transition: 'all 0.3s',
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Message */}
        <div style={{ marginTop: '20px', color: '#d32f2f', fontWeight: 'bold' }}>
          {message}
        </div>

        {/* Reset Button */}
        <div style={{ marginTop: '30px' }}>
          <button
            onClick={handleReset}
            style={{
              backgroundColor: '#1976d2',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
            }}
          >
            🔁 Reset
          </button>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          backgroundColor: '#eeeeee',
          padding: '12px',
          textAlign: 'center',
          fontSize: '14px',
          borderTop: '1px solid #ccc',
        }}
      >
        © {new Date().getFullYear()} GyanManthan Gurukul. All Rights Reserved.
      </div>
    </div>
  );
};

export default TowerofHanoi;
