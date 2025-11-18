import React, { useState } from 'react';

const recordedLecturesData = {
  'C Programming': {
    color: '#2563eb',
    icon: 'https://img.icons8.com/color/96/000000/c-programming.png',
    videos: [
      { id: 1, videoUrl: 'https://www.youtube.com/embed/G2tp0RzWnXc', title: 'Introduction to C', duration: '12:34' },
      { id: 2, videoUrl: 'https://www.youtube.com/embed/G2tp0RzWnXc', title: 'Variables and Data Types', duration: '15:20' },
      { id: 3, videoUrl: 'https://www.youtube.com/embed/G2tp0RzWnXc', title: 'Control Flow Statements', duration: '18:45' },
      { id: 4, videoUrl: 'https://www.youtube.com/embed/G2tp0RzWnXc', title: 'Functions in C', duration: '20:15' },
      { id: 5, videoUrl: 'https://www.youtube.com/embed/G2tp0RzWnXc', title: 'Arrays and Strings', duration: '17:30' },
    ]
  },
  'C++ Programming': {
    color: '#9333ea',
    icon: 'https://img.icons8.com/color/96/000000/c-plus-plus-logo.png',
    videos: [
      { id: 6, videoUrl: 'https://www.youtube.com/embed/NNnejuvzdF0', title: 'OOP Concepts', duration: '22:10' },
      { id: 7, videoUrl: 'https://www.youtube.com/embed/NNnejuvzdF0', title: 'Classes and Objects', duration: '19:45' },
      { id: 8, videoUrl: 'https://www.youtube.com/embed/NNnejuvzdF0', title: 'Inheritance', duration: '21:30' },
      { id: 9, videoUrl: 'https://www.youtube.com/embed/NNnejuvzdF0', title: 'Polymorphism', duration: '18:20' },
    ]
  },
  'Java Programming': {
    color: '#ea580c',
    icon: '☕',
    videos: [
      { id: 10, videoUrl: 'https://www.youtube.com/embed/NNnejuvzdF0', title: 'Java Fundamentals', duration: '16:50' },
      { id: 11, videoUrl: 'https://www.youtube.com/embed/NNnejuvzdF0', title: 'Exception Handling', duration: '14:25' },
      { id: 12, videoUrl: 'https://www.youtube.com/embed/NNnejuvzdF0', title: 'Collections Framework', duration: '19:10' },
    ]
  },
  'Python Programming': {
    color: '#16a34a',
    icon: 'https://img.icons8.com/color/96/000000/python.png',
    videos: [
      { id: 13, videoUrl: 'https://www.youtube.com/embed/NNnejuvzdF0', title: 'Python Basics', duration: '13:40' },
      { id: 14, videoUrl: 'https://www.youtube.com/embed/NNnejuvzdF0', title: 'Data Structures', duration: '20:15' },
      { id: 15, videoUrl: 'https://www.youtube.com/embed/NNnejuvzdF0', title: 'Object-Oriented Python', duration: '17:50' },
      { id: 16, videoUrl: 'https://www.youtube.com/embed/NNnejuvzdF0', title: 'Libraries and Modules', duration: '15:30' },
    ]
  }
};

export default function RecordedLectures() {
  const courseNames = Object.keys(recordedLecturesData);
  const [selectedCourse, setSelectedCourse] = useState(courseNames[0]);
  const [currentVideo, setCurrentVideo] = useState(recordedLecturesData[courseNames[0]].videos[0]);
  const [view, setView] = useState('grid');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const course = recordedLecturesData[selectedCourse];

  const handleSelectCourse = (courseName) => {
    setSelectedCourse(courseName);
    setCurrentVideo(recordedLecturesData[courseName].videos[0]);
    setView('grid');
    if (isMobile) setMenuOpen(false);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f0fdf4 100%)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Segoe UI", "Roboto", sans-serif',
    },
    header: {
      background: 'linear-gradient(135deg, #16a34a 0%, #3b82f6 100%)',
      color: 'white',
      padding: isMobile ? '0.75rem 1rem' : '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 15px rgba(22, 163, 74, 0.2)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      minHeight: isMobile ? '60px' : '70px',
    },
    headerTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 900,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      margin: 0,
    },
    headerRight: {
      display: 'flex',
      gap: isMobile ? '0.5rem' : '1rem',
      alignItems: 'center',
    },
    hamburger: {
      display: isMobile ? 'flex' : 'none',
      flexDirection: 'column',
      gap: '4px',
      cursor: 'pointer',
      background: 'rgba(255, 255, 255, 0.2)',
      border: '2px solid white',
      padding: '0.5rem',
      borderRadius: '0.5rem',
      transition: 'all 0.3s ease',
    },
    hamburgerLine: {
      width: '24px',
      height: '2px',
      background: 'white',
      transition: 'all 0.3s ease',
    },
    homeBtn: {
      padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1.5rem',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      color: 'white',
      border: '2px solid white',
      borderRadius: '0.5rem',
      fontWeight: 700,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '0.875rem' : '1rem',
      whiteSpace: 'nowrap',
    },
    main: {
      display: 'flex',
      flex: 1,
      overflow: 'hidden',
      gap: 0,
      marginTop: isMobile && menuOpen ? '200px' : '0',
    },
    sidebar: {
      width: isMobile ? '100%' : '28%',
      background: 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
      overflowY: 'auto',
      borderRight: isMobile ? 'none' : '2px solid #e5e7eb',
      borderBottom: isMobile ? '2px solid #e5e7eb' : 'none',
      boxShadow: 'inset -5px 0 15px rgba(0, 0, 0, 0.02)',
      padding: isMobile ? '0.75rem 0' : '1.5rem 0',
      display: isMobile && !menuOpen ? 'none' : 'flex',
      flexDirection: 'column',
      maxHeight: isMobile ? '50vh' : 'auto',
      overflow: isMobile ? 'auto' : 'visible',
      zIndex: isMobile ? 99 : 'auto',
      position: isMobile ? 'fixed' : 'relative',
      top: isMobile ? '110px' : 'auto',
      left: 0,
      right: 0,
    },
    topicsList: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    topicItem: {
      padding: isMobile ? '0.75rem 1rem' : '1rem 1.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      borderLeft: '4px solid transparent',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: '#e5e7eb',
      fontSize: isMobile ? '0.875rem' : '1rem',
    },
    topicItemActive: {
      background: 'linear-gradient(90deg, #16a34a 0%, rgba(22, 163, 74, 0.1) 100%)',
      borderLeftColor: '#16a34a',
      borderLeftWidth: '4px',
    },
    topicIcon: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      width: isMobile ? '24px' : '32px',
      height: isMobile ? '24px' : '32px',
      objectFit: 'contain',
    },
    topicName: {
      fontWeight: 700,
      color: '#374151',
    },
    topicCount: {
      marginLeft: 'auto',
      fontSize: '0.75rem',
      background: '#d1d5db',
      color: '#374151',
      padding: '0.25rem 0.75rem',
      borderRadius: '9999px',
      fontWeight: 700,
    },
    videosSection: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    videosHeader: {
      padding: isMobile ? '1rem' : '1.5rem 2rem',
      background: 'white',
      borderBottom: '2px solid #e5e7eb',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
    },
    videosTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 900,
      color: '#111827',
      margin: '0 0 0.5rem 0',
    },
    videosInfo: {
      fontSize: '0.875rem',
      color: '#6b7280',
      margin: 0,
    },
    videosContainer: {
      flex: 1,
      overflowY: 'auto',
      padding: isMobile ? '1rem' : '1.5rem',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: isMobile ? '1rem' : '1.5rem',
    },
    videoCard: {
      background: 'white',
      borderRadius: '1rem',
      overflow: 'hidden',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '2px solid transparent',
      display: 'flex',
      flexDirection: 'column',
    },
    videoThumbnail: {
      width: '100%',
      height: '180px',
      background: 'linear-gradient(135deg, #1f2937, #111827)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      position: 'relative',
      overflow: 'hidden',
    },
    videoDuration: {
      position: 'absolute',
      bottom: '0.75rem',
      right: '0.75rem',
      background: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '0.25rem 0.75rem',
      borderRadius: '0.25rem',
      fontSize: '0.75rem',
      fontWeight: 700,
      zIndex: 1,
    },
    videoContent: {
      padding: '1.25rem',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    videoNumber: {
      fontSize: '0.75rem',
      color: '#9ca3af',
      fontWeight: 700,
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    videoTitle: {
      fontWeight: 900,
      color: '#111827',
      marginBottom: '0.75rem',
      lineHeight: 1.4,
      flex: 1,
      fontSize: isMobile ? '0.95rem' : '1rem',
    },
    videoAction: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#16a34a',
      fontWeight: 700,
      fontSize: '0.875rem',
      transition: 'all 0.3s ease',
    },
    playerSection: {
      flex: 1,
      padding: isMobile ? '1rem' : '2rem',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
    },
    playerInfo: {
      marginBottom: '1.5rem',
    },
    playerTitle: {
      fontSize: isMobile ? '1.25rem' : '1.75rem',
      fontWeight: 900,
      color: '#111827',
      margin: '0 0 0.5rem 0',
    },
    playerMeta: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '0.5rem' : '1.5rem',
      fontSize: '0.875rem',
      color: '#6b7280',
    },
    videoWrapper: {
      position: 'relative',
      width: '100%',
      paddingBottom: '56.25%',
      height: 0,
      overflow: 'hidden',
      borderRadius: '1rem',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
      background: '#000',
    },
    iframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
      borderRadius: '1rem',
    },
    description: {
      marginTop: '2rem',
      padding: '1.5rem',
      background: 'white',
      borderRadius: '0.75rem',
      borderLeft: '4px solid #16a34a',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    },
    descriptionTitle: {
      fontWeight: 900,
      color: '#111827',
      margin: '0 0 0.75rem 0',
    },
    descriptionText: {
      color: '#6b7280',
      lineHeight: 1.6,
      margin: 0,
      fontSize: isMobile ? '0.875rem' : '1rem',
    },
    backBtn: {
      marginBottom: '1rem',
      padding: isMobile ? '0.5rem 0.75rem' : '0.5rem 1rem',
      background: 'rgba(22, 163, 74, 0.2)',
      color: '#16a34a',
      border: '2px solid #16a34a',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      fontWeight: 700,
      transition: 'all 0.3s ease',
      fontSize: isMobile ? '0.75rem' : '0.875rem',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>📹 Lectures</h1>
        <div style={styles.headerRight}>
          <button
            style={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          >
            <div style={{...styles.hamburgerLine, transform: menuOpen ? 'rotate(45deg) translateY(10px)' : 'rotate(0)'}}></div>
            <div style={{...styles.hamburgerLine, opacity: menuOpen ? 0 : 1}}></div>
            <div style={{...styles.hamburgerLine, transform: menuOpen ? 'rotate(-45deg) translateY(-10px)' : 'rotate(0)'}}></div>
          </button>
          <a
            href="/"
            style={styles.homeBtn}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = '#16a34a';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.color = 'white';
              e.target.style.transform = 'scale(1)';
            }}
          >
            🏠
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Sidebar - Topics */}
        <div style={styles.sidebar}>
          <div style={styles.topicsList}>
            {courseNames.map((courseName) => (
              <div
                key={courseName}
                style={{
                  ...styles.topicItem,
                  ...(selectedCourse === courseName ? styles.topicItemActive : {}),
                }}
                onClick={() => handleSelectCourse(courseName)}
                onMouseEnter={(e) => {
                  if (selectedCourse !== courseName && !isMobile) {
                    e.currentTarget.style.background = '#f0fdf4';
                    e.currentTarget.style.borderLeftColor = '#3b82f6';
                    e.currentTarget.style.paddingLeft = '2rem';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCourse !== courseName && !isMobile) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderLeftColor = 'transparent';
                    e.currentTarget.style.paddingLeft = '1.5rem';
                  }
                }}
              >
                {recordedLecturesData[courseName].icon.startsWith('http') ? (
                  <img 
                    src={recordedLecturesData[courseName].icon} 
                    alt={courseName}
                    style={styles.topicIcon}
                  />
                ) : (
                  <span style={styles.topicIcon}>{recordedLecturesData[courseName].icon}</span>
                )}
                <span style={styles.topicName}>{courseName}</span>
                <span style={{...styles.topicCount, ...(selectedCourse === courseName ? {background: '#16a34a', color: 'white'} : {})}}>{recordedLecturesData[courseName].videos.length}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        {view === 'grid' ? (
          <div style={styles.videosSection}>
            <div style={styles.videosHeader}>
              <h2 style={styles.videosTitle}>{selectedCourse}</h2>
              <p style={styles.videosInfo}>
                {course.videos.length} recorded lectures
              </p>
            </div>

            <div style={styles.videosContainer}>
              {course.videos.map((video) => (
                <div
                  key={video.id}
                  style={styles.videoCard}
                  onClick={() => {
                    setCurrentVideo(video);
                    setView('player');
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.borderColor = '#22c55e';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }}
                >
                  <div style={styles.videoThumbnail}>
                    ▶
                    <span style={styles.videoDuration}>{video.duration}</span>
                  </div>
                  <div style={styles.videoContent}>
                    <span style={styles.videoNumber}>Lecture {video.id}</span>
                    <h3 style={styles.videoTitle}>{video.title}</h3>
                    <span style={styles.videoAction}>
                      Play Video →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={styles.playerSection}>
            {isMobile && (
              <button
                style={styles.backBtn}
                onClick={() => setView('grid')}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(22, 163, 74, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgba(22, 163, 74, 0.2)';
                }}
              >
                ← Back to Lectures
              </button>
            )}
            <div style={styles.playerInfo}>
              <h1 style={styles.playerTitle}>{currentVideo.title}</h1>
              <div style={styles.playerMeta}>
                <span>⏱️ Duration: {currentVideo.duration}</span>
                <span>📺 Lecture #{currentVideo.id}</span>
              </div>
            </div>

            <div style={styles.videoWrapper}>
              <iframe
                src={currentVideo.videoUrl}
                style={styles.iframe}
                allowFullScreen
                title={currentVideo.title}
              ></iframe>
            </div>

            <div style={styles.description}>
              <h3 style={styles.descriptionTitle}>About This Lecture</h3>
              <p style={styles.descriptionText}>
                Watch this recorded lecture on {currentVideo.title.toLowerCase()}. Follow along and take notes to reinforce your understanding of the concepts covered.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


