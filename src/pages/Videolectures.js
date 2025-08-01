import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const videoData = {
  AspDotNet: [
    { id: 'G2tp0RzWnXc', title: 'Asp.Net Controls' },
    { id: 'G2tp0RzWnXc', title: 'Asp.Net Controls' },
  ],
  Xamarin: [
    { id: 'NNnejuvzdF0', title: 'Carousel Page In Xamarin' },
    { id: 'NNnejuvzdF0', title: 'Carousel Page In Xamarin' },
  ],
};

const VideoLectures = () => {
  const navigate = useNavigate();
  const firstVideoId = Object.values(videoData)[0][0].id;
  const [currentVideoId, setCurrentVideoId] = useState(firstVideoId);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const playVideo = (id) => {
    setCurrentVideoId(id);
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: '#2c3e50',
          color: 'white',
          padding: '15px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1 style={{ margin: 0, fontSize: '20px' }}>Video Lectures - GyanManthan</h1>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '8px 16px',
            backgroundColor: '#0077cc',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          🏠 Home
        </button>
      </header>

      {/* Main Body */}
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flex: 1,
          overflow: 'hidden',
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: isMobile ? '100%' : '25%',
            background: '#f0f0f0',
            padding: '20px',
            overflowY: 'auto',
            borderRight: isMobile ? 'none' : '1px solid #ccc',
            borderBottom: isMobile ? '1px solid #ccc' : 'none',
          }}
        >
          {Object.entries(videoData).map(([topic, videos]) => (
            <div key={topic}>
              <h3>{topic}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {videos.map((video) => (
                  <li
                    key={video.id}
                    onClick={() => playVideo(video.id)}
                    style={{
                      marginBottom: '10px',
                      cursor: 'pointer',
                      color: '#0077cc',
                    }}
                  >
                    {video.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Video Player */}
        <div style={{ flex: 1, padding: '20px' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src={`https://www.youtube.com/embed/${currentVideoId}`}
              frameBorder="0"
              allowFullScreen
              title="Video Player"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLectures;
